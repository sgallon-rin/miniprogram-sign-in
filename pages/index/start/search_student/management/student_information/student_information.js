// pages/management/student_information/student_information.js
Page({
  data: {
    college_data: ["大数据学院","计算机学院","外文学院","管理学院","药学院"],
    sex_data: ["男", "女"],
    student:{},
    student_data:{
      "0001": {"sid":"0001","name":"张三三","college": 1,"major":"计算机","sex":0},
      "0002": {"sid":"0002","name":"李小四","college": 1,"major":"计算机","sex":0},
      "0003": {"sid":"0003","name":"王大五","college": 0,"major":"数据科学","sex":0},
      "0004": {"sid":"0004","name":"赵磊","college": 2,"major":"英语","sex":1},
      "0005": {"sid":"0005","name":"时煜","college": 3,"major":"行政管理","sex":1},
      "0006": {"sid":"0006","name":"章礼上天","college": 4,"major":"医药制造","sex":1}},
    focus: false,
    inputValue: '',
    pickerHidden: true,
    chosen: ''
  },

  onLoad:function (options) {
    var sid = options.sid
    const student_data = this.data.student_data
    this.setData({
      student: student_data[sid]
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
  }
})