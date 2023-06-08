<template>
  <el-config-provider :locale="locale">
    <router-view/>
  </el-config-provider>
</template>

<script>
import {defineComponent, getCurrentInstance, onMounted} from 'vue';
import {ElConfigProvider} from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import uaManager from '../utils/ua';

export default defineComponent({
  name: 'Application',
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  setup() {
    const {proxy} = getCurrentInstance();
    const notice = () => {
      proxy.$message.success('切换到PC端体验更加哦！');
    };
    onMounted(() => {
      const isMobile = uaManager
        .setNotice(notice)
        .setWidth(window.innerHeight)
        .detectUa();
      if (isMobile) {
        uaManager.toMobile();
      } else {
        uaManager.toPc();
      }
    });
    return {
      locale: zhCn
    };
  }
});
</script>
