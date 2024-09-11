<template>
  <i-schema
    :init-schema="loginSchema"
    :canSchemaUpdate="false"
  />
</template>

<script>
import {defineComponent, onMounted} from 'vue';
import loginSchema from '../data/login.js';

export default defineComponent({
  name: 'Login',
  setup() {
    onMounted(() => {
      document.title = '欢迎来到百搭云博客';
    });

    return {
      loginSchema
    };
  }
});
</script>
