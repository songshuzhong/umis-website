const htmlMap = {
  renderer: 'mis-html',
  html: '<%= data.interests.map(item => item.name) %>'
};

export { htmlMap };
