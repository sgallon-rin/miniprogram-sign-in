/* 教师号功能尚未实装
云函数：tea_add.js
向teacher_info加入新的教师/助教信息
表有唯一索引tea_id
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
  return await db.collection('teacher_info').add({
    data: {
      tea_id: event.tea_id,
      name: event.name,
      age: event.age,
      gender: event.gender,
      department: event.department,
      type: event.type
    }
  })}