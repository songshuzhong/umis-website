export default {
  renderer: 'mis-action',
  text: 'Ajax',
  size: 'small',
  actionType: 'mis-ajax',
  actionApi: {
    url: '/api/user?uid=${uid}',
    method: 'delete',
  },
};
