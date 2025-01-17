<template>
  <div class="i-website__ai">
    <el-popover
      :width="300"
      trigger="click"
      popper-class="i-website__ai__popper"
      @show="onShow"
    >
      <template #reference>
        <svg class="i-editor__tools-code" viewBox="0 0 1270 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M927.66227 275.29l67.622-101.434a60.86 60.86 0 0 0 28.942 4.869c48.282 0 91.763-38.68 91.763-86.962S1072.51027 0 1019.42527 0c-48.35 0-91.763 38.612-91.763 86.962 0 19.272 9.602 38.612 19.272 53.083L879.11027 251.148c-77.089-33.81-159.182-48.282-246.144-48.282a633.01 633.01 0 0 0-251.148 53.15l-77.495-111.102a72.423 72.423 0 0 0 19.34-53.15c0.203-48.08-38.071-86.557-90.749-86.963-48.89 0-91.763 36.516-92.574 85.407s38.071 88.517 91.763 88.517a60.86 60.86 0 0 0 28.942-4.869l72.491 106.302C227.23327 347.78 150.00927 454.014 150.00927 613.399v72.491A339.124 339.124 0 0 0 488.11927 1024h289.557a339.124 339.124 0 0 0 338.11-338.11V613.4c0-159.386-77.089-270.489-188.124-338.11z m-29.01 507.164H369.78027A122.26 122.26 0 0 1 246.64027 663.98a119.556 119.556 0 0 1 120.706-123.004h528.872a122.26 122.26 0 0 1 123.14 118.474 119.556 119.556 0 0 1-120.706 123.004z" p-id="2597"></path><path d="M777.67627 661.749a72.49 72.49 0 0 0 144.914 0 72.49 72.49 0 1 0-144.914 0z m-434.471 0a72.49 72.49 0 0 0 144.914 0 72.49 72.49 0 1 0-144.914 0z m802.808 92.845V511.966c64.85-5.477 123.478 51.866 124.154 119.42 0.541 69.246-57.005 127.333-124.154 123.208z m-1023.256 1.082A121.72 121.72 0 0 1 0.02327 635.985c-1.285-69.515 50.784-123.41 122.734-125.304v244.995z" p-id="2598"></path></svg>
      </template>
      <iframe
        v-if="isMounted"
        class="i-website__ai-frame"
        src="https://yiyan.baidu.com"
      />
    </el-popover>
  </div>
</template>
<script>
import {defineComponent, ref} from 'vue';
export default defineComponent({
  name: 'Ai',
  setup() {
    const isMounted = ref(false);
    const onShow = () => {
      if (!isMounted.value) {
        const timer = setTimeout(() => {
          clearTimeout(timer);
          const frame = document.getElementsByClassName('i-website__ai-frame')[0];
          frame.onload = function () {
            let iframeDocument = document.getElementsByClassName('i-website__ai-frame')[0].contentDocument || document.getElementsByClassName('i-website__ai-frame')[0].contentWindow.document;
            iframeDocument.body.style.backgroundColor = 'black';
            iframeDocument.getElementsByClassName('ul')[0].style.color = 'blue';
            console.log(iframeDocument);
            // const style = document.createElement('style');
            // style.textContent = 'body { background-color: red; }';
          };
        }, 2000);
      }
      isMounted.value = true;
    };
    return {
      onShow,
      isMounted
    };
  }
});
</script>