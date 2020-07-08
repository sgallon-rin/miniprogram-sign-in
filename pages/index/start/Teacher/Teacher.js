// pages/index/Teacher.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'tea_curlist',
      data:{
        teacher: '朱胜林'
      },
      success:res=>{
        //console.log(res.result.data)
        var list = res.result.data
        var tea_cur = {}
        //console.log(list)
        for (let i = 0; i < list.length; i++) {
          const element = list[i];
          //console.log(element)
          tea_cur[element.curr_id] = list[i]
        }
        app.globalData.tea_cur = tea_cur
        console.log(app.globalData.tea_cur)
      }}
)
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

  },

  goToNewcheck: function() {
    wx.navigateTo({
      url: 'newcheck/newcheck',
    })
  },
  goToCheck: function() {
    wx.navigateTo({
      url: 'check/check',
    })
  },
  goToCourse: function() {
    wx.navigateTo({
      url: 'search/curriculum/curriculum',
    })

  }
})