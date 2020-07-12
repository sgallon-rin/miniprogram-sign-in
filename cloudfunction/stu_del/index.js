/* 
云函数：stu_del.js
删除student_info中对应学号stu_id的学生信息
没办法连带删除stu_cur, check_info_stu中涉及该学生的信息
请同时调用以下全部:
stu_cur_del_stu,
check_stu_del_stu
（经过尝试，一个函数同时删多张表记录无法正常调用）
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
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
  /*// 在student_info表中删除stu_id的信息
  const delResult_stu =  db.collection('student_info')
  .where({
    stu_id: event.stu_id
  }).remove()
  // 在check_info_stu表中删除stu_id的签到信息
  const delResult_cis = db.collection('check_info_stu')
  where({
    stu_id: event.stu_id
  }).remove()
  // 在stu_cur表中删除stu_id的选修记录信息
  const delResult_sc = db.collection('stu_cur')
  where({
    stu_id: event.stu_id
  }).remove()
  // 承载所有读操作的 promise 的数组
  const tasks = []
  tasks.push(delResult_stu)
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