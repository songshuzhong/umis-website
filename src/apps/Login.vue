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
      document.title = '欢迎使用百搭云平台';
    });

    return {
      loginSchema
    };
  }
});
</script>
