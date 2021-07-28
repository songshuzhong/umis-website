import { desc, eachMapping, mappingEach } from './each/demo';

export default {
  renderer: 'mis-page',
  classname: 'umis-website-doc',
  title: '列表数据',
  initData: {
    interests: [{name: 'cooking', sort: '0'}, {name: 'reading', sort: '1'}]
  },
  inherit: {
    type: 'include',
    value: ['interests']
  },
  body: [
    desc,
    {
      renderer: 'mis-divider'
    },
    {
      renderer: 'mis-card',
      header: '先mapping后each',
      body: mappingEach,
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: mappingEach
          }
        }
      }
    },
    {
      renderer: 'mis-divider'
    },
    {
      renderer: 'mis-card',
      header: '先each后mapping',
      body: eachMapping,
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: eachMapping
          }
        }
      }
    },
    {
      renderer: 'mis-divider',
      text: '属性列表'
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
          prop: 'body',
          desc: '子渲染器',
          type: 'Object',
          options: '-',
          value: ''
        }
      ]
    }
  ]
};
