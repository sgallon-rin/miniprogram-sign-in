/* 
云函数：tea_info_one.js
传入教师tea_id
获取该教师的基本信息（单表查询，不含签到、课程信息
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "dadaqiandao-p86hz"
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  return db.collection('teacher_info')
  .where({
    tea_id: event.tea_id
  })
  .get()
}