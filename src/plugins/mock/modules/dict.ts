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
          label: 'dict.notifications.personal',
          value: 0,
        },
        {
          label: 'dict.notifications.system',
          value: 1,
        },
      ],
    },
  },
};