export default {
  renderer: 'mis-page',
  title: 'Ajax按钮',
  body: [
    {
      renderer: 'mis-action',
      text: 'confirm',
      size: 'mini',
      actionType: 'mis-url',
      url: 'https://www.baidu.com/s?wd=123',
      blank: true,
      confirmTitle: '你离开吗？',
      popupType: 'confirm'
    },
    {
      renderer: 'mis-action',
      popupType: 'over',
      text: 'popover',
      size: 'mini',
      body: {
        renderer: 'mis-qrcode',
        value: 'www.baidu.com'
      }
    },
    {
      renderer: 'mis-action',
      text: 'Tooltip',
      size: 'mini',
      popupType: 'tip',
      tipContent: '这是一个tooltip',
      actionType: 'mis-dialog',
      body: {
        title: '详情信息',
        appendBody: true,
        modal: true,
        body: {
          renderer: 'mis-html',
          html: '这是一个tooltip'
        }
      }
    },
    {
      renderer: 'mis-action',
      popupType: 'badge',
      text: 'badge',
      size: 'mini',
      badgeText: '4',
      actionType: 'mis-dialog',
      body: {
        title: '详情信息',
        appendBody: true,
        modal: true,
        body: {
          renderer: 'mis-html',
          html: '123'
        }
      }
    }
  ]
};
