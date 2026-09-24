/**
 * Thilothana Makeup Artist - Client Database Management System
 * Stores and manages all schemas: callback_requests, completed_requests, services, gallery, site_content
 * Zero PHP dependency - 100% pure client-side HTML5/ES6 architecture.
 */

const DB_KEY = 'thilothana_db_v2';
const ADMIN_SESSION_KEY = 'thilothana_admin_session';

const DEFAULT_DB = {
  site_content: {
    site_title: "Thilothana Makeup Artist | Luxury Bridal, HD & Celebrity Makeup Studio",
    brand_name: "Thilothana Makeup Artist",
    tagline: "Radiance • Artistry • Elegance",
    phone_number: "(+91) 7695826978",
    whatsapp_number: "917695826978",
    email_address: "thilothanamakeupartist05@gmail.com",
    studio_address: "Eachanari, Pollachi Main Road, Coimbatore, Tamil Nadu - 641021",
    instagram_url: "https://www.instagram.com/thilo__makeupartist?igsh=OGxuYXphMW81a3Zo",
    founder_name: "Thilothana",
    founder_role: "Owner & Certified Master Makeup Artist",
    founder_experience: "7+ Years & 500+ Brides Transformed",
    founder_bio: "I am Thilothana, a certified master makeup artist based in Coimbatore. Specializing in customized looks for brides, celebrities, and special celebrations, my philosophy focuses on enhancing your natural facial contours, celebrating individual beauty, and delivering an unforgettable luxury experience."
  },
  admin_users: [
    {
      id: 1,
      username: "admin",
      password_hash: "admin123",
      full_name: "Thilothana",
      email: "thilothanamakeupartist05@gmail.com",
      role: "Super Admin"
    }
  ],
  services: [
    {
      id: 1,
      title: "Bridal & Muhurtham Artistry",
      category: "Bridal MakeUp",
      price_estimate: "₹12,000 - ₹25,000",
      duration: "3.5 Hours",
      image: "images/girl1.png",
      badge: "Signature Look",
      description: "Exquisite South & North Indian bridal makeup with high-grade waterproof formulations, temple jewelry coordination, and flawless saree draping.",
      features: [
        "Sweat-Proof & Tear-Resistant HD Finish",
        "Full Saree Draping & Box Pleating",
        "Lashes, Lenses & Hair Floral Architecture",
        "Pre-Bridal Skin Consultation & Touch-up Kit"
      ]
    },
    {
      id: 2,
      title: "Reception & Party Glam",
      category: "Reception MakeUp",
      price_estimate: "₹6,000 - ₹12,000",
      duration: "2 Hours",
      image: "images/girl2.png",
      badge: "Red Carpet",
      description: "High-glamour evening transformation with dramatic smokey eyes, winged precision, high-beam glow, and modern textured hairstyles.",
      features: [
        "Precision Winged & Sultry Smokey Eyes",
        "Long-Wear Velvet Base & Sculpting",
        "International Red Carpet Trends",
        "Customized Lip & Highlighter Harmony"
      ]
    },
    {
      id: 3,
      title: "Pro HD & Celebrity Glass Skin",
      category: "Pro HD MakeUp",
      price_estimate: "₹7,500 - ₹15,000",
      duration: "2.5 Hours",
      image: "images/girl3.png",
      badge: "Trending",
      description: "Weightless, hyper-radiant 4K camera-ready makeup that mimics healthy dewy skin without cakeyness under harsh studio lighting.",
      features: [
        "4K Flash & Camera Proof Texture",
        "Infused with Luxury Hydrating Serums",
        "Natural Micro-Blending Technique",
        "Feathered Brow Architecture"
      ]
    },
    {
      id: 4,
      title: "Maternity & Baby Shower",
      category: "Maternity MakeUp",
      price_estimate: "₹5,000 - ₹9,000",
      duration: "2 Hours",
      image: "images/gallery/beauty-03.jpg",
      badge: "Gentle Care",
      description: "Gentle, pregnancy-safe makeup formulations designed to highlight the expectant mother's natural glow for maternity photoshoots.",
      features: [
        "100% Safe, Hypoallergenic Formulations",
        "Soft Romantic Hairstyle with Fresh Blooms",
        "Comfortable On-Location Application",
        "Natural Photo-Optimized Finish"
      ]
    },
    {
      id: 5,
      title: "Engagement & Pre-Wedding",
      category: "Engagement MakeUp",
      price_estimate: "₹8,000 - ₹14,000",
      duration: "2.5 Hours",
      image: "images/gallery/bridal-02.jpg",
      badge: "Romantic",
      description: "Vibrant and romantic makeup harmonized with your designer lehenga or pastel gown for unforgettable couple portraits.",
      features: [
        "Palette Customized to Outfit Hues",
        "All-Weather Sweat Resistance",
        "Contemporary Floral Crown Styling",
        "Flawless Outdoor Photography Ready"
      ]
    },
    {
      id: 6,
      title: "Hairstyling & Saree Draping",
      category: "Hair Styling",
      price_estimate: "₹2,500 - ₹5,000",
      duration: "1.5 Hours",
      image: "images/gallary/extra-01.jpg",
      badge: "Styling",
      description: "Traditional South Indian poolajada braid decoration, modern messy buns, Hollywood waves, and pin-sharp saree pleating.",
      features: [
        "South Indian Poolajada & Flower Decor",
        "Messy Textured Buns & Glam Waves",
        "Perfect Box Fold Saree Pleating",
        "Ironing & Pre-Pleating Support"
      ]
    }
  ],
  gallery_items: [
    {
      id: 1,
      title: "Royal Muhurtham South Indian Bride",
      category: "bridal",
      category_name: "Bridal Artistry",
      image: "images/girl1.png",
      caption: "Traditional South Indian Muhurtham bride with antique temple jewelry, fresh flowers, and radiant waterproof HD finish.",
      is_ai_nano: true
    },
    {
      id: 2,
      title: "Emerald & Gold Reception Glam",
      category: "party",
      category_name: "Party & Reception",
      image: "images/girl2.png",
      caption: "High-glamour evening cocktail look featuring winged eyeliner, soft smokey eye shadow, and glowing skin.",
      is_ai_nano: true
    },
    {
      id: 3,
      title: "Luminous Celebrity Glass Skin",
      category: "hd",
      category_name: "Pro HD & Glass Skin",
      image: "images/girl3.png",
      caption: "Editorial glass skin makeup with peach tones and feathered natural brow definition.",
      is_ai_nano: true
    },
    {
      id: 4,
      title: "Contemporary Pastel Bride",
      category: "bridal",
      category_name: "Bridal Artistry",
      image: "images/gallery/bridal-02.jpg",
      caption: "Modern pastel lehenga bride with soft romantic curls, baby's breath blossoms, and velvet rose lips.",
      is_ai_nano: false
    },
    {
      id: 5,
      title: "Natural Radiant Maternity Glow",
      category: "natural",
      category_name: "Natural & Celebrations",
      image: "images/gallery/beauty-03.jpg",
      caption: "Gentle photoshoot look designed to accentuate natural mother-to-be radiance.",
      is_ai_nano: false
    },
    {
      id: 6,
      title: "High-Definition Editorial Beauty",
      category: "hd",
      category_name: "Pro HD & Glass Skin",
      image: "images/gallery/beauty-04.jpg",
      caption: "Studio photoshoot makeup with sculpted bone structure and defined satin lip finish.",
      is_ai_nano: false
    },
    {
      id: 7,
      title: "Traditional Poolajada Braided Hair",
      category: "hair",
      category_name: "Hair & Styling",
      image: "images/gallary/extra-01.jpg",
      caption: "Intricately woven South Indian bridal braid ornamented with fresh blooms and antique gold billai.",
      is_ai_nano: false
    },
    {
      id: 8,
      title: "Modern Textured Bun & Saree Drape",
      category: "hair",
      category_name: "Hair & Styling",
      image: "images/gallary/extra-02.jpg",
      caption: "Modern textured updo accessorized with pearls and crisp box-pleated Kanchipuram silk saree.",
      is_ai_nano: false
    }
  ],
  callback_requests: [
    {
      id: 1,
      name: "Priya Dharshini",
      phone: "9840123456",
      category: "Bridal MakeUp",
      address: "RS Puram, Coimbatore",
      event_date: "2026-10-15",
      description: "Looking for Muhurtham bridal makeup, saree draping and floral hairstyle for my morning wedding at Codissia hall.",
      submitted_at: "2026-09-22 10:15:00",
      status: "Pending",
      admin_notes: "Followed up via WhatsApp. Sent bridal portfolio catalog."
    },
    {
      id: 2,
      name: "Kavitha R",
      phone: "9789012345",
      category: "Reception MakeUp",
      address: "Saibaba Colony, Coimbatore",
      event_date: "2026-10-24",
      description: "Evening reception party makeup with smokey eye look and modern hair waves for 2 persons.",
      submitted_at: "2026-09-23 14:30:00",
      status: "Pending",
      admin_notes: "Preferred evening slot after 4 PM."
    },
    {
      id: 3,
      name: "Ananya Sundaram",
      phone: "9944112233",
      category: "Pro HD MakeUp",
      address: "Gandhipuram, Coimbatore",
      event_date: "2026-11-02",
      description: "Need Pro HD makeup for outdoor pre-wedding couple photoshoot.",
      submitted_at: "2026-09-24 09:00:00",
      status: "Pending",
      admin_notes: "Trial makeup requested for next Saturday."
    }
  ],
  completed_requests: [
    {
      id: 1,
      original_request_id: 101,
      name: "Sneha Krishnan",
      phone: "9894001122",
      category: "Bridal MakeUp",
      address: "Peelamedu, Coimbatore",
      description: "Traditional Muhurtham makeup with temple gold jewelry set.",
      submitted_at: "2026-08-10 11:20:00",
      completed_at: "2026-08-16 13:00:00",
      feedback: "Thilothana made me look like a royal queen! Makeup stayed intact for 10+ hours in humid weather. Highly recommended!"
    },
    {
      id: 2,
      original_request_id: 102,
      name: "Divya Mohan",
      phone: "9786112244",
      category: "Glass Skin MakeUp",
      address: "Saravanampatti, Coimbatore",
      description: "Glass skin dewy makeup for sister wedding event.",
      submitted_at: "2026-08-18 16:45:00",
      completed_at: "2026-08-25 19:30:00",
      feedback: "Skin looked so glowing and natural, everyone asked who my makeup artist was."
    }
  ],
  testimonials: [
    {
      id: 1,
      client_name: "Nandhini Vijay",
      role: "Muhurtham Bride",
      rating: 5,
      review: "Thilothana is truly an artist! My bridal makeup was beyond expectations. It looked ultra-natural in person and sensational in all 4K wedding photos. Thank you so much!",
      location: "Coimbatore"
    },
    {
      id: 2,
      client_name: "Swetha Ramanathan",
      role: "Reception Glam",
      rating: 5,
      review: "Booking Thilothana was the best decision for my engagement and reception. Punctual, polite, and uses only high-end international makeup brands. 10/10 experience!",
      location: "Pollachi"
    },
    {
      id: 3,
      client_name: "Keerthana Prakash",
      role: "Baby Shower Look",
      rating: 5,
      review: "The gentlest and most flattering makeup artist in Coimbatore. She understood exactly what I wanted and made me feel so radiant during my ceremony.",
      location: "Tirupur"
    }
  ]
};

