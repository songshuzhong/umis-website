import Fold from './fold.vue';

const docSchemas = require.context('../schema', false, /[\w-]+\.js$/);
const docRoute = {
  renderer: 'mis-menu-submenu',
  name: 'docs',
  title: '文档手册',
  icon: 'el-icon-takeaway-box',
  body: []
};
let routesList = [];

export default {
  menus: [],
  initRouteFold(item) {
    return {
      path: `${item.name}`,
      component: Fold,
      meta: {
        title: item.title
      },
      children: []
    };
  },
  initRoute(item, basename) {
    return {
      path: `${item.name}`,
      component: () => import('@umis-renderer/packages/renderer/component/schema.vue'),
      props: {
        url: item.schemaUrl
      },
      meta: {
        title: item.title
      }
    };
  },
  docMenuCreator(basename = '/docs') {
    const routeFold = this.initRouteFold(docRoute);
    docSchemas.keys().forEach(filePath => {
      const docItemName = filePath.replace(/(.*\/)*([^.]+).*/gi, '$2');
      routesList[routesList.length - 1].body.push({
        renderer: 'mis-menu-item',
        name: `${basename}/${docItemName}`,
        title: docSchemas(filePath).default.title || docItemName
      });
      routeFold.children.push({
        path: `${basename}/${docItemName}`,
        component: () => import('@umis-renderer/packages/renderer/component/schema.vue'),
        props: {
          initSchema: docSchemas(filePath).default,
          url: docItemName,
          iProtal: false
        },
        meta: {
          title: docSchemas(filePath).default.title || docItemName
        }
      });
    });
    this.menus.push(routeFold);
    return this;
  },
  initDocMenu() {
    routesList.push(docRoute);
    return this;
  },
  dynamicMenuCreator(routes, basename = '') {
    routes.forEach(menu => {
      if (menu.renderer === 'mis-menu-submenu') {
        const routeFold = this.initRouteFold(menu);
        menu.body.forEach(submenu => {
          if (submenu.renderer === 'mis-menu-item-group') {
            submenu.body.forEach(group => {
              if (group.renderer === 'mis-menu-item' && group.schemaUrl) {
                const route = this.initRoute(group, basename);
                this.menus.unshift(route);
              } else if (
                submenu.renderer === 'mis-menu-item' &&
                submenu.schemaUrl
              ) {
                const route = this.initRoute(submenu, basename);
                this.menus.unshift(route);
              }
            });
          } else if (
            submenu.renderer === 'mis-menu-item' &&
            submenu.schemaUrl
          ) {
            submenu.name = `/${menu.name}/${submenu.name}`;
            const route = this.initRoute(submenu, basename);
            routeFold.children.unshift(route);
          }
        });
        this.menus.unshift(routeFold);
      } else if (menu.renderer === 'mis-menu-item' && menu.schemaUrl) {
        const route = this.initRoute(menu, basename);
        this.menus.unshift(route);
      }
    });
    routesList = routes;
    return this;
  }
};
