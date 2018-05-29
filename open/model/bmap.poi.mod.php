<?php
class BmapPoiModel extends BmapBaseModel
{
    public function create($params = array())
    {
        return parent::post('create', $params);
    }

    function list($params = array()) {
        return parent::post('list', $params);
    }

    public function detail($id, $geotable_id)
    {
        $params = array();
        $params['id'] = $id;
        $params['geotable_id'] = $geotable_id;
        return parent::post('detail', $params);
    }

    public function update($params = array())
    {
        return parent::post('update', $params);
    }

    public function delete($params = array())
    {
        return parent::post('delete', $params);
    }

    public function upload($params = array())
    {
        return parent::post('delete', $params);
    }

    public function getUrl($str = '')
    {
        return parent::getUrl('geodata/v3/poi/' . $str);
    }
}
