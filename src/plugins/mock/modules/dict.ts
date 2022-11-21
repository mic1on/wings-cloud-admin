export default {
  /**
   * @name getDictAll
   * @description 获取全部字典数据
   */
  getDictAll: {
    url: '/admin/dict/all',
    method: 'get',
    data: {
      notificationType: [
        {
          label: '个人消息',
          value: 0,
        },
        {
          label: '系统消息',
          value: 1,
        },
      ],
      roleType: [
        {
          label: '系统角色',
          value: 0,
        },
        {
          label: '自定义角色',
          value: 1,
        },
      ],
    },
  },
};
