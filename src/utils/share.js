import axios from 'axios';
const url = location.href.split('#')[0];

export default {
  info: {
    title: 'IRenderer渲染器官网',
    desc: 'IRenderer渲染器是基于Vue框架和ElementPlus组件库研发的用于快速搭建企业级信息管理系统的低代码库。',
    link: url,
    imgUrl: 'https://koa-ws1a-34195-7-1313890964.sh.run.tcloudbase.com/shuttle.png',
    success: function (res) {
      console.log('share success.', res);
    },
    cancel: function () {
      console.log('share cancel.');
    },
    fail: function (fail) {
      console.log('share fail.', fail);
    }
  },
  async initShareasync() {
    const res = await axios.get('https://koa-ws1a-34195-7-1313890964.sh.run.tcloudbase.com/api/get/sign?url='+encodeURIComponent(url));
    const data = res.data;
    wx.config({
      debug: false,
      appId: data.appId,
      timestamp: data.timestamp,
      nonceStr: data.nonceStr,
      signature: data.signature,
      jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareQZone',
        'updateAppMessageShareData',
        'updateTimelineShareData'
      ],
      success: function (res) {
        console.log('config success.', res);
      },
      fail: function (fail) {
        console.log('config fail.', fail);
      }
    });
    wx.ready(function() {
      console.log('wx is ready.');
      this.wxShareTimeline();
    });
    wx.error(function(e) {
      console.log(e);
    });
  },
  wxShareTimeline() {
    wx.checkJsApi({
      jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'],
      success:function(res){
        console.log('check api success', res);
      },
      error:function(err){
        console.log('check api error', err);
      }
    });
    wx.updateAppMessageShareData(this.info);
    wx.updateTimelineShareData(this.info);
  },
};
