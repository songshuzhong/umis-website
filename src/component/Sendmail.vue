<template>
  <el-button
    :disabled="isCounting || !iEmail"
     @click="startCountdown"
  >
    {{isCounting? `${countdown}s`: '发送'}}
  </el-button>
</template>

<script>
import {defineComponent, getCurrentInstance, ref, watch, computed} from 'vue';
export default defineComponent({
  name: 'Sendmail',
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
    let intervalId;
    const isCounting = computed(() => {
      return countdown.value > 0 && countdown.value < 60;
    });
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
          triggered: 'SendMailAction'
        },
        {
          renderer: 'action',
          actionType: 'trigger',
          triggered: 'SendMailAction'
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
      iEmail.value = val.mail;
    }, {
      deep: true
    });
    return {
      iEmail,
      isCounting,
      countdown,
      startCountdown
    };
  }
});
</script>
