export default {
  renderer: 'mis-service',
  initData: {
    tip: 'everything is awosome!'
  },
  body: {
    renderer: 'mis-html',
    html: '<%= data.tip %>'
  }
};
