-- SQL中使用的查询语句（实际没有使用）

USE 微信点名系统
GO
/*CREATE TABLE 签到次数统计表
(学号 varchar(20) NOT NULL,
课程代码 varchar(20) NOT NULL,
实际签到次数 int DEFAULT(0),
应当签到次数 int DEFAULT(0)
)
GO
INSERT 签到次数统计表(学号,课程代码)
SELECT 学号,课程代码 FROM 选修表*/

/*ALTER TABLE 选修表
ADD CONSTRAINT 修读情况约束 DEFAULT('正在修读')FOR 修读情况*/
/*ALTER TABLE 签到表
ADD CONSTRAINT 签到情况约束 DEFAULT('未签到')FOR 签到情况*/
/*ALTER TABLE 签到表
ADD CONSTRAINT 签到时间约束 DEFAULT(0)FOR 签到时间*/
/*ALTER PROC log_in @学工号 varchar(20),@密码 varchar(50)
AS
IF EXISTS(SELECT*FROM 用户表 WHERE 用户名=@学工号)
 BEGIN
   IF(@密码=(SELECT 密码 FROM 用户表 WHERE 用户名=@学工号))
   PRINT '登录成功'
   ELSE PRINT '密码错误'
 END
 ELSE PRINT '学工号错误'*/
 
/*ALTER PROC sign_in @课程代码 varchar(20),@学号 varchar(20),@签到时间 smalldatetime,
 @起始时间 smalldatetime,@终止时间 smalldatetime
 AS
 IF EXISTS(SELECT*FROM 学生表 WHERE 学号=@学号)
 BEGIN
    IF EXISTS(SELECT*FROM 课程表 WHERE 课程代码=@课程代码)
    BEGIN
       IF(@签到时间>=@起始时间 AND @签到时间<=@终止时间)
       BEGIN
       UPDATE 签到表 SET 签到情况='已签到' FROM 签到表 
       WHERE 学号=@学号 AND 课程代码=@课程代码 AND 起始时间=@起始时间 AND 终止时间=@终止时间
       PRINT '签到成功！'
       END
       ELSE PRINT '签到时间已过'
    END
    ELSE PRINT '课程代码错误'   
 END
 ELSE PRINT '学号错误'*/
/* ALTER PROC stu_inq @学号 varchar(20),@课程代码 varchar(20)
 AS
 IF EXISTS(SELECT*FROM 选修表 WHERE 学号=@学号 AND 课程代码=@课程代码)
 SELECT*FROM 签到次数统计表 WHERE 学号=@学号 AND 课程代码=@课程代码
 ELSE PRINT '您未选修该课程'*/
/*ALTER PROC rele_sign @课程代码 varchar(20),@起始时间 smalldatetime,
 @终止时间 smalldatetime
 AS
 INSERT 签到表 (课程代码,学号,起始时间,终止时间) 
 SELECT 课程代码,学号,@起始时间,@终止时间
  FROM 选修表 WHERE 课程代码=@课程代码*/
 /*ALTER PROC  teach_inq @课程代码 varchar(20),@起始时间 smalldatetime,@终止时间 smalldatetime
 AS
 IF EXISTS(SELECT*FROM 签到表 WHERE 课程代码=@课程代码)
SELECT*FROM 签到次数统计表 WHERE 课程代码=@课程代码
 ELSE PRINT '课程代码输入有误'*/
 /*CREATE PROC add_stu @学号 varchar(20),@课程代码 varchar(20)
 AS
 INSERT 选修表(课程代码,学号)VALUES(@课程代码,@学号)*/
 /*CREATE PROC delete_stu @学号 varchar(20),@课程代码 varchar(20)
 AS
 DELETE FROM 选修表 WHERE 学号=@学号 AND 课程代码=@课程代码*/
/*CREATE TRIGGER 应当签到次数更新
 ON 签到表 FOR INSERT
 AS
 UPDATE 签到次数统计表
 SET 应当签到次数=应当签到次数+1 WHERE 课程代码=(SELECT 课程代码 FROM inserted GROUP BY 课程代码)*/
 /*CREATE TRIGGER 实际签到次数更新
 ON 签到表 FOR UPDATE
 AS
 UPDATE 签到次数统计表
 SET 实际签到次数=实际签到次数+1 
 WHERE 课程代码=(SELECT 课程代码 FROM inserted )
 AND 学号=(SELECT 学号 FROM inserted)*/
 
 
 
 
 
 
 
  
 
 
 
 
 
 
 
 
