const paramsSchema = {
  renderer: 'mis-service',
  initData: {
    id: '1234',
    request: {
      name: 'everything',
      sex: 'is awesome',
    },
  },
  initApi: {
    url:
      'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/params?id=${id}',
    method: 'get',
    params: {
      name: '${request.name}',
      sex: '${request.sex}',
    },
  },
  body: {
    renderer: 'mis-data',
  },
};

export default {
  renderer: 'mis-page',
  classname: 'umis-website-doc',
  title: '参数中的变量',
  body: [
    {
      renderer: 'mis-card',
      header: [
        {
          renderer: 'mis-icon',
          icon: 'el-icon-warning-outline',
        },
        {
          renderer: 'mis-html',
          html: '&nbsp;参数中的变量',
          inline: true,
        },
      ],
      body: [
        {
          renderer: 'mis-html',
          html:
            '请求参数也可以使用占位符动态生成。但是占位符结构和模板字符串和表达式在写法上略有不同，语法格式是：&#36;&#123;&#107;&#101;&#121;&#125;。例：<br/>',
        },
        paramsSchema,
      ],
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: paramsSchema,
          },
        },
      },
    },
  ],
};
