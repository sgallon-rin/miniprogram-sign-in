// component/component-secondPage/component-secondPage.js
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
  data: {
    course_info:{ //测试数据
    "DATA130020.01": {
      "course_name":"数据库及实现",
      "course_id":"DATA130020.01",
      "teacher":"郑卫国",
      "teacher_assistant":"苏礼珏 杨逸凡",
      "time":"周一 第六、七节",
      "check_should":"16",
      "check_already":"14",
      "remark":"请及时上交课程报告"
    },
    "DATA130026.01": {
      "course_name":"最优化方法",
      "course_id":"DATA130026.01",
      "teacher":"江如俊",
      "teacher_assistant":"周之烁",
      "time":"周四 第十一至十三节",
      "check_should":"16",
      "check_already":"15",
      "remark":"第十三次作业不用上交"
    },
    "DATA130005.01": {"course_name":"统计学基础：原理、方法及R应用 (I)",
    "course_id":"DATA130005.01",
    "teacher":"高凤楠",
    "teacher_assistant":"施建为 孙宇明",
    "time":"周五 第八至十节",
    "check_should":"16",
    "check_already":"16",
    "remark":"同学们请好好复习"}}
  },


lifetimes:{
  attached: function() {
    this.setData({
      course_info: app.globalData.course_info
    })
    }
},
  /**
   * 组件的方法列表
   */
methods: {
    goTolesson: function(e) {
      console.log(e)
      var course_id = e.currentTarget.id
      wx.navigateTo({
        url: '/pages/index/start/Student/lesson/lesson?course_id=' + course_id,
      })
    },
  }
})
