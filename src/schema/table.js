import demoSchema from './table/demo';

export default {
  renderer: 'mis-page',
  classname: 'umis-website-doc',
  title: '表格',
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
      body: demoSchema,
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: demoSchema
          }
        }
      }
    },
    {
      renderer: 'mis-divider'
    },
    {
      renderer: 'mis-table',
      columns: [
        {
          name: 'prop',
          label: '属性'
        },
        {
          name: 'desc',
          label: '说明'
        },
        {
          name: 'type',
          label: '类型'
        },
        {
          name: 'options',
          label: '可选值'
        },
        {
          name: 'value',
          label: '可选值'
        }
      ],
      initRows: [
        {
          prop: 'columns',
          desc: '列(body配置可嵌套一个或多个子渲染器)',
          type: 'Array',
          options: '-',
          value: '-'
        },
        {
          prop: 'renderHook',
          desc: '自定义渲染函数',
          type: 'Function',
          options: '-',
          value: '-'
        },
        {
          prop: 'name',
          desc: '名称(用于组件联动)',
          type: 'string',
          options: '-',
          value: '-'
        },
        {
          prop: 'title',
          desc: '标题',
          type: 'string',
          options: '-',
          value: '-'
        },
        {
          prop: 'initRows',
          desc: '数据',
          type: 'array',
          options: '-',
          value: '-'
        },
        {
          prop: 'initApi',
          desc: '初始化接口',
          type: 'Object',
          options: '-',
          value: '-'
        },
        {
          prop: 'actions',
          desc: '批量处理',
          type: 'Array',
          options: '-',
          value: '-'
        },
        {
          prop: 'height',
          desc: '高度',
          type: 'String',
          options: '-',
          value: '-'
        },
        {
          prop: 'maxHeight',
          desc: '最大高度',
          type: 'String',
          options: '-',
          value: '-'
        },
        {
          prop: 'stripe',
          desc: '斑马条纹',
          type: 'Boolean',
          options: '-',
          value: 'true'
        },
        {
          prop: 'border',
          desc: '边框',
          type: 'Boolean',
          options: '-',
          value: 'true'
        },
        {
          prop: 'fit',
          desc: '宽度自适应',
          type: 'Boolean',
          options: '-',
          value: 'true'
        },
        {
          prop: 'showDynamicColumn',
          desc: '显示动态列',
          type: 'Boolean',
          options: '-',
          value: 'true'
        },
        {
          prop: 'showHeader',
          desc: '显示头部信息',
          type: 'Boolean',
          options: '-',
          value: 'true'
        },
        {
          prop: 'showExport',
          desc: '导出',
          type: 'Boolean',
          options: '-',
          value: 'false'
        },
        {
          prop: 'hasPageInfo',
          desc: '分页',
          type: 'Boolean',
          options: '-',
          value: 'false'
        },
        {
          prop: 'syncLocation',
          desc: '参数同步到地址栏',
          type: 'Boolean',
          options: '',
          value: 'false'
        }
      ]
    }
  ]
};
