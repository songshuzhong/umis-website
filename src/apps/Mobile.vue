<template>
  <i-schema
    :url="url"
    :can-schema-update="false"
    ref="schema"
    path="/mobile"
    classname="i-home__playground__preview"
  />
</template>

<script>
import {defineComponent, onMounted} from 'vue';

export default defineComponent({
  name: 'Mobile',
  setup() {
    const isPro = process.env.NODE_ENV === 'production';
    let url = window.location.search.replace('?pageId=', '');
    if (isPro) {
      url = 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/' + url;
    } else {
      url = '/api/page/' + url;
    }
    onMounted(() => {
      window.requestIdleCallback(() => {
        document.querySelector('.i-page__container').classList.add('h5');
      });
    });
    return {
      isPro,
      url
    };
  }
});
</script>
