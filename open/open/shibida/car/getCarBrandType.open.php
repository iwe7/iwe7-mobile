<?php
global $_W,$_GPC;

$id = intval($_GPC['id']);

$type = 'autoparts_car_type';

$list = pdo_getall($type,array('brand_id'=>$id));

meepoSuccess(0,$list);
