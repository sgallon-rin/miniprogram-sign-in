// pages/index/Student.js
const app = getApp()

Page({
  data: {
    nowPage:"firstPage",
    nowIndex:0,
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
  onLoad: function () {
    
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