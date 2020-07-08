/* 
云函数：stu_update.js
向student_info更新学生信息，不能更新学号
如果要更新学号，请删除原有记录再添加新的学生信息
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "dadaqiandao-p86hz"
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('student_info').where({
    stu_id: event.stu_id,
  })
  .update({
    data: {
      name: event.name,
      grade: event.grade,
      age: event.age,
      gender: event.gender,
      department: event.department,
      major: event.major
    }
  })}