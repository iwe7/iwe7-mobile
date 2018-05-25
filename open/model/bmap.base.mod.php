<?php

class BmapBaseModel
{
    public $ak = 'yfx9dhiGcYuypSPoHLleHLZ5fFjuf2Ou';
    public $api = 'http://api.map.baidu.com/';
    public function __construct($ak = '')
    {
        $this->ak = !empty($ak) ? $ak : 'yfx9dhiGcYuypSPoHLleHLZ5fFjuf2Ou';
    }

    public function getUrl($str)
    {
        return $this->api . $str;
    }

    public function post($do, $params = array())
    {
        $params['ak'] = $this->ak;
        load()->func('communication');
        $url = $this->getUrl($do);
        $re = ihttp_post($url, $params);
        $content = json_decode($re['content'], true);
        return $content;
    }

    public function get($do, $params = array())
    {
        $params['ak'] = $this->ak;
        $url = $this->getUrl($do) . '?' . http_build_query($params);
        load()->func('communication');
        $re = ihttp_get($url);
        $content = json_decode($re['content'], true);
        return $content;
    }

    public function error()
    {}
}
