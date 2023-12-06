<template>
  <div>
    <div id="login_container"></div>
  </div>
</template>

<script>
import {defineComponent, onMounted} from 'vue';

export default defineComponent({
  name: 'Dingding',
  setup() {
    const appid = 'dingp6hlyjzlnxrnenzl';
    const redirect_uri = 'https://songshuzhong.github.io/i-website/dist/index.html';
    const hanndleMessage = (event) => {
      console.log(event.data);
      let origin = event.origin;
      if (origin === 'https://login.dingtalk.com') {
        const loginTmpCode = event.data;
        window.location.href = 'https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=' + appid + '&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=' + redirect_uri + '&loginTmpCode=' + loginTmpCode;
      }
    };

    onMounted(() => {
      window.DDLogin({
        id: 'login_container',
        goto: encodeURIComponent('https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=' + appid + '&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=' + redirect_uri + ''),
        style: 'border:none;background-color:#FFFFFF;',
        width: '365',
        height: '300'
      });
      window.addEventListener('message', hanndleMessage, false);
    });
  }
});
</script>
