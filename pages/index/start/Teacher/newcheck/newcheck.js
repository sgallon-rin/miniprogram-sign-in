// pages/index/start/Teacher/newcheck/newcheck.js
const app = getApp();  
import { formatTime } from '../../../../../utils/util';

Page({

  /**
   * 页面的初始数据
   */


  data: {  
  course_array: [ '数据库','知识图谱', '数据库II', '最优化'],
  isSubmit: false,
  course_name: "",
  msg: "",
  warn: " ",
  title: "",
  remark: "",
  date: "",
  begintime: "",
  endtime: ""
  },  
  formSubmit: function (e) {  
    console.log('form发生了submit事件，携带数据为：', e.detail.value);  
    let { title, remark, index, date, begintime, endtime } = e.detail.value;  //取表单数据
    if (!title) {  //条件检验
      this.setData({  //setData
      warn: "标题为空！",  
      isSubmit: true  
      })
      wx.showToast({ //提示信息
        title: this.data.warn,
        icon: 'none'
      })
      return;  
    } 
    if (!date) {  
      this.setData({  
      warn: "日期为空！",  
      isSubmit: true  
      })
      wx.showToast({
        title: this.data.warn,
        icon: 'none'
      })
      return;  
    }
    if (begintime >= endtime) {  
      this.setData({  
      warn: "开始时间不得迟于结束时间",  
      isSubmit: true  
      })
      wx.showToast({
        title: this.data.warn,
        icon: 'none'
      })
      return;  
    }
  this.setData({  //wx.request({ url: 'url', }) //TODO 提交代码
  msg: "提交成功！",
  warn: " ",
  course_name: this.data.course_array[index],
  isSubmit: true,  
  title: title,
  remark: remark,
  date: date,
  begintime: begintime,
  endtime: endtime 
  })
  wx.showToast({
    title: this.data.msg,
    icon: 'none'
  })
  },  
  formReset: function () {  
  console.log('form发生了reset事件')
  this.setData({  
  warn: "标题为空！",
  msg: "",
  course_name: "", //此处应当使用主键course_id, 但——到时再改吧
  title: "",
  remark: "",
  date: "",
  begintime: "",
  endtime: "",
  isSubmit: false  
    }) 
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindBegintimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      begintime: e.detail.value
    })
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
    var timestamp = Date.parse(new Date());
    var now_d = new Date(timestamp);
    if (now_d < e.detail.value) {
      this.setData({
        upperbound: "00:00"
      })
    }
  },
  bindEndTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      endtime: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.setData({
    isSubmit: false,  
    msg: "",
    warn: " ",
    title: "",
    remark: "",
    course_name: "",
    date: "",
    begintime: "",
    endtime: ""
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