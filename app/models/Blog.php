<?php




require_once __DIR__ . '/Model.php';

class Blog extends Model {
    protected string $table = 'blogs';

    


    public function getPublished(int $limit = 10, int $offset = 0): array {
        $sql = "SELECT b.*, u.name as author_name, u.avatar as author_avatar 
                FROM `{$this->table}` b 
                LEFT JOIN `users` u ON b.author_id = u.id 
                WHERE b.status = 'published' 
                ORDER BY b.published_at DESC, b.created_at DESC 
                LIMIT {$limit} OFFSET {$offset}";
        return Database::fetchAll($sql);
    }

    


    public function getFeatured(int $limit = 3): array {
        $sql = "SELECT b.*, u.name as author_name 
                FROM `{$this->table}` b 
                LEFT JOIN `users` u ON b.author_id = u.id 
                WHERE b.status = 'published' AND b.is_featured = 1 
                ORDER BY b.published_at DESC LIMIT {$limit}";
        return Database::fetchAll($sql);
    }

    


    public function getBySlug(string $slug): ?array {
        $sql = "SELECT b.*, u.name as author_name, u.avatar as author_avatar 
                FROM `{$this->table}` b 
                LEFT JOIN `users` u ON b.author_id = u.id 
                WHERE b.slug = :slug AND b.status = 'published' LIMIT 1";
        return Database::fetch($sql, ['slug' => $slug]);
    }

    


    public function incrementViews(int $id): void {
        $sql = "UPDATE `{$this->table}` SET views = views + 1 WHERE id = :id";
        Database::query($sql, ['id' => $id]);
    }
}
