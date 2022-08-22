<template>
  <schema
    :init-schema="frameSchema"
    :canSchemaUpdate="false"
    classname="i-renderer-website-schema__container"
  />
</template>

<script>
import {defineComponent, onMounted, getCurrentInstance} from 'vue';
import {Schema} from '../../i-renderer/packages';
import frameSchema from './data/frame';

export default defineComponent({
  name: 'Application',
  components: {
    Schema
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const html = document.documentElement.classList;

    onMounted(() => {
      window.isWebsiteloaded = true;
      const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
      if (isMobile) {
        html.remove('pc');
        html.add('mobile');
      } else {
        html.remove('mobile');
        html.add('pc');
      }
      isMobile && proxy.$message.success('切换到PC端体验更加哦！');
      const helper = document.getElementById('website_reload');
      helper.parentNode.removeChild(helper);
    });

    return {
      frameSchema
    };
  }
});
</script>
