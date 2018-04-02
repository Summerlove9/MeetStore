<?php
/**
* 分页显示所有的商品
*/
header('Content-Type: application/json;charset=UTF-8');

@$kw = $_REQUEST['kw'];
@$pno = $_REQUEST['pno'];

$output = [
  'recordCount' => 0,     //满足条件的总记录数
  'pageSize' => 20,        //每页大小，即每页最多可以显示的记录数量
  'pageCount' => 0,       //总页数
  'pno' => $pno,          //当前数据所在页号
  'data' => null          //当前页中的数据
];
require_once('../init.php');
//获取总记录数
$sql = "SELECT COUNT(*) FROM flowers";
//关键词搜索
if($kw){
  $kw = urldecode($kw);
  $sql .= " WHERE name LIKE '%$kw%'";
}
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_row($result);
$output['recordCount'] = intval($row[0]);

//计算总页数
$output['pageCount'] = ceil($output['recordCount']/$output['pageSize']);

//获取指定页中的数据
$start = ($output['pno']-1)*$output['pageSize'];
$count = $output['pageSize'];
$sql = "SELECT lid,title,price,sold_count,is_onsale FROM flowers ". ($kw?"WHERE name LIKE '%$kw%'":"") ." ORDER BY lid LIMIT $start,$count";
$result = mysqli_query($conn,$sql);

if(!$result){       //SQL语句执行失败
  echo('{"code":500, "msg":"db execute err"}');
}else {
  $list = mysqli_fetch_all($result, MYSQLI_ASSOC);
  for($i=0; $i<count($list); $i++){
    $lid = $list[$i]['lid'];
    $sql = "SELECT md FROM flowers_pic WHERE lid=$lid LIMIT 0,1";
    $result = mysqli_query($conn, $sql);
    $list[$i]['pic'] = mysqli_fetch_row($result)[0];
  }
  $output['data'] = $list;
  echo json_encode($output);
}