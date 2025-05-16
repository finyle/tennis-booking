### Project Structure
```
/tennis-booking
    ├── /pages
    │   ├── index
    │   │   ├── index.wxml
    │   │   ├── index.wxss
    │   │   └── index.js
    │   ├── create
    │   │   ├── create.wxml
    │   │   ├── create.wxss
    │   │   └── create.js
    │   └── profile
    │       ├── profile.wxml
    │       ├── profile.wxss
    │       └── profile.js
    ├── app.js
    ├── app.json
    └── app.wxss
```

### 1. app.json
This file defines the pages and the navigation bar for the Mini Program.

```json
{
  "pages": [
    "pages/index/index",
    "pages/create/create",
    "pages/profile/profile"
  ],
  "window": {
    "navigationBarTitleText": "网球约球"
  },
  "tabBar": {
    "list": [
      {
        "pagePath": "pages/index/index",
        "iconPath": "images/home.png",
        "selectedIconPath": "images/home-active.png",
        "text": "发现"
      },
      {
        "pagePath": "pages/create/create",
        "iconPath": "images/create.png",
        "selectedIconPath": "images/create-active.png",
        "text": "创建"
      },
      {
        "pagePath": "pages/profile/profile",
        "iconPath": "images/profile.png",
        "selectedIconPath": "images/profile-active.png",
        "text": "我的"
      }
    ]
  }
}
```

### 2. app.wxss
This file contains global styles for the Mini Program.

```css
/* app.wxss */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### 3. pages/index/index.wxml
This file contains the structure for the homepage.

```xml
<view class="container">
  <view class="top-bar">
    <text class="title">网球约球</text>
    <view class="weather-info">
      <image src="weather-icon-url" class="weather-icon" />
      <text>晴 25°C</text>
    </view>
    <text class="date">{{date}}</text>
  </view>
  <view class="main-content">
    <text class="section-title">热门约球畅打活动</text>
    <view class="activity-list">
      <view class="activity-item" wx:for="{{activities}}" wx:key="index">
        <text class="status">{{item.status}}</text>
        <text class="activity-name">{{item.name}}</text>
        <view class="activity-info">
          <text>{{item.time}}</text>
          <text>{{item.location}}</text>
          <text>已报名{{item.signedUp}}人 | 差{{item.remaining}}人</text>
        </view>
        <text class="activity-price">￥{{item.price}}</text>
      </view>
    </view>
  </view>
</view>
```

### 4. pages/index/index.wxss
This file contains the styles for the homepage.

```css
/* index.wxss */
.container {
  background-color: #f5f5f5;
  padding-bottom: 70px;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}
.weather-info {
  display: flex;
  align-items: center;
}
.activity-list {
  padding: 15px;
}
.activity-item {
  background: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}
```

### 5. pages/index/index.js
This file contains the logic for the homepage.

```javascript
// index.js
Page({
  data: {
    date: '',
    activities: [
      {
        status: '报名中',
        name: '网球陪练4.0',
        time: '5月15日 07:00-23:22',
        location: '静安寺 距您1km',
        signedUp: 3,
        remaining: 2,
        price: 120.00
      },
      {
        status: '报名中',
        name: '跃网·Rising大华室内网球畅打活动',
        time: '5月15日 10:00-19:00',
        location: '大华 距您3.1km',
        signedUp: 5,
        remaining: 3,
        price: 150.00
      }
    ]
  },
  onLoad() {
    this.setData({
      date: new Date().toISOString().slice(0, 10)
    });
  }
});
```

### 6. pages/create/create.wxml
This file contains the structure for the create page.

```xml
<view class="create-container">
  <text class="create-header">发起约球</text>
  <view class="input-group">
    <text>活动标题</text>
    <input type="text" placeholder="请输入活动标题" />
  </view>
  <view class="input-group">
    <text>集合地点</text>
    <input type="text" placeholder="请输入集合地点" />
  </view>
  <view class="input-group">
    <text>活动时间</text>
    <input type="datetime-local" />
  </view>
  <button bindtap="confirmAndSubmit">确定发布</button>
</view>
```

### 7. pages/create/create.wxss
This file contains the styles for the create page.

```css
/* create.wxss */
.create-container {
  padding: 20px;
  background-color: #fff;
}
.input-group {
  margin-bottom: 15px;
}
```

### 8. pages/create/create.js
This file contains the logic for the create page.

```javascript
// create.js
Page({
  confirmAndSubmit() {
    wx.showToast({
      title: '活动已发布！（模拟）',
      icon: 'success'
    });
    wx.navigateBack();
  }
});
```

### 9. pages/profile/profile.wxml
This file contains the structure for the profile page.

```xml
<view class="profile-container">
  <view class="user-info">
    <image src="https://placeholder.com/150" class="avatar" />
    <view class="user-text">
      <text>林克</text>
      <text>已在韵动吧2天</text>
    </view>
  </view>
  <view class="quick-actions">
    <view class="action-item">我的报名</view>
    <view class="action-item">我的约球</view>
  </view>
</view>
```

### 10. pages/profile/profile.wxss
This file contains the styles for the profile page.

```css
/* profile.wxss */
.profile-container {
  padding: 20px;
}
.user-info {
  display: flex;
  align-items: center;
}
```

### 11. pages/profile/profile.js
This file contains the logic for the profile page.

```javascript
// profile.js
Page({});
```

### Final Notes
1. **Icons**: You need to provide your own icons for the tab bar in the `app.json` file.
2. **Images**: Replace the placeholder image URLs with actual images.
3. **Testing**: Test the Mini Program using the WeChat Developer Tool to ensure everything works as expected.

This structure provides a basic framework for your WeChat Mini Program based on the content you provided. You can expand upon this by adding more features and refining the design as needed.