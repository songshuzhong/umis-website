<template>
  <i-icon class="i-action" icon="Iphone" color="inherit" @click="onClick" />
</template>

<script>
import {defineComponent, getCurrentInstance} from 'vue';
export default defineComponent({
  name: 'ToMobile',
  setup() {
    const {proxy} = getCurrentInstance();
    const onClick = () => {
      let pageId = '8f287653-1059-414b-9485-dffbfe91d2b0';
      if (proxy.$.appContext.$IRenderer.pageInfo && proxy.$.appContext.$IRenderer.pageInfo.pageId) {
        pageId = proxy.$.appContext.$IRenderer.pageInfo.pageId;
      }
      proxy.$dispatchAction(
        proxy,
        {
          renderer: 'action',
          actionType: 'url',
          url: `http:${process.env.VUE_APP_API_BASE}/mobile?isFrame=true&pageId=${pageId}`
        },
        {},
        () => {},
      );
    };
    return {
      onClick
    };
  }
});
</script>
