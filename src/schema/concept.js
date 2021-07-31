import rendererSchema, { nestSchema } from './concept/renderers';
import initApiSchema, { initApiPropSchema } from './concept/initApi';

export default {
  renderer: 'mis-page',
  classname: 'umis-website-doc',
  title: '概念设计',
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
          html: '&nbsp;渲染器链',
          inline: true,
        },
      ],
      body: {
        renderer: 'mis-html',
        html: `首先，渲染器分为容器型(如：card)和非容器型(如：html)。<br/>
容器型渲染器一定会有body属性，可以接受一个或多个子渲染器；可能有header和footer属性，具体详见文档。<br/>
渲染器根据json的层级结构，将header、body或footer中的子节点当做子渲染器依次渲染，这样就形成和HTML标签包裹类似的渲染器链。<br/>
`,
      },
      footer: {
        renderer: 'mis-grid',
        classname: 'umis-website__doc_nest',
        body: [
          {
            renderer: 'mis-editor',
            span: 11,
            schema: nestSchema,
          },
          {
            renderer: 'mis-icon',
            span: 2,
            classname: 'umis-website__doc__arrow-right',
            icon: 'el-icon-d-arrow-right',
          },
          {
            renderer: 'mis-wrapper',
            span: 11,
            body: nestSchema,
          },
        ],
      },
    },
    {
      renderer: 'mis-divider',
    },
    {
      renderer: 'mis-card',
      header: [
        {
          renderer: 'mis-icon',
          icon: 'el-icon-warning-outline',
        },
        {
          renderer: 'mis-html',
          html: '&nbsp;数据链',
          inline: true,
        },
      ],
      body: {
        renderer: 'mis-html',
        html: `
数据会依着渲染器链流转。<br/>
容器类型渲染器配有initData属性，开发者可以根据这个属性做数据初始化。<br/>
该容器内的子组件会通过自身的initData属性默认自动继承父级的initData(注意:相同key值的数据有覆盖的风险)，<br/>
不依赖自动继承的话可以根据inherit属性对字段手动过滤
`,
      },
      footer: {
        renderer: 'mis-image',
        src:
          'http://assets.processon.com/chart_image/5bdba8c3e4b0e4521336fa28.png',
      },
    },
    {
      renderer: 'mis-divider',
    },
    {
      renderer: 'mis-card',
      header: [
        {
          renderer: 'mis-icon',
          icon: 'el-icon-warning-outline',
        },
        {
          renderer: 'mis-html',
          html: '&nbsp;属性',
          inline: true,
        },
      ],
      body: {
        renderer: 'mis-html',
        html: `
json中的header、body和footer属性保证了渲染器链，其他的属性项多数依旧是第三方elementui组件的props。<br/>
除此之外，另有少数扩展属性，如：initApi、initData、visibleOn。
`,
      },
    },
    {
      renderer: 'mis-divider',
      text: '',
    },
    initApiSchema,
  ],
};
