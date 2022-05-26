export default {
  renderer: 'layout',
  name: 'i-website__container',
  classname: 'i-website__container',
  initData: {
    width: 200
  },
  body: [
    {
      renderer: 'aside',
      classname: 'i-website__aside',
      body: {
        renderer: 'menu',
        name: 'i-website-nav',
        classname: 'i-website_menu-vertical',
        router: true,
        mode: 'vertical',
        backgroundColor: '#3a3f51',
        textColor: '#fff',
        activeTextColor: '#ffd04b',
        defaultActive: '',
        target: 'i-website__container',
        title: {
          renderer: 'html',
          classname: 'i-website__header__logo font-size-20',
          html: 'IRender'
        },
        body: []
      }
    },
    {
      renderer: 'layout',
      direction: 'vertical',
      body: [
        {
          renderer: 'header',
          classname: 'i-website__header',
          body: [
            {
              renderer: 'switch',
              name: 'collapse',
              target: 'i-website__container',
              hiddenOn: '1 === 1'
            },
            {
              renderer: 'action',
              icon: 'Expand',
              type: 'icon',
              name: 'IWebsiteExpand',
              remoteComponent: 'collapse',
              visibleOn: 'data.collapse',
              immediate: true,
              size: 22
            },
            {
              renderer: 'action',
              icon: 'Fold',
              type: 'icon',
              remoteComponent: 'collapse',
              visibleOn: '!data.collapse',
              size: 22
            },
            {
              renderer: 'breadcrumb',
              classname: 'i-website__breadcrumb'
            },
            {
              renderer: 'service',
              classname: 'i-website__header__service',
              initApi: {
                url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/user'
              },
              body: [
                {
                  renderer: 'action',
                  icon: 'HomeFilled',
                  actionType: 'url',
                  name: 'IWebsiteHome',
                  type: 'icon',
                  size: 18,
                  url: 'https://songshuzhong.github.io/i-home/dist/index.html#/'
                },
                {
                  renderer: 'action',
                  icon: 'Bell',
                  type: 'icon',
                  size: 18,
                  name: 'iWebsiteBell',
                  popupType: 'over',
                  popperWidth: '300px',
                  body:
                    {
                      renderer: 'tabs',
                      stretch: true,
                      panels: [
                        {
                          label: '通知',
                          body: [
                            {
                              renderer: 'mapping',
                              value: 'todos',
                              body: {
                                renderer: 'each',
                                body: {
                                  renderer: 'html',
                                  html: '<div class="border-top padding-10"><%=data.title%></div>'
                                }
                              }
                            }
                          ]
                        },
                        {
                          label: '待办',
                          icon: '',
                          body: [
                            {
                              renderer: 'html',
                              html: '<div class="text-center">空</div>'
                            }
                          ]
                        }
                      ],
                      activeIndex: 1,
                      tabPosition: 'top'
                    }
                },
                {
                  renderer: 'action',
                  icon: 'FullScreen',
                  name: 'IWebsiteFullScreen',
                  type: 'icon',
                  size: 18,
                  actionType: 'fullscreen'
                },
                {
                  renderer: 'theme',
                  type: false
                },
                {
                  renderer: 'theme'
                },
                {
                  renderer: 'action',
                  icon: 'Refresh',
                  type: 'icon',
                  size: 18,
                  name: 'IWebsiteRefresh',
                  actionType: 'reload',
                  reload: 'AppMain'
                },
                {
                  renderer: 'action',
                  icon: 'Edit',
                  type: 'icon',
                  size: 18,
                  name: 'IWebsiteEdit',
                  actionType: 'drawer',
                  body: {
                    width: '100%',
                    appendToBody: true,
                    classname: 'i-website__drawer',
                    header: {
                      renderer: 'html',
                      html:
                        '<div style="text-align: left; color: white;">编辑Schema</div>'
                    },
                    body: [
                      {
                        renderer: 'editor',
                        editable: true,
                        isJson: false,
                        classname: 'i-website__json-editor'
                      }
                    ]
                  }
                },
                {
                  renderer: 'avatar',
                  src: '${user_cover}',
                  isComputedSrc: true,
                  size: 'default'
                },
                {
                  renderer: 'dropdown',
                  text: '<%=data.user_name%>',
                  popperClass: 'i-website__header__dropdown',
                  body: [
                    {
                      renderer: 'action',
                      icon: 'HomeFilled',
                      actionType: 'url',
                      name: 'IWebsiteHome',
                      text: '官网',
                      url: 'https://songshuzhong.github.io/i-home/dist/index.html#/'
                    },
                    {
                      renderer: 'action',
                      icon: 'Refresh',
                      text: '刷新',
                      name: 'IWebsiteRefresh',
                      actionType: 'reload',
                      reload: 'AppMain'
                    },
                    {
                      renderer: 'action',
                      icon: 'Edit',
                      text: '编辑',
                      name: 'IWebsiteEdit',
                      actionType: 'drawer',
                      body: {
                        width: '100%',
                        appendToBody: true,
                        classname: 'i-website__drawer',
                        header: {
                          renderer: 'html',
                          html:
                            '<div style="text-align: left; color: white;">编辑Schema</div>'
                        },
                        body: [
                          {
                            renderer: 'editor',
                            editable: true,
                            isJson: false,
                            classname: 'i-website__json-editor'
                          }
                        ]
                      }
                    },
                    {
                      renderer: 'action',
                      text: '个人中心',
                      icon: 'Avatar',
                      type: 'primary',
                      actionType: 'url',
                      url: '/manager/workbench'
                    },
                    {
                      renderer: 'action',
                      text: '退出登录',
                      type: 'primary',
                      icon: 'SwitchButton',
                      actionType: 'ajax',
                      actionApi: {
                        url: '/logout'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          renderer: 'main',
          name: 'AppMain',
          routerView: true,
          classname: 'i-website__main',
        },
        {
          renderer: 'footer',
          classname: 'i-website__footer',
          body: 'copyright © 2022 sshuzhong@outlook.com'
        }
      ]
    }
  ]
};
