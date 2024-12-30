import {ElNotification} from 'element-plus';
import {register} from 'register-service-worker';

const isGp = process.env.NODE_ENV === 'gp';

const registrySw = contextPath => {
  const sw = isGp? '/i-website/dist/service-worker.js': `${contextPath}/service-worker.js`;

  register(sw, {
    updatefound() {
      ElNotification({
        title: '温馨提示',
        message: '检测到新版本，正在下载中，请稍后...',
        type: 'info',
        position: 'bottom-right',
        offset: 50
      });
    },
    updated() {
      ElNotification({
        title: '温馨提示',
        message: '版本更新完成，10s后刷新项目',
        type: 'success',
        position: 'bottom-right',
        duration: 10000,
        offset: 50
      });
      const timer = setTimeout(() => {
        clearTimeout(timer);
        window.location.reload();
      }, 10000);
    }
  });
};

export default registrySw;
