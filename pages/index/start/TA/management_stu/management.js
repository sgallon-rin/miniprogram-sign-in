// pages/management/management.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    college_data: ["大数据学院","计算机学院","外文学院","管理学院","药学院"],
    sex_data: ["男", "女"],
    student:[],
  },
  goToStudentInformation:function(e){
   var stu_id = e.currentTarget.id
   console.log(stu_id)
   wx.navigateTo({
     url: 'student_information/student_information?stu_id=' + stu_id,
   })
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  if(options.college){
    const college_data = this.data.college_data
    const sex_data = this.data.sex_data
    var arr_college = options.college.split("-")
    var arr_sex = options.sex.split("-")
    var search_college = []
    var search_sex = []
    var student = []
    //console.log(college_data)
    for (let i = 0; i < college_data.length; i++) {
      if (arr_college[i] == 1) {
         search_college.push(college_data[i])
          }
    }
    console.log(search_college)
    //console.log(sex_data)
    for (let i = 0; i < sex_data.length; i++) {
      if (arr_sex[i] == 1) {
        search_sex.push(sex_data[i])
        }
     }
     wx.cloud.callFunction({
      name:'stu_info_part',
      data:{
        departmentList: search_college,
        genderList: search_sex
      },
      success:res=>{
      //console.log(res.result.data);
      var student = res.result.data
      this.setData({
        student: student
      })
      }
  })
    return;
  }
    wx.cloud.callFunction({
      name:'stu_info_all',
      data:{
      },
      success:res=>{
      //console.log(res.result.data);
      var student = res.result.data
      this.setData({
        student: student
      })
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

  },


})