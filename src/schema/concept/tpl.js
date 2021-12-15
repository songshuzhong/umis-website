const tplSchema = {
  renderer: 'mis-wrapper',
  initData: {
    msg: 'so easy!',
  },
  body: {
    renderer: 'mis-html',
    html: '<h1><%=data.msg%></h1>',
  },
};

export default {
  renderer: 'mis-page',
  classname: 'umis-website-doc',
  title: '字符串中的变量',
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
          html: '&nbsp;字符串中的变量',
          inline: true,
        },
      ],
      body: [
        {
          renderer: 'mis-html',
          html: `作用同es6中的模板字符串，语法格式是：&lt;%=data.key%&gt;。<br/>
渲染器识别出模板字符串语法后通过vue的计算属性在当前data数据上下文中将目标数据插入到占位符中。例：
`,
        },
        tplSchema,
      ],
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: tplSchema,
          },
        },
      },
    },
  ],
};
