/* 
云函数：cur_update.js
向curriculum_info更新课程信息，不能更新课程编号
如果要更新课程编号，请删除原有记录再添加新的课程信息
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "dadaqiandao-p86hz"
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('curriculum_info').where({
    curr_id: event.curr_id,
  })
  .update({
    data: {
      curr_name: event.curr_name,
      curr_time: event.curr_time,
      teacher: event.teacher,
      ta: event.ta,
      info: event.info
    }
  })}