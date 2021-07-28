export default {
  renderer: 'mis-page',
  title: 'Ajax按钮',
  body: {
    renderer: 'mis-action',
    actionType: 'actions',
    actions: [
      {
        renderer: 'mis-action',
        text: '百度一下',
        size: 'mini',
        actionType: 'mis-redirect',
        redirect: 'http://www.baidu.com',
      },
      {
        renderer: 'mis-action',
        text: 'Bing一下',
        size: 'mini',
        actionType: 'mis-redirect',
        redirect: 'https://www.cn.bing.com',
      },
      {
        renderer: 'mis-action',
        text: 'Google一下',
        size: 'mini',
        actionType: 'mis-redirect',
        redirect: 'https://www.google.com',
      },
    ]
  }
};
