clouddata
云开发数据库测试数据

请在 微信开发者工具-->云开发控制台-->数据库 中新建同名集合，选择对应的json文件导入。

数据库中有以下表：（PK是主键）
所有表均包含_id列，是微信云开发json数据库自带的每条记录的唯一id

学生信息表 student_info 年龄是数字，其他都是字符串
stu_id 学号 PK
name 姓名
grade 年级
age 年龄
gender 性别
department 院系
major 专业

教师信息表 teacher_info 年龄是数字，其他都是字符串
-- tea_id 教师号 设计上是PK，尚未实装
name 姓名 PK
age 年龄
gender 性别
department 院系
type 类型（教师/助教）

学生选修课程+签到次数表 stu_cur 签到次数是数字，其余字符串
stu_id 学号 设计上是PK，但是不支持两列作为索引
curr_id 课程编号 设计上是PK，但是不支持两列作为索引
actual 实际签到次数
should 应当签到次数
--修读情况 可以不要？不考虑退课

课程信息表 curriculum_info 都是字符串
curr_id 课程编号 PK
curr_name 课程名称
curr_time 课程时间 （周四13：30-15：20）
teacher 教师 （应当用教师号代替）
ta 助教 （应当用教师号代替）
info 备注 null

课程签到信息表 check_info_curr
curr_id 课程编号 PK
check_date 签到日期 PK 2020-07-07
start_time 起始时间
end_time 终止时间
needLoc 需要地理位置 bool
needText 需要文字信息 bool
curr_info 教师备注 null
title 签到标题


学生签到信息表 check_info_stu
curr_id 课程编号 PK
check_date 签到日期 PK 2020-07-07
stu_id 学号 PK
check_time 签到时间 10:00 （学生的实际签到时间，需要判断是否在起始和终止时间之间）
loc 地理位置 null geopoint(经度,纬度) 可以展示但不实现？（根据needLoc判断是否必须）
stu_info 学生备注 （根据needText判断是否必须）


用户信息表 user_info
-- openid 用户的微信openid 设计上是PK，尚未实装
username 用户名 PK （学生使用学号，教师使用姓名（应当用教师号））
password 密码
permission 用户类型（决定权限）1:学生 2:授课教师、助教 3:教务员（管理员，拥有最高权限）
