// pages/management/student_information/student_information.js
Page({
  data: {
    this_student:{},
    student: {},
    focus: false,
    inputValue: '',
    pickerHidden: true,
    chosen: ''
  },
  onLoad: function (options) {
    console.log(options.stu_id)
    var stu_id = options.stu_id
    wx.cloud.callFunction({
      name:'stu_info_all',
      data:{
      },
      success:res=>{
      //console.log(res.result.data);
      var student = res.result.data
      for (let i = 0; i < student.length; i++) {
        const element = student[i];
        if (element.stu_id == stu_id){
          this.setData({
            this_student: element
          })
        }
      }
      }
  })

    },

  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  },
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    }
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
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var department = e.detail.value.input_college ? e.detail.value.input_college : this.data.this_student.department
    var name = e.detail.value.input_name ? e.detail.value.input_name : this.data.this_student.name
    var major = e.detail.value.input_major ? e.detail.value.input_major : this.data.this_student.major
    var gender = e.detail.value.input_sex ? e.detail.valueinput_sex : this.data.this_student.gender
    console.log(gender)
    if(gender != '男' && gender != '女'){
      wx.showToast({
        title: "非常抱歉！此版本暂不支持男女以外的第三性别信息",
        icon: 'none',
        duration: 3000,
      })
      return;
    }
    wx.showToast({
      title: "提交中……",
      icon: 'none',
      duration: 2000,
    })
    wx.cloud.callFunction({
      name:'stu_update',
      data:{
        stu_id: this.data.this_student.stu_id,
        name: name,
        gender: gender,
        department: department,
        major: major
      },
      success:res=>{
      //console.log(res.result.data);
      wx.showToast({
        title: "发布成功",
        icon: 'success',
        duration: 2000,
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 2000);
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  },

})
}
})