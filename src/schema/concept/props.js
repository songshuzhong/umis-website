const propsSchema = {
  renderer: 'mis-page',
  body: [
    {
      renderer: 'mis-alert',
      title: '成功',
      description: '成功提示的文案',
      showIcon: true,
      type: 'success',
    },
    {
      renderer: 'mis-alert',
      title: '警告',
      description: '警告提示的文案',
      type: 'warning',
      closable: true,
      closeText: '点击我才关闭',
    },
    {
      renderer: 'mis-alert',
      title: '错误',
      description: '错误提示的文案',
      type: 'error',
      effect: 'dark',
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
      html: '&nbsp;属性(schema中的键)',
      inline: true,
    },
  ],
  body: [
    {
      renderer: 'mis-html',
      html: `
如上文所述header、body和footer属性保证了渲染器层级关系，而其他的属性项确定了当前渲染器的显示方式。<br/>
为了降低学习成本，多数属性依旧采用第三方element-ui组件的props。例：<br/>
`,
    },
    propsSchema,
  ],
  footer: {
    renderer: 'mis-action',
    text: '查看源码',
    actionType: 'mis-dialog',
    body: {
      title: '源码',
      body: {
        renderer: 'mis-editor',
        schema: propsSchema,
      },
    },
  },
};
