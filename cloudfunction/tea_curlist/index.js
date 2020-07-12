/*
云函数：tea_curlist.js
根据教师姓名查询他教的课程信息列表
传入参数: teacher
使用正则表达式判断，因为可能一节课有多个教师
把助教ta也当成教师teacher，即助教姓名也作为教师姓名传入
// 其实应该用用户id实现
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
var _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  return db.collection("curriculum_info")
  .where(_.or([
    {
      teacher: db.RegExp({
        regexp: event.teacher,
        options: 'i'
    })},
    {
      ta: db.RegExp({
        regexp: event.teacher,
        options: 'i'
    })}
  ]))
  .get({
    success:function(res){
    return res;
    },
    fail(error) {
    return error;
    }
  })
}


