/* 
云函数：user_add.js
向curriculum_info加入新的用户（这个功能只有管理员能用）
传入用户名（学生是学号，老师/助教是老师/助教号，管理员可随意命名）
默认密码 123456（密码是字符串）
表有唯一索引username
用户权限(1:学生, 2:教师/助教, 3:教务员(管理员，最高权限))
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('user_info').add({
    data: {
      username: event.username,
      password: "123456",
      permission: event.permission
    }
  })}