const initSchema = {
  renderer: 'mis-service',
  initData: {
    tip: 'everything is awosome!',
  },
  body: {
    renderer: 'mis-html',
    html: '<%= data.tip %>',
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
  classname: 'umis-website-doc',
  title: '作用域链',
  initData: {
    name: 'shuzhong song',
    email: 'sshuzhong@outlook.com',
    phone: '15510351839',
    province: '北京',
    age: '2',
  },
  body: [
    {
      renderer: 'mis-card',
      inherit: {
        type: 'none',
      },
      header: {
        renderer: 'mis-html',
        html: `容器类型渲染器配有initData属性，开发者可以根据这个属性做数据初始化。<br/>
该容器内的子组件会通过自身的initData属性默认自动继承父级的initData(注意:相同key值的数据有覆盖的风险)，<br/>
不依赖自动继承的话可以根据inherit属性对字段手动过滤。
`,
      },
      body: initSchema,
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
    {
      renderer: 'mis-divider',
    },
  ],
};

export { initSchema, initDataPropSchema };
