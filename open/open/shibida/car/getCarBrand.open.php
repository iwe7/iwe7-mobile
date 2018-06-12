<?php
// ini_set('display_errors', true);
// error_reporting(E_ALL);
global $_W,$_GPC;
$brand = 'autoparts_car_brand';
$type = 'autoparts_car_type';
$key = trim($_GPC['key']);
if(empty($key)){
    $sql = "SELECT name,initials,id FROM "
    .tablename($brand).
    " WHERE 1";
}else{
    $sql = "SELECT name,initials,id FROM "
    .tablename($brand).
    " WHERE name like '%${key}%'";
}


$parents = pdo_fetchall($sql);
$parents = array_group_by($parents,'initials');
meepoSuccess(0,$parents);


function array_group_by($arr, $key){
    $grouped = [];
    foreach ($arr as $value) {
        $grouped[$value[$key]][] = $value;
    }
    return $grouped;
}
