// pages/management/student_information/student_information.js
Page({
  data: {
    this_student:{},
    student:{"0001":
    {student_id:"0001",student_name:"张三三",student_college:"计算机学院",student_major:"计算机",student_sex:"男"},
    "0002":{student_id:"0002",student_name:"李小四",student_college:"计算机学院",student_major:"计算机",student_sex:"男"},
    "0003":{student_id:"0003",student_name:"王大五",student_college:"大数据学院",student_major:"数据科学",student_sex:"男"},
    "0004":{student_id:"0004",student_name:"赵磊",student_college:"外文学院",student_major:"英语",student_sex:"女"},
    "0005":{student_id:"0005",student_name:"时煜",student_college:"管理学院",student_major:"行政管理",student_sex:"女"},
    "0006":{student_id:"0006",student_name:"章礼上天",student_college:"药学院",student_major:"医药制造",student_sex:"女"}},
    focus: false,
    inputValue: '',
    pickerHidden: true,
    chosen: ''
  },
  onLoad: function (options) {
    console.log(options.value)
    var student_info = this.data.student
    this.setData({
      this_student: student_info[options.student_id]
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
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  },

})