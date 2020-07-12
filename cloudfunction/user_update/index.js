/* 
云函数：user_update.js
更新用户的密码（用户自己可以操作）
传入用户名username、旧密码old_password、新密码new_password
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('user_info').where({
    username: event.username,
    password: event.old_password
  })
  .update({
    data: {
      password: event.new_password
    }
  })}