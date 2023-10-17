<template>
  <i-icon class="i-action" icon="Iphone" @click="onClick" />
</template>

<script>
import {defineComponent, getCurrentInstance} from 'vue';

export default defineComponent({
  name: 'ToMobile',
  setup() {
    const {proxy} = getCurrentInstance();
    const onClick = () => {
      if (window.IRenderer.pageInfo && window.IRenderer.pageInfo.pageId) {
        const isPro = process.env.NODE_ENV === 'production';
        proxy.$dispatchAction(
          proxy,
          {},
          {
            renderer: 'action',
            actionType: 'url',
            url: isPro? 'https://songshuzhong.github.io/i-website/dist/mobile.html?isFrame=true&pageId=' + window.IRenderer.pageInfo.pageId: `${window.location.protocol}//${window.location.host}/mobile.html?isFrame=true&pageId=${window.IRenderer.pageInfo.pageId}`
          },
          {},
          () => {},
        );
      }
    };
    return {
      onClick
    };
  }
});
</script>
