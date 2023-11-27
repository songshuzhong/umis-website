export default {
  renderer: 'page',
  res: 'localStorage.setItem("token", res.data);',
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
      redirect: '/',
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
          renderer: 'input',
          name: 'code',
          label: '验证码',
          requiredOn: '1 === 1',
          placeholder: '请输入',
          type: 'text',
          rules: [
            {
              type: 'exp',
              exp: 'data.code != data.verify',
              trigger: 'blur',
              message: '验证码不正确'
            }
          ]
        },
        {
          renderer: 'https://raw.githubusercontent.com/songshuzhong/i-components/master/src/components/Verify/Verify.vue',
          name: 'verify',
          label: ''
        },
        {
          renderer: 'action',
          text: '登录',
          actionType: 'submit',
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
    }
  ],
  innerStyle: '.i-page__container {\n  .i-form__container {\n    width: 420px;\n    margin: auto;\n    padding-top: 60px;\n    .code {\n      max-width: 280px;\n    }\n    .verify {\n      margin-left: 300px;\n      margin-top: -50px;\n    }\n  }\n}'
};
