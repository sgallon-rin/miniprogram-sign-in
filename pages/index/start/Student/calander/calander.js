// pages/index/calander/calander.js
//签到日程页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //tabbar
    list: [{
      "text": "首页",
    //"iconPath": "../../images/tabbar_icon_chat_default.png",
     //"selectedIconPath": "../../images/tabbar_icon_chat_active.png",
    
  },
  {
      "text": "课程",
    //"iconPath": "../../images/tabbar_icon_setting_default.png",
    //"selectedIconPath": "../../images/tabbar_icon_setting_active.png",
    
  },
  {
    "text": "我的"
  }],
  //日历
    objectId:'',
    days:[],
    signUp:[],
    cur_year:0,
    cur_month:0,
    count:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('call onLoad')
    //this.setData({objectId : options.objectId}); 
    //获取当前年月  
    const date = new Date();
    const cur_year = date.getFullYear();
    const cur_month = date.getMonth() + 1;
    const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
    this.calculateEmptyGrids(cur_year, cur_month);
    this.calculateDays(cur_year, cur_month);
    //获取当前用户当前任务的人签到状态
    this.onGetSignUp();
    this.setData({
      cur_year,
      cur_month,
      weeks_ch
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  tabChange: function(e) {
    //console.log('tab change', e)
    switch (e.detail.index) {
      case 0:
        wx.switchTab({
          url: 'Student',
        })
        console.log('change to 0')
        break;
      case 1:
        wx.switchTab({
          url: 'Student/1',
        })
        console.log('change to 1')
        break;
      case 2:
        wx.switchTab({
          url: 'calander/calander',
        })
        console.log('change to 2')
      default:
        break;
    }

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
  // 获取当月共多少天
  getThisMonthDays:function(year, month){
      return new Date(year, month, 0).getDate()
  },
    
  // 获取当月第一天星期几
  getFirstDayOfWeek:function(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },

  // 计算当月1号前空了几个格子，把它填充在days数组的前面
  calculateEmptyGrids:function(year, month) {
    var that = this;
    //计算每个月时要清零
    that.setData({days:[]});
    const firstDayOfWeek = this.getFirstDayOfWeek(year, month);    
    if (firstDayOfWeek > 0) {
      for (let i = 0; i < firstDayOfWeek; i++) {
        var obj  = {
          date:null,
          isSign:0
        }
        that.data.days.push(obj);
      }
      this.setData({
        days:that.data.days
      });
    //清空
    } else {
      this.setData({
        days: []
      });
    }
  },

  // 绘制当月天数占的格子，并把它放到days数组中
  calculateDays:function(year, month) {
    var that = this;
    const thisMonthDays = this.getThisMonthDays(year, month);
    for (let i = 1; i <= thisMonthDays; i++) {
      var obj = {
        date: i,
        isSign: 0
      }
      that.data.days.push(obj);
    }
    this.setData({
      days:that.data.days
    });
  },

  //匹配判断当月与当月哪些日子签到打卡
  onJudgeSign:function(){
    console.log('call onJudgeSign')
    var that = this;
    //var signs = that.data.signUp;
    var daysArr = that.data.days;
    //for (var i=0; i < 31/*signs.length*/;i++){
      /*var current = new Date(signs[i].date.replace(/-/g, "/"));
      var year = current.getFullYear();
      var month = current.getMonth()+1;
      var day = current.getDate();
      day = parseInt(day);*/
      //测试文档
      // 0-无签到信息 1-成功签到 2-错过签到 3-未来的签到
      var test = new Array(1,0,0,1,1,1,0,2,1,0,0,1,0,1,1,1,0,0,3,0,0,3)
      //此处应当获取 wx.request({
      //  url: 'url',
      //})
      for (var j = 0; j < 31;j++){
        //年月日相同并且已打卡
        if(daysArr[j].date != null && daysArr[j].date < test.length)
         daysArr[j].isSign = test[daysArr[j].date];
         console.log("set")
        }
      //}
    //}
    that.setData({days:daysArr});
  },

  // 切换控制年月，上一个月，下一个月
  handleCalendar:function(e) {
    const handle = e.currentTarget.dataset.handle;
    const cur_year = this.data.cur_year;
    const cur_month = this.data.cur_month;
    if (handle === 'prev') {
      let newMonth = cur_month - 1;
      let newYear = cur_year;
      if (newMonth < 1) {
        newYear = cur_year - 1;
        newMonth = 12;
      }
      this.calculateEmptyGrids(newYear, newMonth);
      this.calculateDays(newYear, newMonth);
      this.onGetSignUp();      
      this.setData({
        cur_year: newYear,
        cur_month: newMonth
      })
    } else {
      let newMonth = cur_month + 1;
      let newYear = cur_year;
      if (newMonth > 12) {
        newYear = cur_year + 1;
        newMonth = 1;
      }
      this.calculateEmptyGrids(newYear, newMonth);
      this.calculateDays(newYear, newMonth);
      this.onGetSignUp();      
      this.setData({
        cur_year: newYear,
        cur_month: newMonth
      })
    }
  },

  //获取当前用户该任务的签到数组
  onGetSignUp:function(){
      console.log("call onGetSignUp")
      var that = this;
  //  var Task_User = Bmob.Object.extend("task_user");
  //  var q = new Bmob.Query(Task_User);
  //  q.get(that.data.objectId, {
  //    success: function (result) {
  //      that.setData({
  //        signUp : result.get("signUp"),
  //        count : result.get("score")
  //      });
  //      //获取后就判断签到情况
        that.onJudgeSign();
  //    },
  //    error: function (object, error) {
  //   }
  // });   
  }
})