<?php




require_once __DIR__ . '/Model.php';

class User extends Model {
    protected string $table = 'users';

    


    public function authenticate(string $email, string $password): ?array {
        $user = $this->findBy('email', $email);

        if ($user && $user['is_active'] && password_verify($password, $user['password'])) {
            $this->update($user['id'], ['last_login' => date('Y-m-d H:i:s')]);
            unset($user['password']);
            return $user;
        }

        return null;
    }

    


    public function createUser(array $data): int {
        $data['password'] = password_hash($data['password'], PASSWORD_BCRYPT, ['cost' => BCRYPT_COST]);
        return $this->create($data);
    }
}
