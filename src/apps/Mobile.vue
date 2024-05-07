<template>
  <div v-if="isFrame" class="i-device-ios">
    <div class="i-device-inner">
      <iframe
        class="i-device-inner__frame"
        :key="update"
        :src="`/mobile?pageId=${pageId}`"
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
    const query = qs.parse(window.location.href.split('?')[1]);
    const isFrame = ref(query.isFrame);
    const update = ref(0);
    let url = '/api/page/' + query.pageId;
    if (query.shared) {
      url += '/shared';
    }
    const refresh = () => {
      update.value++;
    };
    onMounted(() => {
      if (!isFrame.value && !query.shared) {
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
      url,
      update,
      refresh
    };
  }
});
</script>
