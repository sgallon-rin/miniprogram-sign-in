// pages/management/management.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    college_data: ["大数据学院","计算机学院","外文学院","管理学院","药学院"],
    sex_data: ["男", "女"],
    student:{

    },
    student_data:{
      "0001": {"sid":"0001","name":"张三三","college": 1,"major":"计算机","sex":0},
      "0002": {"sid":"0002","name":"李小四","college": 1,"major":"计算机","sex":0},
      "0003": {"sid":"0003","name":"王大五","college": 0,"major":"数据科学","sex":0},
      "0004": {"sid":"0004","name":"赵磊","college": 2,"major":"英语","sex":1},
      "0005": {"sid":"0005","name":"时煜","college": 3,"major":"行政管理","sex":1},
      "0006": {"sid":"0006","name":"章礼上天","college": 4,"major":"医药制造","sex":1}}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
    const college_data = this.data.college_data
    const sex_data = this.data.sex_data
    const student_data = this.data.student_data
    var arr_college = options.college.split("-")
    var arr_sex = options.sex.split("-")
    var search_college = []
    var search_sex = []
    var student = []
    //console.log(college_data)
    for (let i = 0; i < college_data.length; i++) {
      if (arr_college[i] == 1) {
         search_college.push(i)
          }
    }
    //console.log(search_college)
    //console.log(sex_data)
    for (let i = 0; i < sex_data.length; i++) {
      if (arr_sex[i] == 1) {
        search_sex.push(i)
        }
     }
     //console.log(search_sex)
    for (var key in student_data) {
      var item = student_data[key]
      //console.log(item)
      if(search_college.includes(item.college) && search_sex.includes(item.sex)){
        student.push(item)
         }  
      }
    //console.log(student)
    this.setData({
      student: student
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
  goTostudent_information:function(e){
    var sid = e.currentTarget.id
    wx.navigateTo({
      url: 'student_information/student_information?sid=' + sid, 
    })
  }
})