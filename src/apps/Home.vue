<template>
  <el-config-provider :locale="locale">
    <router-view/>
  </el-config-provider>
</template>

<script>
import {defineComponent, getCurrentInstance, onMounted} from 'vue';
import {ElConfigProvider} from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import uaManager from '../utils/ua';

export default defineComponent({
  name: 'Application',
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  setup() {
    const {proxy} = getCurrentInstance();
    const notice = () => {
      proxy.$message.success('切换到PC端体验更加哦！');
    };
    onMounted(() => {
      const isMobile = uaManager
        .setNotice(notice)
        .setWidth(window.innerHeight)
        .detectUa();
      if (isMobile) {
        uaManager.toMobile();
      } else {
        uaManager.toPc();
      }
      const timer = setTimeout(() => {
        Promise.all([
          import(/* webpackChunkName:"vue-fontawesome",webpackPrefetch:false,webpackMode:"lazy" */ '@fortawesome/vue-fontawesome'),
          import(/* webpackChunkName:"fontawesome",webpackPrefetch:false,webpackMode:"lazy" */ '@fortawesome/fontawesome'),
          import(/* webpackChunkName:"fontawesome-solid",webpackPrefetch:false,webpackMode:"lazy" */ '@fortawesome/fontawesome-free-solid'),
          import(/* webpackChunkName:"fontawesome-regular",webpackPrefetch:false,webpackMode:"lazy" */ '@fortawesome/fontawesome-free-regular'),
          import(/* webpackChunkName:"fontawesome-brands",webpackPrefetch:false,webpackMode:"lazy" */ '@fortawesome/fontawesome-free-brands'),
        ]).then(res => {
          const [{FontAwesomeIcon}, fontawesome, solid, regular, brands] = res;
          fontawesome.default.library.add(solid.default);
          fontawesome.default.library.add(regular.default);
          fontawesome.default.library.add(brands.default);
          proxy.$.appContext.components[FontAwesomeIcon.name] = FontAwesomeIcon;
        }).catch(e => {
          console.error(e);
        }).finally(() => {
          clearTimeout(timer);
        });
      }, 2000);
      // isMobile && proxy.$message.success('切换到PC端体验更加哦！');
    });
    return {
      locale: zhCn
    };
  }
});
</script>
