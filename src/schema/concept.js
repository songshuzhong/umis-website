import rendererSchema from './concept/renderers';
import initDataSchema from './concept/initData';
import initApiSchema from './concept/initApi';
import propsSchema from './concept/props';
import tplSchema from './concept/tpl';
import expSchema from './concept/exp';
import paramsSchema from './concept/params';

export default {
  renderer: 'mis-page',
  classname: 'umis-website-doc',
  title: '概念设计',
  body: [
    rendererSchema,
    {
      renderer: 'mis-divider',
    },
    initDataSchema,
    {
      renderer: 'mis-divider',
    },
    initApiSchema,
    {
      renderer: 'mis-divider',
    },
    propsSchema,
    {
      renderer: 'mis-divider',
    },
    tplSchema,
    {
      renderer: 'mis-divider',
    },
    paramsSchema,
    {
      renderer: 'mis-divider',
    },
    expSchema,
    {
      renderer: 'mis-wrapper',
      classname: 'umis-website-doc__next-section',
      body: [
        {
          renderer: 'mis-action',
          type: 'text',
          text: '游乐场',
          actionType: 'mis-redirect',
          redirect: '/playground',
        },
        {
          renderer: 'mis-action',
          type: 'text',
          text: '快速开始',
          actionType: 'mis-redirect',
          redirect: '/begin',
        },
      ],
    },
  ],
};
