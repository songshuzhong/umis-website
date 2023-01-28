<template>
  <schema
    :init-schema="frameSchema"
    :canSchemaUpdate="false"
    classname="i-renderer-website-schema__container"
  />
</template>

<script>
import {defineComponent, onBeforeMount, onMounted, getCurrentInstance} from 'vue';
import {Schema} from 'i-renderer/dist/js/renderer';
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
    onMounted(() => {
      /* eslint-disable */
      bszCaller.fetch('//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback', function(a) {
        bszTag.texts(a);
        bszTag.shows();
      });
      const timer = setTimeout(() => {
        Promise.all([
          import('@fortawesome/vue-fontawesome'),
          import('@fortawesome/fontawesome'),
          import('@fortawesome/fontawesome-free-solid'),
          import('@fortawesome/fontawesome-free-regular'),
          import('@fortawesome/fontawesome-free-brands'),
          import('i-renderer/dist/js/editor')
        ])
        .then(res => {
          const [{FontAwesomeIcon}, fontawesome, solid, regular, brands, {Editor}] = res;
          fontawesome.default.library.add(solid.default);
          fontawesome.default.library.add(regular.default);
          fontawesome.default.library.add(brands.default);
          proxy.$.appContext.components[FontAwesomeIcon.name] = FontAwesomeIcon;
          proxy.$.appContext.components[Editor.name] = Editor;
        }).catch(e => {
          console.error(e);
        }).finally(() => {
          clearTimeout(timer);
        });
      }, 2000);
    });

    return {
      frameSchema
    };
  }
});
</script>
