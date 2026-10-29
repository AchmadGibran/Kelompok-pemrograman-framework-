# Master Prompt: React Portfolio Web Application (Editorial/Magazine Style)

## 📌 Context & Goal
Act as an expert Senior Frontend Developer and UI/UX Designer. Create a modern, responsive, and aesthetically stunning **Editorial Magazine-Style Portfolio Website** using **React** and **Tailwind CSS**. 

The design must strictly follow the provided reference layout: warm cream-toned background, bold typography, editorial layout, subtle borders, high contrast, and clean layout grids.

---

## 🛠 Tech Stack Requirements
* **Framework:** React (Vite)
* **Styling:** Tailwind CSS (configured with custom typography & colors)
* **Icons:** `lucide-react`
* **Fonts:**
  * **Headings / Serif:** Playfair Display, Cormorant Garamond, or Italiana (Google Fonts)
  * **Body / Sans:** Inter or Plus Jakarta Sans
  * **Signature / Accent:** Caveat or Great Vibes
* **Animations:** Framer Motion (smooth hover effects, page reveals, micro-interactions)

---

## 🎨 Design System & Color Palette

### Colors
* **Background Canvas:** `#F8F5F0` (Warm Cream / Vintage Paper)
* **Primary Text & Headers:** `#121212` / `#1A1A1A` (Deep Charcoal / Black)
* **Accent / Terracotta:** `#C25E40` or `#B85338` (Rusty Orange / Terracotta)
* **Card Backgrounds / Subtle Fills:** `#EFECE6` or `#FFFFFF`
* **Border Lines:** `#D1CCC0` (Thin, elegant divider lines)

### Typography Rules
* **Giant Header:** Bold, uppercase, condensed/tall serif font (`PORTFOLIO`).
* **Section Headers:** Elegant Serif, tracked out, uppercase or title case with primary terracotta accents.
* **Vertical Text Labels:** Sideways vertical text along the left and right margins for an authentic magazine feel.

---

## 📐 Detailed Section Breakdown

### 1. Top Navigation Bar (Editorial Header)
* **Left:** `✳ WEB DESIGNER`
* **Center/Sub:** `UI / UX DESIGN` and `WEB DEVELOPMENT` as thin vertical/horizontal margin labels.
* **Right:** `AVAILABLE FOR FREELANCE ⟶`

### 2. Hero Section
* **Background Graphic:** Large terracotta circle intersecting with the main hero image cutout.
* **Giant Text:** Massive **"PORTFOLIO"** text running horizontally across the top background.
* **Portrait Image:** Center-aligned cutout portrait of the developer with dark clothing and sunglasses.
* **Intro Content (Left Side):**
  * Subtitle: `HELLO, I'M`
  * Title: **`ALEX MORGAN`** (Large Serif)
  * Role: `WEB DESIGNER & DIGITAL CREATIVE` (Terracotta Color)
  * Bio Paragraph: *"I craft clean, modern, and user-focused websites that help brands stand out..."*
  * Signature Script font at the bottom: *Alex Morgan*
* **Stamp Accent (Right Side):** Circular badge graphic rotating slowly with text: `"AVAILABLE WORLDWIDE • OPEN FOR NEW PROJECTS"`.

### 3. Selected Projects Section
* **Header Bar:** 
  * Left: `SELECTED PROJECTS` (Large Serif Header)
  * Middle: Short description text.
  * Right: `VIEW ALL PROJECTS ⟶` (Clickable link/button)
* **Project Grid (4 Columns):**
  * Grid items featuring project thumbnails with thin dark borders, dark cards, and beige text previews.
  * Hover state: Slight zoom-in or tilt animation.
  * Card Details below thumbnail:
    * `01` | **Studio Form** | *Architecture Studio*
    * `02` | **Avenue & Co.** | *Luxury Fashion Brand*
    * `03` | **The Journal** | *Editorial Platform*
    * `04` | **Fuel Performance** | *Sports Nutrition Brand*

### 4. Skills & Expertise Section (Three-Column Layout)
* **Column 1 (Progress Bars / Rates):**
  * List with percentages: `UI/UX DESIGN (95%)`, `WEB DEVELOPMENT (90%)`, `BRANDING (85%)`, `RESPONSIVE DESIGN (90%)`, `INTERACTION DESIGN (80%)`, `CMS (WORDPRESS) (85%)`.
* **Column 2 (Center Quote Block):**
  * Large terracotta quotation marks `“ ”`
  * Statement: *"I design and build digital experiences that are not only beautiful but also functional, intuitive, and impactful."*
* **Column 3 (Feature Icon Cards):**
  * Minimalist icons with text:
    * 💻 **User-Centered Design**
    * `</>` **Clean & Modern Code**
    * 📱 **Fully Responsive**
    * 🚀 **Performance Driven**

### 5. What Clients Say (Testimonials Grid)
* **Header:** `WHAT CLIENTS SAY` + `Honest feedback from amazing clients...` + `MORE REVIEWS ⟶`
* **Cards (3 Columns):** Clean bordered cards with small avatar images, client names, roles, quotes, and quotation icon indicators.

### 6. Footer / Contact Section
* **Left:** Large Call-To-Action: `LET'S CREATE SOMETHING GREAT` with subtitle.
* **Center:** QR Code graphic container with "SCAN TO VISIT MY WEBSITE" text and playful arrow indicator.
* **Right:** Contact Details list with icons:
  * ✉️ `hello@alexmorgan.design`
  * 🌐 `www.alexmorgan.design`
  * 📍 `Remote Worldwide`

---

## 💻 Technical Implementation Directives for LLM / Vibe Coder

1. **Components Setup:** Separate into clean React components (`Navbar.jsx`, `Hero.jsx`, `Projects.jsx`, `Skills.jsx`, `Testimonials.jsx`, `Footer.jsx`).
2. **Tailwind Config:** Extend `tailwind.config.js` to define custom colors (`cream`, `terracotta`, `charcoal`) and custom font families.
3. **Responsiveness:** 
   * Ensure desktop retains the multi-column editorial magazine look.
   * On mobile screens, gracefully collapse multi-column sections into smooth single-column layouts while keeping typography proportions intact.
4. **Interactivity & State:**
   * Add hover effects on project cards, buttons, and contact items.
   * Add smooth scrolling when clicking navigation anchors.