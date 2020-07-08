// pages/search/curriculum/studentcheck/studentcheck.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stu:{ },
    course_id:"",
    //应该将sid提交到后端进行搜索，现在是本地搜索
    student:{
    "0001": {"sid":"0001","name":"张三三","check_already":14,"check_lack":2},  
    "0002":{"sid":"0002","name":"李小四","check_already":15,"check_lack":1},
    "0003":{"sid":"0003","name":"王大五","check_already":13,"check_lack":3},
    "0004":{"sid":"0004","name":"赵磊","check_already":12,"check_lack":4},
    "0005":{"sid":"0005","name":"时煜","check_already":11,"check_lack":5},
    "0006":{"sid":"0006","name":"章礼上天","check_already":16,"check_lack":0}
  }
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var student = this.data.student
    console.log(options.course_id)
    //console.log(options.sid)
    this.setData({
      stu: student[options.sid],
      course_id:options.course_id
    })
    //console.log(this.data.course)
    },

    reset_studentlist:function(e){
      console.log(e.currentTarget)
      var sid = e.currentTarget.id
      var courseid=e.currentTarget.dataset.course_id
    //console.log(sid)
    wx.navigateTo({
      url: '/pages/index/start/Teacher/search/curriculum/lesson/lesson?sid=' + sid +"&course_id="+courseid
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