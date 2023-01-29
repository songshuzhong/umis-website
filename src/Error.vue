<template>
  <div class="i-website__error">
    <div class="i-website__error__info">
      <div class="i-website__error__status">
        {{status}}
      </div>
      <div class="i-website__error__title">
        {{iError['title']}}
      </div>
      <div class="i-website__error__msg">
        {{iError['message']}}
      </div>
      <el-button
        type="primary"
        size="default"
        round
        @click="goHome"
        class="i-website__error__action"
      >
        返回首页
      </el-button>
    </div>
    <img
      class="i-website__error__picture"
      :src="iError['picture']"
    />
  </div>
</template>

<script>
import {defineComponent, computed} from 'vue';
import {useRouter} from 'vue-router';
import ERRORS from './data/error';

import './style/error.scss';

export default defineComponent({
  name: 'ErrorPage',
  props: {
    status: {
      type: [String, Number],
      required: true
    }
  },
  setup(props) {
    const router = useRouter();
    const goHome = () => router.push('/');
    const iError = computed(() => {
      return ERRORS[props.status];
    });

    return {
      iError,
      goHome
    };
  }
});
</script>
