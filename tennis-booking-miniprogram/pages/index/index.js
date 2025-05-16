// This file contains the JavaScript logic for the main page of the WeChat Mini Program.

Page({
    data: {
        activities: [
            {
                status: '报名中',
                name: '网球陪练4.0',
                info: '5月15日 07:00-23:22\n静安寺 距您1km\n已报名3人 | 差2人',
                price: '￥120.00'
            },
            {
                status: '报名中',
                name: '跃网·Rising大华室内网球畅打活动',
                info: '5月15日 10:00-19:00\n大华 距您3.1km\n已报名5人 | 差3人',
                price: '￥150.00'
            }
        ],
        weather: {
            condition: '晴',
            temperature: '25°C'
        },
        date: ''
    },

    onLoad: function() {
        const today = new Date();
        this.setData({
            date: today.toISOString().slice(0, 10)
        });
    },

    confirmAndSubmit: function(event) {
        const activityTitle = event.detail.value.activityTitle;
        const meetingPlace = event.detail.value.meetingPlace;
        const activityTime = event.detail.value.activityTime;
        const recruitNumber = event.detail.value.recruitNumber;
        const activityPrice = event.detail.value.activityPrice;

        wx.showToast({
            title: '活动已发布！（模拟）',
            icon: 'success',
            duration: 2000
        });

        this.setData({
            activities: [...this.data.activities, {
                status: '报名中',
                name: activityTitle,
                info: `${activityTime}\n${meetingPlace} 距您1km\n已报名1人 | 差${recruitNumber - 1}人`,
                price: `￥${activityPrice}`
            }]
        });
    }
});