/* 
云函数：cur_del.js
删除curriculum_info中对应课程号curr_id的信息
没办法连带删除stu_cur, check_info_cur, 
check_info_stu中涉及该课程的信息
请同时调用以下全部:
stu_cur_del_cur,
check_cur_del,
check_stu_del_cur
（经过尝试，一个函数同时删多张表记录无法正常调用）
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
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
  /*
  // 在curriculum_info表中删除curr_id的信息
  const delResult_cur =  db.collection('curriculum_info')
  .where({
      curr_id: event.curr_id
    }).remove()
  // 在check_info_curr表中删除curr_id的签到信息
  const delResult_ciu = db.collection('check_info_curr')
  where({
    curr_id: event.curr_id
  }).remove()
  // 在check_info_stu表中删除curr_id的签到信息
  const delResult_cis = db.collection('check_info_stu')
  where({
    curr_id: event.curr_id
  }).remove()
  // 在stu_cur表中删除curr_id的选修记录信息
  const delResult_sc = db.collection('stu_cur')
  where({
    curr_id: event.curr_id
  }).remove()
  // 承载所有读操作的 promise 的数组
  const tasks = []
  tasks.push(delResult_cur)
  tasks.push(delResult_ciu)
  tasks.push(delResult_cis)
  tasks.push(delResult_sc)
  // 等待所有
  return (await Promise.all(tasks)).reduce((acc, cur) => {
    return {
      //data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }
  })*/
}