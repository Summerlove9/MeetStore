<?php
/**
* 获取当前登录用户的购物车内容
*/
session_start();
header('Content-Type: application/json;charset=UTF-8');
require_once('../init.php');

@$uid= $_SESSION['loginUid'];

if(!@$uid){
  die('{"code":300, "msg":"login required"}');
}

//获取总记录数
$sql = "SELECT iid,lid,(SELECT sm FROM flowers_pic WHERE lid=lid limit 1) as sm,title,count,price,is_checked FROM shoppingcart_item inner join flowers on lid=lid WHERE uid=$uid";

$result = mysqli_query($conn, $sql);
$list = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo $list;

