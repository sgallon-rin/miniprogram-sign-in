// component/component-firstPage/component-firstPage.js
const app = getApp()
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
      future: {},
      going: {},
      past: {},
      course_info: {}
    },
    lifetimes:{
    ready: function(e) {
      this.setData({
        future: app.globalData.future,
        going: app.globalData.going,
        past: app.globalData.past,
        course_info:  app.globalData.course_info
      })
      //console.log(this.data.going)
      var going = this.data.going
      for(var key in going){
        if (going[key].checkList == [{}] ){
          going['flag'] = 1
        } else {
          going['flag'] = 0
        }
      }
    }
    },

  /**
   * 组件的方法列表
   */
  methods: {
    test:function(e){
      var curr_id = e.currentTarget.id
      wx.navigateTo({			//以navigate进行跳转
        url: '/pages/index/start/Student/location/location?curr_id=' + curr_id			
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

