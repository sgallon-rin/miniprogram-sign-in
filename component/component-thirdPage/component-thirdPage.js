// component/component-thirdPage/component-thirdPage.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  attached: function(){
      console.log(app.globalData)
      if (app.globalData.userInfo) {
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
      } else if (this.data.canIUse){
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      }
    },

  /**
   * 组件的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    iconImage: [
      {
      "src":"/icon/calendar.svg",
      "alt":"calendar.svg",
      "bind":"goToCalendar",
      "text":"签到日历"
      },
      {
      "src": "/icon/pie_chart__monochromatic.svg",
      "alt": "pie_chart__monochromatic.svg",
      "text": "数据汇总"
      },
      {
      "src": "/icon/online_lesson.svg",
      "alt": "online_lesson.svg",
      "text": "在线课程"
      },
      {
      "src": "/icon/scrum_board.svg",
      "alt": "/icon/scrum_board.svg",
      "text": "学校公告"
      },
      {
      "src": "/icon/construction_worker.svg",
      "alt": "/icon/construction.svg",
      "text": "就业信息"
      },
      {
      "src": "/icon/couple.svg",
      "alt": "/icon/couple.svg",
      "text": "我的课友"
      },
      ]},

  /**
   * 组件的方法列表
   */
  methods: {
    goToCalendar: function(){
      console.log("goToCalendar")
      wx.navigateTo({
        url: 'calander/calander',
      })
    },
    getUserInfo: function(e) {
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
  }
})
