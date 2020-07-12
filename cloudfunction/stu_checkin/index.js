/* 
云函数：stu_checkin.js
学生对课程进行签到
传入参数: stu_id, curr_id, check_date, check_time
loc, stu_info --这两项可以为空，需要判断签到要求，在前端完成
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
var _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  // 在check_info_stu表中插入新签到信息
  const addResult = await db.collection('check_info_stu').add({
    data: {
      curr_id: event.curr_id,
      check_date: event.check_date,
      stu_id: event.stu_id,
      check_time: event.check_time,
      loc: event.loc,
      stu_info: event.stu_info
    }
  })
  // 更新stu_cur中对应的实际签到次数actual+1
  const incResult = await db.collection('stu_cur')
  .where({
    stu_id: event.stu_id,
    curr_id: event.curr_id
  })
  .update({
    data: {
      actual: _.inc(1)
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