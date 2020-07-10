/* 
云函数：stu_cur_del_stu.js
删除stu_cur表中
对应学号stu_id的信息
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
    return await db.collection('stu_cur')
    .where({
      curr_id: event.curr_id
    }).remove()
  } catch(e) {
    console.error(e)
  }
}