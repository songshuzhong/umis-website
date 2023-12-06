export default {
  renderer: 'page',
  body: [
    {
      renderer: 'tabs',
      panels: [
        {
          label: '登录',
          icon: '',
          keepAlive: true,
          body: [
            {
              renderer: 'form',
              actionApi: {
                url: '/api/auth/login',
                method: 'post',
                params: {
                  '*': '*'
                }
              },
              controls: [
                {
                  renderer: 'input',
                  name: 'username',
                  label: '用户名',
                  requiredOn: '1 === 1',
                  placeholder: '请输入',
                  type: 'text'
                },
                {
                  renderer: 'input',
                  name: 'password',
                  label: '密码',
                  requiredOn: '1 === 1',
                  placeholder: '请输入',
                  type: 'password'
                },
                {
                  renderer: 'action',
                  text: '登录',
                  actionType: 'login',
                  body: {}
                },
                {
                  renderer: 'action',
                  text: '重置',
                  actionType: 'reset',
                  body: {},
                  type: 'danger',
                  plain: true
                }
              ]
            },
          ]
        },
        {
          label: '注册',
          icon: '',
          keepAlive: true,
          body: [
            {
              renderer: 'form',
              actionApi: {
                url: '/api/user',
                method: 'post',
                params: {
                  '*': '*'
                }
              },
              redirect: 'localhost/',
              controls: [
                {
                  renderer: 'input',
                  name: 'username',
                  label: '用户名',
                  requiredOn: '1==1',
                  placeholder: '请输入',
                  type: 'text',
                  minlength: 8,
                  maxlength: 20,
                  showWordLimit: true,
                  rules: []
                },
                {
                  renderer: 'input',
                  name: 'email',
                  label: '邮箱',
                  required: false,
                  type: 'text',
                  validType: 'normal',
                  requiredOn: '1',
                  rules: [
                    {
                      exp: '!/^([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+\\.[a-zA-Z]{2,3}$/.test(data.email)',
                      message: '邮箱格式不正确',
                      trigger: 'blur',
                      type: 'exp'
                    }
                  ],
                  append:
                    {
                      renderer: 'sendemail',
                      classname: 'verify'
                    }
                },
                {
                  renderer: 'action',
                  name: 'SendEmailAction',
                  actionType: 'ajax',
                  text: '获取验证码',
                  visibleOn: '1==2',
                  actionApi: {
                    url: '/api/email',
                    method: 'post',
                    params: {
                      '*': '*'
                    }
                  },
                  body: {}
                },
                {
                  renderer: 'input',
                  name: 'code',
                  label: '验证码',
                  requiredOn: '1==1',
                  placeholder: '请输入',
                  type: 'text',
                  showPassword: false,
                  rules: []
                },
                {
                  renderer: 'input',
                  name: 'password',
                  label: '密码',
                  requiredOn: '1==1',
                  placeholder: '请输入',
                  type: 'text',
                  showPassword: true,
                  rules: [{
                    type: 'exp',
                    trigger: 'blur',
                    message: '密码必须相等',
                    exp: 'data.password !== data.repassword'
                  }]
                },                {
                  renderer: 'input',
                  name: 'repassword',
                  label: '确认密码',
                  requiredOn: '1==1',
                  placeholder: '请输入',
                  type: 'text',
                  showPassword: true,
                  rules: [{
                    type: 'exp',
                    trigger: 'blur',
                    message: '密码必须相等',
                    exp: 'data.password !== data.repassword'
                  }]
                },
                {
                  renderer: 'input',
                  name: 'namespace',
                  label: '命名空间',
                  placeholder: '请输入',
                  type: 'text',
                  minlength: 8,
                  maxlength: 20,
                  rules: [],
                  requiredOn: '1==1'
                },
                {
                  renderer: 'action',
                  text: '注册',
                  actionType: 'submit',
                  body: {}
                }
              ]
            }
          ]
        }
      ],
      activeTab: 0,
      tabPosition: 'top'
    }
  ],
  innerStyle: '.i-page__container {\n  .i-tabs__container {\n    width: 420px;\n    margin: auto;\n    padding-top: 60px;\n    .code {\n      max-width: 280px;\n    }\n    .verify {\n      margin-left: 300px;\n      margin-top: -50px;\n    }\n  }\n}'
};
