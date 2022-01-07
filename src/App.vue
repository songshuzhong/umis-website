<template>
  <el-config-provider :locale="locale">
    <router-view/>
  </el-config-provider>
</template>

<script>
import {defineComponent, onMounted} from 'vue';
import {ElConfigProvider} from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

export default defineComponent({
  name: 'Application',
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  setup() {
    onMounted(() => {
      document
        .body
        .setAttribute('style', `height:${document.body.clientHeight}px;overflow: hidden;`);
    });

    return {
      locale: zhCn
    };
  }
});
</script>
