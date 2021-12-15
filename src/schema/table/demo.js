export default     {
  renderer: 'mis-table',
  name: 'usertable',
  maxHeight: 570,
  showDynamicColumn: true,
  showExport: true,
  hasPageInfo: true,
  border: true,
  title: '出场人物表',
  initApi: {
    url: '/api/users',
    method: 'get',
    params: {
      pageIndex: 1,
      pageSize: 10
    }
  },
  columns: [
    {
      type: 'selection',
      fixed: 'left'
    },
    {
      name: 'name',
      label: '姓名',
      fixed: 'left',
      body: {
        renderer: 'mis-action',
        type: 'text',
        text: '<%= data.name %>',
        actionType: 'mis-redirect',
        redirect: '/details?uid=${uid}'
      }
    },
    {
      name: 'phone',
      label: '手机号码',
      body: {
        renderer: 'mis-quickedit',
        title: '修改手机号码',
        label: '<%= data.phone %>',
        keyword: 'phone',
        actionApi: {
          url: '/api/user?uid=${uid}',
          method: 'put',
          params: '*'
        },
        rules: [
          {
            required: true,
            message: '请输入手机号码',
            trigger: 'blur'
          }
        ],
        reload: 'usertable'
      }
    },
    {
      name: 'province',
      label: ' 省份'
    },
    {
      name: 'sex',
      label: '性别',
      body: [
        {
          renderer: 'mis-mapping',
          value: '<%= data.sex %>',
          initApi: {
            url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/mapping',
            method: 'get',
            cached: true
          }
        },
      ]
    },
    {
      name: 'createdAt',
      label: '创建时间'
    },
    {
      name: 'updatedAt',
      label: '更新时间'
    },
    {
      label: '操作集合',
      body: [
        {
          renderer: 'mis-action',
          text: '删除',
          size: 'mini',
          plain: true,
          type: 'warning',
          actionType: 'mis-ajax',
          actionApi: {
            url: '/api/user?uid=${uid}',
            method: 'delete'
          },
          confirmTitle: '你删除吗？',
          reload: 'usertable',
          popupType: 'confirm'
        },
        {
          renderer: 'mis-action',
          text: '编辑',
          size: 'mini',
          type: 'primary',
          plain: true,
          actionType: 'mis-ajax',
          actionApi: {
            url: '/api/user?uid=${uid}',
            method: 'delete'
          },
          confirmTitle: '你删除吗？',
          reload: 'usertable',
          popupType: 'confirm'
        },
        {
          renderer: 'mis-action',
          text: '发布',
          type: 'danger',
          plain: true,
          size: 'mini',
          actionType: 'mis-ajax',
          actionApi: {
            url: '/api/user?uid=${uid}',
            method: 'delete'
          },
          confirmTitle: '你删除吗？',
          reload: 'usertable',
          popupType: 'confirm'
        }
      ]
    }
  ],
  actions: [
    {
      renderer: 'mis-action',
      text: '删除',
      type: 'text',
      icon: 'Delete',
      actionType: 'mis-ajax',
      actionApi: {
        url: '/api/user?uids=${selectedIds}&status=1',
        method: 'delete',
        params: {
          uids: '${selectedIds}'
        }
      },
      reload: 'usertable'
    },
    {
      renderer: 'mis-action',
      text: '暂停',
      type: 'text',
      icon: 'VideoPause',
      actionType: 'mis-ajax',
      actionApi: {
        url: '/api/user?uids=${selectedIds}',
        method: 'delete',
        params: {
          uids: '${selectedIds}'
        }
      },
      reload: 'usertable'
    }
  ]
};
