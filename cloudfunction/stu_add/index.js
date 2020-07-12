/* 
云函数：stu_add.js
向student_info加入新的学生信息
表有唯一索引stu_id
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('student_info').add({
    data: {
      stu_id: event.stu_id,
      name: event.name,
      grade: event.grade,
      age: event.age,
      gender: event.gender,
      department: event.department,
      major: event.major
    }
  })}