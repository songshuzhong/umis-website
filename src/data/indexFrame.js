export default {
  renderer: 'layout',
  name: 'i-website__container',
  classname: 'i-website__container',
  initData: {
    width: 200,
    collapse: false
  },
  body: [
    {
      renderer: 'aside',
      classname: 'i-website__aside',
      body: [
        {
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
          title: 'IRenderer',
          initApi: {
            url: '/api/menu/0767bea4-c7e7-4aa7-a1b5-2fd5e1ec4a7f'
          },
          body: []
        },
        {
          renderer: 'wrapper',
          classname: 'i-website__ads',
          body: [
            {
              renderer: 'carousel',
              classname: 'i-home__carousel',
              autoplay: true,
              loop: true,
              body: [
                {
                  renderer: 'render',
                  body: [
                    {
                      innerHTML: '招租广告位1',
                      tag: 'span',
                      classname: 'i-render__container',
                      action: {
                        renderer: 'action',
                        actionType: 'ajax',
                        actionApi: {
                          url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/ads_click?order=1',
                          method: 'get'
                        }
                      }
                    }
                  ]
                },
                {
                  renderer: 'render',
                  body: [
                    {
                      innerHTML: '招租广告位2',
                      tag: 'span',
                      classname: 'i-render__container',
                      action: {
                        renderer: 'action',
                        actionType: 'ajax',
                        actionApi: {
                          url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/ads_click?order=2',
                          method: 'get'
                        }
                      }
                    }
                  ]
                },
                {
                  renderer: 'render',
                  body: [
                    {
                      innerHTML: '招租广告位3',
                      tag: 'span',
                      classname: 'i-render__container',
                      action: {
                        renderer: 'action',
                        actionType: 'ajax',
                        actionApi: {
                          url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/ads_click?order=3',
                          method: 'get'
                        }
                      }
                    }
                  ]
                }
              ],
              height: 140,
              indicatorPosition: 'none',
              arrow: 'always'
            }
          ]
        }
      ]
    },
    {
      renderer: 'layout',
      direction: 'vertical',
      body: [
        {
          renderer: 'header',
          classname: 'i-website__header',
          tags: true,
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
              category: 'icon',
              name: 'IWebsiteExpand',
              remoteComponent: 'collapse',
              visibleOn: 'data.collapse',
              size: 22
            },
            {
              renderer: 'action',
              icon: 'Fold',
              category: 'icon',
              remoteComponent: 'collapse',
              visibleOn: '!data.collapse',
              size: 22,
              immediateOn: 'data.collapse',
            },
            {
              renderer: 'breadcrumb',
              classname: 'i-website__breadcrumb'
            },
            {
              renderer: 'service',
              classname: 'i-website__header__service',
              initApi: {
                url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/user',
                cached: true
              },
              body: [
                {
                  renderer: 'action',
                  icon: 'HomeFilled',
                  actionType: 'url',
                  name: 'IWebsiteHome',
                  category: 'icon',
                  size: 18,
                  url: 'https://songshuzhong.github.io/i-website/dist/home.html#/'
                },
                {
                  renderer: 'action',
                  icon: 'Bell',
                  category: 'icon',
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
                      activeTab: 1,
                      tabPosition: 'top'
                    }
                },
                {
                  renderer: 'action',
                  icon: 'FullScreen',
                  name: 'IWebsiteFullScreen',
                  category: 'icon',
                  size: 18,
                  actionType: 'fullscreen'
                },
                {
                  renderer: 'action',
                  icon: 'Refresh',
                  category: 'icon',
                  size: 18,
                  name: 'IWebsiteRefresh',
                  actionType: 'reload',
                  reload: 'AppMain'
                },
                {
                  renderer: 'action',
                  icon: 'Setting',
                  category: 'icon',
                  size: 18,
                  actionType: 'drawer',
                  body: {
                    width: 30,
                    appendToBody: true,
                    classname: 'i-website__setting__container',
                    body: [
                      {
                        renderer: 'setting'
                      }
                    ]
                  }
                },
                {
                  renderer: 'action',
                  icon: 'Edit',
                  category: 'icon',
                  size: 18,
                  name: 'IWebsiteEdit',
                  actionType: 'drawer',
                  body: {
                    width: 100,
                    appendToBody: true,
                    classname: 'i-website__drawer',
                    header: {
                      renderer: 'editor',
                      editable: true,
                      nimble: true,
                      isJson: false,
                      classname: 'i-website__json-editor'
                    }
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
                  name: 'IWebsiteDropdown',
                  body: [
                    {
                      renderer: 'action',
                      icon: 'HomeFilled',
                      actionType: 'url',
                      name: 'IWebsiteHome',
                      text: '官网',
                      url: 'https://songshuzhong.github.io/i-website/dist/home.html#/'
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
                      icon: 'Setting',
                      text: '设置',
                      category: 'icon',
                      size: 18,
                      actionType: 'drawer',
                      body: {
                        width: 30,
                        appendToBody: true,
                        body: [
                          {
                            renderer: 'setting'
                          }
                        ]
                      }
                    },
                    {
                      renderer: 'action',
                      icon: 'Edit',
                      text: '编辑',
                      name: 'IWebsiteEdit',
                      actionType: 'drawer',
                      body: {
                        width: 100,
                        appendToBody: true,
                        classname: 'i-website__drawer',
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
