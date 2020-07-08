/* 
云函数：stu_del.js
删除student_info中对应学号stu_id的学生信息
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "dadaqiandao-p86hz"
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  //return await db.collection('student_info').where({
  //  stu_id: event.stu_id
  //})
  //.remove({})}
  try {
    return await db.collection('student_info').where({
      stu_id: event.stu_id
    }).remove()
  } catch(e) {
    console.error(e)
  }
  /*try {
    return await db.collection('student_info').doc(
      event._id
    ).remove()
  } catch(e) {
    console.error(e)
  }*/
}