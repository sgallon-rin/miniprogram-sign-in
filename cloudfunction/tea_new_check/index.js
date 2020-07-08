/*
云函数：tea_new_check.js
教师新建签到
传入参数: curr_id, check_date, start_time, end_time
needLoc, needText, curr_info(可以为空), title
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "dadaqiandao-p86hz"
})
const db = cloud.database()
var _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  // 在check_info_curr表中插入新签到信息
  const addResult = await db.collection('check_info_curr').add({
    data: {
      curr_id: event.curr_id,
      check_date: event.check_date,
      start_time: event.start_time,
      end_time: event.end_time,
      needLoc: event.needLoc,
      needText: event.needText,
      curr_info: event.curr_info,
      title: event.title
    }
  })
  // 更新stu_cur中对应课程的所有学生的应当签到次数should+1
  const incResult = await db.collection('stu_cur')
  .where({
    curr_id: event.curr_id
  })
  .update({
    data: {
      should: _.inc(1)
    }
  })
  // 承载所有读操作的 promise 的数组
  const tasks = []
  tasks.push(addResult)
  tasks.push(incResult)
  // 等待所有
  return (await Promise.all(tasks)).reduce((acc, cur) => {
    return {
      //data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }
  })
}