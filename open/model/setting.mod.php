<?php

class SettingModel
{
    public $table = 'runner_open_setting';
    public $code = '';
    public function __construct($code)
    {
        $this->code = $code;
    }

    public function get()
    {
        global $_W;
        $item = pdo_get($this->table, array('code' => $this->code, 'uniacid' => $_W['uniacid']));
        if (empty($item)) {
            return array();
        } else {
            return unserialize($item['value']);
        }
    }

    public function checkExist(){
        global $_W;
        $item = pdo_get($this->table, array('code' => $this->code, 'uniacid' => $_W['uniacid']));
        if (empty($item)) {
            return array();
        } else {
            return $item;
        }
    }

    public function add($value)
    {
        global $_W;
        $data = array();
        $data['code'] = $this->code;
        $data['value'] = serialize($value);
        $data['uniacid'] = $_W['uniacid'];
        $item = $this->checkExist();
        if (empty($item)) {
            pdo_insert($this->table, $data);
        } else {
            pdo_update($this->table, $data, array('id' => $item['id']));
        }
    }
}
