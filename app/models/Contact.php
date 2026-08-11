<?php




require_once __DIR__ . '/Model.php';

class Contact extends Model {
    protected string $table = 'contact_messages';

    


    public function storeMessage(array $data): int {
        return $this->create([
            'name'       => $data['name'],
            'email'      => $data['email'],
            'phone'      => $data['phone'] ?? null,
            'company'    => $data['company'] ?? null,
            'service'    => $data['service'] ?? null,
            'budget'     => $data['budget'] ?? null,
            'message'    => $data['message'],
            'status'     => 'new',
            'ip_address' => $_SERVER['REMOTE_ADDR'] ?? null,
            'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? null,
        ]);
    }

    


    public function getUnreadCount(): int {
        return $this->count("status = 'new'");
    }
}
