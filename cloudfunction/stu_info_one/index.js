/* 
云函数：stu_info_one.js
传入学号stu_id
获取该学生的基本信息（单表查询，不含签到、选修课程信息
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
// 云函数入口函数
exports.main = async (event, context) => {
  return db.collection('student_info')
  .where({
    stu_id: event.stu_id
  })
  .get()
}