// component/component-firstPage/component-firstPage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
    data:{
      check_info:{ //course_info 应当实在后端查询出来的
        "DATA130020.01": {
          "course_name": "数据库及实现",
          "course_id": "DATA130020.01",
          "teacher": "郑卫国",
          "date": "2020-7-9",
          "begintime": "14:15",
          "endtime": "15:45"
        },
        "DATA130026.01": {
          "course_name":"最优化方法",
          "course_id":"DATA130026.01",
          "teacher":"江如俊",
          "date": "2020-7-12",
          "begintime": "15:55",
          "endtime": "17:25"
        },
      },
      course_info: {"DATA130005.01": {"course_name":"统计学基础：原理、方法及R应用 (I)",
      "course_id":"DATA130005.01",
      "teacher":"高凤楠",
      "teacher_assistant":"施建为 孙宇明",
      "time":"周五 第八至十节",
      "check_should":"16",
      "check_already":"16",
      "remark":"同学们请好好复习"}
    },
  

    attached: function(e) {
      //setInterval(show, 1000); //每秒执行1次
       function show() {
          secshow()
          minshow()
          houshow()
          backshow()
          numbershow()
          ctx.draw()
      }
  }},

  /**
   * 组件的方法列表
   */
  methods: {
    test:function(){
      wx.navigateTo({			//以navigate进行跳转
        url: '/pages/index/start/Student/location/location',			
      })
    },
  }
})
//秒针
function secshow() {
  var now = new Date()
  var sec = now.getSeconds()
  //角度弧度
  var angle = sec * Math.PI / 30
  var x = 100 * Math.sin(angle) + 150
  var y = 150 - 100 * Math.cos(angle)
  ctx.beginPath()
  ctx.setLineWidth(5)
  ctx.setStrokeStyle('black')
  ctx.moveTo(150, 150)
  ctx.lineTo(x, y)
  ctx.closePath()
  ctx.stroke()
}
//分针
function minshow() {
  var now = new Date()
  var min = now.getMinutes()
  var sec = now.getSeconds()
  var angle = (min + sec / 60) * Math.PI / 30
  var x = 80 * Math.sin(angle) + 150
  var y = 150 - 80 * Math.cos(angle)
  ctx.beginPath()
  ctx.setLineWidth(5)
  ctx.setStrokeStyle('black')
  ctx.moveTo(150, 150)
  ctx.lineTo(x, y)
  ctx.closePath()
  ctx.stroke()
}
//时针
function houshow() {
  var now = new Date()
  var hou = now.getHours()
  hou = hou % 12 //24小时制，取余数
  var min = now.getMinutes()
  var sec = now.getSeconds()
  var angle = (hou + min / 60 + sec / 3600) * Math.PI / 6
  var x = 50 * Math.sin(angle) + 150
  var y = 150 - 50 * Math.cos(angle)
  ctx.beginPath()
  ctx.setLineWidth(8)
  ctx.moveTo(150, 150)
  ctx.lineTo(x, y)
  ctx.closePath()
  ctx.stroke()
}
//表盘
function backshow() {
  ctx.beginPath()
  ctx.setLineWidth(3)
  ctx.arc(150, 150, 110, 0, 2 * Math.PI)
  ctx.closePath()
  ctx.stroke()
}
//数字
function numbershow() {
  ctx.beginPath()
  ctx.setFontSize(20)
  for (var i = 1; i < 13; i++) {
      var angle = i * Math.PI / 6
      var x = 100 * Math.sin(angle) + 145//微调
      var y = 158 - 100 * Math.cos(angle)
      ctx.fillText(i, x, y)
  }
}

