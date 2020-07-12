/* 
云函数：tea_update.js
向teacher_info更新教师信息，不能更新教师号
如果要更新教师号，请删除原有记录再添加新的教师信息
所有列：
教师/助教id tea_id |not null
姓名 name |not null
院系 department
type （教师或助教）
gender 性别
age 年龄
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "dadaqiandao-p86hz"
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('teacher_info').where({
    tea_id: event.tea_id,
  })
  .update({
    data: {
      name: event.name,
      age: event.age,
      gender: event.gender,
      department: event.department,
      type: event.type
    }
  })}