<?php




require_once __DIR__ . '/Model.php';

class Newsletter extends Model {
    protected string $table = 'newsletter';

    


    public function subscribe(string $email): bool {
        $existing = $this->findBy('email', $email);

        if ($existing) {
            if (!$existing['is_active']) {
                $this->update($existing['id'], [
                    'is_active'       => 1,
                    'unsubscribed_at' => null
                ]);
            }
            return true;
        }

        return $this->create([
            'email'     => $email,
            'is_active' => 1
        ]) > 0;
    }

    


    public function unsubscribe(string $email): bool {
        $existing = $this->findBy('email', $email);
        if ($existing) {
            return $this->update($existing['id'], [
                'is_active'       => 0,
                'unsubscribed_at' => date('Y-m-d H:i:s')
            ]) > 0;
        }
        return false;
    }
}
