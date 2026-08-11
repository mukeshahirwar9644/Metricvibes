<?php




require_once __DIR__ . '/Model.php';

class Career extends Model {
    protected string $table = 'careers';

    


    public function getOpenPositions(): array {
        return $this->where("status = 'open'", [], "created_at DESC");
    }

    


    public function submitApplication(array $data): int {
        return Database::insert('job_applications', [
            'career_id'    => $data['career_id'] ?? null,
            'name'         => $data['name'],
            'email'        => $data['email'],
            'phone'        => $data['phone'] ?? null,
            'resume'       => $data['resume'] ?? null,
            'cover_letter' => $data['cover_letter'] ?? null,
            'status'       => 'new'
        ]);
    }
}
