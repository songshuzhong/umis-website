import { start, demoSchema } from './start/demo';

export default {
  renderer: 'mis-page',
  classname: 'umis-website-doc',
  title: '快速开始',
  body: [
    {
      renderer: 'mis-html',
      html: 'umis是一个基于vue和element-ui制作的渲染器组件库，意欲通过json配置生成页面。'
    },
    {
      renderer: 'mis-divider',
    },
    {
      renderer: 'mis-card',
      header: [
        {
          renderer: 'mis-icon',
          icon: 'el-icon-warning-outline'
        },
        {
          renderer: 'mis-html',
          html: '&nbsp;引入',
          inline: true
        },
      ],
      body: {
        renderer: 'mis-html',
        html: `
import UmisRenderers from "umis-renderers";<br/>
Vue.use(UmisRenderers, options);              
              `
      },
      footer: {
        renderer: 'mis-action',
        text: '点击复制',
        actionType: 'mis-copy',
        content: 'import UmisRenderers from "umis-renderers"; Vue.use(UmisRenderers, options);'
      }
    },
    {
      renderer: 'mis-divider',
      text: 'options配置'
    },
    {
      renderer: 'mis-card',
      header: [
        {
          renderer: 'mis-icon',
          icon: 'el-icon-warning-outline'
        },
        {
          renderer: 'mis-html',
          html: '&nbsp;适配器(options.adaptor)',
          inline: true
        },
      ],
      body: [
        {
          renderer: 'mis-html',
          html: 'adaptor.req，请求前置，可以对请求参数做定制化处理'
        },
        {
          renderer: 'mis-html',
          html: `
if (url.includes('terra/routes/list.json') && method === 'get') {<br/>
  &nbsp;&nbsp;req.params.page_size=params.pageSize;<br/>
}
                    `,
        },
        {
          renderer: 'mis-divider'
        },
        {
          renderer: 'mis-html',
          html: 'adaptor.res，响应后置，可以对响应体做定制化处理',
          inline: true
        },
        {
          renderer: 'mis-html',
          html: `
if (url.includes('terra/routes/list.json') && method === 'get') {<br/>
&nbsp;&nbsp;res.data.items.forEach(function(item) {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;item.status = item.status == 1;<br/>
&nbsp;&nbsp;})<br/>
}
                    `,
        },
      ],
      footer: {
        renderer: 'mis-action',
        actionType: 'mis-copy',
        text: '点击复制',
        content: 'const UMIS_CONFIG = {adaptor: {req: "", res: ""}}'
      }
    },
    {
      renderer: 'mis-divider',
    },
    {
      renderer: 'mis-card',
      header: [
        {
          renderer: 'mis-icon',
          icon: 'el-icon-warning-outline'
        },
        {
          renderer: 'mis-html',
          html: '&nbsp;Hello World',
          inline: true
        },
      ],
      body: [
        {
          renderer: 'mis-schema',
          initSchema: start
        }
      ],
      footer: {
        renderer: 'mis-action',
        text: '查看源码',
        actionType: 'mis-dialog',
        body: {
          title: '源码',
          body: demoSchema
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
          prop: 'adaptor',
          desc: '适配器对象',
          type: 'Object',
          options: '-',
          value: '-'
        },
        {
          prop: 'adaptor.req',
          desc: '请求适配器',
          type: 'String(可用变量：url，method，req)',
          options: '-',
          value: '-'
        },
        {
          prop: 'adaptor.res',
          desc: '响应适配器',
          type: 'String(可用变量：url，method，res)',
          options: '-',
          value: '-'
        }
      ]
    }
  ]
};
