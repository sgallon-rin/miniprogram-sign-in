// pages/index/curriculum/lesson/lesson.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    course: { },
    course_info:{ //course_info 应当实在后端查询出来的
      "DATA130020.01": {
        "course_name":"数据库及实现",
        "course_id":"DATA130020.01",
        "teacher":"郑卫国",
        "teacher_assistant":"苏礼珏 杨逸凡",
        "time":"周一 第六、七节",
        "check_should":"16",
        "check_already":"14",
        "remark":"请及时上交课程报告"
      },
      "DATA130026.01": {
        "course_name":"最优化方法",
        "course_id":"DATA130026.01",
        "teacher":"江如俊",
        "teacher_assistant":"周之烁",
        "time":"周四 第十一至十三节",
        "check_should":"16",
        "check_already":"15",
        "remark":"第十三次作业不用上交"
      },
      "DATA130005.01": {"course_name":"统计学基础：原理、方法及R应用 (I)",
      "course_id":"DATA130005.01",
      "teacher":"高凤楠",
      "teacher_assistant":"施建为 孙宇明",
      "time":"周五 第八至十节",
      "check_should":"16",
      "check_already":"16",
      "remark":"同学们请好好复习"}},
    student:[{"sid":"0001","name":"张三三"},
    {"sid":"0002","name":"李小四"},
    {"sid":"0003","name":"王大五"},
    {"sid":"0004","name":"赵磊"},
    {"sid":"0005","name":"时煜"},
    {"sid":"0006","name":"章礼上天"}]
    },

    /**
   * 生命周期函数--监听页面加载
   */

    onLoad: function (options) {
      var course_info = this.data.course_info
      this.setData({
        course: course_info[options.course_id]
      })
      //console.log(this.data.course)
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
  goTostudentcheck: function(e) {
    var sid = e.currentTarget.id
    //console.log(sid)
    wx.navigateTo({
      url: '/pages/index/start/Teacher/search/curriculum/studentcheck/studentcheck?sid=' + sid
    })
  },

})