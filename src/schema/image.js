import { previewSchema } from './image/demo';

export default {
  renderer: 'mis-page',
  classname: 'umis-website-doc',
  title: '图片',
  body: [
    {
      renderer: 'mis-card',
      body: previewSchema,
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: previewSchema
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
    }
  ]
};
