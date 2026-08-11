<?php




require_once __DIR__ . '/Model.php';

class Setting extends Model {
    protected string $table = 'site_settings';

    


    public function getAllAsKeyValue(): array {
        $settings = $this->all();
        $kv = [];
        foreach ($settings as $s) {
            $kv[$s['setting_key']] = $s['setting_value'];
        }
        return $kv;
    }

    


    public function getByKey(string $key, mixed $default = null): mixed {
        $setting = $this->findBy('setting_key', $key);
        return $setting ? $setting['setting_value'] : $default;
    }

    


    public function setKey(string $key, mixed $value, string $type = 'text'): void {
        $existing = $this->findBy('setting_key', $key);
        if ($existing) {
            $this->update($existing['id'], ['setting_value' => $value]);
        } else {
            $this->create([
                'setting_key'   => $key,
                'setting_value' => $value,
                'setting_type'  => $type
            ]);
        }
    }
}
