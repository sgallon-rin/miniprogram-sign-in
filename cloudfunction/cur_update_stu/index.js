/* 
云函数：cur_update_stu.js
传入的参数curr_id, stu_id, actual, should
在stu_cur中更新对应学号
学生实际的签到次数、应当签到的次数（从之前的页面上获得）
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "dadaqiandao-p86hz"
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  // 在stu_cur表中更新签到次数
  return await db.collection('stu_cur').where({
    curr_id: event.curr_id,
    stu_id: event.stu_id
  })
  .update({
    data: {
      actual: event.actual,
      should: event.should
    }
  })}