# GTravelling – Explore. Travel. Experience.

A modern, clean, beginner-friendly travel blogging website built purely with **HTML5**, **CSS3**, and **Vanilla JavaScript** (no external frameworks like React, Bootstrap, or Tailwind).

---

## 🎨 Design & Palette
The design uses a warm travel-inspired color scheme:
- **#6F1D1B** – Deep Wine / Maroon (Primary Brand Accent)
- **#BB9457** – Warm Sandy Gold (Secondary / Highlights)
- **#432818** – Dark Roasted Espresso (Headers, Footers & Hero Background)
- **#99582A** – Earthy Terracotta Rust (Accents & Badges)
- **#FFEEDB** – Soft Warm Cream / Parchment (Cards, Badges & Light Accents)

Typography combines **'Playfair Display'** (editorial serif headings) and **'Outfit'** (clean, readable sans-serif body text).

---

## 🚀 How to Run the Project
1. **Open Directly in Any Browser:**
   - Double-click `index.html` (or right-click → **Open with** → **Google Chrome** / **Microsoft Edge** / **Mozilla Firefox**).
   - No web server, Node.js, or build step is required.
2. **Or Use VS Code Live Server:**
   - Open the `GTravelling` folder in VS Code.
   - Right-click `index.html` and select **"Open with Live Server"**.

---

## 📁 File Structure & Purpose of Each File

```text
GTravelling/
│
├── index.html       # Main HTML5 semantic structure and layout
├── style.css        # CSS3 styles, CSS variables, Grid/Flexbox layouts & responsive media queries
├── script.js        # Pure Vanilla JavaScript for interactivity, search, filtering & validation
└── images/          # Travel destination, hero, adventure, and culture photographs
    ├── hero.jpg             # High-resolution hero background landscape
    ├── goa.jpg              # Goa tropical beaches and palms
    ├── rajasthan.jpg        # Rajasthan desert dunes and camels
    ├── kerala.jpg           # Kerala tranquil backwaters and houseboats
    ├── manali.jpg           # Manali snow-capped Himalayan peaks
    ├── jaipur.jpg           # Jaipur royal Hawa Mahal
    ├── kashmir.jpg          # Kashmir Dal Lake and Shikara
    ├── hidden-places.jpg    # Offbeat destinations cover
    ├── first-trip.jpg       # Trip planning & backpacker cover
    ├── adventures.jpg       # Outdoor adventure cover
    ├── budget-travel.jpg    # Budget travel cover
    ├── trekking.jpg         # Trekking experience card
    ├── camping.jpg          # Camping experience card
    ├── scuba.jpg            # Scuba diving card
    ├── mountains.jpg        # Mountain paragliding card
    ├── safari.jpg           # Wildlife safari card
    ├── roadtrip.jpg         # Highway road trip card
    ├── street-food.jpg      # Indian street food card
    ├── festivals.jpg        # Traditional festivals card
    ├── cuisines.jpg         # Regional local cuisines card
    ├── culture.jpg          # Cultural dances & rituals card
    ├── markets.jpg          # Famous bazaars card
    └── art.jpg              # Traditional art & handicrafts card
```

### Detailed Purpose of Each File:
1. **`index.html`**:
   - Contains semantic HTML5 tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`.
   - Organizes all required sections:
     - **Header**: Logo, navigation links, and quick search.
     - **Hero Section**: Catchy title, subtitle, CTA buttons, and travel stats.
     - **Featured Travel Stories**: Blog cards with category badges and reading time.
     - **Destinations**: Highlighting Goa, Rajasthan, Kerala, Manali, Jaipur, and Kashmir.
     - **Travel Tips**: 6 cards (Pack Smart, Budget, Safety, Apps, Plan a Trip, Checklist).
     - **Adventure Experiences**: 6 cards (Trekking, Camping, Scuba, Mountain, Safari, Road Trips).
     - **Food & Culture**: 6 cards showcasing Indian food, festivals, arts, and markets.
     - **About GTravelling**: Vision, values, and milestone stats.
     - **Newsletter**: Subscription form with instant feedback.
     - **Contact**: Validated contact form and direct contact details.
     - **Footer**: Brand info, quick links, top destinations, and copyright.
     - **Article Modal**: Accessible popup for reading full travel articles.

2. **`style.css`**:
   - Implements CSS custom properties (variables) for the warm palette and design tokens.
   - Provides fully responsive styling using **CSS Grid** and **Flexbox** across desktop, tablet, and mobile.
   - Includes micro-interactions: card hover lifts, image zoom on hover, button transitions, and smooth modal fade-in.
   - Fixed frosted glass header (`backdrop-filter: blur(12px)`).
   - Mobile hamburger navigation drawer with animated toggle icon.

3. **`script.js`**:
   - **Dynamic Blog Rendering**: Stores 6 complete articles with titles, authors, dates, tags, and full text.
   - **Real-time Search**: Live filters blogs by title, keywords, tags, or description.
   - **Category Filtering**: Switches between *All*, *Destinations*, *Travel Tips*, *Adventure*, and *Food & Culture*.
   - **Full Article Modal ("Read More")**: Opens detailed story popup with related tags and "Back to Blogs" button. Accessible via mouse and `Escape` key.
   - **Form Validations**: Real-time regex validation for contact form and newsletter subscription with custom friendly alert banners.
   - **Scroll Navigation & Back to Top**: Updates active navbar links on scroll and displays smooth floating back-to-top button.
