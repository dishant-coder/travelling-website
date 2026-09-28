/**
 * ==========================================================================
 * GTravelling – Explore. Travel. Experience.
 * Vanilla JavaScript (ES6+)
 * 
 * Features:
 * 1. Mobile Navigation Menu Toggle
 * 2. Sticky Header & Active Nav Link on Scroll
 * 3. Dynamic Blog Rendering from Array
 * 4. Blog Search Functionality (Real-time live search)
 * 5. Category Filtering (All, Destinations, Travel Tips, Adventure, Food & Culture)
 * 6. "Read More" Modal with Full Article Content & Related Posts
 * 7. Destination "Explore" Quick Action
 * 8. Contact Form Validation with Error & Success Handling
 * 9. Newsletter Subscription Validation
 * 10. Smooth Scrolling & Floating Back-To-Top Button
 * 11. Scroll Reveal Animations
 * ==========================================================================
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       1. DATA: FEATURED BLOG ARTICLES
       -------------------------------------------------------------------------- */
    const blogArticles = [
        {
            id: 1,
            title: "10 Hidden Places You Must Visit in India",
            category: "Destinations",
            author: "Dishant Sharma",
            authorInitials: "DS",
            date: "March 15, 2026",
            readTime: "6 min read",
            image: "images/hidden-places.jpg",
            fallbackImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&auto=format&fit=crop&q=80",
            shortDesc: "Beyond the crowded tourist spots lie untouched paradises waiting to be uncovered, from misty living root bridges to secret Himalayan valleys.",
            content: `
                <p>India is a land of endless wonders, yet most travelers flock only to popular monuments and bustling beaches. If you crave tranquility, untouched beauty, and authentic cultural encounters, these hidden jewels deserve the top spot on your bucket list.</p>
                
                <h4>1. Mawlynnong & Cherrapunji's Living Root Bridges, Meghalaya</h4>
                <p>Deep within the rainforests of Meghalaya, indigenous Khasi tribes have trained the roots of rubber trees across roaring streams over centuries. Walking across these biological marvels amidst dense fog is like entering a fairy-tale realm.</p>

                <h4>2. Ziro Valley, Arunachal Pradesh</h4>
                <p>Surrounded by pine-clad hills and emerald paddy terraces, Ziro Valley is home to the fascinating Apatani tribe. Known for their intricate facial tattoos and sustainable bamboo architecture, this UNESCO tentative site offers serenity unlike anywhere else.</p>

                <h4>3. Gavi, Kerala</h4>
                <p>Tucked inside the Periyar Tiger Reserve, Gavi is an eco-tourism haven where mist-covered cardamom plantations meet emerald lakes. You can spot endangered Lion-tailed Macaques, herds of wild elephants, and over 260 species of birds.</p>

                <div class="modal-quote">
                    "Traveling off the beaten path does not just show you new landscapes; it reveals hidden dimensions of human warmth and resilient tradition."
                </div>

                <h4>Traveler Tips for Offbeat Exploration:</h4>
                <ul>
                    <li><strong>Hire Local Guides:</strong> Indigenous guides know seasonal trails and respect tribal customs.</li>
                    <li><strong>Pack Light & Eco-friendly:</strong> Many offbeat villages have strict zero-plastic regulations.</li>
                    <li><strong>Carry Cash:</strong> Digital payments can be spotty in remote mountain valleys.</li>
                </ul>
            `,
            tags: ["India", "Offbeat", "Hidden Gems", "Nature"]
        },
        {
            id: 2,
            title: "A Beginner's Guide to Planning Your First Trip",
            category: "Travel Tips",
            author: "Ananya Roy",
            authorInitials: "AR",
            date: "March 10, 2026",
            readTime: "5 min read",
            image: "images/first-trip.jpg",
            fallbackImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80",
            shortDesc: "Planning your very first solo or group vacation? Here is a step-by-step masterplan covering budgeting, packing, tickets, and safety.",
            content: `
                <p>Taking your first journey independently is an exhilarating milestone. Yet, the barrage of flight booking apps, hotel options, and packing lists can quickly feel overwhelming. Fear not: trip planning is an art that becomes effortless when broken into simple milestones.</p>

                <h4>Step 1: Choose Your Destination Based on Season</h4>
                <p>Always research the seasonal weather before finalizing your tickets. Visiting Goa in the peak monsoon brings lush greenery but closed water sports; visiting Himachal in January brings snow but possible roadblocks. Align your expectations with the climate.</p>

                <h4>Step 2: Realistic Budgeting Formula</h4>
                <p>Split your travel funds into 4 buckets: Transport (35%), Accommodation (25%), Food & Activities (25%), and Emergency Buffer (15%). Always keep the emergency buffer untouched in a separate account or debit card.</p>

                <div class="modal-quote">
                    "The journey of a thousand miles begins with a well-organized packing list and an open heart."
                </div>

                <h4>Essential Packing Rules:</h4>
                <ul>
                    <li>Roll your clothes instead of folding to save 40% bag volume and avoid creases.</li>
                    <li>Keep digital scans of government IDs (Aadhaar, Passport) on secure cloud storage.</li>
                    <li>Always pack a compact first-aid kit with motion-sickness and allergy medicine.</li>
                </ul>
            `,
            tags: ["Beginner Guide", "Planning", "Budget", "Checklist"]
        },
        {
            id: 3,
            title: "7 Beautiful Destinations for Your Next Adventure",
            category: "Adventure",
            author: "Rohan Mehta",
            authorInitials: "RM",
            date: "March 05, 2026",
            readTime: "7 min read",
            image: "images/adventures.jpg",
            fallbackImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
            shortDesc: "From high-altitude Himalayan treks in Ladakh to scuba diving with manta rays in the Andamans, get your adrenaline pumping.",
            content: `
                <p>Are you tired of routine sightseeing tours and ready to feel your heart race? Whether it is soaring over mountain valleys or plunging into cobalt ocean depths, adventure travel revitalizes our spirit like nothing else.</p>

                <h4>1. Bir Billing, Himachal Pradesh: World-Class Paragliding</h4>
                <p>Bir Billing is recognized globally as the paragliding capital of India. Launching off an 8,000-foot ridge and floating on thermal currents with panoramic views of snow-dusted Dhauladhar ranges is an unforgettable high.</p>

                <h4>2. Havelock Island, Andamans: Scuba Diving</h4>
                <p>With crystal clear visibility of over 25 meters, Elephant Beach and Neil Island showcase kaleidoscopic coral reefs, sea turtles, clownfish, and gentle leopard sharks.</p>

                <h4>3. Rishikesh, Uttarakhand: White Water River Rafting</h4>
                <p>Conquer the legendary Grade IV rapids of the sacred Ganges, including 'The Wall' and 'Roller Coaster', followed by cliff jumping and beachside bonfires under starry skies.</p>

                <div class="modal-quote">
                    "Adventure isn't about escaping life; it is about preventing life from escaping us."
                </div>

                <h4>Key Safety Guidelines:</h4>
                <ul>
                    <li>Verify certifications of adventure operators (PADI for diving, certified tandem pilots for paragliding).</li>
                    <li>Never push through extreme altitude sickness; acclimatize properly in Leh and Manali.</li>
                    <li>Wear high-ankle trekking shoes with good grip on slippery rocky trails.</li>
                </ul>
            `,
            tags: ["Adventures", "Trekking", "Paragliding", "Water Sports"]
        },
        {
            id: 4,
            title: "How to Travel on a Budget",
            category: "Travel Tips",
            author: "Priya Verma",
            authorInitials: "PV",
            date: "February 28, 2026",
            readTime: "5 min read",
            image: "images/budget-travel.jpg",
            fallbackImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=80",
            shortDesc: "You don't need a fortune to see the world. Discover insider tricks on booking cheap sleeper trains, hostels, and eating delicious local street food.",
            content: `
                <p>One of the biggest myths in travel is that exploring new destinations requires thousands of dollars. In reality, some of the most memorable journeys across India and Southeast Asia are accomplished on modest student budgets.</p>

                <h4>1. Embrace Backpacker Hostels & Homestays</h4>
                <p>Boutique hostels like Zostel and local family-run homestays cost a fraction of hotel rooms. Plus, hostels provide shared kitchens where you can cook your own breakfast and meet fellow solo adventurers.</p>

                <h4>2. Master the Indian Railway Network</h4>
                <p>Overnight sleeper and 3AC trains serve dual purposes: affordable long-distance transit and saving the cost of a hotel night! You wake up refreshed at your destination at sunrise.</p>

                <h4>3. Eat Where the Locals Eat</h4>
                <p>Skip expensive hotel restaurants and head to crowded local dhabas and street stalls. High turnover means the ingredients are fresh, the flavors are authentic, and meals cost less than a cup of coffee at an airport.</p>

                <div class="modal-quote">
                    "The less luggage and financial clutter you carry, the more room you have for spontaneous friendships."
                </div>

                <h4>Top Budget Hacks:</h4>
                <ul>
                    <li>Travel during shoulder season (September or February/March) for 50% discounts on stays.</li>
                    <li>Use shared auto-rickshaws and state transport buses instead of private tourist taxis.</li>
                    <li>Carry a reusable stainless-steel water bottle with a built-in filter.</li>
                </ul>
            `,
            tags: ["Budget", "Hostels", "Savings", "Smart Travel"]
        },
        {
            id: 5,
            title: "Top 10 Things to Do in Goa",
            category: "Destinations",
            author: "Vikram Singh",
            authorInitials: "VS",
            date: "February 20, 2026",
            readTime: "6 min read",
            image: "images/goa.jpg",
            fallbackImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
            shortDesc: "Discover Goa beyond the nightlife: explore Portuguese heritage in Fontainhas, spice plantations, quiet southern shores, and authentic Goan fish curry.",
            content: `
                <p>Goa is much more than crowded party beaches and flea markets. Behind the tourist veneer lies a rich confluence of Konkani tradition and 450 years of Portuguese architecture, sleepy backwaters, and lush spice plantations.</p>

                <h4>1. Wander Through the Latin Quarter of Fontainhas, Panaji</h4>
                <p>Stroll past vibrant canary yellow, terracotta, and indigo Portuguese villas adorned with wrought-iron balconies. Stop by quaint bakeries for warm pastéis de nata and local poi bread.</p>

                <h4>2. Sunset and Cliffside Views at Cabo de Rama</h4>
                <p>Perched high on a rocky promontory overlooking the Arabian Sea, this historic fort in South Goa offers one of the most romantic and peaceful sunset spots on the coast.</p>

                <h4>3. Savor Authentic Goan Seafood</h4>
                <p>Indulge in Kingfish Rava fry, crab xec xec, and spicy pork vindaloo cooked with toddy vinegar. Pair it with chilled feni or fresh tender coconut water.</p>

                <div class="modal-quote">
                    "In Goa, time adopts a gentler rhythm. Susegad isn't laziness; it is the art of contentment."
                </div>

                <h4>Top Goa Recommendations:</h4>
                <ul>
                    <li>Rent a scooter to explore secret beaches like Butterfly Beach and Cola Beach.</li>
                    <li>Visit the majestic 4-tiered Dudhsagar Waterfalls nestled in Bhagwan Mahaveer Sanctuary.</li>
                    <li>Take a silent kayak ride through the mangrove backwaters of Sal river.</li>
                </ul>
            `,
            tags: ["Goa", "Beaches", "Heritage", "Food"]
        },
        {
            id: 6,
            title: "A Complete Guide to Exploring Rajasthan",
            category: "Food & Culture",
            author: "Dishant Sharma",
            authorInitials: "DS",
            date: "February 14, 2026",
            readTime: "8 min read",
            image: "images/rajasthan.jpg",
            fallbackImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&auto=format&fit=crop&q=80",
            shortDesc: "Step into a fairy tale of royal palaces, impregnable desert fortresses, colorful turbans, and the aromatic flavors of Dal Baati Churma.",
            content: `
                <p>Rajasthan, the legendary 'Land of Kings', captures the romance and chivalry of ancient India. From the golden dunes of the Thar desert to the shimmering blue palaces of Udaipur, every corner echoes with tales of valor and grandeur.</p>

                <h4>1. The Golden Fort of Jaisalmer (Sonar Qila)</h4>
                <p>Rising like a colossal sandcastle from the Thar Desert, Jaisalmer Fort is one of the few living forts in the world. Approximately a quarter of the old city's population still resides inside its golden sandstone walls.</p>

                <h4>2. The Blue City: Jodhpur and Mehrangarh Fort</h4>
                <p>Gaze over a sea of indigo-painted houses from the ramparts of Mehrangarh Fort, one of the most formidable and impeccably preserved citadels in Asia.</p>

                <h4>3. Culinary Splendor: Dal Baati Churma & Ker Sangri</h4>
                <p>Traditional Rajasthani cuisine was shaped by desert warfare and arid climates. Baked wheat baatis soaked in aromatic desi ghee, served with spicy lentil curry and sweet churma, is a feast fit for royalty.</p>

                <div class="modal-quote">
                    "The sands of Rajasthan may shift with the wind, but its royal soul and warmth of 'Padharo Mhare Des' endure forever."
                </div>

                <h4>Must-know Travel Tips:</h4>
                <ul>
                    <li>Visit between October and March when desert days are sunny and pleasant.</li>
                    <li>Attend the sunset cultural folk dance and Kalbelia music around the sand dunes.</li>
                    <li>Shop for authentic hand-block printed textiles in Jaipur and Johari Bazaar.</li>
                </ul>
            `,
            tags: ["Rajasthan", "Royal", "Culture", "Forts"]
        }
    ];

    /* --------------------------------------------------------------------------
       2. DOM ELEMENTS
       -------------------------------------------------------------------------- */
    // Navigation
    const header = document.getElementById('mainHeader');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    // Search and Filters
    const blogSearchInput = document.getElementById('blogSearchInput');
    const blogSearchClear = document.getElementById('blogSearchClear');
    const headerSearchInput = document.getElementById('headerSearchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogsGrid = document.getElementById('blogsGrid');
    const blogCountEl = document.getElementById('blogCount');

    // Modal
    const blogModal = document.getElementById('blogModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalBackBtn = document.getElementById('modalBackBtn');
    const modalImg = document.getElementById('modalImg');
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalTitle');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalDate = document.getElementById('modalDate');
    const modalReadTime = document.getElementById('modalReadTime');
    const modalText = document.getElementById('modalText');

    // Forms
    const contactForm = document.getElementById('contactForm');
    const contactSuccessAlert = document.getElementById('contactSuccessAlert');
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterEmail = document.getElementById('newsletterEmail');
    const newsletterMsg = document.getElementById('newsletterMsg');

    // Back to top
    const backToTopBtn = document.getElementById('backToTopBtn');

    // State Variables
    let currentCategory = 'All';
    let currentSearchTerm = '';

    /* --------------------------------------------------------------------------
       3. MOBILE NAVIGATION TOGGLE
       -------------------------------------------------------------------------- */
    function toggleMobileMenu() {
        const isOpen = hamburgerBtn.classList.toggle('open');
        mobileNav.classList.toggle('open');
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
    }

    function closeMobileMenu() {
        hamburgerBtn.classList.remove('open');
        mobileNav.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    }

    hamburgerBtn.addEventListener('click', toggleMobileMenu);

    // Close mobile nav when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !hamburgerBtn.contains(e.target) && mobileNav.classList.contains('open')) {
            closeMobileMenu();
        }
    });

    /* --------------------------------------------------------------------------
       4. STICKY HEADER & ACTIVE NAV LINK HIGHLIGHTING ON SCROLL
       -------------------------------------------------------------------------- */
    const sections = document.querySelectorAll('section[id], header[id]');

    function handleScroll() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        // Sticky Header styling
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to Top button visibility
        if (scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }

        // Active link highlighting
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${sectionId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    // Back to top click handler
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* --------------------------------------------------------------------------
       5. BLOG RENDERING & FILTERING
       -------------------------------------------------------------------------- */
    function renderBlogs(articles) {
        blogsGrid.innerHTML = '';

        if (articles.length === 0) {
            blogsGrid.innerHTML = `
                <div class="no-results">
                    <svg class="no-results-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    <h3>No matching stories found</h3>
                    <p>We couldn't find any travel stories matching "<strong>${escapeHtml(currentSearchTerm)}</strong>". Try another keyword or reset filters.</p>
                    <button id="resetFilterBtn" class="btn btn-primary btn-sm">Reset All Filters</button>
                </div>
            `;

            const resetBtn = document.getElementById('resetFilterBtn');
            if (resetBtn) {
                resetBtn.addEventListener('click', resetAllFilters);
            }

            if (blogCountEl) {
                blogCountEl.textContent = '0 stories found';
            }
            return;
        }

        if (blogCountEl) {
            blogCountEl.textContent = `Showing ${articles.length} of ${blogArticles.length} stories`;
        }

        articles.forEach(blog => {
            const card = document.createElement('article');
            card.className = 'blog-card fade-in-element appeared';
            card.setAttribute('data-id', blog.id);

            card.innerHTML = `
                <div class="blog-image-wrapper">
                    <img src="${blog.image}" 
                         alt="${blog.title}" 
                         class="blog-image" 
                         loading="lazy" 
                         onerror="this.onerror=null; this.src='${blog.fallbackImage}';">
                    <span class="blog-category-badge">${blog.category}</span>
                </div>
                <div class="blog-content">
                    <div class="blog-meta-top">
                        <span class="blog-date">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            ${blog.date}
                        </span>
                        <span>•</span>
                        <span>${blog.readTime}</span>
                    </div>
                    <h3 class="blog-title">${blog.title}</h3>
                    <p class="blog-description">${blog.shortDesc}</p>
                    <div class="blog-footer">
                        <div class="blog-author">
                            <div class="author-avatar">${blog.authorInitials}</div>
                            <span class="author-name">${blog.author}</span>
                        </div>
                        <button class="btn-read-more" data-id="${blog.id}" aria-label="Read full article: ${blog.title}">
                            Read More
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            `;

            // Attach click handler for "Read More" button
            const readMoreBtn = card.querySelector('.btn-read-more');
            readMoreBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openBlogModal(blog.id);
            });

            // Card body click opens modal too
            card.addEventListener('click', () => {
                openBlogModal(blog.id);
            });

            blogsGrid.appendChild(card);
        });
    }

    function filterAndRenderBlogs() {
        const query = currentSearchTerm.toLowerCase().trim();

        const filtered = blogArticles.filter(blog => {
            const matchesCategory = (currentCategory === 'All') || (blog.category.toLowerCase() === currentCategory.toLowerCase());
            
            const matchesSearch = query === '' || 
                blog.title.toLowerCase().includes(query) ||
                blog.shortDesc.toLowerCase().includes(query) ||
                blog.author.toLowerCase().includes(query) ||
                blog.tags.some(tag => tag.toLowerCase().includes(query));

            return matchesCategory && matchesSearch;
        });

        renderBlogs(filtered);
    }

    function resetAllFilters() {
        currentCategory = 'All';
        currentSearchTerm = '';
        if (blogSearchInput) blogSearchInput.value = '';
        if (headerSearchInput) headerSearchInput.value = '';
        if (blogSearchClear) blogSearchClear.classList.remove('visible');

        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-category') === 'All') {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        filterAndRenderBlogs();
    }

    // Category button clicks
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.getAttribute('data-category');
            filterAndRenderBlogs();
        });
    });

    // In-section Blog Search Input
    if (blogSearchInput) {
        blogSearchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value;
            if (blogSearchClear) {
                if (currentSearchTerm.length > 0) {
                    blogSearchClear.classList.add('visible');
                } else {
                    blogSearchClear.classList.remove('visible');
                }
            }
            filterAndRenderBlogs();
        });
    }

    // Clear Search Input Button
    if (blogSearchClear) {
        blogSearchClear.addEventListener('click', () => {
            blogSearchInput.value = '';
            currentSearchTerm = '';
            blogSearchClear.classList.remove('visible');
            filterAndRenderBlogs();
            blogSearchInput.focus();
        });
    }

    // Header Search Input Sync
    if (headerSearchInput) {
        headerSearchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value;
            if (blogSearchInput) {
                blogSearchInput.value = currentSearchTerm;
                if (blogSearchClear) {
                    if (currentSearchTerm.length > 0) {
                        blogSearchClear.classList.add('visible');
                    } else {
                        blogSearchClear.classList.remove('visible');
                    }
                }
            }
            filterAndRenderBlogs();
        });

        headerSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const blogsSection = document.getElementById('blogs');
                if (blogsSection) {
                    blogsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    /* --------------------------------------------------------------------------
       6. BLOG ARTICLE MODAL ("Read More" Details)
       -------------------------------------------------------------------------- */
    function openBlogModal(id) {
        const article = blogArticles.find(item => item.id === parseInt(id));
        if (!article) return;

        modalImg.src = article.image;
        modalImg.onerror = function() {
            this.src = article.fallbackImage;
        };
        modalImg.alt = article.title;
        modalCategory.textContent = article.category;
        modalTitle.textContent = article.title;
        modalAuthor.textContent = article.author;
        modalDate.textContent = article.date;
        modalReadTime.textContent = article.readTime;
        modalText.innerHTML = article.content;

        blogModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeBlogModal() {
        blogModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeBlogModal);
    }

    if (modalBackBtn) {
        modalBackBtn.addEventListener('click', closeBlogModal);
    }

    // Close on backdrop click
    blogModal.addEventListener('click', (e) => {
        if (e.target === blogModal) {
            closeBlogModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && blogModal.classList.contains('active')) {
            closeBlogModal();
        }
    });

    /* --------------------------------------------------------------------------
       7. DESTINATION "EXPLORE" BUTTON INTERACTIONS
       -------------------------------------------------------------------------- */
    const destinationButtons = document.querySelectorAll('.btn-explore-destination');
    destinationButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const destName = btn.getAttribute('data-destination');
            if (!destName) return;

            // Set the search to this destination and smoothly scroll to blogs
            currentSearchTerm = destName;
            currentCategory = 'All';
            if (blogSearchInput) blogSearchInput.value = destName;
            if (blogSearchClear) blogSearchClear.classList.add('visible');

            filterButtons.forEach(b => {
                if (b.getAttribute('data-category') === 'All') b.classList.add('active');
                else b.classList.remove('active');
            });

            filterAndRenderBlogs();

            const blogsSec = document.getElementById('blogs');
            if (blogsSec) {
                blogsSec.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* --------------------------------------------------------------------------
       8. CONTACT FORM VALIDATION & SUBMISSION
       -------------------------------------------------------------------------- */
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('contactName');
            const emailInput = document.getElementById('contactEmail');
            const subjectInput = document.getElementById('contactSubject');
            const messageInput = document.getElementById('contactMessage');

            let isValid = true;

            // Validate Full Name
            if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
                showFieldError(nameInput, 'Please enter your full name (at least 2 characters).');
                isValid = false;
            } else {
                clearFieldError(nameInput);
            }

            // Validate Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
                showFieldError(emailInput, 'Please enter a valid email address.');
                isValid = false;
            } else {
                clearFieldError(emailInput);
            }

            // Validate Subject
            if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
                showFieldError(subjectInput, 'Please enter a subject (at least 3 characters).');
                isValid = false;
            } else {
                clearFieldError(subjectInput);
            }

            // Validate Message
            if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
                showFieldError(messageInput, 'Please enter your message (at least 10 characters).');
                isValid = false;
            } else {
                clearFieldError(messageInput);
            }

            if (isValid) {
                // Show success feedback
                contactSuccessAlert.classList.add('visible');
                contactForm.reset();

                // Hide alert after 6 seconds
                setTimeout(() => {
                    contactSuccessAlert.classList.remove('visible');
                }, 6000);
            }
        });
    }

    function showFieldError(inputEl, message) {
        inputEl.classList.add('invalid');
        const parent = inputEl.closest('.form-group');
        const errorEl = parent.querySelector('.error-message');
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.classList.add('visible');
        }
    }

    function clearFieldError(inputEl) {
        inputEl.classList.remove('invalid');
        const parent = inputEl.closest('.form-group');
        const errorEl = parent.querySelector('.error-message');
        if (errorEl) {
            errorEl.classList.remove('visible');
        }
    }

    // Clear validation error when user begins typing
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            clearFieldError(input);
        });
    });

    /* --------------------------------------------------------------------------
       9. NEWSLETTER SUBSCRIPTION VALIDATION
       -------------------------------------------------------------------------- */
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterEmail.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!email || !emailPattern.test(email)) {
                newsletterMsg.className = 'newsletter-message error';
                newsletterMsg.textContent = 'Please enter a valid email address to subscribe.';
                return;
            }

            // Success feedback
            newsletterMsg.className = 'newsletter-message success';
            newsletterMsg.textContent = '🎉 Thank you for subscribing! Your wanderlust stories will arrive soon.';
            newsletterForm.reset();

            setTimeout(() => {
                newsletterMsg.style.display = 'none';
            }, 6000);
        });
    }

    /* --------------------------------------------------------------------------
       10. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
       -------------------------------------------------------------------------- */
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appeared');
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('appeared'));
    }

    /* --------------------------------------------------------------------------
       11. HELPER UTILITIES
       -------------------------------------------------------------------------- */
    function escapeHtml(string) {
        const div = document.createElement('div');
        div.innerText = string;
        return div.innerHTML;
    }

    // Initial render of blogs
    renderBlogs(blogArticles);
});
