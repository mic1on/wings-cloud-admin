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
          label: 'admin.personalCenter.myNotifications.personal',
          value: 0,
        },
        {
          label: 'admin.personalCenter.myNotifications.system',
          value: 1,
        },
      ],
    },
  },
};
