const desc = {
  renderer: 'mis-html',
  html: '功能介绍：循环自身的data数据到子渲染器中，配合mapping使用'
};

const eachMapping = {
  renderer: 'mis-wrapper',
  initData: {
    interests: [{name: 'cooking', sort: '0'}, {name: 'reading', sort: '1'}]
  },
  body: {
    renderer: 'mis-mapping',
    value: 'interests',
    body: {
      renderer: 'mis-each',
      body: {
        renderer: 'mis-mapping',
        value: '<%=data.name%>',
        map: {
          cooking: '<h1>i like cooking</h1>',
          reading: '<h1>i like reading</h1>'
        }
      }
    }
  }
};

const mappingEach = {
  renderer: 'mis-wrapper',
  initData: {
    interests: [{name: 'cooking', sort: '0'}, {name: 'reading', sort: '1'}]
  },
  body: {
    renderer: 'mis-mapping',
    value: 'interests',
    body: {
      renderer: 'mis-each',
      body: {
        renderer: 'mis-html',
        html: '<h1>i like <%=data.name%></h1>'
      }
    }
  }
};

export { desc, eachMapping, mappingEach };
