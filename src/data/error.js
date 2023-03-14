const ERRORS = {
  404: {
    title: '地址错误，请重新输入地址',
    message: '您可以先检查网址，然后重新输入或给我们反馈问题',
    picture: require('../assets/not-found.jpeg')
  },
  403: {
    title: '抱歉，您没有操作权限',
    message: '联系方式：sshuzhong@outlook.com',
    picture: require('../assets/forbidden.jpeg')
  }
};

export default ERRORS;
