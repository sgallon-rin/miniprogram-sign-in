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
    
  }
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var course_id = options.course_id
    var stu_id = options.sid
    this.setData({
        course_id: course_id
    })
    //console.log(this.data.course)
    wx.cloud.callFunction({
        name:'get_cur_stulist',
        data:{
          curr_id: course_id
        },
        success:res=>{
        var list = res.result.list
        for (let i = 0; i < list.length; i++) {
          const element = list[i];
          if(element.stu_id == stu_id){
            this.setData({
              stu: element
            })
          }
        }
        console.log(this.data.stu)
        }
        })
    },

    reset_studentlist:function(e){
      console.log(e.currentTarget)
      var sid = e.currentTarget.id
      var course_id = e.currentTarget.dataset.course_id
      console.log(sid)
      console.log(course_id)
      wx.cloud.callFunction({
        name:'cur_del_stut',
        data:{
          curr_id: course_id,
          stu_id: sid
        },
        success:res=>{
          console.log(res)
          wx.navigateBack()
          }
      })
      //console.log(sid)
     
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