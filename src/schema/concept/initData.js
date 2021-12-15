const initSchema = {
  renderer: 'mis-service',
  initData: {
    msg: 'everything is awesome!',
  },
  body: {
    renderer: 'mis-html',
    html: '<h1>当前data.msg：<%= data.msg %></h1>',
  },
};
const initDataPropSchema = {
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
      prop: 'initData',
      desc: '初始化数据',
      type: 'Object',
      options: '-',
      value: '-',
    },
    {
      prop: 'inherit',
      desc: '继承',
      type: 'Object',
      options: '-',
      value: '-',
    },
    {
      prop: 'inherit.type',
      desc: '继承类型',
      type: 'string',
      options: 'include、exclude',
      value: 'all',
    },
    {
      prop: 'inherit.value',
      desc: '需要继承的keys',
      type: 'array',
      options: '-',
      value: '[]',
    },
  ],
};

export default {
  renderer: 'mis-page',
  body: [
    {
      renderer: 'mis-card',
      header: [
        {
          renderer: 'mis-icon',
          icon: 'WarningOutline',
        },
        {
          renderer: 'mis-html',
          html: '&nbsp;数据链',
          inline: true,
        },
      ],
      body: {
        renderer: 'mis-html',
        html: `
数据会依着渲染器链流转。如下图：<br/>
`,
      },
      footer: {
        renderer: 'mis-image',
        src:
          'http://assets.processon.com/chart_image/5bdba8c3e4b0e4521336fa28.png',
      },
    },
    {
      renderer: 'mis-divider',
    },
    {
      renderer: 'mis-card',
      header: [
        {
          renderer: 'mis-icon',
          icon: 'Warning',
        },
        {
          renderer: 'mis-html',
          html: '&nbsp;初始化数据(initData)',
          inline: true,
        },
      ],
      body: [
        {
          renderer: 'mis-html',
          html: `
如上图所示，<br/>
渲染器可以根据initData属性做数据初始化。<br/>
组件会通过自身的initData属性默认自动继承父级的initData(注意:相同key值的数据有覆盖的风险)，<br/>
不依赖自动继承的话可以根据inherit属性对字段手动过滤，例：
`,
        },
        initSchema,
      ],
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: initSchema,
          },
        },
      },
    },
  ],
};

export { initSchema, initDataPropSchema };
