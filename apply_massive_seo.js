const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

// 1. Create robots.txt
const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin.html
Disallow: /login.html
Disallow: /database/
Disallow: /css/admin.css
Disallow: /css/login.css
Disallow: /js/admin.js
Disallow: /js/login.js

Sitemap: https://thilothanamakeupartist.com/sitemap.xml
`;
fs.writeFileSync(path.join(rootDir, 'robots.txt'), robotsTxt, 'utf8');
console.log('Created robots.txt');

// 2. Create sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://thilothanamakeupartist.com/</loc>
    <lastmod>2026-10-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://thilothanamakeupartist.com/images/logo.png</image:loc>
      <image:title>Thilothana Makeup Artist Coimbatore</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://thilothanamakeupartist.com/index.html</loc>
    <lastmod>2026-10-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://thilothanamakeupartist.com/booking.html</loc>
    <lastmod>2026-10-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://thilothanamakeupartist.com/gallery.html</loc>
    <lastmod>2026-10-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://thilothanamakeupartist.com/images/gallery/bridal-01.jpg</image:loc>
      <image:title>Royal Muhurtham South Indian Bride</image:title>
    </image:image>
    <image:image>
      <image:loc>https://thilothanamakeupartist.com/images/gallery/bridal-02.jpg</image:loc>
      <image:title>South Indian Bridal Artistry</image:title>
    </image:image>
  </url>
</urlset>
`;
fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapXml, 'utf8');
console.log('Created sitemap.xml');

