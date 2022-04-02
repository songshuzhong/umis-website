import Fold from './fold.vue';
import {docList} from '../data/docs.js';

const docRoute = {
  renderer: 'mis-menu-submenu',
  name: 'docs',
  title: '文档手册',
  icon: 'TakeawayBox',
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
  initRoute(item) {
    return {
      path: `${item.name}`,
      component: () => import('../../../i-renderer/packages/renderer/component/schema.vue'),
      props: {
        classname: 'i-renderer-website-schema__container',
        url: item.schemaUrl
      },
      meta: {
        title: item.title
      }
    };
  },
  docMenuCreator(basename = '/docs') {
    const routeFold = this.initRouteFold(docRoute);
    docList.forEach(item => {
      routesList[routesList.length - 1].body.push({
        renderer: 'mis-menu-item',
        name: `${basename}/${item.name}`,
        title: item.title
      });
      routeFold.children.push({
        path: `${basename}/${item.name}`,
        component: () => import('../../../i-renderer/packages/renderer/component/schema.vue'),
        props: {
          url: `https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/docs/${item.name}`,
        },
        meta: {
          title: item.title
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
      if (menu.renderer === 'submenu') {
        const routeFold = this.initRouteFold(menu);
        menu.body.forEach(submenu => {
          if (submenu.renderer === 'menu-item-group') {
            submenu.body.forEach(group => {
              if (group.renderer === 'menuitem' && group.schemaUrl) {
                const route = this.initRoute(group, basename);
                this.menus.unshift(route);
              } else if (
                submenu.renderer === 'menuitem' &&
                submenu.schemaUrl
              ) {
                const route = this.initRoute(submenu, basename);
                this.menus.unshift(route);
              }
            });
          } else if (
            submenu.renderer === 'menuitem' &&
            submenu.schemaUrl
          ) {
            submenu.name = `/${menu.name}/${submenu.name}`;
            const route = this.initRoute(submenu, basename);
            routeFold.children.unshift(route);
          }
        });
        this.menus.unshift(routeFold);
      } else if (menu.renderer === 'menuitem' && menu.schemaUrl) {
        const route = this.initRoute(menu, basename);
        this.menus.unshift(route);
      }
    });
    routesList = routes;
    return this;
  }
};
