/* 
云函数：stu_cur_del_cur.js
删除stu_cur表中
对应课程号curr_id的信息
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('stu_cur')
    .where({
      stu_id: event.stu_id
    }).remove()
  } catch(e) {
    console.error(e)
  }
}