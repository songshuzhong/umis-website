<template>
  <div v-if="isFrame" class="i-device-ios">
    <div class="i-device-inner">
      <iframe
        class="i-device-inner__frame"
        :src="`${src}/mobile.html?pageId=${pageId}`"
      />
    </div>
  </div>
  <i-schema
    v-else
    :url="url"
    :can-schema-update="false"
    ref="schema"
    path="/mobile"
    classname="i-mobile__container i-website__main i-main__container"
  />
</template>

<script>
import {defineComponent, onMounted, ref} from 'vue';
import qs from 'qs';

export default defineComponent({
  name: 'Mobile',
  setup() {
    const isPro = process.env.NODE_ENV === 'dev';
    const query = qs.parse(window.location.href.split('?')[1]);
    const isFrame = ref(query.isFrame);
    let src = '';
    let url;
    if (isPro) {
      url = 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/' + query.pageId;
      src = 'https://songshuzhong.github.io/i-website/dist';
    } else {
      url = '/api/page/' + query.pageId;
    }
    onMounted(() => {
      if (!isFrame.value) {
        const timer = window.setTimeout(() => {
          const page = document.querySelector('.i-page__container');
          const doc = document.documentElement;
          page && page.classList.add('h5');
          doc.classList.remove('pc');
          doc.classList.add('mobile');
          clearTimeout(timer);
        }, 500);
      }
    });
    return {
      pageId: query.pageId,
      isFrame,
      isPro,
      src,
      url
    };
  }
});
</script>
