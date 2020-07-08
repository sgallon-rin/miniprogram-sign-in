// pages/management/management.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    student:{"0001":
    {student_id:"0001",student_name:"张三三",student_college:"计算机学院",student_major:"计算机",student_sex:"男"},
    "0002":{student_id:"0002",student_name:"李小四",student_college:"计算机学院",student_major:"计算机",student_sex:"男"},
    "0003":{student_id:"0003",student_name:"王大五",student_college:"大数据学院",student_major:"数据科学",student_sex:"男"},
    "0004":{student_id:"0004",student_name:"赵磊",student_college:"外文学院",student_major:"英语",student_sex:"女"},
    "0005":{student_id:"0005",student_name:"时煜",student_college:"管理学院",student_major:"行政管理",student_sex:"女"},
    "0006":{student_id:"0006",student_name:"章礼上天",student_college:"药学院",student_major:"医药制造",student_sex:"女"}},
  },
  goTostudent_information:function(e){
    console.log(e.currentTarget.id)
    var student_id = e.currentTarget.id
    wx.navigateTo({
    url: '/pages/index/start/TA/management_stu/student_information/student_information?student_id='+student_id,
  })
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

  },


})