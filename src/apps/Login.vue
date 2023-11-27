<template>
  <i-schema
    :init-schema="loginSchema"
    :canSchemaUpdate="false"
  />
</template>

<script>
import {defineComponent, onMounted} from 'vue';
import loginSchema from '../data/login';

export default defineComponent({
  name: 'Login',
  setup() {
    onMounted(() => {
      document.title = '欢迎使用IRenderer';
    });

    return {
      loginSchema
    };
  }
});
</script>
