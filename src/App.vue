<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script>
import { ElConfigProvider } from "element-plus";
import locale from "element-plus/lib/locale/lang/zh-cn";

export default {
  name: "Application",
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  setup() {
    return {
      locale
    };
  }
};
</script>
<style lang="scss">
body,
.mis-html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}
</style>