// 3. Inject SEO metadata and JSON-LD schema into index.html
(function updateIndexSEO() {
    const indexPath = path.join(rootDir, 'index.html');
    let html = fs.readFileSync(indexPath, 'utf8');

    const indexHeadSEO = `      <!-- SEO & Site Metas -->
      <title>Thilothana Makeup Artist | Best Bridal &amp; HD Makeup in Coimbatore | Home Service</title>
      <meta name="description" content="Top-rated certified bridal makeup artist in Coimbatore. Luxury South Indian bridal, HD &amp; Glass Skin makeup, saree draping, and doorstep home makeup service all over Coimbatore. Book your slot today!">
      <meta name="keywords" content="makeup artist in coimbatore, bridal makeup coimbatore, home makeup artist coimbatore, doorstep bridal makeup coimbatore, best makeup artist coimbatore, hd bridal makeup coimbatore, south indian bridal makeup, muhurtham makeup coimbatore, party makeup artist coimbatore, eachanari makeup artist, pollachi bridal makeup, saree draping artist coimbatore, wedding makeup artist coimbatore, thilothana makeup artist">
      <meta name="author" content="Thilothana Makeup Artist">
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
      <link rel="canonical" href="https://thilothanamakeupartist.com/">
      <link rel="icon" href="images/fav.png" type="image/png">

      <!-- Local Geo Tags for Coimbatore, Tamil Nadu -->
      <meta name="geo.region" content="IN-TN">
      <meta name="geo.placename" content="Coimbatore, Eachanari, Tamil Nadu, India">
      <meta name="geo.position" content="10.9322;76.9741">
      <meta name="ICBM" content="10.9322, 76.9741">

      <!-- Open Graph (Facebook, WhatsApp, Instagram) -->
      <meta property="og:locale" content="en_IN">
      <meta property="og:type" content="website">
      <meta property="og:title" content="Thilothana Makeup Artist | Best Bridal &amp; HD Makeup in Coimbatore">
      <meta property="og:description" content="Certified master bridal makeup artist in Coimbatore. 16-hr sweat-proof HD bridal makeup, saree draping &amp; doorstep home makeup services all over Coimbatore.">
      <meta property="og:url" content="https://thilothanamakeupartist.com/">
      <meta property="og:site_name" content="Thilothana Makeup Artist">
      <meta property="og:image" content="https://thilothanamakeupartist.com/images/logo1.png">
      <meta property="og:image:alt" content="Thilothana Makeup Artist Logo">

      <!-- Twitter Card Meta -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="Thilothana Makeup Artist | Best Bridal &amp; HD Makeup in Coimbatore">
      <meta name="twitter:description" content="Luxury South Indian bridal, HD makeup, saree draping, and doorstep home makeup service all over Coimbatore.">
      <meta name="twitter:image" content="https://thilothanamakeupartist.com/images/logo1.png">

      <!-- Schema.org JSON-LD Structured Data: LocalBusiness, BeautySalon, FAQ, Website -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["BeautySalon", "ProfessionalService", "LocalBusiness"],
            "@id": "https://thilothanamakeupartist.com/#business",
            "name": "Thilothana Makeup Artist",
            "url": "https://thilothanamakeupartist.com/",
            "logo": "https://thilothanamakeupartist.com/images/logo.png",
            "image": "https://thilothanamakeupartist.com/images/logo1.png",
            "description": "Certified Master Makeup Artist in Coimbatore specializing in South Indian bridal makeup, HD waterproof makeup, hair styling, saree draping, and doorstep home makeup services all over Coimbatore.",
            "telephone": "+917695826978",
            "email": "thilothanamakeupartist05@gmail.com",
            "priceRange": "₹₹",
            "currenciesAccepted": "INR",
            "paymentAccepted": "Cash, UPI, Google Pay, PhonePe, Net Banking",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Eachanari, Pollachi Main Road",
              "addressLocality": "Coimbatore",
              "addressRegion": "Tamil Nadu",
              "postalCode": "641021",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 10.9322,
              "longitude": 76.9741
            },
            "areaServed": [
              { "@type": "AdministrativeArea", "name": "Coimbatore" },
              { "@type": "AdministrativeArea", "name": "Eachanari" },
              { "@type": "AdministrativeArea", "name": "Pollachi" },
              { "@type": "AdministrativeArea", "name": "Saravanampatti" },
              { "@type": "AdministrativeArea", "name": "RS Puram" },
              { "@type": "AdministrativeArea", "name": "Peelamedu" },
              { "@type": "AdministrativeArea", "name": "Gandhipuram" },
              { "@type": "AdministrativeArea", "name": "Singanallur" },
              { "@type": "AdministrativeArea", "name": "Kuniyamuthur" },
              { "@type": "AdministrativeArea", "name": "Tiruppur" },
              { "@type": "AdministrativeArea", "name": "Tamil Nadu" }
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "07:00",
                "closes": "21:00"
              }
            ],
            "sameAs": [
              "https://www.instagram.com/thilo__makeupartist?igsh=OGxuYXphMW81a3Zo"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "128",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Makeup & Styling Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bridal & Muhurtham HD Makeup",
                    "description": "Signature South Indian bridal makeup with high-grade waterproof formulations, temple jewelry coordination, and saree draping."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Reception & Party Glamour Look",
                    "description": "Red carpet evening transformation with smokey eyes, sculpted contouring, and modern hairstyles."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Doorstep Home Makeup Service",
                    "description": "Full mobile studio vanity setup delivered directly to homes and venues all over Coimbatore."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Saree Draping & Hair Artistry",
                    "description": "Traditional South Indian poolajada braid decor, modern textured waves, and pin-sharp box saree pleating."
                  }
                }
              ]
            }
          },
          {
            "@type": "FAQPage",
            "@id": "https://thilothanamakeupartist.com/#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How early should I reserve my wedding or event date?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Because auspicious muhurtham dates fill up quickly, we recommend reserving your bridal date 2 to 6 months in advance. Dates are reserved on a first-come, first-confirmed basis."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide home makeup and doorstep services all over Coimbatore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We offer doorstep home makeup services all over Coimbatore as well as on-site services at wedding halls, private residences, and event venues with our complete professional mobile vanity setup."
                }
              },
              {
                "@type": "Question",
                "name": "Are saree draping and hair styling included in your bridal packages?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, absolutely. Our signature bridal packages provide a complete head-to-toe transformation including pre-pleating, precision box saree draping, hair floral arrangement (poolajada), and authentic temple jewellery placement."
                }
              },
              {
                "@type": "Question",
                "name": "Is the makeup waterproof and sweat-resistant for long rituals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We use specialized HD barrier primers, sweat-proof base formulations, and setting mists that last 14 to 18 hours through bright stage lights, humidity, and emotional moments without cracking or fading."
                }
              },
              {
                "@type": "Question",
                "name": "Can I book a pre-wedding consultation or trial session?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, personalized consultations and trial sessions are available at our Coimbatore studio to preview your customized look, discuss jewelry coordination, and perfect the finish beforehand."
                }
              }
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://thilothanamakeupartist.com/#website",
            "url": "https://thilothanamakeupartist.com/",
            "name": "Thilothana Makeup Artist",
            "publisher": {
              "@id": "https://thilothanamakeupartist.com/#business"
            }
          }
        ]
      }
      </script>`;

    // Replace the old title and site metas block in head
    const oldHeadMetaRegex = /<!-- site metas -->[\s\S]*?<link rel="icon" href="images\/fav\.png" type="image\/png">/;
    html = html.replace(oldHeadMetaRegex, indexHeadSEO);

    fs.writeFileSync(indexPath, html, 'utf8');
    console.log('Injected massive SEO & Schema.org JSON-LD into index.html');
})();

