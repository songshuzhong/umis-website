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
        round
        @click="goBack"
        class="i-website__error__action"
      >
        返回上一页
      </el-button>
      <el-button
        round
        link
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
    const goBack = () => router.back();
    const iError = computed(() => {
      return ERRORS[props.status];
    });

    return {
      iError,
      goHome,
      goBack
    };
  }
});
</script>
