export default {
  renderer: 'page',
  iProtal: true,
  body: {
    renderer: 'layout',
    name: 'i-renderer-website__container',
    direction: 'vertical',
    initData: {
      preview: false,
      width: 200,
      collapse: false
    },
    body: [
      {
        renderer: 'wrapper',
        classname: 'i-renderer-website__header__wrapper',
        hiddenOn: 'data.preview === true',
        transition: 'el-zoom-in-top',
        body: {
          renderer: 'layout',
          classname: 'i-renderer-website__header',
          body: [
            {
              renderer: 'aside',
              name: 'i-renderer-website__nav-poppet',
              classname: 'i-renderer-website__header__logo',
              visibleOn: 'data.preview === false',
              transition: 'el-zoom-in-left',
              body: {
                renderer: 'html',
                html: 'IRender'
              }
            },
            {
              renderer: 'main',
              classname: 'i-renderer-website__header__main',
              body: [
                {
                  renderer: 'wrapper',
                  body: [
                    {
                      renderer: 'switch',
                      name: 'collapse',
                      target: 'i-renderer-website__container',
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
                      classname: 'i-renderer-website__breadcrumb'
                    }
                  ]
                },
                {
                  renderer: 'wrapper',
                  body: [
                    {
                      renderer: 'switch',
                      name: 'preview',
                      target: 'i-renderer-website__container, i-renderer-website-nav',
                      hiddenOn: '1 === 1'
                    },
                    {
                      renderer: 'action',
                      actionType: 'actions',
                      name: 'i-renderer-website__header__actions',
                      hiddenOn: 'data.activeIndex == "playground"',
                      actions: [
                        {
                          renderer: 'action',
                          icon: 'View',
                          remoteComponent: 'preview'
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
                            classname: 'i-renderer-website__drawer',
                            header: {
                              renderer: 'html',
                              html:
                                '<div style="text-align: left; color: white;">编辑Schema</div>'
                            },
                            body: [
                              {
                                renderer: 'editor',
                                editable: true,
                                isJson: false
                              }
                            ]
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
        classname: 'i-renderer-website__body',
        body: [
          {
            renderer: 'wrapper',
            visibleOn: 'data.preview === false',
            transition: 'el-zoom-in-left',
            classname: 'i-renderer-website__nav-fixed',
            body: {
              renderer: 'menu',
              name: 'i-renderer-website-nav',
              classname: 'i-renderer-website_menu-vertical',
              router: true,
              mode: 'vertical',
              backgroundColor: '#3a3f51',
              textColor: '#fff',
              activeTextColor: '#ffd04b',
              defaultActive: '',
              target: 'i-renderer-website__container,i-renderer-website__header__actions',
              title: {
                renderer: 'html',
                classname: 'i-renderer-website__header__logo',
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
            name: 'i-renderer-website__nav-poppet',
            classname: 'i-renderer-website__nav-poppet',
            visibleOn: 'data.preview === false',
            transition: 'el-zoom-in-left'
          },
          {
            renderer: 'wrapper',
            visibleOn: 'data.preview === true',
            classname: 'i-renderer-website__goto-edit',
            body: [
              {
                renderer: 'action',
                remoteComponent: 'preview',
                icon: 'HomeFilled',
                text: ''
              }
            ]
          },
          {
            renderer: 'layout',
            direction: 'vertical',
            body: [
              {
                renderer: 'main',
                routerView: true,
                iProtal: true,
                computedClass: 'data.preview ? \'preview\' : \'\''
              },
              {
                renderer: 'footer',
                classname: 'i-renderer-website__footer',
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
