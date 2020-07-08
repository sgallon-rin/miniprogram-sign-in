// pages/search_student/search_student.js
Page({
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    }
  },

  data: {
    pickerHidden: true,
    chosen: ''
  },

  pickerConfirm(e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },

  pickerCancel() {
    this.setData({
      pickerHidden: true
    })
  },

  pickerShow() {
    this.setData({
      pickerHidden: false
    })
  },

  formSubmit(e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var college_data = ["college1","college2","college3","college4","college5"] //将表单信息转换为字符串
    var college = e.detail.value.college
    var arr_college = []
    var sex_data = ["sex1","sex2"]
    var sex = e.detail.value.sex
    var arr_sex = []
    if(college.length === 0){
      wx.showToast({
        title: '查询院系为空',
        icon: 'none'
      })
      return;
    }
    if(sex.length === 0){
      wx.showToast({
        title: '查询性别为空',
        icon: 'none'
      })
      return;
    }
    for (let i = 0; i < college_data.length; i++) {
      if (college.includes(college_data[i])) {
        arr_college.push("1")
      } else {
        arr_college.push("0")
      }  
    }
    // console.log("院系信息:" + arr_college.join(""))
    for (let i = 0; i < sex_data.length; i++) {
      if (sex.includes(sex_data[i])) {
        arr_sex.push("1")
      } else {
        arr_sex.push("0")
      }  
    }
    // console.log("性别信息:" + arr_sex.join(""))
    // 此处应当提交查询
    // wx.request({
    //  url: ' ',
    //})
    wx.navigateTo({
      url: 'management/management?college=' + arr_college.join("-") + '&sex=' + arr_sex.join("-"),
    })
  },

  formReset(e) {
    //console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen:''
    })
  }
})