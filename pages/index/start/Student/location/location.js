const app = getApp()
Page({
  data: {
    curr_id: "",
    check: {}, //check的内容
    needText: false,
    needLocation: false, //默认为false
    userInfo: {},
    location: {},
    theme:"请输入要求文本",
    tip:"", //theme和tips也一样
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    focus: false,
    getInfo: false,
    getLocation: false,
    inputValue: ''
  },
  onLoad: function (options) {
    console.log(options)
    var check = app.globalData.going[options.curr_id]
    this.setData({
      curr_id: options.curr_id,
      check: check,
      needText: check.needText,
      needLocation: check.needLoc,
      theme: check.title,
      tip: check.info
    })
    //userInfo有数据
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        getInfo: true
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
      //console.log("有")
      wx.showToast({
        title: "签到失败：未填写必要的文本",
        icon: 'none'
      })
      return; 
    }
    console.log(this.data)
    wx.cloud.callFunction({
      name:'stu_checkin',
      data:{
        stu_id: app.globalData.sid,
        curr_id: this.data.curr_id,
        check_date: this.getNowDate(),
        check_time: this.getNowTime(),
        loc:{
          "coordinates": [this.data.location.longitude,this.data.location.latitude],
          "type": "Point"
        },
        stu_info: text
      },
      success:res=>{
      console.log(res);
      wx.showToast({
        title: "签到成功",
        icon: 'success'
      })
      wx.navigateBack()
      }
      })
    
  }, 
  getNowDate(){
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    var n = timestamp * 1000;
    var date = new Date(n);
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return Y + "-" + M + "-" + D //将日期转换为字符串格式
  },
  getNowTime(){
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    var n = timestamp * 1000;
    var date = new Date(n);
    var h = date.getHours();
    var m = date.getMinutes();
    return h +":"+ m
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