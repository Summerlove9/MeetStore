<?php
/**
* 添加到购物车
*/
header('Content-Type: application/json;charset=UTF-8');
require_once('../init.php');
@$lid = $_REQUEST['lid'] or die('{"code":401,"msg":"lid required"}');

session_start();
if(! @$_SESSION['loginUid']){
  $_SESSION['toBuyLid'] = $lid;
  die('{"code":300, "msg":"login required"}');
}

$sql = "SELECT iid FROM shoppingcart_item WHERE uid=$_SESSION[loginUid] AND lid=$lid";
$result = mysqli_query($conn, $sql);
if( mysqli_fetch_row($result) ){
  $sql = "UPDATE shoppingcart_item SET count=count+1 WHERE uid=$_SESSION[loginUid] AND lid=$lid";
}else {
  $sql = "INSERT INTO shoppingcart_item VALUES(NULL, $_SESSION[loginUid], $lid, 1, false)";
}
$result = mysqli_query($conn, $sql);
if($result){
  echo '{"code":200, "msg":"add succ"}';
}else {
  echo '{"code":500, "msg":"add err"}';
}
