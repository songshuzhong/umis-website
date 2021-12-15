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
  renderer: 'mis-card',
  header: [
    {
      renderer: 'mis-icon',
      icon: 'Warning',
    },
    {
      renderer: 'mis-html',
      html: '&nbsp;渲染器链',
      inline: true,
    },
  ],
  body: {
    renderer: 'mis-html',
    html: `首先，渲染器分为容器型(如：card)和非容器型(如：html)。<br/>
容器型渲染器一定会有body属性，可以接受一个或多个子渲染器；可能有header和footer属性，具体详见文档。<br/>
渲染器根据json的层级结构，将header、body或footer中的子节点当做子渲染器依次渲染，这样就形成和HTML标签包裹类似的渲染器链。<br/>
`,
  },
  footer: {
    renderer: 'mis-grid',
    classname: 'umis-website__doc_nest',
    body: [
      {
        renderer: 'mis-editor',
        span: 11,
        schema: nestSchema,
      },
      {
        renderer: 'mis-icon',
        span: 2,
        classname: 'umis-website__doc__arrow-right',
        icon: 'el-icon-d-arrow-right',
      },
      {
        renderer: 'mis-wrapper',
        span: 11,
        body: nestSchema,
      },
    ],
  },
};

export { nestSchema, rendererPropSchema };
