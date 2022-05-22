<template>
  <el-config-provider :locale="locale">
    <schema
      :init-schema="frameSchema"
      :canSchemaUpdate="false"
      classname="i-renderer-website-schema__container"
    />
  </el-config-provider>
</template>

<script>
import {defineComponent, onMounted, getCurrentInstance, ref} from 'vue';
import {ElConfigProvider} from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import {Schema} from '../../i-renderer/packages';
import frameSchema from './data/frame';

export default defineComponent({
  name: 'Application',
  components: {
    Schema,
    [ElConfigProvider.name]: ElConfigProvider
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const isMounted = ref(false);
    const html = document.documentElement.classList;
    const timer = setTimeout(() => {
      clearTimeout(timer);
      if (!isMounted.value) {
        proxy.$message({
          type: 'error',
          message: '检测到页面加载异常，重试中......',
          onClose: function() {
            window.location.reload();
          }
        });
      }
    }, 6000);
    onMounted(() => {
      const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
      if (isMobile) {
        html.remove('pc');
        html.add('mobile');
      } else {
        html.remove('mobile');
        html.add('pc');
      }
      isMobile && proxy.$message.success('切换到PC端体验更加哦！');
      isMounted.value = true;
    });

    return {
      locale: zhCn,
      frameSchema
    };
  }
});
</script>
