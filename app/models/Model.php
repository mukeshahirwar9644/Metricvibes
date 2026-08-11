<?php





abstract class Model {
    protected string $table;
    protected string $primaryKey = 'id';

    


    public function find(int $id): ?array {
        $sql = "SELECT * FROM `{$this->table}` WHERE `{$this->primaryKey}` = :id LIMIT 1";
        return Database::fetch($sql, ['id' => $id]);
    }

    


    public function findBy(string $column, mixed $value): ?array {
        $sql = "SELECT * FROM `{$this->table}` WHERE `{$column}` = :val LIMIT 1";
        return Database::fetch($sql, ['val' => $value]);
    }

    


    public function all(string $orderBy = 'id DESC', ?int $limit = null): array {
        $sql = "SELECT * FROM `{$this->table}` ORDER BY {$orderBy}";
        if ($limit !== null) {
            $sql .= " LIMIT {$limit}";
        }
        return Database::fetchAll($sql);
    }

    


    public function where(string $condition, array $params = [], string $orderBy = 'id DESC', ?int $limit = null): array {
        $sql = "SELECT * FROM `{$this->table}` WHERE {$condition} ORDER BY {$orderBy}";
        if ($limit !== null) {
            $sql .= " LIMIT {$limit}";
        }
        return Database::fetchAll($sql, $params);
    }

    


    public function create(array $data): int {
        return Database::insert($this->table, $data);
    }

    


    public function update(int $id, array $data): int {
        return Database::update($this->table, $data, "`{$this->primaryKey}` = :id", ['id' => $id]);
    }

    


    public function delete(int $id): int {
        return Database::delete($this->table, "`{$this->primaryKey}` = :id", ['id' => $id]);
    }

    


    public function count(string $condition = '1=1', array $params = []): int {
        $sql = "SELECT COUNT(*) as total FROM `{$this->table}` WHERE {$condition}";
        $row = Database::fetch($sql, $params);
        return (int) ($row['total'] ?? 0);
    }
}
