<template>
  <div class="i-home__playground">
    <el-divider>左侧编辑 | 右侧预览</el-divider>
    <div class="i-home__playground__body">
      <div v-if="!isEditorReady" v-loading="!isEditorReady" class="i-editor__container" />
      <i-editor v-else :is-json="false" />
      <el-divider direction="vertical" />
      <i-schema
          :init-schema="initSchema"
          :can-schema-update="false"
          path="/editor"
          classname="i-home__playground__preview"
      />
    </div>
  </div>
</template>

<script>
import {defineComponent, getCurrentInstance, onBeforeMount, ref} from 'vue';
import PLAYGROUND_SCHEMA from '../data/playground';
import uaManager from '../utils/ua';

const DEFAULT_SCHEMA = PLAYGROUND_SCHEMA;
export default defineComponent({
  name: 'Playground',
  setup() {
    const {proxy} = getCurrentInstance();
    const isEditorReady = ref(false);
    const timer = setTimeout(() => {
      Promise.all([
        import(/* webpackChunkName:"vue-fontawesome",webpackPrefetch:false,webpackMode:"lazy" */ '@fortawesome/vue-fontawesome'),
        import(/* webpackChunkName:"fontawesome",webpackPrefetch:false,webpackMode:"lazy" */ '@fortawesome/fontawesome'),
        import(/* webpackChunkName:"fontawesome-solid",webpackPrefetch:false,webpackMode:"lazy" */ '@fortawesome/fontawesome-free-solid'),
        import(/* webpackChunkName:"fontawesome-regular",webpackPrefetch:false,webpackMode:"lazy" */ '@fortawesome/fontawesome-free-regular'),
        import(/* webpackChunkName:"fontawesome-brands",webpackPrefetch:false,webpackMode:"lazy" */ '@fortawesome/fontawesome-free-brands'),
        import(/* webpackChunkName:"editor",webpackPrefetch:false,webpackMode:"lazy" */ 'i-renderer/dist/js/editor')
      ]).then(res => {
        const [{FontAwesomeIcon}, fontawesome, solid, regular, brands, {Editor}] = res;
        fontawesome.default.library.add(solid.default);
        fontawesome.default.library.add(regular.default);
        fontawesome.default.library.add(brands.default);
        proxy.$.appContext.components[FontAwesomeIcon.name] = FontAwesomeIcon;
        proxy.$.appContext.components[Editor.name] = Editor;
        isEditorReady.value = true;
      }).catch(e => {
        console.error(e);
      }).finally(() => {
        clearTimeout(timer);
      });
    }, 2000);
    onBeforeMount(() => {
      window.IRender = {
        pageSchema: DEFAULT_SCHEMA
      };
      uaManager.setWidth(window.innerHeight);
      proxy.$message.success('编辑器加载中，请稍等。');
    });
    return {
      initSchema: DEFAULT_SCHEMA,
      isEditorReady
    };
  }
});
</script>
