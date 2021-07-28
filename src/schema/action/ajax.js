export default {
  renderer: 'mis-action',
  text: 'Ajax',
  size: 'mini',
  actionType: 'mis-ajax',
  actionApi: {
    url: '/api/user?uid=${uid}',
    method: 'delete',
  },
};
