/* 
云函数：get_stucurr_checkdetail.js
根据传入的参数stu_id, curr_id
获取对应学生对应课程的签到详细信息
返回的list里还有一个checkList，
是这个学生每次签到信息的列表 
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
var $ = db.command.aggregate   //定义聚合操作符
var _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  return db.collection("check_info_curr").aggregate()
  .match({
    curr_id: event.curr_id
  })
  .lookup({
    from: 'check_info_stu',
    let: {
      check_curr_id: '$curr_id',
      check_curr_date: '$check_date'
    },
    pipeline: $.pipeline()
      .match(_.expr($.and([
        $.eq(['$curr_id', '$$check_curr_id']),
        $.eq(['$check_date', '$$check_curr_date']),
        $.eq(['$stu_id', event.stu_id])
      ])))
      .done(),
    as: 'checkList',
  })
  //.match({
  //  stu_id: event.stu_id
  //})
  .end({
    success:function(res){
    return res;
    },
    fail(error) {
    return error;
    }
  })
}

