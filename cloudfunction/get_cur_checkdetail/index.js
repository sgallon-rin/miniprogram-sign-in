/* 
云函数：get_cur_checkdetail.js
根据传入的参数curr_id，
获取该课程的信息，和一个列表checkList
是这个课程发布的每次签到信息列表
总签到次数请通过checkList长度获得（这样就不用再连接stu_cur表了
*/
// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  return db.collection("curriculum_info").aggregate()
  .match({
    curr_id: event.curr_id
  })
  .lookup({
    from: 'check_info_curr',
    localField: 'curr_id',
    foreignField: 'curr_id',
    as: 'checkList',
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