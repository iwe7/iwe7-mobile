<?php
class BmapGeoTableModel extends BmapBaseModel
{
    public function create($params)
    {
        return parent::post('create', $params);
    }

    function list($name = '') {
        $params = array();
        if (!empty($name)) {
            $params['name'] = $name;
        }
        return parent::get('list', $params);
    }

    public function detail($id)
    {
        $params = array();
        $params['id'] = $id;
        return parent::get('detail', $params);
    }

    public function delete($id)
    {
        $params = array();
        $params['id'] = $id;
        return parent::post('delete', $params);
    }

    // params name is_published id
    public function update($params)
    {
        return parent::post('update', $params);
    }

    public function getUrl($str = '')
    {
        return parent::getUrl('geodata/v3/geotable/' . $str);
    }

}
