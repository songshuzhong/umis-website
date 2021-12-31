import {ElNotification} from 'element-plus';
import {register} from 'register-service-worker';

const isDev = process.env.NODE_ENV === 'dev';
const sw = isDev ? '/service-worker.js' : '/umis-website/dist/service-worker.js';

register(sw, {
  updatefound() {
    ElNotification({
      title: '温馨提示',
      message: '检测到新版本，正在下载中，请稍后...',
      type: 'info',
    });
    console.log('New content is downloading.');
  },
  updated() {
    ElNotification({
      title: '温馨提示',
      message: '更新版本完成，10S后刷新项目',
      type: 'success',
      duration: 10000
    });
    const timer = setTimeout(() => {
      clearTimeout(timer);
      window.location.reload();
    }, 10000);
  }
});

