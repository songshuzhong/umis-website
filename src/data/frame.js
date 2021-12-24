export default {
  renderer: 'mis-page',
  iProtal: true,
  body: {
    renderer: 'mis-layout',
    classname: 'umis-website__container',
    name: 'umis-website__container',
    direction: 'vertical',
    initData: {
      preview: false,
      width: 200,
      collapse: false
    },
    body: [
      {
        renderer: 'mis-wrapper',
        classname: 'umis-website__header__wrapper',
        hiddenOn: 'data.preview === true',
        transition: 'el-zoom-in-top',
        body: {
          renderer: 'mis-affix',
          zIndex: 1000,
          body: {
            renderer: 'mis-layout',
            classname: 'umis-website__header',
            body: [
              {
                renderer: 'mis-aside',
                name: 'umis-website__nav-poppet',
                classname: 'umis-website__header__logo',
                visibleOn: 'data.preview === false',
                transition: 'el-zoom-in-left',
                body: {
                  renderer: 'mis-html',
                  html: 'UMIS'
                }
              },
              {
                renderer: 'mis-main',
                classname: 'umis-website__header__main',
                body: [
                  {
                    renderer: 'mis-wrapper',
                    body: [
                      {
                        renderer: 'mis-switch',
                        name: 'collapse',
                        target: 'umis-website__container',
                        hiddenOn: '1 === 1'
                      },
                      {
                        renderer: 'mis-action',
                        icon: 'Expand',
                        type: 'icon',
                        remoteComponent: 'collapse',
                        visibleOn: 'data.collapse',
                        size: 22
                      },
                      {
                        renderer: 'mis-action',
                        icon: 'Fold',
                        type: 'icon',
                        remoteComponent: 'collapse',
                        visibleOn: '!data.collapse',
                        size: 22
                      },
                      {
                        renderer: 'mis-breadcrumb',
                        classname: 'umis-website__breadcrumb'
                      }
                    ]
                  },
                  {
                    renderer: 'mis-wrapper',
                    body: [
                      {
                        renderer: 'mis-switch',
                        name: 'preview',
                        target: 'umis-website__container, umis-website-nav',
                        hiddenOn: '1 === 1'
                      },
                      {
                        renderer: 'mis-action',
                        actionType: 'actions',
                        name: 'umis-website__header__actions',
                        hiddenOn: 'data.activeIndex == "playground"',
                        actions: [
                          {
                            renderer: 'mis-action',
                            icon: 'View',
                            remoteComponent: 'preview'
                          },
                          {
                            renderer: 'mis-action',
                            icon: 'FullScreen',
                            actionType: 'mis-fullscreen'
                          },
                          {
                            renderer: 'mis-action',
                            icon: 'Edit',
                            actionType: 'mis-drawer',
                            body: {
                              width: '100%',
                              appendToBody: true,
                              classname: 'umis-website__drawer',
                              header: {
                                renderer: 'mis-html',
                                html:
                                  '<div style="text-align: left; color: white;">编辑Schema</div>'
                              },
                              body: [
                                {
                                  renderer: 'mis-editor',
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
        }
      },
      {
        renderer: 'mis-layout',
        body: [
          {
            renderer: 'mis-wrapper',
            visibleOn: 'data.preview === false',
            transition: 'el-zoom-in-left',
            classname: 'umis-website__nav-fixed',
            body: {
              renderer: 'mis-menu',
              name: 'umis-website-nav',
              classname: 'umis-website_menu-vertical',
              router: true,
              mode: 'vertical',
              backgroundColor: '#3a3f51',
              textColor: '#fff',
              activeTextColor: '#ffd04b',
              defaultActive: '',
              target: 'umis-website__container,umis-website__header__actions',
              title: {
                renderer: 'mis-html',
                html: '<div class="umis-website__menu__logo">UMIS</div>'
              },
              body: [],
              inherit: {
                type: 'exclude',
                value: ['preview']
              }
            }
          },
          {
            renderer: 'mis-aside',
            name: 'umis-website__nav-poppet',
            classname: 'umis-website__nav-poppet',
            visibleOn: 'data.preview === false',
            transition: 'el-zoom-in-left'
          },
          {
            renderer: 'mis-wrapper',
            visibleOn: 'data.preview === true',
            classname: 'umis-website__goto-edit',
            body: [
              {
                renderer: 'mis-action',
                remoteComponent: 'preview',
                icon: 'HomeFilled',
                text: ''
              }
            ]
          },
          {
            renderer: 'mis-main',
            routerView: true,
            iProtal: true,
            classname: 'umis-website__main',
            computedClass: 'data.preview ? \'preview\' : \'\''
          }
        ]
      }
    ]
  }
};
