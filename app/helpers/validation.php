<?php





class Validation {
    private array $errors = [];

    



    public function validate(array $data, array $rules): bool {
        $this->errors = [];

        foreach ($rules as $field => $ruleString) {
            $value = isset($data[$field]) ? trim((string)$data[$field]) : '';
            $ruleList = explode('|', $ruleString);

            foreach ($ruleList as $rule) {
                $ruleParams = explode(':', $rule);
                $ruleName = $ruleParams[0];
                $param = $ruleParams[1] ?? null;

                if ($ruleName === 'required' && empty($value)) {
                    $this->errors[$field] = ucfirst(str_replace('_', ' ', $field)) . " is required.";
                    break;
                }

                if (!empty($value)) {
                    if ($ruleName === 'email' && !filter_var($value, FILTER_VALIDATE_EMAIL)) {
                        $this->errors[$field] = "Please enter a valid email address.";
                        break;
                    }

                    if ($ruleName === 'min' && strlen($value) < (int)$param) {
                        $this->errors[$field] = ucfirst(str_replace('_', ' ', $field)) . " must be at least {$param} characters.";
                        break;
                    }

                    if ($ruleName === 'max' && strlen($value) > (int)$param) {
                        $this->errors[$field] = ucfirst(str_replace('_', ' ', $field)) . " must not exceed {$param} characters.";
                        break;
                    }

                    if ($ruleName === 'numeric' && !is_numeric($value)) {
                        $this->errors[$field] = ucfirst(str_replace('_', ' ', $field)) . " must be numeric.";
                        break;
                    }
                }
            }
        }

        return empty($this->errors);
    }

    


    public function getErrors(): array {
        return $this->errors;
    }

    


    public function getFirstError(): ?string {
        return reset($this->errors) ?: null;
    }

    


    public static function sanitize(array $data): array {
        $sanitized = [];
        foreach ($data as $key => $value) {
            if (is_array($value)) {
                $sanitized[$key] = self::sanitize($value);
            } else {
                $sanitized[$key] = htmlspecialchars(trim((string)$value), ENT_QUOTES | ENT_HTML5, 'UTF-8');
            }
        }
        return $sanitized;
    }
}
