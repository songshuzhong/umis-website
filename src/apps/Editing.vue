<template>
  <i-editor
    :editable="true"
    :nimble="true"
    :is-json="false"
  />
</template>

<script>
import {defineComponent, onBeforeMount} from 'vue';
import {Editor} from 'i-renderer/dist/js/editor';

export default defineComponent({
  name: 'ToEditor',
  components: {
    IEditor: Editor
  },
  setup() {
    onBeforeMount(() => {
      window.IRenderer = {
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
    return {
    };
  }
});
</script>
