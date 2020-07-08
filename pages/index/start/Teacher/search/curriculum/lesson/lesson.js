// pages/index/curriculum/lesson/lesson.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */

  data: {
    course_id: "",
    course: { },
    course_info:{ //course_info 应当实在后端查询出来的
      },
    student:[ ]
    },

    /**
   * 生命周期函数--监听页面加载
   */

    onLoad: function (options) {
      var course_id = options.course_id
      var course_info = app.globalData.tea_cur
      console.log(course_info)
      this.setData({
        course_id: course_id,
        course: course_info[course_id]
      })
      //console.log(this.data.course)
      wx.cloud.callFunction({
        name:'get_cur_stulist',
        data:{
          curr_id: course_id
        },
        success:res=>{
        var list = res.result.list
        this.setData({
          student: list
        })
        }
        })
    },

    add_student:function(){
      wx.navigateTo({
        url: '/pages/index/start/Teacher/search/curriculum/add_student/add_student?course_id=' + this.data.course_id,
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
      this.onLoad()
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
    var course_id=e.currentTarget.dataset.course_id
    //console.log(sid)
    wx.navigateTo({
      url: '/pages/index/start/Teacher/search/curriculum/studentcheck/studentcheck?sid=' + sid + "&course_id=" + course_id
    })
  },

})