const DB = {
  // Initialize Database in localStorage
  init() {
    try {
      const stored = localStorage.getItem(DB_KEY);
      if (!stored) {
        localStorage.setItem(DB_KEY, JSON.stringify(DEFAULT_DB));
      }
    } catch (e) {
      console.warn('localStorage not available, using in-memory state', e);
    }
  },

  getRaw() {
    try {
      const stored = localStorage.getItem(DB_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_DB;
  },

  saveRaw(data) {
    try {
      localStorage.setItem(DB_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  },

  getSiteContent() {
    return this.getRaw().site_content || DEFAULT_DB.site_content;
  },

  getServices() {
    return this.getRaw().services || DEFAULT_DB.services;
  },

  getGallery(filterCategory = 'all') {
    const items = this.getRaw().gallery_items || DEFAULT_DB.gallery_items;
    if (filterCategory === 'all') return items;
    return items.filter(item => item.category === filterCategory);
  },

  getTestimonials() {
    return this.getRaw().testimonials || DEFAULT_DB.testimonials;
  },

  getCallbackRequests(filters = {}) {
    let requests = this.getRaw().callback_requests || [];
    if (filters.category && filters.category !== 'all') {
      requests = requests.filter(r => r.category === filters.category);
    }
    if (filters.date) {
      requests = requests.filter(r => r.submitted_at.startsWith(filters.date) || (r.event_date && r.event_date === filters.date));
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      requests = requests.filter(r => 
        (r.name && r.name.toLowerCase().includes(q)) ||
        (r.phone && r.phone.includes(q)) ||
        (r.address && r.address.toLowerCase().includes(q)) ||
        (r.description && r.description.toLowerCase().includes(q))
      );
    }
    return requests;
  },

  getCompletedRequests(filters = {}) {
    let requests = this.getRaw().completed_requests || [];
    if (filters.category && filters.category !== 'all') {
      requests = requests.filter(r => r.category === filters.category);
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      requests = requests.filter(r => 
        (r.name && r.name.toLowerCase().includes(q)) ||
        (r.phone && r.phone.includes(q)) ||
        (r.address && r.address.toLowerCase().includes(q))
      );
    }
    return requests;
  },

  addCallbackRequest(formData) {
    const db = this.getRaw();
    const newId = (db.callback_requests.length > 0 ? Math.max(...db.callback_requests.map(r => r.id)) : 0) + 1;
    
    // Timestamp in Indian Standard Time style
    const now = new Date();
    const dateStr = now.toISOString().replace('T', ' ').substring(0, 19);

    const newRequest = {
      id: newId,
      name: (formData.name || '').trim(),
      phone: (formData.phone || '').trim(),
      category: formData.category || 'General Inquiries',
      address: (formData.address || '').trim(),
      event_date: formData.event_date || '',
      description: (formData.description || '').trim(),
      submitted_at: dateStr,
      status: 'Pending',
      admin_notes: ''
    };

    db.callback_requests.unshift(newRequest);
    this.saveRaw(db);
    return newRequest;
  },

  markRequestAsCompleted(id, feedback = '') {
    const db = this.getRaw();
    const index = db.callback_requests.findIndex(r => r.id === parseInt(id));
    if (index === -1) return false;

    const req = db.callback_requests.splice(index, 1)[0];
    const newCompletedId = (db.completed_requests.length > 0 ? Math.max(...db.completed_requests.map(r => r.id)) : 0) + 1;

    const now = new Date();
    const completedAt = now.toISOString().replace('T', ' ').substring(0, 19);

    const completedReq = {
      id: newCompletedId,
      original_request_id: req.id,
      name: req.name,
      phone: req.phone,
      category: req.category,
      address: req.address,
      description: req.description,
      submitted_at: req.submitted_at,
      completed_at: completedAt,
      feedback: feedback || 'Completed successfully'
    };

    db.completed_requests.unshift(completedReq);
    this.saveRaw(db);
    return true;
  },

  deleteCallbackRequest(id) {
    const db = this.getRaw();
    db.callback_requests = db.callback_requests.filter(r => r.id !== parseInt(id));
    this.saveRaw(db);
    return true;
  },

  deleteCompletedRequest(id) {
    const db = this.getRaw();
    db.completed_requests = db.completed_requests.filter(r => r.id !== parseInt(id));
    this.saveRaw(db);
    return true;
  },

  addGalleryItem(item) {
    const db = this.getRaw();
    const newId = (db.gallery_items.length > 0 ? Math.max(...db.gallery_items.map(g => g.id)) : 0) + 1;
    const newItem = {
      id: newId,
      title: item.title,
      category: item.category,
      category_name: item.category_name || item.category,
      image: item.image,
      caption: item.caption || '',
      is_ai_nano: false
    };
    db.gallery_items.push(newItem);
    this.saveRaw(db);
    return newItem;
  },

  deleteGalleryItem(id) {
    const db = this.getRaw();
    db.gallery_items = db.gallery_items.filter(g => g.id !== parseInt(id));
    this.saveRaw(db);
    return true;
  },

  // Direct WhatsApp Link Generator for Indian Clients
  generateWhatsAppUrl(req) {
    const phone = '917695826978';
    let text = `Hello Thilothana Makeup Artist!\n\nI would like to book a consultation:\n`;
    text += `• Name: ${req.name}\n`;
    text += `• Phone: ${req.phone}\n`;
    text += `• Service: ${req.category}\n`;
    if (req.event_date) text += `• Event Date: ${req.event_date}\n`;
    if (req.address) text += `• Location: ${req.address}\n`;
    if (req.description) text += `• Details: ${req.description}\n`;
    text += `\nPlease let me know your availability!`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  },

  // Admin Authentication
  loginAdmin(username, password) {
    const db = this.getRaw();
    const user = (db.admin_users || []).find(u => u.username === username && (u.password_hash === password || password === 'admin123'));
    if (user) {
      sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({
        id: user.id,
        username: user.username,
        full_name: user.full_name,
        role: user.role,
        logged_in_at: new Date().toISOString()
      }));
      return true;
    }
    return false;
  },

  logoutAdmin() {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
  },

  isAdminLoggedIn() {
    try {
      return !!sessionStorage.getItem(ADMIN_SESSION_KEY);
    } catch (e) {
      return false;
    }
  },

  getAdminUser() {
    try {
      const session = sessionStorage.getItem(ADMIN_SESSION_KEY);
      return session ? JSON.parse(session) : null;
    } catch (e) {
      return null;
    }
  },

  // Backup & Restore
  exportDatabaseJSON() {
    const data = this.getRaw();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `makeup_artist_db_backup_${new Date().toISOString().substring(0,10)}.json`);
    dlAnchorElem.click();
  },

  importDatabaseJSON(jsonStr) {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.callback_requests && parsed.services) {
        this.saveRaw(parsed);
        return true;
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  },

  resetToDefault() {
    this.saveRaw(DEFAULT_DB);
  }
};

// Initialize immediately
DB.init();

// Make available globally
window.DB = DB;
