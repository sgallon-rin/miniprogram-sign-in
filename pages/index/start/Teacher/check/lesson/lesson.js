// pages/index/start/Teacher/check/lesson/lesson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      check_total: 0,
      checkList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var curr_id = options.curr_id
    wx.cloud.callFunction({
      name: 'get_cur_checkdetail',
      data:{
        curr_id: curr_id
      },
      success:res=>{
        //console.log(res)
        var checkList = res.result.list[0].checkList
        console.log(checkList)
        this.setData({
          checkList: checkList,
          check_total: checkList.length
        })
      }})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  goToCheck: function(e) {
    console.log(e)
    var curr_id = e.currentTarget.id
    var check_date = e.currentTarget.dataset.check_date
    wx.navigateTo({
      url: 'check_detail?curr_id=' + curr_id + "&check_date=" + check_date,
    })
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