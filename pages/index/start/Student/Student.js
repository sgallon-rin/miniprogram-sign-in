// pages/index/Student.js
var app = getApp()

Page({
  data: {
    nowPage:"firstPage",
    nowIndex: 0,
    tabBar:[
      {
        "iconClass":"iconfont icon-shouye",
        "text":"首页",
        "tapFunction":"toFirst",
        "active":"active"
      },
      {
        "iconClass":"iconfont icon-wode",
        "text":"课程",
        "tapFunction": "toSecond",
        "active": ""
      },
      {
        "iconClass":"iconfont icon-wode",
        "text":"我的",
        "tapFunction": "toThird",
        "active": ""
      }
    ]
  },
  onShow: function() {
    this.onLoad()
  },
  onLoad: function () {
    // 获取对应的课程信息
    var k = 0
    wx.cloud.callFunction({
      name:'get_stu_curr_check',
      data:{
       stu_id: app.globalData.sid
      },
      success:res=>{
      //console.log(res);
      var list = res.result.list
      var course_info = {}
      for (let i = 0; i < list.length; i++) {
        const element = list[i];
        course_info[element.curr_id] = element
      }
      app.globalData.course_info = course_info
      var count = 0;
      for(var key in course_info){
        count++;
      }
      //console.log(app.globalData.course_info)
      var near = [] //获取所有课程中最近的一次的签到
      //console.log(app.globalData.course_info)
      for (var key in app.globalData.course_info) {
        //console.log("iter")
        wx.cloud.callFunction({
        name:'get_stucurr_checkdetail',
        data:{
          stu_id: app.globalData.sid,
          curr_id: key
        },
        success:res=>{
        k++;
        //console.log(res)
        var list = res.result.list
        list.sort(this.timeCompare()) //排序
        //console.log(list)
        var now_date = this.getNowDate() //获得当前时间
        //console.log(now_date)
        for (let i = 0; i < list.length; i++) {
          const element = list[i];
          //console.log(element)
          //console.log(element.check_date)
          if (element.check_date < now_date || element.check_date == now_date) { //取离当前时间最近的签到
            near.push(element)
            //console.log(near)
            break
            }
          }
          //console.log("k="+k)
          //console.log(count)
          if (k == count){
            near.sort(this.timeCompare()) //再排序
            //console.log(near)
            var now_time = this.getNowTime()
            var future = {}
            var going = {}
            var past = {}
            for (let i = 0; i < near.length; i++) {
              const element = near[i];
              if(element.check_date == now_date && element.start_time > now_time){
                future[element.curr_id] = element
              } else if (element.check_date < now_date || element.end_time < now_time) {
                  past[element.curr_id] = element
              } else {
                  going[element.curr_id] = element
              }
            }
            app.globalData.future = future
            app.globalData.going = going
            app.globalData.past = past
            //console.log(app.globalData)
        }
        }
      })}       
      }
    }
    )
    
  },
  getNowDate(){
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    var n = timestamp * 1000;
    var date = new Date(n);
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return Y + "-" + M + "-" + D //将日期转换为字符串格式
  },
  getNowTime(){
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    var n = timestamp * 1000;
    var date = new Date(n);
    var h = date.getHours();
    var m = date.getMinutes();
    return h +":"+ m
  },
  timeCompare(){
    return function (obj1, obj2) { 
      var date1 = obj1['check_date']; 
      var date2 = obj2['check_date']; 

      if (date1 > date2 ) { //倒序
          return -1; 
      } else if (date1 < date2 ) { 
          return 1; 
      } else { 
          var time1 = obj1['start_time']
          var time2 = obj2['start_time']
          if (time1 > time2 ) { //倒序
            return -1; 
        } else if (time1 < time2 ) { 
            return 1;
          } else {
            return 0
          }
    }
  }
},

  toFirst(){
    this.setData({
      nowPage:"firstPage",
      nowIndex: 0
    })
  },
  toSecond() {
    this.setData({
      nowPage: "secondPage",
      nowIndex: 1
    })
  },
  toThird() {
    this.setData({
      nowPage: "thirdPage",
      nowIndex: 2
    })
  }
})