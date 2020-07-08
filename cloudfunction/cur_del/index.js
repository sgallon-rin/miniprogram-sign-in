/* 
云函数：cur_del.js
删除curriculum_info中对应课程号curr_id的信息
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
    return await db.collection('curriculum_info').where({
      curr_id: event.curr_id
    }).remove()
  } catch(e) {
    console.error(e)
  }
}