import { nestSchema } from './renderers';

const getTimeSchema = {
  renderer: 'mis-service',
  initApi: {
    url:
      'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/time',
    method: 'get',
  },
  body: {
    renderer: 'mis-html',
    html: '<h1>获取当前时间：<%=data.time%></h1>',
  },
};

const initApiPropSchema = {
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
      prop: 'url',
      desc: '请求路径',
      type: 'string',
      options: '-',
      value: '-',
    },
    {
      prop: 'method',
      desc: '请求类型',
      type: 'string',
      options: 'get、post、put、delete(注意：小写)',
      value: 'get',
    },
    {
      prop: 'params',
      desc: '请求参数，支持${name}从data中动态获取',
      type: 'Object',
      options: '-',
      value: '-',
    },
    {
      prop: 'cached',
      desc: '该接口是否允许被缓存',
      type: 'boolean',
      options: 'true、false',
      value: 'false',
    },
    {
      prop: 'sendOn',
      desc: '请求条件(暂不支持)',
      type: 'String / <%= data.tpl %>',
      options: '-',
      value: '-',
    },
    {
      prop: 'msg',
      desc: '自定义响应信息(暂不支持)',
      type: 'String',
      options: '-',
      value: '-',
    },
  ],
};

export default {
  renderer: 'mis-page',
  classname: 'umis-website-doc',
  title: '初始化接口',
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
          html: '&nbsp;初始化接口(initApi)',
          inline: true,
        },
      ],
      body: [
        {
          renderer: 'mis-html',
          html:
            'table、cards、service渲染器配有initApi，可以通过这个属性获取初始化数据。例：',
        },
        getTimeSchema,
      ],
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: getTimeSchema,
          },
        },
      },
    },
  ],
};

export { initApiPropSchema };
