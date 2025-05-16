// filepath: /tennis-booking-miniprogram/tennis-booking-miniprogram/pages/index/index.js
Page({
  data: {
    activities: [
      {
        id: 1,
        name: "网球陪练4.0",
        date: "5月15日 07:00-23:22",
        location: "静安寺 距您1km",
        participants: "已报名3人 | 差2人",
        price: "￥120.00",
        status: "报名中"
      },
      {
        id: 2,
        name: "跃网·Rising大华室内网球畅打活动",
        date: "5月15日 10:00-19:00",
        location: "大华 距您3.1km",
        participants: "已报名5人 | 差3人",
        price: "￥150.00",
        status: "报名中"
      }
    ]
  },

  onLoad: function() {
    // Load activities or perform any initialization
  },

  navigateToCreate: function() {
    wx.navigateTo({
      url: '/pages/create/create'
    });
  },

  navigateToProfile: function() {
    wx.navigateTo({
      url: '/pages/profile/profile'
    });
  }
});