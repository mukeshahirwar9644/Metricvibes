-- ============================================================
-- MetricVibes — Database Schema
-- MySQL 8.0+ | Complete schema for all modules
-- ============================================================

SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;
SET collation_connection = 'utf8mb4_unicode_ci';

CREATE DATABASE IF NOT EXISTS `metricvibes`
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE `metricvibes`;

-- ============================================================
-- Users (Admin Panel)
-- ============================================================
CREATE TABLE IF NOT EXISTS `users` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(150) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM('super_admin', 'admin', 'editor', 'viewer') NOT NULL DEFAULT 'editor',
    `avatar` VARCHAR(255) DEFAULT NULL,
    `is_active` TINYINT(1) NOT NULL DEFAULT 1,
    `last_login` DATETIME DEFAULT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_users_email` (`email`),
    INDEX `idx_users_role` (`role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Blogs
-- ============================================================
CREATE TABLE IF NOT EXISTS `blogs` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL UNIQUE,
    `excerpt` TEXT DEFAULT NULL,
    `content` LONGTEXT DEFAULT NULL,
    `featured_image` VARCHAR(255) DEFAULT NULL,
    `category` VARCHAR(100) DEFAULT NULL,
    `tags` JSON DEFAULT NULL,
    `author_id` INT UNSIGNED DEFAULT NULL,
    `status` ENUM('draft', 'published', 'archived') NOT NULL DEFAULT 'draft',
    `is_featured` TINYINT(1) NOT NULL DEFAULT 0,
    `meta_title` VARCHAR(255) DEFAULT NULL,
    `meta_description` TEXT DEFAULT NULL,
    `views` INT UNSIGNED NOT NULL DEFAULT 0,
    `published_at` DATETIME DEFAULT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_blogs_slug` (`slug`),
    INDEX `idx_blogs_status` (`status`),
    INDEX `idx_blogs_category` (`category`),
    INDEX `idx_blogs_featured` (`is_featured`),
    FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Case Studies
-- ============================================================
CREATE TABLE IF NOT EXISTS `case_studies` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL UNIQUE,
    `client_name` VARCHAR(150) DEFAULT NULL,
    `industry` VARCHAR(100) DEFAULT NULL,
    `featured_image` VARCHAR(255) DEFAULT NULL,
    `challenge` TEXT DEFAULT NULL,
    `solution` TEXT DEFAULT NULL,
    `results` TEXT DEFAULT NULL,
    `metrics` JSON DEFAULT NULL,
    `technologies` JSON DEFAULT NULL,
    `status` ENUM('draft', 'published', 'archived') NOT NULL DEFAULT 'draft',
    `is_featured` TINYINT(1) NOT NULL DEFAULT 0,
    `meta_title` VARCHAR(255) DEFAULT NULL,
    `meta_description` TEXT DEFAULT NULL,
    `display_order` INT NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_cs_slug` (`slug`),
    INDEX `idx_cs_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Testimonials
-- ============================================================
CREATE TABLE IF NOT EXISTS `testimonials` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `client_name` VARCHAR(100) NOT NULL,
    `client_title` VARCHAR(100) DEFAULT NULL,
    `company` VARCHAR(100) DEFAULT NULL,
    `country` VARCHAR(50) DEFAULT NULL,
    `photo` VARCHAR(255) DEFAULT NULL,
    `quote` TEXT NOT NULL,
    `rating` TINYINT UNSIGNED NOT NULL DEFAULT 5,
    `is_featured` TINYINT(1) NOT NULL DEFAULT 0,
    `status` ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
    `display_order` INT NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_testimonials_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Contact Messages
-- ============================================================
CREATE TABLE IF NOT EXISTS `contact_messages` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `phone` VARCHAR(30) DEFAULT NULL,
    `company` VARCHAR(100) DEFAULT NULL,
    `service` VARCHAR(100) DEFAULT NULL,
    `budget` VARCHAR(50) DEFAULT NULL,
    `message` TEXT NOT NULL,
    `status` ENUM('new', 'read', 'replied', 'archived') NOT NULL DEFAULT 'new',
    `ip_address` VARCHAR(45) DEFAULT NULL,
    `user_agent` TEXT DEFAULT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_contact_status` (`status`),
    INDEX `idx_contact_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Newsletter Subscribers
-- ============================================================
CREATE TABLE IF NOT EXISTS `newsletter` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `email` VARCHAR(150) NOT NULL UNIQUE,
    `is_active` TINYINT(1) NOT NULL DEFAULT 1,
    `subscribed_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `unsubscribed_at` DATETIME DEFAULT NULL,
    INDEX `idx_newsletter_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Careers / Job Postings
-- ============================================================
CREATE TABLE IF NOT EXISTS `careers` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL UNIQUE,
    `department` VARCHAR(100) DEFAULT NULL,
    `location` VARCHAR(100) DEFAULT NULL,
    `type` ENUM('full-time', 'part-time', 'contract', 'remote') NOT NULL DEFAULT 'full-time',
    `experience` VARCHAR(50) DEFAULT NULL,
    `description` LONGTEXT DEFAULT NULL,
    `requirements` JSON DEFAULT NULL,
    `benefits` JSON DEFAULT NULL,
    `salary_range` VARCHAR(100) DEFAULT NULL,
    `status` ENUM('open', 'closed', 'draft') NOT NULL DEFAULT 'draft',
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_careers_slug` (`slug`),
    INDEX `idx_careers_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Job Applications
-- ============================================================
CREATE TABLE IF NOT EXISTS `job_applications` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `career_id` INT UNSIGNED DEFAULT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `phone` VARCHAR(30) DEFAULT NULL,
    `resume` VARCHAR(255) DEFAULT NULL,
    `cover_letter` TEXT DEFAULT NULL,
    `status` ENUM('new', 'reviewed', 'shortlisted', 'rejected', 'hired') NOT NULL DEFAULT 'new',
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_applications_status` (`status`),
    FOREIGN KEY (`career_id`) REFERENCES `careers`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- SEO Settings (per-page)
