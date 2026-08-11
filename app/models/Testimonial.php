<?php




require_once __DIR__ . '/Model.php';

class Testimonial extends Model {
    protected string $table = 'testimonials';

    


    public function getActive(int $limit = 10): array {
        return $this->where("status = 'active'", [], "display_order ASC, created_at DESC", $limit);
    }
}
