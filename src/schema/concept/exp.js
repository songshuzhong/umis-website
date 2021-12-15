const expSchema = {
  renderer: 'mis-service',
  body: [
    {
      renderer: 'mis-switch',
      name: 'forbidden',
      target: 'DisabledAction',
    },
    {
      renderer: 'mis-action',
      name: 'DisabledAction',
      text: '点击开关切换状态',
      disabledOn: 'data.forbidden == true',
      actionType: 'mis-copy',
      content: 'click!',
    },
  ],
};

export default {
  renderer: 'mis-page',
  classname: 'umis-website-doc',
  title: '表达式中的变量',
  body: [
    {
      renderer: 'mis-card',
      header: [
        {
          renderer: 'mis-icon',
          icon: 'Warning',
        },
        {
          renderer: 'mis-html',
          html: '&nbsp;表达式中的变量',
          inline: true,
        },
      ],
      body: [
        {
          renderer: 'mis-html',
          html: `表达式会运行在当前data数据上下文中，并得出计算结果。<br/>
常用在控件的disabledOn、visibleOn、hiddenOn、sendOn等逻辑上。例：<br/>
`,
        },
        expSchema,
      ],
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: expSchema,
          },
        },
      },
    },
  ],
};
