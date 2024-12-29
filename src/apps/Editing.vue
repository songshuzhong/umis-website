<template>
  <component
    v-bind:is="'editor'"
    :editable="true"
    :nimble="true"
    :is-json="false"
  />
</template>

<script>
import {defineComponent, onBeforeMount} from 'vue';

export default defineComponent({
  name: 'ToEditor',
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
