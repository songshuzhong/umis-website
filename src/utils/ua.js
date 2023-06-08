let isMobile;
let maxWidth;
let notice;

export default {
  getUa() {
    return isMobile;
  },
  setNotice(v) {
    notice = v;
    return this;
  },
  setUa(v) {
    isMobile = v;
  },
  setWidth(v) {
    maxWidth = `${v}px`;
    return this;
  },
  detectUa() {
    isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);

    return isMobile;
  },
  toPc() {
    const html = document.documentElement.classList;
    html.remove('mobile');
    html.add('pc');
  },
  toMobile() {
    const html = document.documentElement.classList;
    html.remove('pc');
    html.add('mobile');
  },
  toHorizontal() {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      document.body.setAttribute('style', `width:${maxWidth}`);
      notice && notice();
      notice = null;
    }, 500);
    document.body.classList.add('horizontal');
  },
  leavePlayground() {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      document.body.setAttribute('style', 'unset');
    }, 500);
    document.documentElement.classList.remove('playground');
    document.body.classList.remove('horizontal');
  }
};
