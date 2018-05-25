<?php
include_once IA_ROOT . '/addons/runner_open/libs/alibaba/Util/Autoloader.php';

global $_W, $_GPC;
$input = $_GPC['__input'];
$base64 = $input['file'];
$base64 = str_replace('data:image/png;base64,', '', $base64);
$base64 = str_replace('data:image/jpeg;base64,', '', $base64);

$url = "https://ocrcp.market.alicloudapi.com/rest/160601/ocr/ocr_vehicle_plate.json";
$appcode = "3d59bfc34ad44b9c93ae5d0b5d527212";
$appKey = '24908078';
$appSecret = 'bbf4252501346e3bb74478d7b27bb5bf';

$config = array("multi_crop" => false);
$request = array(
    "image" => "$base64",
);
if (count($config) > 0) {
    $request["configure"] = json_encode($config);
}
$body = json_encode($request);
$res = doPost($url, $appKey, $appSecret, $body);

meepoSuccess('', array(
    'base64' => $base64,
    'res' => $res,
    'body' => $body,
));

function doPost($url, $appKey, $appSecret, $bodyContent)
{
    $urlEles = parse_url($url);
    $host = $urlEles["scheme"] . "://" . $urlEles["host"];
    $path = $urlEles["path"];
    $request = new HttpRequest($host, $path, HttpMethod::POST, $appKey, $appSecret);
    $request->setHeader(HttpHeader::HTTP_HEADER_CONTENT_TYPE, ContentType::CONTENT_TYPE_JSON);
    $request->setHeader(HttpHeader::HTTP_HEADER_ACCEPT, ContentType::CONTENT_TYPE_JSON);
    if (0 < strlen($bodyContent)) {
        $request->setHeader(HttpHeader::HTTP_HEADER_CONTENT_MD5, base64_encode(md5($bodyContent, true)));
        $request->setBodyString($bodyContent);
    }
    $request->setSignHeader(SystemHeader::X_CA_TIMESTAMP);
    $response = HttpClient::execute($request);
    return $response;
}
