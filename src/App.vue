<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script>
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

export default {
  name: 'Application',
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  setup() {
    return {
      locale: zhCn
    };
  }
};
</script>
