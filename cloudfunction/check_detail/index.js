/* 
云函数：check_detail.js
传入参数curr_id, check_date
获取该次签到的学生签到记录
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
// 云函数入口函数
exports.main = async (event, context) => {
  return db.collection('check_info_stu')
  .where({
    curr_id: event.curr_id,
    check_date: event.check_date
  })
  .get()
}