Page({
  data: {
    userInfo: {
      name: '林克',
      avatar: 'https://placeholder.com/150',
      membershipDuration: '已在韵动吧2天',
    },
    services: [
      { name: '约球余额', icon: 'https://via.placeholder.com/24' },
      { name: '我的AI录像', icon: 'https://via.placeholder.com/24' },
      { name: '场馆收藏', icon: 'https://via.placeholder.com/24' },
      { name: '我的行程', icon: 'https://placeholder.com/24' },
    ],
    version: '韵动 v2.7.3',
  },

  onLoad: function() {
    // Load user data or perform any necessary initialization
  },

  onServiceClick: function(event) {
    const serviceName = event.currentTarget.dataset.name;
    wx.showToast({
      title: `点击了 ${serviceName}`,
      icon: 'none',
    });
  },
});