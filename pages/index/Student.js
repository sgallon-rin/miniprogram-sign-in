// pages/index/Student.js
Page({

  /**
   * 页面的初始数据
   */
  data:  {
      list: [{
          "text": "首页",
        //"iconPath": "../../images/tabbar_icon_chat_default.png",
         //"selectedIconPath": "../../images/tabbar_icon_chat_active.png",
        
      },
      {
          "text": "课程",
        //"iconPath": "../../images/tabbar_icon_setting_default.png",
        //"selectedIconPath": "../../images/tabbar_icon_setting_active.png",
        
      },
      {
        "text": "我的"
      }]
  },
  tabChange: function(e) {
      //console.log('tab change', e)
      switch (e.detail.index) {
        case 0:
          wx.switchTab({
            url: 'Student',
          })
          console.log('change to 0')
          break;
        case 1:
          wx.switchTab({
            url: 'Student/1',
          })
          console.log('change to 1')
          break;
        case 2:
          wx.reLaunch({
            url: 'calander/calander',
          })
          console.log('change to 2')
        default:
          break;
      }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})