-- ============================================================
CREATE TABLE IF NOT EXISTS `seo_settings` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `page_slug` VARCHAR(100) NOT NULL UNIQUE,
    `meta_title` VARCHAR(255) DEFAULT NULL,
    `meta_description` TEXT DEFAULT NULL,
    `meta_keywords` VARCHAR(255) DEFAULT NULL,
    `og_image` VARCHAR(255) DEFAULT NULL,
    `schema_data` JSON DEFAULT NULL,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Site Settings
-- ============================================================
CREATE TABLE IF NOT EXISTS `site_settings` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `setting_key` VARCHAR(100) NOT NULL UNIQUE,
    `setting_value` TEXT DEFAULT NULL,
    `setting_type` ENUM('text', 'textarea', 'image', 'boolean', 'json') NOT NULL DEFAULT 'text',
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Media Library
-- ============================================================
CREATE TABLE IF NOT EXISTS `media` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `filename` VARCHAR(255) NOT NULL,
    `original_name` VARCHAR(255) DEFAULT NULL,
    `file_path` VARCHAR(500) NOT NULL,
    `file_type` VARCHAR(50) DEFAULT NULL,
    `file_size` INT UNSIGNED DEFAULT NULL,
    `alt_text` VARCHAR(255) DEFAULT NULL,
    `uploaded_by` INT UNSIGNED DEFAULT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`uploaded_by`) REFERENCES `users`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Seed: Default Admin User
-- Password: MetricVibes2025! (bcrypt hashed)
-- ============================================================
INSERT INTO `users` (`name`, `email`, `password`, `role`, `is_active`) VALUES
('Admin', 'admin@metricvibes.com', '$2y$12$LJ3m1y5U8Q5YjVZ5vXZzOeM7Y.D9XyM1L4R2V8xK5pN3wQ7jA6mGe', 'super_admin', 1);

-- ============================================================
-- Seed: Default Site Settings
-- ============================================================
INSERT INTO `site_settings` (`setting_key`, `setting_value`, `setting_type`) VALUES
('site_name', 'MetricVibes', 'text'),
('site_tagline', 'Your Analytics, Cloud & AI Implementation Partner', 'text'),
('site_email', 'hello@metricvibes.com', 'text'),
('site_phone', '+1 (555) 123-4567', 'text'),
('site_address', '123 Analytics Drive, Suite 500, San Francisco, CA 94105', 'textarea'),
('whatsapp_number', '15551234567', 'text'),
('social_linkedin', 'https://linkedin.com/company/metricvibes', 'text'),
('social_twitter', 'https://twitter.com/metricvibes', 'text'),
('social_github', 'https://github.com/metricvibes', 'text'),
('social_youtube', 'https://youtube.com/@metricvibes', 'text'),
('maintenance_mode', '0', 'boolean');
