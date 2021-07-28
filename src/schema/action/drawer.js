export default {
  renderer: 'mis-action',
  text: '抽屉',
  size: 'mini',
  actionType: 'mis-drawer',
  body: {
    showClose: true,
    size: '60%',
    label: '编辑',
    header: {
      renderer: 'mis-html',
      html: '抽屉嵌套表单',
    },
    body: {
      renderer: 'mis-html',
      html: 'drawer',
    }
  },
};
