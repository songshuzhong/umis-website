export default {
  renderer: 'mis-page',
  body: {
    renderer: 'mis-layout',
    body: [
      {
        renderer: 'mis-aside',
        classname: 'umis-demo_doc-aside',
        body: {
          renderer: 'mis-html',
          html: 'aside',
        },
      },
      {
        renderer: 'mis-layout',
        direction: 'vertical',
        body: [
          {
            renderer: 'mis-header',
            classname: 'umis-demo_doc_header',
            body: {
              renderer: 'mis-html',
              html: 'header',
            },
          },
          {
            renderer: 'mis-main',
            classname: 'umis-demo_doc-main',
            body: {
              renderer: 'mis-wrapper',
              body: [
                {
                  renderer: 'mis-html',
                  html: 'main',
                },
                {
                  renderer: 'mis-noop',
                },
              ],
            },
          },
          {
            renderer: 'mis-footer',
            classname: 'umis-demo_doc_footer',
            body: {
              renderer: 'mis-html',
              html: 'footer',
            },
          },
        ],
      },
    ],
  },
};
