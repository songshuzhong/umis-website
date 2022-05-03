export default {
  renderer: 'page',
  iProtal: true,
  body: {
    renderer: 'layout',
    name: 'i-website__container',
    direction: 'vertical',
    initData: {
      width: 200,
      collapse: false
    },
    body: [
      {
        renderer: 'wrapper',
        classname: 'i-website__header__wrapper',
        transition: 'el-zoom-in-top',
        body: {
          renderer: 'layout',
          classname: 'i-website__header',
          body: [
            {
              renderer: 'aside',
              name: 'i-website__nav-poppet',
              classname: 'i-website__header__logo',
              transition: 'el-zoom-in-left'
            },
            {
              renderer: 'main',
              classname: 'i-website__header__main',
              body: [
                {
                  renderer: 'wrapper',
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
                      remoteComponent: 'collapse',
                      visibleOn: 'data.collapse',
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
                    }
                  ]
                },
                {
                  renderer: 'service',
                  initApi: {
                    url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/user'
                  },
                  body: [
                    {
                      renderer: 'action',
                      actionType: 'actions',
                      name: 'i-website__header__actions',
                      actions: [
                        {
                          renderer: 'action',
                          icon: 'HomeFilled',
                          actionType: 'url',
                          url: 'https://songshuzhong.github.io/i-home/dist/index.html#/'
                        },
                        {
                          renderer: 'action',
                          icon: 'FullScreen',
                          actionType: 'fullscreen'
                        },
                        {
                          renderer: 'action',
                          icon: 'Edit',
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
                        }
                      ]
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
                      body: [
                        {
                          renderer: 'action',
                          text: '个人中心',
                          type: 'text',
                          actionType: 'url',
                          url: '/manager/workbench'
                        },
                        {
                          renderer: 'action',
                          text: '退出登录',
                          type: 'text',
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
            }
          ]
        }
      },
      {
        renderer: 'layout',
        classname: 'i-website__body',
        body: [
          {
            renderer: 'wrapper',
            transition: 'el-zoom-in-left',
            classname: 'i-website__nav-fixed',
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
              target: 'i-website__container,i-website__header__actions',
              title: {
                renderer: 'html',
                classname: 'i-website__header__logo',
                html: 'IRender'
              },
              body: [],
              inherit: {
                type: 'exclude',
                value: ['preview']
              }
            }
          },
          {
            renderer: 'aside',
            name: 'i-website__nav-poppet',
            classname: 'i-website__nav-poppet',
            transition: 'el-zoom-in-left'
          },
          {
            renderer: 'layout',
            direction: 'vertical',
            body: [
              {
                renderer: 'main',
                routerView: true,
                iProtal: true,
                classname: 'i-website__main',
              },
              {
                renderer: 'footer',
                classname: 'i-website__footer',
                body: {
                  renderer: 'html',
                  html: 'Copyright @ 2022 sshuzhong@outlook.com'
                }
              }
            ]
          }
        ]
      }
    ]
  }
};
