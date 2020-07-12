/* 
云函数：check_stu_del_stu.js
删除check_info_stu表中
对应学号stu_id的信息
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('check_info_stu')
    .where({
      stu_id: event.stu_id
    }).remove()
  } catch(e) {
    console.error(e)
  }
}