/* 
云函数：cur_add.js
向curriculum_info加入新的课程信息
表有唯一索引curr_id
teacher, ta 是字符串，
教师，助教如果有多个，放在一个字符串里，随便用什么符号隔开（不隔开也行）
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  // 在stu_cur表中插入新签到信息
  return await db.collection('curriculum_info').add({
    data: {
      curr_id: event.curr_id,
      curr_name: event.curr_name,
      curr_time: event.curr_time,
      teacher: event.teacher,
      ta: event.ta,
      info: event.info
    }
  })}