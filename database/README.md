# Thilothana Makeup Artist - Database Documentation

This directory contains the complete database schemas, data representations, and migrations for **Thilothana Makeup Artist** studio.

## Files

1. **`database.json`**:
   - Master JSON database used directly by the pure HTML/JavaScript frontend (`js/db.js`).
   - Enables full offline, serverless, and static-hosting operation (GitHub Pages, Netlify, Vercel, or local file system) without requiring a PHP interpreter or MySQL server.
   - Contains all initial site text, service packages, portfolio items, testimonials, admin users, and sample callback/completed requests.

2. **`schema.sql`** & **`../makeup_artist.sql`**:
   - Standard MySQL / MariaDB compatible relational database DDL and DML scripts.
   - Ready to import into phpMyAdmin, MySQL Workbench, or any cloud database (AWS RDS, PlanetScale, Supabase, etc.).

## Table Structure

| Table Name | Purpose | Primary Key |
|---|---|---|
| `admin_users` | Studio administrator credentials and roles | `id` |
| `site_content` | Dynamic studio text, contact info, and branding copy | `id` / `content_key` |
| `services` | Makeup service catalog with prices, durations, and features | `id` |
| `callback_requests` | Incoming customer booking inquiries & consultation requests | `id` |
| `completed_requests` | Historical records of completed makeup sessions with reviews | `id` |
| `gallery_items` | Portfolio photos, categories, and descriptions | `id` |
| `testimonials` | Customer ratings, reviews, and event categories | `id` |

## How to Import into MySQL / phpMyAdmin

If you choose to run a relational SQL database:
```bash
mysql -u root -p thilothana_makeup < database/schema.sql
```

## Client-Side HTML/JS Integration (`js/db.js`)

The website uses `js/db.js`, which automatically synchronizes with `localStorage` on first load. Any new callback request submitted by a visitor in `index.html` or `booking.html` is instantly stored and visible in `admin.html`.
