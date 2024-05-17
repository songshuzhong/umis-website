/* eslint-disable */
export default {
  "renderer": "page",
  "body": [
    {
      "renderer": "avatar",
      "src": `${process.env.VUE_APP_PUBLIC_PATH_HOME}/shuttle.png`,
      "classname": "i-login__logo",
      "previews": [],
      "title": "充电桩系统",
      "shape": "square",
      "borderRadius": 0,
      "color": "#606266",
      "bgColor": "#ffffff"
    },
    {
      "renderer": "image",
      "src": `${process.env.VUE_APP_PUBLIC_PATH_HOME}/img/qqb.png`,
      "classname": "i-login__browser-star",
      "previews": []
    },
    {
      "renderer": "tabs",
      "panels": [
        {
          "label": "登录",
          "icon": "",
          "keepAlive": true,
          "body": [
            {
              "renderer": "form",
              "hideRequiredAsterisk": true,
              "actionApi": {
                "url": "/api/auth/login",
                "method": "post",
                "params": {
                  "*": "*"
                }
              },
              "controls": [
                {
                  "renderer": "input",
                  "name": "namespace",
                  "placeholder": "命名空间",
                  "type": "text",
                  "minlength": 0,
                  "maxlength": 16,
                  "rules": [],
                  "requiredOn": "1==1",
                  "showWordLimit": true
                },
                {
                  "renderer": "input",
                  "name": "username",
                  "requiredOn": "1 === 1",
                  "placeholder": "用户名（guest）",
                  "type": "text",
                  "rules": [],
                  "minlength": 0,
                  "maxlength": 16,
                  "showWordLimit": true
                },
                {
                  "renderer": "input",
                  "name": "password",
                  "requiredOn": "1 === 1",
                  "placeholder": "密码（_123456qwerty）",
                  "type": "password",
                  "rules": []
                },
                {
                  "renderer": "input",
                  "name": "code",
                  "requiredOn": "1 === 1",
                  "placeholder": "验证码",
                  "type": "text",
                  "rules": [
                    {
                      "type": "exp",
                      "exp": "data.code !== data.verify",
                      "message": "验证码不正确",
                      "trigger": "blur"
                    }
                  ]
                },
                {
                  "renderer": "verify",
                  "name": "verify"
                },
                {
                  "renderer": "wrapper",
                  "body": [
                    {
                      "renderer": "action",
                      "text": "忘记密码？",
                      "type": "success",
                      "isText": true,
                      "plain": true,
                      "tag": "div",
                      "body": {}
                    }
                  ],
                  "classname": "i-login_forget"
                },
                {
                  "renderer": "action",
                  "text": "登录",
                  "actionType": "login",
                  "body": {}
                }
              ]
            }
          ]
        }
      ],
      "activeTab": 0,
      "tabPosition": "top"
    }
  ],
  "innerStyle": ""
}
