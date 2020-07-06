const app = getApp()
Page({
  data: {
    needText: true,
    needLocation: true, //关于签到的需求信息，理论上应当由后端取得
    userInfo: {},
    location: {},
    theme:"请输入学号和姓名",
    tip:"不要搞错顺序", //theme和tips也一样
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    focus: false,
    getInfo: false,
    getLocation: false,
    inputValue: ''
  },
  onLoad: function () {
    //userInfo有数据
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
      })
    } 
    else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
        })
      }
    } 
    else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
          })
        }
      })
    }
  },
  //信息授权点击了允许
  getUserInfo: function(e) {
    //console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      getInfo: true
    })
    if(this.data.getInfo){
      wx.showToast({
        title: '用户信息获取成功',
        icon: 'none',
        duration: 2000
      })
    }
  },
  
  //位置授权
  onAuthLocation() {
    wx.authorize({
      scope: 'scope.userLocation',
      success: (res) => {
        console.log('成功：', res)
        this.onGetLocation();//获取位置
      },
      fail: (res) => {
        console.log('失败：', res)
      },
    })
  },
  //获取位置
  onGetLocation() {
    wx.getLocation({
      success: (res) => {
        console.log('成功：', res)
        this.setData({
          location: res,
          getLocation: true
        })
        wx.showToast({
          title: '地理信息获取成功',
          icon: 'none',
          duration: 2000
        })
      },
      fail: (res) => {
        console.log('失败：', res)
        wx.showToast({
          title: '地理信息获取失败，请检查是否授权！',
          duration: 2000
        })
      },
    })
  },
  //授权面板
  gotoSetting() {
    wx.openSetting({
      success: (res) => {
        console.log(res)
      }
    })
  },
  //提交函数
  formSubmit: function (e) {  
    //console.log('form发生了submit事件，携带数据为：', e.detail.value);  
    let {text} = e.detail.value;
    if (!this.data.getInfo) {
      wx.showToast({
        title: "签到失败：未获取用户信息",
        icon: 'none'
      })
      return;
    }
    if (this.data.needLocation) {
      if (!this.data.getLocation){
      wx.showToast({
        title: "签到失败：未获取必要的地理信息",
        icon: 'none'
      })
      return;}
    }
    console.log("判断text")
    if (!text) {
      console.log("有")
      wx.showToast({
        title: "签到失败：未填写必要的文本",
        icon: 'none'
      })
      return; 
    }
     //wx.request({ url: 'url', }) 向后端提交代码
     console.log("无")
    wx.showToast({
        title: "签到成功",
        icon: 'success'
      })
  }, 
    

  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function(e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

  },

})