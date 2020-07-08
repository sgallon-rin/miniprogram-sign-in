// pages/index/curriculum/lesson/lesson.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */

  data: {
    course: {

    },
    course_info:{

    }
  },

    /**
   * 生命周期函数--监听页面加载
   */

    onLoad: function (options) {
      var course_info = app.globalData.course_info
      this.setData({
        course: course_info[options.course_id]
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