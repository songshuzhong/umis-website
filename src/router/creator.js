import {docList} from '../data/docs.js';
import {Schema} from '../../../i-renderer/packages';

const docRoute = {
  renderer: 'mis-menu-submenu',
  name: 'docs',
  title: '文档手册',
  icon: 'TakeawayBox',
  body: []
};
let routesList = [];

export default {
  routes: [],
  initRoute(item, base) {
    return {
      path: `/${base.name}/${item.name}`,
      component: Schema,
      props: {
        classname: 'i-renderer-website-schema__container',
        url: item.schemaUrl
      },
      meta: {
        title: item.title,
        breadcrumb: [
          {
            title: base.title,
            path: base.name,
          },
          {
            title: item.title,
            path: item.name,
          }
        ]
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
        component: Schema,
        props: {
          url: `https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/docs/${item.name}`,
        },
        meta: {
          title: item.title
        }
      });
    });
    this.routes.push(routeFold);
    return this;
  },
  initDocMenu() {
    routesList.push(docRoute);
    return this;
  },
  dynamicMenuCreator(routes, basename = '') {
    routes.forEach(menu => {
      if (menu.renderer === 'submenu') {
        menu.body.forEach(submenu => {
          if (submenu.renderer === 'menugroup') {
            submenu.body.forEach(group => {
              if (group.renderer === 'menuitem' && group.schemaUrl) {
                const route = this.initRoute(group, basename);
                this.routes.unshift(route);
              } else if (
                submenu.renderer === 'menuitem' &&
                submenu.schemaUrl
              ) {
                const route = this.initRoute(submenu, basename);
                this.routes.unshift(route);
              }
            });
          } else if (
            submenu.renderer === 'menuitem' &&
            submenu.schemaUrl
          ) {
            const route = this.initRoute(submenu, menu);
            submenu.name = `/${menu.name}/${submenu.name}`;
            this.routes.unshift(route);
          }
        });
      } else if (menu.renderer === 'menuitem' && menu.schemaUrl) {
        const route = this.initRoute(menu, menu.name);
        this.routes.unshift(route);
      }
    });
    return this;
  },
};
