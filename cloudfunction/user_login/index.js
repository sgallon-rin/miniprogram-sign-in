/* 
云函数：user_login.js
传入usermane, password
返回用户权限(1:学生, 2:教师/助教, 3:教务员(管理员，最高权限))
如果不存在用户名或密码错误，则返回为空
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "dadaqiandao-p86hz"
})
const db = cloud.database()

// 云函数入口函数
// 云函数入口函数
exports.main = async (event, context) => {
  return db.collection('user_info')
  .where({
    username: event.username,
    password: event.password
  })
  .get()
}