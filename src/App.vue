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
import {defineComponent} from 'vue';
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
    return {
      locale: zhCn,
      frameSchema
    };
  }
});
</script>
