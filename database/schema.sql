-- ============================================================
-- Thilothana Makeup Artist - Comprehensive Database Schema
-- Location: Coimbatore, Tamil Nadu, India
-- Contact: (+91) 7695826978 | thilothanamakeupartist05@gmail.com
-- ============================================================

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+05:30";

-- --------------------------------------------------------
-- Table: admin_users
-- Stores studio administrator credentials and profiles
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL UNIQUE,
  `password_hash` varchar(255) NOT NULL,
  `full_name` varchar(100) NOT NULL DEFAULT 'Thilothana',
  `email` varchar(100) NOT NULL DEFAULT 'thilothanamakeupartist05@gmail.com',
  `role` varchar(20) NOT NULL DEFAULT 'Super Admin',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------
-- Table: site_content
-- Stores editable text, contact information, and branding copy
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `site_content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content_key` varchar(100) NOT NULL UNIQUE,
  `content_value` text NOT NULL,
  `section` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------
-- Table: services
-- Stores service catalog, features, pricing and category
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `category` varchar(50) NOT NULL,
  `price_estimate` varchar(50) NOT NULL,
  `duration` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `features` text NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `display_order` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------
-- Table: callback_requests
-- Stores incoming customer consultation and booking requests
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `callback_requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `category` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `event_date` date DEFAULT NULL,
  `description` text NOT NULL,
  `submitted_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` enum('Pending','In Progress','Completed','Cancelled') DEFAULT 'Pending',
  `admin_notes` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------
-- Table: completed_requests
-- Stores archived completed makeup sessions and client histories
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `completed_requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `original_request_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `category` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `description` text NOT NULL,
  `submitted_at` datetime NOT NULL,
  `completed_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `feedback` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------
