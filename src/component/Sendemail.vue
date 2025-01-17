<template>
  <el-button
    :disabled="isCounting || !iEmail || isLoading"
    :loading="isLoading"
     @click="startCountdown"
  >
    <template v-if="!isLoading">
      {{isCounting? `${countdown}s`: '发送'}}
    </template>
  </el-button>
</template>

<script>
import {defineComponent, getCurrentInstance, ref, watch, computed, onBeforeUnmount} from 'vue';
export default defineComponent({
  name: 'Sendemail',
  props: {
    path: String,
    track: String,
    action: Function,
    classname: String,
    initData: {
      type: Object,
      required: false
    }
  },
  setup(props) {
    const {proxy} = getCurrentInstance();
    const iEmail = ref('');
    const countdown = ref(60);
    const isLoading = ref(false);
    let intervalId;
    const isCounting = computed(() => {
      return countdown.value > 0 && countdown.value < 60;
    });
    const starting = () => {
      isLoading.value = true;
      return new Promise(resolve => {
        const timer = setTimeout(() => {
          clearTimeout(timer);
          isLoading.value = false;
          if (proxy.$parent.$parent.$parent.$parent.validateState === 'success') {
            resolve();
          }
        }, 3000);
      });
    };
    const startCountdown = () => {
      const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(iEmail.value);
      if (!isValid) {
        return;
      }
      if (intervalId) {
        stopCountdown();
      }
      proxy.$dispatchAction(
        proxy,
        {
          renderer: 'action',
          actionType: 'trigger',
          triggered: 'SendEmailAction'
        },
        {},
        () => {},
      );
      intervalId = setInterval(() => {
        countdown.value--;
        if (countdown.value <= 0) {
          clearInterval(intervalId);
          countdown.value = 60;
        }
      }, 1000);
    };
    const stopCountdown = () => {
      clearInterval(intervalId);
      intervalId = null;
    };
    watch(() => props.initData, val => {
      iEmail.value = val.email;
    }, {
      deep: true
    });
    onBeforeUnmount(() => {
      stopCountdown();
    });
    return {
      iEmail,
      isLoading,
      isCounting,
      countdown,
      starting,
      startCountdown
    };
  }
});
</script>
