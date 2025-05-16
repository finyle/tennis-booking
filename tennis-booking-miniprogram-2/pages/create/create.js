// filepath: /tennis-booking-miniprogram/tennis-booking-miniprogram/pages/create/create.js
Page({
    data: {
        activityTitle: '',
        meetingPlace: '',
        activityTime: '',
        recruitNumber: 0,
        organizerNumber: 1,
        activityPrice: 0,
        levelRequirement: '不限',
        note: '注意：开始前4小时未达到最低人数，活动自动取消；约球结束2天后，报名费自动转入[钱包-余额]中。',
    },

    onLoad: function() {
        // Initialization code can go here
    },

    handleInputChange: function(e) {
        const { id, value } = e.target.dataset;
        this.setData({
            [id]: value
        });
    },

    confirmAndSubmit: function() {
        // Validate input data
        if (!this.data.activityTitle || !this.data.meetingPlace || !this.data.activityTime) {
            wx.showToast({
                title: '请填写所有必填项',
                icon: 'none'
            });
            return;
        }

        // Submit the data (this is just a placeholder for actual submission logic)
        wx.showToast({
            title: '活动发布成功',
            icon: 'success'
        });

        // Reset form after submission
        this.setData({
            activityTitle: '',
            meetingPlace: '',
            activityTime: '',
            recruitNumber: 0,
            activityPrice: 0,
            levelRequirement: '不限',
        });
    }
});