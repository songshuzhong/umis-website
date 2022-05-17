<template>
  <el-config-provider :locale="locale">
    <schema
      :init-schema="frameSchema"
      :canSchemaUpdate="false"
      classname="i-renderer-website-schema__container"
    />
  </el-config-provider>
</template>

<script>
import {defineComponent, onMounted} from 'vue';
import {ElConfigProvider} from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import {Schema} from '../../i-renderer/packages';
import frameSchema from './data/frame';

export default defineComponent({
  name: 'Application',
  components: {
    Schema,
    [ElConfigProvider.name]: ElConfigProvider
  },
  setup() {
    onMounted(() => {
      const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
      document
        .querySelector('.i-website-app__container')
        .classList
        .add(isMobile? 'mobile': 'pc');
    });

    return {
      locale: zhCn,
      frameSchema
    };
  }
});
</script>
