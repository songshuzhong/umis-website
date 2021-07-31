import ajaxSchema from './action/ajax';
import copySchema from './action/copy';
import dialogSchema from './action/dialog';
import drawerSchema from './action/drawer';
import popSchema from './action/pop';
import urlSchema from './action/url';
import actionsSchema from './action/actions';

export default {
  renderer: 'mis-page',
  classname: 'umis-website-doc',
  title: '行为按钮',
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
      header: '异步请求Action',
      body: {
        renderer: 'mis-schema',
        initSchema: ajaxSchema,
        canSchemaUpdate: false,
        iProtal: false,
      },
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: ajaxSchema,
          },
        },
      },
    },
    {
      renderer: 'mis-divider',
    },
    {
      renderer: 'mis-card',
      header: '复制Action',
      body: {
        renderer: 'mis-schema',
        initSchema: copySchema,
        canSchemaUpdate: false,
        iProtal: false,
      },
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: copySchema,
          },
        },
      },
    },
    {
      renderer: 'mis-divider',
    },
    {
      renderer: 'mis-card',
      header: 'DialogAction',
      body: {
        renderer: 'mis-schema',
        initSchema: dialogSchema,
        canSchemaUpdate: false,
        iProtal: false,
      },
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: dialogSchema,
          },
        },
      },
    },
    {
      renderer: 'mis-divider',
    },
    {
      renderer: 'mis-card',
      header: 'DrawerAction',
      body: {
        renderer: 'mis-schema',
        initSchema: drawerSchema,
        canSchemaUpdate: false,
        iProtal: false,
      },
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: drawerSchema,
          },
        },
      },
    },
    {
      renderer: 'mis-divider',
    },
    {
      renderer: 'mis-card',
      header: 'PopAction',
      body: {
        renderer: 'mis-schema',
        initSchema: popSchema,
        canSchemaUpdate: false,
        iProtal: false,
      },
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: popSchema,
          },
        },
      },
    },
    {
      renderer: 'mis-divider',
    },
    {
      renderer: 'mis-card',
      header: 'UrlAction',
      body: {
        renderer: 'mis-schema',
        initSchema: urlSchema,
        canSchemaUpdate: false,
        iProtal: false,
      },
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: urlSchema,
          },
        },
      },
    },
    {
      renderer: 'mis-divider',
    },
    {
      renderer: 'mis-card',
      header: 'Action组',
      body: {
        renderer: 'mis-schema',
        initSchema: actionsSchema,
        canSchemaUpdate: false,
        iProtal: false,
      },
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: {
            renderer: 'mis-editor',
            schema: actionsSchema,
          },
        },
      },
    },
    {
      renderer: 'mis-divider',
      text: '属性列表',
    },
    {
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
          prop: 'renderer',
          desc: '渲染器名称',
          type: 'string',
          options: '-',
          value: 'mis-action',
        },
        {
          prop: 'actionType',
          desc: '行为类型',
          type: 'string',
          options: 'mis-[ajax, dialog, drawer, url, copy]',
          value: '-',
        },
        {
          prop: 'actionApi',
          desc: '当actionType=mis-ajax时，必须配置',
          type: 'string',
          options: '-',
          value: '-',
        },
        {
          prop: 'actions',
          desc: '行为组，存放多个action',
          type: 'array',
          options: 'mis-action',
          value: '-',
        },
        {
          prop: 'text',
          desc: '显示文案',
          type: 'String / <%= data.tpl %>',
          options: '-',
          value: 'action',
        },
        {
          prop: 'size',
          desc: '尺寸',
          type: 'String',
          options: 'medium / small / mini',
          value: '-',
        },
        {
          prop: 'type',
          desc: '类型',
          type: 'String',
          options: 'primary / success / warning / danger / info / text',
          value: '-',
        },
        {
          prop: 'plain',
          desc: '朴素',
          type: 'boolean',
          options: '-',
          value: 'false',
        },
        {
          prop: 'round',
          desc: '圆角',
          type: 'boolean',
          options: '-',
          value: 'false',
        },
        {
          prop: 'circle',
          desc: '圆形',
          type: 'boolean',
          options: '-',
          value: 'false',
        },
        {
          prop: 'icon',
          desc: '图标',
          type: 'string',
          options: '-',
          value: '-',
        },
        {
          prop: 'classname',
          desc: '样式',
          type: 'string',
          options: '-',
          value: '-',
        },
        {
          prop: 'disabledOn',
          desc: '不可用条件',
          type: 'string',
          options: '例：data.sex === 0',
          value: '-',
        },
        {
          prop: 'target',
          desc: '行为结束后对目标组件后续操作',
          type: 'string',
          options: '-',
          value: '-',
        },
        {
          prop: 'popupType',
          desc: '辅助弹层类型',
          type: 'string',
          options: 'over / confirm / tip / badge',
          value: '-',
        },
        {
          prop: 'popperWidth',
          desc: '辅助弹层宽度，over时可用',
          type: 'string',
          options: '',
          value: '-',
        },
        {
          prop: 'popperWidth',
          desc: '辅助弹层宽度，over时可用',
          type: 'string',
          options: '',
          value: '-',
        },

        {
          prop: 'popoverTitle',
          desc: '标题，over时可用',
          type: 'string',
          options: '',
          value: '-',
        },
        {
          prop: 'popoverContent',
          desc: '内容，over时可用',
          type: 'string',
          options: '',
          value: '-',
        },
        {
          prop: 'popoverPlacement',
          desc: '位置，over时可用',
          type: 'string',
          options: 'top / top-start / top-end...',
          value: '-',
        },
        {
          prop: 'popperClass',
          desc: '辅助弹层样式，over时可用',
          type: 'string',
          options: '',
          value: '-',
        },
        {
          prop: 'confirmTitle',
          desc: '确认标题，confirm时可用',
          type: 'string',
          options: '',
          value: '-',
        },
        {
          prop: 'confirmCancelBtnText',
          desc: '取消文案， confirm时可用',
          type: 'string',
          options: '',
          value: '-',
        },
        {
          prop: 'confirmCancelBtnType',
          desc: '取消按钮类型， confirm时可用',
          type: 'string',
          options: '',
          value: '-',
        },
        {
          prop: 'confirmBtnText',
          desc: '确认文案， confirm时可用',
          type: 'string',
          options: '',
          value: '-',
        },
        {
          prop: 'confirmBtnType',
          desc: '确认按钮类型， confirm时可用',
          type: 'string',
          options: '',
          value: '-',
        },
        {
          prop: 'confirmIcon',
          desc: '图标， confirm时可用',
          type: 'string',
          options: '',
          value: '-',
        },
        {
          prop: 'confirmIconColor',
          desc: '图标颜色， confirm时可用',
          type: 'string',
          options: '',
          value: '-',
        },
        {
          prop: 'confirmHideIcon',
          desc: '是否隐藏 icon， confirm时可用',
          type: 'boolean',
          options: '',
          value: '-',
        },
        {
          prop: 'badgeText',
          desc: '显示值， badge时可用',
          type: 'string',
          options: '',
          value: '-',
        },
        {
          prop: 'badgeClass',
          desc: '样式， badge时可用',
          type: 'string',
          options: '',
          value: '-',
        },
        {
          prop: 'tipDisabled',
          desc: 'tip是否可用， tip时可用',
          type: 'boolean',
          options: '',
          value: '-',
        },
        {
          prop: 'tipEffect',
          desc: 'tip主题， tip时可用',
          type: 'boolean',
          options: '',
          value: '-',
        },
        {
          prop: 'tipContent',
          desc: 'tip内容， tip时可用',
          type: 'boolean',
          options: '',
          value: '-',
        },
        {
          prop: 'tipPlacement',
          desc: 'tip位置， tip时可用',
          type: 'boolean',
          options: '',
          value: '-',
        },
      ],
    },
  ],
};
