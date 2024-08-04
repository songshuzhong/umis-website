<template>
  <div
    v-if="!isEditorReady"
    v-loading="!isEditorReady"
    class="i-editor__container"
  />
  <component
    v-else
    v-bind:is="'i-editor'"
    :editable="true"
    :nimble="true"
    :is-json="false"
  />
</template>

<script>
import {defineComponent, getCurrentInstance, onBeforeMount, onMounted, ref} from 'vue';

export default defineComponent({
  name: 'ToEditor',
  setup() {
    const {proxy} = getCurrentInstance();
    const isEditorReady = ref(false);
    onBeforeMount(() => {
      proxy.$.appContext.$IRenderer = {
        pageInfo: {
          assets: []
        },
        scripts: {},
        links: [],
        pageSchema: {
          renderer: 'page',
          body: []
        }
      };
    });
    onMounted(() => {
      import(/* webpackChunkName:"editor",webpackPrefetch:false,webpackMode:"lazy" */ 'i-renderer/dist/js/editor').then(res => {
        const {Editor} = res;
        proxy.$.appContext.components[Editor.name] = Editor;
        isEditorReady.value = true;
      }).catch(e => {
        console.error(e);
      });
    });
    return {
      isEditorReady
    };
  }
});
</script>
