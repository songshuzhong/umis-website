<template>
  <schema
    :init-schema="frameSchema"
    :canSchemaUpdate="false"
    classname="i-renderer-website-schema__container"
  />
</template>

<script>
import {defineComponent, onBeforeMount, getCurrentInstance} from 'vue';
import {Schema} from '../../i-renderer/packages';
import frameSchema from './data/frame';

export default defineComponent({
  name: 'Application',
  components: {
    Schema
  },
  setup() {
    const { proxy } = getCurrentInstance();

    onBeforeMount(() => {
      const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
      if (isMobile) {
        frameSchema.initData.collapse = true;
      }
      isMobile && proxy.$message.success('切换到PC端体验更加哦！');
    });

    return {
      frameSchema
    };
  }
});
</script>
