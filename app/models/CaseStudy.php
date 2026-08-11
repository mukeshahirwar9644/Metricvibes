<?php




require_once __DIR__ . '/Model.php';

class CaseStudy extends Model {
    protected string $table = 'case_studies';

    


    public function getPublished(int $limit = 6): array {
        return $this->where("status = 'published'", [], "display_order ASC, created_at DESC", $limit);
    }

    


    public function getFeatured(): ?array {
        $result = $this->where("status = 'published' AND is_featured = 1", [], "display_order ASC", 1);
        return $result[0] ?? null;
    }

    


    public function getBySlug(string $slug): ?array {
        return $this->findBy('slug', $slug);
    }
}
