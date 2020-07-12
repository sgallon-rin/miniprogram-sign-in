/* 
云函数：stu_info_part.js
根据传入参数 departmentList, genderList （院系列表、性别列表）
返回满足条件的学生的信息
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
var _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  //const wxContext = cloud.getWXContext()
  return db.collection('student_info')
  .where({
    gender: _.in(event.genderList),
    department: _.in(event.departmentList)
  })
  .get()
}