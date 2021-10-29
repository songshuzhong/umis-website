import localSchema from "./mapping/local";
import remoteSchema from "./mapping/remote";

export default {
  renderer: "mis-page",
  classname: "umis-website-doc",
  title: "字典数据",
  initData: {
    name: "shuzhong song",
    email: "sshuzhong@outlook.com",
    phone: "15510351839",
    province: "北京",
    age: "2",
    sex: "1"
  },
  body: [
    {
      renderer: "mis-card",
      header: "读取本地字典码",
      body: localSchema,
      footer: {
        renderer: "mis-action",
        text: "查看源码",
        actionType: "mis-dialog",
        body: {
          title: "源码",
          body: {
            renderer: "mis-editor",
            schema: localSchema
          }
        }
      }
    },
    {
      renderer: "mis-divider"
    },
    {
      renderer: "mis-card",
      header: "读取接口字典码",
      body: remoteSchema,
      footer: {
        renderer: "mis-action",
        text: "查看源码",
        actionType: "mis-dialog",
        body: {
          title: "源码",
          body: {
            renderer: "mis-editor",
            schema: remoteSchema
          }
        }
      }
    },
    {
      renderer: "mis-divider"
    },
    {
      renderer: "mis-table",
      columns: [
        {
          name: "prop",
          label: "属性"
        },
        {
          name: "desc",
          label: "说明"
        },
        {
          name: "type",
          label: "类型"
        },
        {
          name: "options",
          label: "可选值"
        },
        {
          name: "value",
          label: "可选值"
        }
      ],
      initRows: [
        {
          prop: "initApi",
          desc: "初始化数据配置(远程数据优先级高于map)",
          type: "Object",
          options: "-",
          value: ""
        },
        {
          prop: "value",
          desc: "从data中pick出的key(支持表达式<%=data.key%>)",
          type: "Object",
          options: "-",
          value: "-"
        },
        {
          prop: "map",
          desc: "字典Map",
          type: "Object",
          options: "-",
          value: "-"
        },
        {
          prop: "body",
          desc: "子渲染器",
          type: "Object",
          options: "-",
          value: "-"
        },
        {
          prop: "inline",
          desc: "是否同行",
          type: "Boolean",
          options: "-",
          value: "-"
        }
      ]
    },
    {
      renderer: "mis-wrapper",
      classname: "umis-website-doc__next-section",
      body: [
        {
          renderer: "mis-action",
          type: "text",
          text: "《 Each",
          actionType: "mis-url",
          url: "/docs/each"
        },
        {
          renderer: "mis-action",
          type: "text",
          text: "Html 》",
          actionType: "mis-url",
          url: "/docs/html"
        }
      ]
    }
  ]
};
