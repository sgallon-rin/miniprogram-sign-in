// pages/index/start/Teacher/newcheck/newcheck.js
const app = getApp();  
import { formatTime } from '../../../../../utils/util';

Page({

  /**
   * 页面的初始数据
   */


  data: {  
  course_array: [],
  course_dict: {},
  course_info: {},
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
    //console.log('form发生了submit事件，携带数据为：', e.detail.value);  
    let { title, remark, index, date, begintime, endtime , needText, needLocation} = e.detail.value;  //取表单数据
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
    wx.showToast({
      title: "签到发布中",
      icon: 'waiting',
      duration: 2000,
    })
    wx.cloud.callFunction({
      name:'tea_new_check',
      data:{
        curr_id: this.data.course_dict[this.data.course_array[index]],
        check_date: date,
        start_time: begintime,
        end_time: endtime,
        needLoc: needLocation,
        needText:needText,
        curr_info:remark,
        title: title,
      },
      success:res=>{
      wx.showToast({
        title: "发布成功",
        icon: 'success',
        duration: 2000,
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 2000);
      }}
)
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
    course_info: app.globalData.tea_cur
    })
  var array = []
  var dict = {}
  for(var key in this.data.course_info){
    const item = this.data.course_info[key]
    array.push(item.curr_name)
    dict[item.curr_name] = item.curr_id
  }
  this.setData({
    course_array: array,
    course_dict: dict,
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