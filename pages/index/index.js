//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    motto: '欢迎使用大大签到',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  formSubmit: function(e){
    // console.log(e)
    let sid = e.detail.value.sid
    let tid = e.detail.value.tid
    //user_login云函数
    wx.cloud.callFunction({
      name: 'user_login',
      data: {
        username:sid,
        password:tid
      },
      success: res => {
        console.log(res)
        var permission = res.result.data[0].permission
        console.log(permission)
        if (permission == "1" ) {this.goToStudent()
        }else if (permission == "2") {this.goToTeacher()
        }else if(permission == "3"){this.goToTA()
        }},
      fail: err => {
        console.log(err)
        console.log("登录失败")
        wx.showToast({
          icon: 'none',
          title: '登录失败！请稍后重试',
          duration: 2000,
        })
      }   
  })
},

  goToStudent: function() {
    wx.navigateTo({
      url: 'start/Student/Student',
    })
  },

  goToTeacher: function() {
    wx.navigateTo({
      url: 'start/Teacher/Teacher',
    })
  },

  goToTA: function() {
    wx.navigateTo({
      url: 'start/TA/TA',
    })
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
