/* 
云函数：cur_add_stu.js
传入的参数curr_id, stu_id, actual, should
在stu_cur中添加记录
当前课程编号，要加入的学生学号，（先判断是不是已经选修了）
学生实际的签到次数（可以弄个默认值0），
应当签到的次数（从之前的页面上获得）
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "dadaqiandao-p86hz"
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  // 在stu_cur表中插入新签到信息
  return await db.collection('stu_cur').add({
    data: {
      curr_id: event.curr_id,
      stu_id: event.stu_id,
      actual: event.actual,
      should: event.should
    }
  })}