-- Table: gallery_items
-- Stores portfolio images, categories, and titles
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `gallery_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `category` varchar(50) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------
-- Table: testimonials
-- Stores client reviews and ratings
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `testimonials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_name` varchar(100) NOT NULL,
  `event_type` varchar(100) NOT NULL,
  `rating` int(1) NOT NULL DEFAULT 5,
  `review` text NOT NULL,
  `location` varchar(100) DEFAULT 'Coimbatore',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- INITIAL SEED DATA / TEXT CONTENT MOVED TO DATABASE
-- ============================================================

-- Admin User (Password: admin123)
INSERT INTO `admin_users` (`id`, `username`, `password_hash`, `full_name`, `email`, `role`, `created_at`) VALUES
(1, 'admin', '$2y$10$e0MYzXyjpJS7Pd0RVvHwHeFvA8ZtPz3v9xY7F7ZKl8l9bW3C4b8b6', 'Thilothana (Owner & Master Artist)', 'thilothanamakeupartist05@gmail.com', 'Super Admin', NOW())
ON DUPLICATE KEY UPDATE `username`=`username`;

-- Site Text Content
INSERT INTO `site_content` (`content_key`, `content_value`, `section`, `description`) VALUES
('site_title', 'Thilothana Makeup Artist | Luxury Bridal, HD & Celebrity Makeup Studio Coimbatore', 'general', 'Browser title'),
('brand_name', 'Thilothana Makeup Artist', 'general', 'Studio brand name'),
('phone_number', '(+91) 7695826978', 'contact', 'Primary phone'),
('whatsapp_number', '917695826978', 'contact', 'Direct WhatsApp number'),
('email_address', 'thilothanamakeupartist05@gmail.com', 'contact', 'Primary email'),
('studio_address', 'Eachanari, Pollachi Main Road, Coimbatore, Tamil Nadu, India - 641021', 'contact', 'Studio location'),
('instagram_url', 'https://www.instagram.com/thilo__makeupartist?igsh=OGxuYXphMW81a3Zo', 'social', 'Instagram handle'),
('about_hero', 'At Thilothana Makeup Artist, we pride ourselves on delivering professional, affordable, and customer-satisfying makeup services for every occasion. From stunning bridal looks to glamorous celebrity transformations, party-ready styles, and natural everyday makeup, we ensure each client shines with confidence.', 'about', 'Main about paragraph'),
('founder_name', 'Thilothana', 'founder', 'Founder name'),
('founder_title', 'Owner & Certified Master Makeup Artist', 'founder', 'Founder title'),
('founder_bio', 'I am Thilothana, a professional and certified makeup artist specializing in customized looks for brides, celebrities, and anyone looking to enhance their natural beauty. With a passion for creativity and meticulous attention to detail, my mission is to make every client feel radiant, confident, and unforgettable on their most cherished days.', 'founder', 'Founder bio text');

-- Services Catalog
INSERT INTO `services` (`id`, `title`, `category`, `price_estimate`, `duration`, `description`, `features`, `image_url`, `display_order`) VALUES
(1, 'Bridal & Muhurtham Makeup', 'Bridal', '₹12,000 - ₹25,000', '3 - 4 Hours', 'Signature South Indian & North Indian bridal makeup with high-end waterproof, tear-proof formulations, traditional temple jewelry styling, and saree draping.', 'High-Definition Waterproof Makeup,Saree Draping & Pre-Pleating,Premium Lashes & Lenses,Floral Hair Artistry & Jewelry Setup,Touch-Up Kit Included', 'images/girl1.png', 1),
(2, 'Reception & Party Glam', 'Party', '₹6,000 - ₹12,000', '2 Hours', 'Dazzling cocktail and evening reception glam with sultry smokey eyes, winged liner, luminous highlighter, and contemporary hairstyle styling.', 'Smokey Eye & Winged Artistry,Long-Wear Luminous Base,Contour & Soft Glow Highlights,International Styling Trends,Custom Lip Shade Blending', 'images/girl2.png', 2),
(3, 'Pro HD & Glass Skin Makeup', 'HD', '₹7,500 - ₹15,000', '2.5 Hours', 'Ultra-refined camera-ready glass skin look that feels weightless and looks breathtaking under 4K video and photography lighting.', '4K Camera & Flash Proof Finish,Non-Cakey Featherlight Glow,Micro-Sculpting & Air-Dewy Effect,Luxury Skincare Prep Infusion,Feathered Natural Brow Architecture', 'images/girl3.png', 3),
(4, 'Maternity & Baby Shower', 'Event', '₹5,000 - ₹9,000', '2 Hours', 'Gentle, skin-friendly makeup designed for moms-to-be, enhancing natural pregnancy glow with calming, hypoallergenic luxury cosmetics.', 'Hypoallergenic & Clean Formulations,Soft Romantic Floral Hair Styling,Photogenic Natural Radiance,Comfort-First Experience,Saree or Gown Styling Assistance', 'images/gallery/beauty-03.jpg', 4),
(5, 'Engagement & Pre-Wedding', 'Bridal', '₹8,000 - ₹14,000', '2.5 Hours', 'Vibrant, picture-perfect aesthetics customized to complement your engagement lehenga, gown, or silk saree with flawless color coordination.', 'Personalized Theme Matching,Flawless HD Base with Sweat Resistance,Modern Floral Crown or Braid Decor,Airbrushed Blush & Shimmer Accents,Pre-Wedding Photoshoot Ready', 'images/gallery/bridal-02.jpg', 5),
(6, 'Hairstyling & Saree Draping', 'Styling', '₹2,500 - ₹5,000', '1 - 1.5 Hours', 'Expert saree draping in modern and traditional styles alongside intricate South Indian braids, messy buns, and Hollywood glam waves.', 'Traditional South Indian Poolajada,Modern Textured Buns & Waves,Ironing, Crimping & Extension Setting,Pin-Perfect Box Fold Saree Draping,Accessories Placement', 'images/gallary/extra-01.jpg', 6);

-- Sample Callback Requests
INSERT INTO `callback_requests` (`id`, `name`, `phone`, `category`, `address`, `event_date`, `description`, `submitted_at`, `status`, `admin_notes`) VALUES
(1, 'Priya Dharshini', '9840123456', 'Bridal MakeUp', 'RS Puram, Coimbatore', '2026-10-15', 'Looking for Muhurtham bridal makeup, saree draping and floral hairstyle for my morning wedding at Codissia hall.', '2026-09-22 10:15:00', 'Pending', 'Followed up via WhatsApp, awaiting venue confirmation.'),
(2, 'Kavitha R', '9789012345', 'Reception MakeUp', 'Saibaba Colony, Coimbatore', '2026-10-24', 'Evening reception party makeup with smokey eye look and modern hair waves.', '2026-09-23 14:30:00', 'Pending', 'Preferred evening slot after 4 PM.'),
(3, 'Ananya Sundaram', '9944112233', 'Pro HD MakeUp', 'Gandhipuram, Coimbatore', '2026-11-02', 'Need Pro HD makeup for pre-wedding outdoor photography shoot.', '2026-09-24 09:00:00', 'Pending', 'Trial requested.');

-- Sample Completed Requests
INSERT INTO `completed_requests` (`id`, `original_request_id`, `name`, `phone`, `category`, `address`, `description`, `submitted_at`, `completed_at`, `feedback`) VALUES
(1, 101, 'Sneha Krishnan', '9894001122', 'Bridal MakeUp', 'Peelamedu, Coimbatore', 'Traditional Muhurtham makeup with temple gold jewelry set.', '2026-08-10 11:20:00', '2026-08-16 13:00:00', 'Thilothana made me look like an absolute princess! The makeup stayed intact for 10+ hours in humid weather. Highly recommended!'),
(2, 102, 'Divya Mohan', '9786112244', 'Glass Skin MakeUp', 'Saravanampatti, Coimbatore', 'Glass skin dewy makeup for sister wedding event.', '2026-08-18 16:45:00', '2026-08-25 19:30:00', 'Skin looked so glowing and natural, everyone asked who my makeup artist was.');

-- Testimonials
INSERT INTO `testimonials` (`id`, `client_name`, `event_type`, `rating`, `review`, `location`) VALUES
(1, 'Nandhini Vijay', 'Muhurtham Bride', 5, 'Thilothana is a magician with brushes! My bridal makeup was beyond expectations. It looked ultra-natural in person and sensational in all 4K wedding photos. Thank you so much!', 'Coimbatore'),
(2, 'Swetha Ramanathan', 'Reception Glam', 5, 'Booking Thilothana was the best decision for my engagement and reception. Punctual, polite, and uses only high-end international makeup brands. 10/10 experience!', 'Pollachi'),
(3, 'Keerthana Prakash', 'Baby Shower', 5, 'The gentlest and most flattering makeup artist in Coimbatore. She understood exactly what I wanted and made me feel so comfortable during my pregnancy shoot.', 'Tirupur');

COMMIT;
