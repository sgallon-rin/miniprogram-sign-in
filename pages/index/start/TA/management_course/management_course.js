// pages/index/start/TA/management_course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course_info:{
      "DATA130020.01": {
        "course_name":"数据库及实现",
        "course_id":"DATA130020.01",
        "teacher":"郑卫国",
        "teacher_assistant":"苏礼珏 杨逸凡",
        "time":"周一 第六、七节",
      },
      "DATA130026.01": {
        "course_name":"最优化方法",
        "course_id":"DATA130026.01",
        "teacher":"江如俊",
        "teacher_assistant":"周之烁",
        "time":"周四 第十一至十三节",
      },
      "DATA130005.01": {"course_name":"统计学基础：原理、方法及R应用 (I)",
      "course_id":"DATA130005.01",
      "teacher":"高凤楠",
      "teacher_assistant":"施建为 孙宇明",
      "time":"周五 第八至十节"}}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var delete_course_id=options.id
   console.log("课程号为",delete_course_id,"已经被删除")
   /* 做一个简单的演示，但是没有办法显示删除后的页面，因为每一次的data都被重新赋值 */
  },
  
  
  goTolesson_information:function(e){
    var course_id=e.currentTarget.id
    wx.navigateTo({
      url: '/pages/index/start/TA/management_course/lesson_information/lesson_information?course_id='+course_id,
    })
  },

  goToadd_curriculum:function(e){
    wx.navigateTo({
      url: '../management_course/add_curriculum/add_curriculum',
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