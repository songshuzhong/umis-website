/* eslint-disable */
export default {
  "renderer": "page",
  "body": [
    {
      "renderer": "tour",
      "name": "Tour",
      "showArrow": true,
      "mask": true,
      "showClose": true,
      "showIcon": true,
      "contentStyle": {
        "width": "28%"
      },
      "steps": [
        {
          "target": "/layout/body/0/body/0",
          "title": "新手指引",
          "placement": "right-start",
          "body": {
            "renderer": "wrapper",
            "classname": "i-website-intro",
            "body": [
              {
                "renderer": "image",
                "src": `${process.env.VUE_APP_PUBLIC_PATH_HOME}/img/teacher20240603202012.png`,
                "classname": "i-website-intro__teacher",
                "previews": []
              },
              {
                "renderer": "static",
                "table": false,
                "column": 0,
                "width": 0,
                "columns": [
                  "第一步：项目立项(/系统配置/项目管理)",
                  "第二步：创建项目页面(/系统配置/页面管理)",
                  "第三步：编辑页面信息",
                  "第四步：发布上线"
                ]
              }
            ]
          }
        },
        {
          "target": "/layout/body/1/body/0/body/2/body/6",
          "title": "新手指引",
          "placement": "top",
          "body": {
            "renderer": "wrapper",
            "classname": "i-website-intro info2",
            "body": [
              {
                "renderer": "image",
                "src": `${process.env.VUE_APP_PUBLIC_PATH_HOME}/img/teacher20240603202001.png`,
                "classname": "i-website-intro__teacher",
                "previews": []
              },
              {
                "renderer": "html",
                "html": "<h3>点击编辑页面、查看源码</h3>"
              }
            ]
          }
        },
        {
          "target": "/page/body/3",
          "title": "新手指引",
          "placement": "top",
          "description": "",
          "body": {
            "renderer": "wrapper",
            "classname": "i-website-intro info3",
            "body": [
              {
                "renderer": "image",
                "src": `${process.env.VUE_APP_PUBLIC_PATH_HOME}/img/teacher20240604070713.png`,
                "classname": "i-website-intro__teacher",
                "previews": []
              },
              {
                "renderer": "html",
                "html": "<h3>祝您财源滚滚，万事胜意！！</h3>"
              }
            ]
          }
        }
      ]
    },
    {
      "renderer": "action",
      "immediateOn": "1===1",
      "visibleOn": "1===2",
      "actionType": "trigger",
      "triggered": "Tour"
    },
    {
      "renderer": "card",
      "header": [
        {
          "renderer": "html",
          "html": "早上好、中午好、下午好，欢迎使用百搭云！",
          "inline": false,
          "classname": "font-size-20 font-weight-800"
        }
      ],
      "classname": "margin-bottom-20",
      "shadow": "always",
      "body": [
        {
          "renderer": "html",
          "html": "这是一款开箱即用的低代码前端开发工具库，同时它也经历过数十个真实项目的技术沉淀，确保框架在开发中可落地、可使用、可维护（注：在作者就职的公司，本框架已在电商、直播、OA、ERP等多个不同领域的中后台系统中应用并稳定运行）。"
        }
      ]
    },
    {
      "renderer": "wrapper",
      "body": [
        {
          "renderer": "html",
          "classname": "margin-bottom-10 padding-left-20",
          "html": "- 🤔 When you arise in the morning,think of what a precious privilege it is to be alive - to breathe,to think,to enjoy,to love. ~Marcus Aurelius."
        },
        {
          "renderer": "html",
          "classname": "margin-bottom-20 padding-left-20",
          "html": "- 😄 当你早晨起来的时候，想想活着是多么宝贵的特权——还能呼吸，还能思考，还能享受，还能去爱。~马尔克·奥列里乌斯。"
        },
      ]
    },
    {
      "renderer": "grid",
      "body": [
        {
          "renderer": "card",
          "header": [
            {
              "renderer": "html",
              "html": "基础版",
              "classname": "font-size-16 text-center font-weight-600 margin-bottom-20"
            },
            {
              "renderer": "wrapper",
              "body": [
                {
                  "renderer": "action",
                  "text": "可视化编辑器",
                  "plain": true,
                  "static": true,
                  "actionApi": {
                    "url": "",
                    "method": "post",
                    "params": {}
                  },
                  "params": {},
                  "body": {}
                },
                {
                  "renderer": "action",
                  "text": "赠送VIP群",
                  "type": "success",
                  "plain": true,
                  "static": true,
                  "actionApi": {
                    "url": "",
                    "method": "post",
                    "params": {}
                  },
                  "params": {},
                  "body": {}
                }
              ],
              "footer": [],
              "classname": "text-center"
            }
          ],
          "body": [
            {
              "renderer": "static",
              "table": false,
              "columns": [
                "默认基础库vue3.0+elementplus+echarts5.0",
                "提供开箱即用的项目模板",
                "提供可视化页面编辑器",
                "提供echarts编辑器",
                "支持api接口适配器",
                "支持样式自定义"
              ]
            }
          ],
          "footer": []
        },
        {
          "renderer": "card",
          "header": [
            {
              "renderer": "html",
              "html": "专业版",
              "classname": "font-size-16 text-center font-weight-600 margin-bottom-20"
            },
            {
              "renderer": "wrapper",
              "body": [
                {
                  "renderer": "action",
                  "text": "可视化编辑器",
                  "plain": true,
                  "static": true,
                  "actionApi": {
                    "url": "",
                    "method": "post",
                    "params": {}
                  },
                  "params": {},
                  "body": {}
                },
                {
                  "renderer": "action",
                  "text": "赠送VIP群",
                  "type": "success",
                  "plain": true,
                  "static": true,
                  "actionApi": {
                    "url": "",
                    "method": "post",
                    "params": {}
                  },
                  "params": {},
                  "body": {}
                },
                {
                  "renderer": "action",
                  "text": "一对一答疑",
                  "type": "danger",
                  "plain": true,
                  "static": true,
                  "actionApi": {
                    "url": "",
                    "method": "post",
                    "params": {}
                  },
                  "params": {},
                  "body": {}
                }
              ],
              "footer": [],
              "classname": "text-center"
            }
          ],
          "body": [
            {
              "renderer": "static",
              "table": false,
              "columns": [
                "扩充非常用表单控件",
                "丰富常用第三方依赖",
                "集成fontawesome图标",
                "扩充主题库样式",
                "支持第三方组件扩展",
                "集成权限管理"
              ],
              "styleType": 1
            }
          ]
        }
      ],
      "span": "12",
      "gutter": 12
    },
    {
      "renderer": "grid",
      "span": "12",
      "gutter": 12,
      "body": [
        {
          "renderer": "card",
          "header": [
            {
              "renderer": "html",
              "html": "应用场景",
              "inline": true,
              "classname": "font-size-16 text-center font-weight-600"
            }
          ],
          "footer": [],
          "classname": "margin-bottom-20 margin-top-20",
          "body": [
            {
              "renderer": "static",
              "classname": "suitable-ul",
              "table": false,
              "column": 0,
              "width": 0,
              "columns": [
                "没有或缺少前端开发人员的小型公司",
                "公司内部使用的平台系统",
                "重功能轻UI、交互的项目",
                "业务逻辑偏向于增删改查的项目",
                "适用于项目多，周期短的紧急项目",
                "编程萌新、学生、网站开发爱好者"
              ]
            }
          ]
        },
        {
          "renderer": "card",
          "classname": "margin-bottom-20 margin-top-20",
          "body": [
            {
              "renderer": "carousel",
              "classname": "i-home__carousel",
              "autoplay": true,
              "loop": true,
              "body": [
                {
                  "renderer": "image",
                  "src": "https://songshuzhong.github.io/i-assets/public/img/case1.png",
                  "previews": [
                    "https://songshuzhong.github.io/i-assets/public/img/case1.png"
                  ]
                },
                {
                  "renderer": "image",
                  "src": "https://songshuzhong.github.io/i-assets/public/img/case2.png",
                  "previews": [
                    "https://songshuzhong.github.io/i-assets/public/img/case2.png"
                  ]
                },
                {
                  "renderer": "image",
                  "src": "https://songshuzhong.github.io/i-assets/public/img/case3.png",
                  "previews": [
                    "https://songshuzhong.github.io/i-assets/public/img/case3.png"
                  ]
                },
                {
                  "renderer": "image",
                  "src": "https://songshuzhong.github.io/i-assets/public/img/case4.png",
                  "previews": [
                    "https://songshuzhong.github.io/i-assets/public/img/case4.png"
                  ]
                },
                {
                  "renderer": "image",
                  "src": "https://songshuzhong.github.io/i-assets/public/img/case5.jpg",
                  "previews": [
                    "https://songshuzhong.github.io/i-assets/public/img/case5.jpg"
                  ]
                }
              ],
              "height": 285,
              "indicatorPosition": "none",
              "arrow": "always"
            }
          ],
          "header": [
            {
              "renderer": "html",
              "html": "优秀案例",
              "classname": "font-size-16 font-weight-600"
            }
          ],
          "footer": []
        }
      ]
    },
    {
      "renderer": "card",
      "header": [
        {
          "renderer": "html",
          "html": "优势",
          "inline": true,
          "classname": "font-size-16 text-center font-weight-600"
        }
      ],
      "footer": [],
      "classname": "margin-bottom-20",
      "body": [
        {
          "renderer": "static",
          "table": false,
          "column": 0,
          "width": 0,
          "columns": [
            "作者从事前端开发5年+，经验丰富",
            "项目历经数十个不同业务场景的打磨",
            "组件库丰富，渲染性能出众",
            "可视化编辑，无文档、无代码、无api",
            "长期维护、精益求精、客户至上"
          ]
        }
      ]
    }
  ],
  "innerStyle": ".suitable-ul {\n    margin-bottom: 39px;\n}"
}
