import { htmlMap } from './html/demo';

export default {
  renderer: 'mis-page',
  classname: 'umis-website-doc',
  title: '文本',
  initData: {
    interests: [
      { name: 'cooking', sort: '0' },
      { name: 'reading', sort: '1' }
    ]
  },
  inherit: {
    type: 'include',
    value: ['interests']
  },
  body: [
    {
      renderer: 'mis-card',
      header: '在html模板中使用js api',
      body: htmlMap,
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: htmlMap
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
          prop: 'html',
          desc: 'html模板',
          type: 'String',
          options: '-',
          value: ''
        },
        {
          prop: 'classname',
          desc: '自定义样式类名',
          type: 'String',
          options: '-',
          value: ''
        }
      ]
    },
    {
      renderer: 'mis-wrapper',
      classname: 'umis-website-doc__next-section',
      body: [
        {
          renderer: 'mis-action',
          type: 'text',
          text: '《 Mapping',
          actionType: 'mis-url',
          url: '/docs/mapping'
        },
        {
          renderer: 'mis-action',
          type: 'text',
          text: 'Mapping 》',
          actionType: 'mis-url',
          url: '/docs/mapping'
        }
      ]
    }
  ]
};
