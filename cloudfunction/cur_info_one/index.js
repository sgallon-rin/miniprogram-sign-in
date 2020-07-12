/* 
云函数：check_detail.js
传入参数curr_id
获取单门课程基本信息
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
// 云函数入口函数
exports.main = async (event, context) => {
  return db.collection('curriculum_info')
  .where({
    curr_id: event.curr_id
  })
  .get()
}