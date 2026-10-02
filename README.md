# Thilothana Makeup Artist Studio 💄✨

A luxury bridal, celebrity, and event makeup artist web platform built with a high-performance, modular, and serverless client-side architecture.

---

## 🌟 Key Features

- **Luxury Studio Showcase**: High-impact visual presentation of bridal transformations, HD makeup, reception looks, and hair styling.
- **Client Booking & Callback Inquiries**: Direct appointment booking and callback request forms with instant feedback modals.
- **Client-Side Database Engine (`js/db.js`)**:
  - Zero-backend dependency: Runs entirely on standard HTML5/ES6 and `localStorage`.
  - Offline-first: Data persists in the browser with full support for static hosts (GitHub Pages, Netlify, Vercel, Replit).
  - SQL & JSON portability: Comes with complete MySQL relational schemas (`database/schema.sql`) and master JSON fixtures (`database/database.json`).
- **Comprehensive Admin Control Panel**:
  - Filter inquiries by date, category, or customer name.
  - One-click workflow to mark inquiries as completed or delete records.
  - Live database backup (JSON export) and restore (JSON import).
- **Fully Responsive & Fast**: Optimized for all devices (smartphones, tablets, and high-DPI desktop screens).

---

## 📁 Project Directory Structure

```text
Makeup-Artist-Website/
├── .gitignore               # Standard exclusions (OS files, IDE configs, logs)
├── .replit                  # Replit cloud environment configuration
├── README.md                # Project documentation and developer guide
│
├── index.html               # Main landing page (Hero, Services, About, Callback)
├── booking.html             # Dedicated appointment booking page
├── gallery.html             # Portfolio gallery of bridal & event looks
├── login.html               # Secure administrator authentication page
├── admin.html               # Admin control panel for managing inquiries & data
│
├── css/                     # Modular stylesheets
│   ├── admin.css            # Styles for the admin dashboard
│   ├── bootstrap.min.css    # Bootstrap 4 grid & layout framework
│   ├── font-awesome.min.css # Font Awesome icon font styles
│   ├── login.css            # Styles for the admin login portal
│   ├── normalize.css        # Browser CSS reset
│   ├── responsive.css       # Mobile & tablet responsiveness rules
│   └── style.css            # Primary studio theme and branding styles
│
├── js/                      # JavaScript controllers & modules
│   ├── admin.js             # Admin dashboard controller (filtering, table actions, backup)
│   ├── db.js                # Core database layer (localStorage DAO & initial fixtures)
│   ├── login.js             # Admin login validation controller
│   └── main.js              # Client UI controller (preloader, smooth scroll, modal popups)
│
├── images/                  # Studio images & photography
│   ├── gallery/             # High-resolution portfolio images
│   ├── fav.png              # Site favicon
│   ├── logo.png             # Header brand logo
│   ├── logo1.png            # Footer brand logo
│   └── SOURCES.md           # Image attribution and photography credits
│
├── fonts/                   # Web fonts & icon sets
│   ├── fontawesome-webfont.woff2
│   ├── fontawesome-webfont.woff
│   ├── fontawesome-webfont.ttf
│   ├── fontawesome-webfont.eot
│   └── fontawesome-webfont.svg
│
└── database/                # Relational schemas & data backups
    ├── database.json        # Master initial data in JSON format
    ├── schema.sql           # MySQL/MariaDB DDL & DML relational tables
    └── README.md            # Database architecture and migration guide
```

---

## 🚀 How to Run Locally

Because this project is built with static web standards and a client-side database, **no PHP, Node.js runtime, or MySQL server is required** to use the website.

### Option 1: VS Code Live Server (Recommended)
1. Open the project folder in VS Code.
2. Install the **Live Server** extension (`ritwickdey.LiveServer`).
3. Right-click on `index.html` and click **"Open with Live Server"**.

### Option 2: Python Built-in Server
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option 3: Node.js (npx)
```bash
npx serve .
```

---

## 🔐 Admin Panel Access

1. Open `login.html` or navigate to `/login.html` in your browser.
2. Use the default administrator credentials:
   - **Username**: `admin`
   - **Password**: `admin123`
3. You will be redirected to `admin.html` where you can view pending inquiries, mark them as completed, filter records, or download a full JSON backup.

---

## 🛠️ Technology Stack

- **Markup**: Semantic HTML5 with complete SEO meta tags
- **Styling**: Modular Vanilla CSS3, CSS Grid, Flexbox, and Bootstrap 4
- **Scripting**: Modern Vanilla JavaScript (ES6+), jQuery (for Bootstrap components)
- **Data Persistence**: HTML5 `localStorage` via `js/db.js`
- **Typography & Icons**: Font Awesome 4.7, Google Fonts (*Playfair Display*, *Plus Jakarta Sans*)