// 4. Inject SEO metadata and JSON-LD schema into booking.html
(function updateBookingSEO() {
    const bookingPath = path.join(rootDir, 'booking.html');
    let html = fs.readFileSync(bookingPath, 'utf8');

    const bookingHeadSEO = `      <!-- SEO & Site Metas -->
      <title>Book Bridal Makeup Appointment in Coimbatore | Thilothana Makeup Artist</title>
      <meta name="description" content="Book professional bridal, HD, reception, party, and doorstep home makeup services with Thilothana Makeup Artist in Coimbatore. Check availability and reserve your date.">
      <meta name="keywords" content="book makeup artist coimbatore, bridal makeup booking coimbatore, doorstep home makeup appointment, wedding makeup reservation, thilothana makeup artist appointment">
      <meta name="author" content="Thilothana Makeup Artist">
      <meta name="robots" content="index, follow, max-image-preview:large">
      <link rel="canonical" href="https://thilothanamakeupartist.com/booking.html">
      <link rel="icon" href="images/fav.png" type="image/png">

      <!-- Local Geo Tags -->
      <meta name="geo.region" content="IN-TN">
      <meta name="geo.placename" content="Coimbatore, Tamil Nadu, India">
      <meta name="geo.position" content="10.9322;76.9741">
      <meta name="ICBM" content="10.9322, 76.9741">

      <!-- Open Graph -->
      <meta property="og:locale" content="en_IN">
      <meta property="og:type" content="website">
      <meta property="og:title" content="Book Appointment | Thilothana Makeup Artist Coimbatore">
      <meta property="og:description" content="Reserve your bridal, reception, or occasion makeup date. Doorstep home makeup service available all over Coimbatore.">
      <meta property="og:url" content="https://thilothanamakeupartist.com/booking.html">
      <meta property="og:site_name" content="Thilothana Makeup Artist">
      <meta property="og:image" content="https://thilothanamakeupartist.com/images/logo1.png">

      <!-- Twitter Card -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="Book Makeup Appointment | Thilothana Makeup Artist Coimbatore">
      <meta name="twitter:description" content="Reserve your bridal, reception, or occasion makeup date in Coimbatore.">
      <meta name="twitter:image" content="https://thilothanamakeupartist.com/images/logo1.png">

      <!-- Schema.org JSON-LD -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Book Appointment | Thilothana Makeup Artist",
        "url": "https://thilothanamakeupartist.com/booking.html",
        "description": "Online booking and inquiry reservation portal for bridal, HD, and doorstep home makeup artistry in Coimbatore.",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Thilothana Makeup Artist",
          "url": "https://thilothanamakeupartist.com/"
        }
      }
      </script>`;

    const oldHeadMetaRegex = /<!-- site metas -->[\s\S]*?<link rel="icon" href="images\/fav\.png" type="image\/png">/;
    html = html.replace(oldHeadMetaRegex, bookingHeadSEO);

    fs.writeFileSync(bookingPath, html, 'utf8');
    console.log('Injected massive SEO into booking.html');
})();

// 5. Inject SEO metadata and JSON-LD schema into gallery.html
(function updateGallerySEO() {
    const galleryPath = path.join(rootDir, 'gallery.html');
    let html = fs.readFileSync(galleryPath, 'utf8');

    const galleryHeadSEO = `      <!-- SEO & Site Metas -->
      <title>Bridal Makeup Portfolio &amp; Gallery Coimbatore | Thilothana Makeup Artist</title>
      <meta name="description" content="Explore real bride transformations, South Indian bridal looks, reception glam, and hair artistry by Thilothana Makeup Artist in Coimbatore. High-definition portfolio.">
      <meta name="keywords" content="bridal makeup gallery coimbatore, south indian bridal portfolio, muhurtham bride photos coimbatore, thilothana makeup portfolio, hd makeup transformations">
      <meta name="author" content="Thilothana Makeup Artist">
      <meta name="robots" content="index, follow, max-image-preview:large">
      <link rel="canonical" href="https://thilothanamakeupartist.com/gallery.html">
      <link rel="icon" href="images/fav.png" type="image/png">

      <!-- Local Geo Tags -->
      <meta name="geo.region" content="IN-TN">
      <meta name="geo.placename" content="Coimbatore, Tamil Nadu, India">
      <meta name="geo.position" content="10.9322;76.9741">
      <meta name="ICBM" content="10.9322, 76.9741">

      <!-- Open Graph -->
      <meta property="og:locale" content="en_IN">
      <meta property="og:type" content="website">
      <meta property="og:title" content="Bridal Makeup Portfolio Gallery | Thilothana Makeup Artist Coimbatore">
      <meta property="og:description" content="View stunning bridal and reception makeup transformations by certified artist Thilothana in Coimbatore.">
      <meta property="og:url" content="https://thilothanamakeupartist.com/gallery.html">
      <meta property="og:site_name" content="Thilothana Makeup Artist">
      <meta property="og:image" content="https://thilothanamakeupartist.com/images/gallery/bridal-01.jpg">

      <!-- Twitter Card -->
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="Bridal Makeup Portfolio Gallery | Thilothana Makeup Artist">
      <meta name="twitter:description" content="View stunning bridal and reception makeup transformations in Coimbatore.">
      <meta name="twitter:image" content="https://thilothanamakeupartist.com/images/gallery/bridal-01.jpg">

      <!-- Schema.org JSON-LD -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Thilothana Bridal Makeup Portfolio Gallery",
        "url": "https://thilothanamakeupartist.com/gallery.html",
        "description": "High-definition bridal, muhurtham, reception, and event makeup portfolio by Thilothana in Coimbatore."
      }
      </script>`;

    const oldHeadMetaRegex = /<!-- site metas -->[\s\S]*?<link rel="icon" href="images\/fav\.png" type="image\/png">/;
    html = html.replace(oldHeadMetaRegex, galleryHeadSEO);

    fs.writeFileSync(galleryPath, html, 'utf8');
    console.log('Injected massive SEO into gallery.html');
})();
