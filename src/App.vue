<template>
  <el-config-provider :locale="locale">
    <router-view/>
  </el-config-provider>
</template>

<script>
import {onMounted} from 'vue';
import {ElConfigProvider, ElMessageBox} from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

export default {
  name: 'Application',
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  setup() {
    onMounted(() => {
      try {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.getRegistration().then(reg => {
            // eslint-disable-next-line no-debugger
            debugger;
            ElMessageBox.confirm(
              '确定要升级吗?',
              'Warning',
              {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
              }
            ).then(() => {
              reg.waiting.postMessage('skipWaiting');
            });
          });
        }
      } catch (e) {
        console.error(e);
      }
    });

    return {
      locale: zhCn
    };
  }
};
</script>
