<template>
  <div class="i-home__playground">
    <el-divider>左侧编辑 | 右侧预览</el-divider>
    <div class="i-home__playground__body">
      <div v-if="!isEditorReady" v-loading="!isEditorReady" class="i-editor__container" />
      <component v-else v-bind:is="'i-editor'" :is-json="false"/>
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
import {defineComponent, getCurrentInstance, onBeforeMount, onMounted, ref} from 'vue';
import PLAYGROUND_SCHEMA from '../data/playground';
import uaManager from '../utils/ua';

const DEFAULT_SCHEMA = PLAYGROUND_SCHEMA;
export default defineComponent({
  name: 'Playground',
  setup() {
    const {proxy} = getCurrentInstance();
    const isEditorReady = ref(false);
    let notice;
    onBeforeMount(() => {
      window.IRenderer = {
        pageSchema: DEFAULT_SCHEMA
      };
      uaManager.setWidth(window.innerHeight);
      notice = proxy.$message.success('编辑器加载中，请稍等...');
    });
    onMounted(() => {
      import(/* webpackChunkName:"editor",webpackPrefetch:false,webpackMode:"lazy" */ 'i-renderer/dist/js/editor').then(res => {
        const {Editor} = res;
        proxy.$.appContext.components[Editor.name] = Editor;
        isEditorReady.value = true;
        notice && notice.close();
      }).catch(e => {
        console.error(e);
      });
    });
    return {
      initSchema: DEFAULT_SCHEMA,
      isEditorReady
    };
  }
});
</script>
