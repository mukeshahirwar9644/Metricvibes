<?php





class Database {
    private static ?PDO $instance = null;
    private PDOStatement $stmt;

    private function __construct() {}
    private function __clone() {}

    


    public static function getInstance(): PDO {
        if (self::$instance === null) {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
            $options = [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ];

            try {
                self::$instance = new PDO($dsn, DB_USER, DB_PASS, $options);
            } catch (PDOException $e) {
                if (APP_DEBUG) {
                    die("Database Connection Error: " . $e->getMessage());
                } else {
                    die("A database connection error occurred. Please try again later.");
                }
            }
        }
        return self::$instance;
    }

    


    public static function query(string $sql, array $params = []): PDOStatement {
        $pdo = self::getInstance();
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        return $stmt;
    }

    


    public static function fetch(string $sql, array $params = []): ?array {
        $stmt = self::query($sql, $params);
        $result = $stmt->fetch();
        return $result !== false ? $result : null;
    }

    


    public static function fetchAll(string $sql, array $params = []): array {
        return self::query($sql, $params)->fetchAll();
    }

    


    public static function insert(string $table, array $data): int {
        $keys = array_keys($data);
        $fields = implode(', ', array_map(fn($k) => "`$k`", $keys));
        $placeholders = implode(', ', array_map(fn($k) => ":$k", $keys));

        $sql = "INSERT INTO `$table` ($fields) VALUES ($placeholders)";
        self::query($sql, $data);
        return (int) self::getInstance()->lastInsertId();
    }

    


    public static function update(string $table, array $data, string $where, array $whereParams = []): int {
        $setClauses = [];
        $params = [];

        foreach ($data as $key => $value) {
            $setClauses[] = "`$key` = :set_$key";
            $params["set_$key"] = $value;
        }

        $setSql = implode(', ', $setClauses);
        $sql = "UPDATE `$table` SET $setSql WHERE $where";

        $mergedParams = array_merge($params, $whereParams);
        $stmt = self::query($sql, $mergedParams);
        return $stmt->rowCount();
    }

    


    public static function delete(string $table, string $where, array $params = []): int {
        $sql = "DELETE FROM `$table` WHERE $where";
        $stmt = self::query($sql, $params);
        return $stmt->rowCount();
    }

    


    public static function beginTransaction(): bool {
        return self::getInstance()->beginTransaction();
    }

    


    public static function commit(): bool {
        return self::getInstance()->commit();
    }

    


    public static function rollBack(): bool {
        return self::getInstance()->rollBack();
    }
}
