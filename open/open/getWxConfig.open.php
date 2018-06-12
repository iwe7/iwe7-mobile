<?php
global $_W,$_GPC;
$unisetting = uni_setting_load();
if (!empty($unisetting['jsauth_acid'])) {
    $jsauth_acid = $unisetting['jsauth_acid'];
} else {
    if ($_W['account']['level'] < 3 && !empty($unisetting['oauth']['account'])) {
        $jsauth_acid = $unisetting['oauth']['account'];
    } else {
        $jsauth_acid = $_W['acid'];
    }
}
if (!empty($jsauth_acid)) {
    $account_api = WeAccount::create($jsauth_acid);
    if (!empty($account_api)) {
        $_W['account']['jssdkconfig'] = $account_api->getJssdkConfig();
        $_W['account']['jsauth_acid'] = $jsauth_acid;
    }
}
unset($jsauth_acid, $account_api);

$jssdkconfig = $_W['account']['jssdkconfig'];
$jssdkconfig['debug'] = false;
$jssdkconfig['jsApiList'] = array(
    'checkJsApi',
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'onMenuShareQQ',
    'onMenuShareWeibo',
    'hideMenuItems',
    'showMenuItems',
    'hideAllNonBaseMenuItem',
    'showAllNonBaseMenuItem',
    'translateVoice',
    'startRecord',
    'stopRecord',
    'onRecordEnd',
    'playVoice',
    'pauseVoice',
    'stopVoice',
    'uploadVoice',
    'downloadVoice',
    'chooseImage',
    'previewImage',
    'uploadImage',
    'downloadImage',
    'getNetworkType',
    'openLocation',
    'getLocation',
    'hideOptionMenu',
    'showOptionMenu',
    'closeWindow',
    'scanQRCode',
    'chooseWXPay',
    'openProductSpecificView',
    'addCard',
    'chooseCard',
    'openCard'
);

$shareconfig = array(
    'title'=> 'string',
    'link'=> 'string',
    'imgUrl'=> 'string',
    'desc'=>'string',
    'type'=> 'link',
    'dataUrl'=> 'string',
);

meepoSuccess('',array(
    'jssdkconfig'=>$jssdkconfig,
    'shareconfig'=>$shareconfig
));
