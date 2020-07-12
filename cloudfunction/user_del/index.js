/* 
云函数：user_del.js
根据用户名username删除登录用户
## 请不要删除最后一个管理员用户！！！##
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "dadaqiandao-p86hz"
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('user_info').where({
      username: username
    }).remove()
  } catch(e) {
    console.error(e)
  }
}