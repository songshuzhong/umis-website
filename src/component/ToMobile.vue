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
      const isPro = process.env.NODE_ENV === 'production';
      let pageId = '8f287653-1059-414b-9485-dffbfe91d2b0';
      if (window.IRenderer.pageInfo && window.IRenderer.pageInfo.pageId) {
        pageId = window.IRenderer.pageInfo.pageId;
      }
      proxy.$dispatchAction(
        proxy,
        {},
        {
          renderer: 'action',
          actionType: 'url',
<<<<<<< HEAD
          url: isPro? 'https://songshuzhong.github.io/i-website/dist/mobille.html?isFrame=true&pageId=' + pageId: `${window.location.protocol}//${window.location.host}/mobile.html?isFrame=true&pageId=${pageId}`
=======
          url: isPro? 'https://songshuzhong.github.io/i-website/dist/mobile.html?isFrame=true&pageId=' + pageId: `${window.location.protocol}//${window.location.host}/mobile.html?isFrame=true&pageId=${pageId}`
>>>>>>> origin/master
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
