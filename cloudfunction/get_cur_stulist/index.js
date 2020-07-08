/* 
云函数：get_cur_stulist.js
根据传入的参数curr_id，
获取选修该课程的学生信息，包括姓名等个人信息和签到次数信息
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "dadaqiandao-p86hz"
})
const db = cloud.database()
var $ = db.command.aggregate   //定义聚合操作符

// 云函数入口函数
exports.main = async (event, context) => {
  return db.collection("stu_cur").aggregate()
  .match({
    curr_id: event.curr_id
  })
  .lookup({
    from: 'student_info',
    localField: 'stu_id',
    foreignField: 'stu_id',
    as: 'stuList',
  })
  .replaceRoot({  
      newRoot: $.mergeObjects([$.arrayElemAt(['$stuList', 0]), '$$ROOT'])
  }).project({
    stuList: 0
  })
  .end({
    success:function(res){
    return res;
    },
    fail(error) {
    return error;
    }
  })
}