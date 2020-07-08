/* 
云函数：get_stu_curr_check.js
根据传入的参数stu_id，
获取该学生的选修课程和对应的签到次数信息 
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
  .lookup({
    from:"curriculum_info",
    localField: 'curr_id',
    foreignField: 'curr_id',
    as: 'currInfo'
  }).match({
    stu_id: event.stu_id
  }).replaceRoot({  
    //replaceRoot指定一个已有字段作为输出的根节点，也可以指定一个计算出的新字段作为根节点。
    //newRoot  代表新的根节点
      newRoot: $.mergeObjects([$.arrayElemAt(['$currInfo', 0]), '$$ROOT'])
      //mergeObjects 累计器操作符
      //$.mergeObjects([params1,params2...]) 可以合并多个元素
      //$.arrayElemAt(['$uapproval', 0]), '$$ROOT']
      //就是取uapproval数组的第一个元素，与原始的根融合在一起
  }).project({
    //project把指定的字段传递给下一个流水线，指定的字段可以是某个已经存在的字段，也可以是计算出来的新字段
    currInfo: 0
  }).end({
    success:function(res){
    return res;
    },
    fail(error) {
    return error;
    }
  })
}

