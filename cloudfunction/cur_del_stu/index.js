/* 
云函数：cur_del_stu.js
传入的参数curr_id, stu_id
在stu_cur中删除记录
当前课程编号，要删除的学生学号
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "dadaqiandao-p86hz"
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  // 在stu_cur表中删除信息
    try {
      return await db.collection('stu_cur').where({
        curr_id: event.curr_id,
    stu_id: event.stu_id
      }).remove()
    } catch(e) {
      console.error(e)
    }
}