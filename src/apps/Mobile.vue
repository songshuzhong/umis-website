<template>
  <div v-if="isFrame" class="i-device-ios">
    <div class="i-device-inner">
      <iframe
<<<<<<< HEAD
        :key="update"
        class="i-device-inner__frame"
        :src="`/mobile.html?pageId=${pageId}`"
=======
        class="i-device-inner__frame"
        :key="update"
        :src="`${src}/mobile.html?pageId=${pageId}`"
>>>>>>> origin/master
      />
      <div class="i-device-inner__home" @click="refresh"/>
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
    const isPro = process.env.NODE_ENV === 'production';
    const query = qs.parse(window.location.href.split('?')[1]);
    const isFrame = ref(query.isFrame);
    const update = ref(0);
<<<<<<< HEAD
    let url;
    if (isPro) {
      url = 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/' + query.pageId;
=======
    let src = '';
    let url;
    if (isPro) {
      url = 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/' + query.pageId;
      src = 'https://songshuzhong.github.io/i-website/dist';
>>>>>>> origin/master
    } else {
      url = '/api/page/' + query.pageId;
    }
    const refresh = () => {
      update.value++;
    };
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
<<<<<<< HEAD
=======
      src,
>>>>>>> origin/master
      url,
      update,
      refresh
    };
  }
});
</script>
