<?php
global $_W,$_GPC;
$input = $_GPC['__input'];
$serveId = $input['serveId'];
load()->model('account');
$account = uni_fetch();
$a = WeAccount::create($account);
$media = array(
    'type'=>'voice',
    'media_id'=>$serveId
);
$filename = $a->downloadMedia($media);
if(is_error($filename)){
    meepoError($filename['message'],$filename);
}
$file = tomedia($filename);
meepoSuccess('',$file);
