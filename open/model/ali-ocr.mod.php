<?php
include_once IA_ROOT . '/addons/runner_open/libs/alibaba/Util/Autoloader.php';

class AliOcrModel
{
    public $appKey = '24908078';
    public $appSecret = 'bbf4252501346e3bb74478d7b27bb5bf';
    public $appCode = '3d59bfc34ad44b9c93ae5d0b5d527212';
    public $url = 'https://ocrcp.market.alicloudapi.com/rest/160601/ocr/ocr_vehicle_plate.json';
    public $is_old_format = false;

    public $stat;

    public function __construct($base64, $isOldFormat = false)
    {
        $this->base64 = $base64;
        $this->is_old_format = $isOldFormat;
        $this->request();
    }

    public function getStat()
    {
        return $this->stat;
    }

    public function request()
    {
        $base64 = $this->base64;
        $config = array(
            "multi_crop" => false,
        );
        if ($this->is_old_format == true) {
            $request = array();
            $request["image"] = array(
                "dataType" => 50,
                "dataValue" => "$base64",
            );
            if (count($config) > 0) {
                $request["configure"] = array(
                    "dataType" => 50,
                    "dataValue" => json_encode($config),
                );
            }
            $body = json_encode(array("inputs" => array($request)));
        } else {
            $request = array(
                "image" => "$base64",
            );
            if (count($config) > 0) {
                $request["configure"] = json_encode($config);
            }
            $body = json_encode($request);
        }
        $response = doPost($this->url, $this->appKey, $this->appSecret, $body);
        $this->stat = $response->getHttpStatusCode();
    }
}

function doPost($url, $appKey, $appSecret, $bodyContent)
{
    //域名后、query前的部分
    $urlEles = parse_url($url);
    $host = $urlEles["scheme"] . "://" . $urlEles["host"];
    $path = $urlEles["path"];
    $request = new HttpRequest($host, $path, HttpMethod::POST, $appKey, $appSecret);

    //设定Content-Type，根据服务器端接受的值来设置
    $request->setHeader(HttpHeader::HTTP_HEADER_CONTENT_TYPE, ContentType::CONTENT_TYPE_JSON);

    //设定Accept，根据服务器端接受的值来设置
    $request->setHeader(HttpHeader::HTTP_HEADER_ACCEPT, ContentType::CONTENT_TYPE_JSON);

    //注意：业务body部分，不能设置key值，只能有value
    if (0 < strlen($bodyContent)) {
        $request->setHeader(HttpHeader::HTTP_HEADER_CONTENT_MD5, base64_encode(md5($bodyContent, true)));
        $request->setBodyString($bodyContent);
    }

    //指定参与签名的header
    $request->setSignHeader(SystemHeader::X_CA_TIMESTAMP);
    $response = HttpClient::execute($request);
    return $response;
}
