// pages/index/start/Teacher/check/lesson/check_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      detail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var check_date = options.check_date
    var curr_id = options.curr_id
    wx.cloud.callFunction({
      name: 'check_detail',
      data:{
        check_data: check_date,
        curr_id: curr_id
      },
      success:res=>{
        console.log(res)
        var detail = res.result.data
        this.setData({
          detail: detail
        })
        console.log(this.data.detail)
      }
    })
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