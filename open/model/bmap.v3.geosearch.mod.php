<?php

class BmapGeosearchModel extends BmapBaseModel
{
    public function nearby($params = array())
    {
        return parent::get('nearby', $params);
    }

    public function bound($params = array())
    {
        return parent::get('bound', $params);
    }

    public function local($params = array())
    {
        return parent::get('local', $params);
    }

    public function detail($id, $params = array())
    {
        return parent::get('detail/' . $id, $params);
    }

    public function getUrl($str = '')
    {
        return parent::getUrl('geosearch/v3/' . $str);
    }
}
