<?php
/**
* 接收客户端
*/
header('Content-Type: application/json;charset=UTF-8');

@$uname = $_REQUEST['uname'] or die('{"code":401,"msg":"uname required"}');
@$gender=$_REQUEST['gender'];
@$upwd = $_REQUEST['upwd'] or die('{"code":402,"msg":"upwd required"}');
@$upwdcn = $_REQUEST['upwdcn'] or die('{"code":403,"msg":"upwdcn required"}');
@$phone = $_REQUEST['phone'] or die('{"code":404,"msg":"phone required"}');

require_once('../init.php');
$sql = "INSERT INTO meet_user(uname,gender,upwd,phone) VALUES('$uname','$gender','$upwd','$phone')";
$result = mysqli_query($conn,$sql);

if(!$result){
  echo('{"code":500, "msg":"db execute err"}');
}else {
  $uid = mysqli_insert_id($conn);
  echo('{"code":200, "msg":"register succ", "uid":'.$uid.'}');
}