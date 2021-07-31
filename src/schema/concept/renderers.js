const nestSchema = {
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

const rendererPropSchema = {
  renderer: 'mis-table',
  columns: [
    {
      name: 'prop',
      label: '属性',
    },
    {
      name: 'desc',
      label: '说明',
    },
    {
      name: 'type',
      label: '类型',
    },
    {
      name: 'options',
      label: '可选值',
    },
    {
      name: 'value',
      label: '可选值',
    },
  ],
  initRows: [
    {
      prop: 'renderer',
      desc: '渲染器',
      type: 'String',
      options: '-',
      value: '-',
    },
    {
      prop: 'name',
      desc: '渲染器名称',
      type: 'String',
      options: '渲染器间有联动时，必须有name属性',
      value: '-',
    },
    {
      prop: 'visibleOn',
      desc: '渲染器的显隐逻辑',
      type: 'String',
      options: '-',
      value: '-',
    },
    {
      prop: 'header',
      desc: '头部信息',
      type: 'String / Array / Object',
      options: '-',
      value: 'header',
    },
    {
      prop: 'body',
      desc: '主干信息',
      type: 'String / Array / Object',
      options: '-',
      value: 'body',
    },
    {
      prop: 'footer',
      desc: '底部信息',
      type: 'String / Array / Object',
      options: '-',
      value: 'footer',
    },
  ],
};
export default {
  renderer: 'mis-page',
  classname: 'umis-website-doc',
  title: '渲染器链',
  body: [
    {
      renderer: 'mis-card',
      inherit: {
        type: 'none',
      },
      header: {
        renderer: 'mis-html',
        html: `渲染器支持嵌套使用，在找不到时会用error兜底并给出错误信息
`,
      },
      body: nestSchema,
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: nestSchema,
          },
        },
      },
    },
    {
      renderer: 'mis-divider',
    },
  ],
};
export { nestSchema, rendererPropSchema };
