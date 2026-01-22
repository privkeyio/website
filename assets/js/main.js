(function() {
    'use strict';

    const CONFIG = Object.freeze({
        FORM_ENDPOINT: 'https://formspree.io/f/mwkwqwkl',
        RATE_LIMIT_MS: 60000,
        MAX_SUBMISSIONS: 3
    });

    const formState = { submissions: [], rateLimited: false, retryAfter: null };

    const DATA = {
        services: [
            { icon: "pe-7s-rocket", title: "Software Development", desc: "Full-cycle development from ideation to production. We build secure, scalable applications for enterprises: web, mobile, and infrastructure.", features: ["Full-Stack Development", "Security-First Architecture", "Open Source Contributions", "API & Protocol Implementation"], expandedContent: "Since 2018, we've delivered custom software for enterprises across industries, from high-throughput systems to user-facing applications.", useCases: ["Enterprise applications", "Bitcoin & Lightning tooling", "Web & mobile development", "Custom integrations"] },
            { icon: "pe-7s-lock", title: "Key Management & Custody", desc: "Self-sovereign key infrastructure with FROST threshold signing, TEE enclave protection, and hidden volumes for plausible deniability.", features: ["FROST Threshold Signatures", "TEE Enclave Security", "Hidden Volumes", "NIP-46 Remote Signing"], expandedContent: "Our Keep signing stack is the only open-source solution combining FROST + Enclave + Nostr + Hidden Volumes.", useCases: ["Enterprise self-custody setup", "Multi-party signing infrastructure", "AI agent key constraints", "Institutional wallet architecture"] },
            { icon: "pe-7s-gleam", title: "Lightning Infrastructure", desc: "Enterprise Lightning Network deployment, node security, channel management, and payment routing optimization.", features: ["Node Deployment & Hardening", "Channel Security", "Liquidity Management", "Payment Routing"], expandedContent: "We help enterprises run Lightning infrastructure that scales, securely and reliably.", useCases: ["Institutional Lightning nodes", "Payment processing infrastructure", "Cross-border settlement", "Liquidity provisioning"] },
            { icon: "pe-7s-note2", title: "Security Auditing", desc: "Comprehensive audits for Bitcoin infrastructure, key management systems, Lightning nodes, and custody operations.", features: ["Key Management Audits", "Node Security Assessment", "Penetration Testing", "Compliance Review"], expandedContent: "We audit what matters: keys, signing infrastructure, and custody operations. 30+ years combined experience.", useCases: ["Custody infrastructure audits", "Lightning node security review", "Key management assessment", "Pre-deployment security review"] },
            { icon: "pe-7s-plugin", title: "Nostr Infrastructure", desc: "High-performance relay deployment, NIP implementations, and decentralized identity solutions built on Nostr.", features: ["Relay Deployment (Wisp)", "NIP Implementation", "Blossom Media Storage", "Decentralized Identity"], expandedContent: "Wisp is 4x faster than competitors. We build and deploy Nostr infrastructure that scales.", useCases: ["Enterprise relay deployment", "Private communication infrastructure", "Decentralized identity systems", "Lightning-integrated Nostr apps"] },
            { icon: "pe-7s-safe", title: "Consulting", desc: "Strategic guidance for Bitcoin adoption, self-custody implementation, and sovereign infrastructure planning.", features: ["Self-Custody Strategy", "Infrastructure Architecture", "Regulatory Guidance", "Technology Selection"], expandedContent: "We help enterprises own their infrastructure, from treasury strategy to full-stack deployment.", useCases: ["Bitcoin treasury planning", "Self-custody roadmap", "Infrastructure architecture", "Vendor-free sovereignty"] }
        ],
        highlights: [
            { icon: "pe-7s-medal", title: "30+ Years Experience", description: "Decades of expertise in networking, cybersecurity, and Bitcoin." },
            { icon: "pe-7s-look", title: "Open Source First", description: "Trust through transparency. Audit and self-host our core tools." },
            { icon: "pe-7s-config", title: "AI + Policy", description: "AI agents need guardrails. We build signing with policy controls." },
            { icon: "pe-7s-key", title: "Self-Sovereign", description: "Own your data, identity, and money without third-party custody." }
        ],
        products: [
            { name: "libnostr-c", description: "Lightweight, portable C library for the Nostr protocol with native Lightning Network integration.", language: "C", license: "MIT", url: "https://github.com/privkeyio/libnostr-c" },
            { name: "Taproot Assets Gateway", description: "REST proxy for Taproot Assets.", language: "Rust", license: "MIT", url: "https://github.com/privkeyio/taproot-assets-rest-gateway" },
            { name: "libnostr-z", description: "Zig library for the Nostr protocol.", language: "Zig", license: "MIT", url: "https://github.com/privkeyio/libnostr-z" },
            { name: "Keep", description: "Sovereign key management for Nostr and Bitcoin.", language: "Rust", license: "AGPL-3.0", url: "https://github.com/privkeyio/keep" },
            { name: "Warden", description: "Policy engine for Bitcoin custody.", language: "Rust", license: "AGPL-3.0", url: "https://github.com/privkeyio/warden" },
            { name: "Keep ESP32", description: "ESP32-S3 air-gapped FROST threshold signing device for Nostr and Bitcoin.", language: "C", license: "AGPL-3.0", url: "https://github.com/privkeyio/keep-esp32" }
        ],
        contributions: {
            "Bitcoin & Lightning Network": [
                { name: "LND - Multi-Path Payment Records", url: "https://github.com/lightningnetwork/lnd/pull/10091" },
                { name: "Core Lightning - Handle NULL Short Channel ID", url: "https://github.com/ElementsProject/lightning/pull/8435" },
                { name: "Lightning BOLTs - Add Security Policy", url: "https://github.com/lightning/bolts/pull/1278" },
                { name: "Sparrow - Hide Amounts (v2.3.1)", url: "https://github.com/sparrowwallet/sparrow/releases/tag/2.3.1" },
                { name: "Bitcoin Knots - Upgrade Depends to Qt6", url: "https://github.com/bitcoinknots/bitcoin/pull/231" },
                { name: "Bitcoin Knots - Pass Critical Build Flags", url: "https://github.com/bitcoinknots/bitcoin/pull/237" },
                { name: "Bitcoin Knots - Export GUI Policy Options", url: "https://github.com/bitcoinknots/bitcoin/pull/154" },
                { name: "Greenlight - Switch to uv Package Manager", url: "https://github.com/Blockstream/greenlight/pull/612" },
                { name: "Liana - User-Agent Header Support", url: "https://github.com/wizardsardine/liana/pull/1902" },
                { name: "OCEAN - Job Coordination for Fallback Shares", url: "https://github.com/OCEAN-xyz/datum_gateway/pull/156" }
            ],
            "Nostr Protocol": [
                { name: "Amber - Export All Accounts Feature", url: "https://github.com/greenart7c3/Amber/pull/255" },
                { name: "Routstr Core - Fix USD Pricing Fees", url: "https://github.com/Routstr/routstr-core/pull/189" },
                { name: "Routstr Chat - Invoice History & Persistence", url: "https://github.com/Routstr/routstr-chat/pull/67" }
            ],
            "Developer Tools & AI": [
                { name: "Goose - Enable Zero-Config Providers in GUI", url: "https://github.com/block/goose/pull/3378" },
                { name: "Goose - Auto-Compact on Context Limit", url: "https://github.com/block/goose/pull/3635" },
                { name: "Goose - Middle-Out Message Compression", url: "https://github.com/block/goose/pull/3907" }
            ],
            "Wallets & SDKs": [
                { name: "Zeus - Disable Express Graph Sync by Default", url: "https://github.com/ZeusLN/zeus/pull/3154" },
                { name: "Zeus - Reload Invoice on Restart", url: "https://github.com/ZeusLN/zeus/pull/3380" },
                { name: "Bull Bitcoin - Hide Exchange Features", url: "https://github.com/SatoshiPortal/bullbitcoin-mobile/pull/1345" },
                { name: "BDK - Replace Examples with Rustdoc", url: "https://github.com/bitcoindevkit/bdk/pull/2006" },
                { name: "DLC Dev Kit - Oracle Announcement Creation", url: "https://github.com/bennyhodl/dlcdevkit/pull/104" }
            ],
        },
        team: [
            { image: "assets/images/william_profile.png", title: "William K. Santiago", desc: "FOUNDER & CEO", bio: "30-year cybersecurity veteran who pioneered institutional Bitcoin infrastructure since 2011. Led enterprise Bitcoin implementations for Fortune 500 clients. BS in Management Information Systems from the University of South Florida.", mobileBio: ["30-year cybersecurity veteran", "Bitcoin infrastructure since 2011", "Fortune 500 enterprise security"], linkedIn: "https://linkedin.com/in/wksantiago", twitter: "https://x.com/williamsantiago" },
            { image: "assets/images/kyle_profile.png", title: "Kyle W. Santiago", desc: "FOUNDER & CTO", bio: "Over a decade of cryptocurrency, software engineering, and cybersecurity expertise since 2011. BS & MS in Cybersecurity from the University of South Florida. Led integrations for Chainlink Labs and scaled institutional digital asset platforms.", mobileBio: ["10+ years crypto & cybersecurity", "BS & MS in Cybersecurity, USF", "Full stack development for 7+ years"], linkedIn: "https://linkedin.com/in/kwsantiago", twitter: "https://x.com/kwsantiago" }
        ],
        resources: []
    };

    let state = { activeSection: 'home', isNavigating: false, isSticky: false, mobileMenuOpen: false };

    function init() {
        renderServices();
        renderHighlights();
        renderProducts();
        renderContributions();
        renderTeam();
        renderResources();
        initNavbar();
        initCounters();
        initContactForm();
        initMobileMenu();
        document.getElementById('current-year').textContent = new Date().getFullYear();
    }

    function renderServices() {
        const grid = document.getElementById('services-grid');
        grid.innerHTML = DATA.services.map((s, i) => `
            <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                <div class="text-center value-prop-box h-100 d-flex flex-column">
                    <div class="mb-3"><i class="${s.icon} text-primary" style="font-size:3rem"></i></div>
                    <h5 class="mb-3 text-white">${s.title}</h5>
                    <p class="text-white flex-grow-1">${s.desc}</p>
                    <div class="mt-auto pt-3 text-center"><button class="btn service-learn-more-btn" data-service="${i}" style="padding:10px 24px">Learn More</button></div>
                </div>
            </div>`).join('');
        grid.querySelectorAll('.service-learn-more-btn').forEach(btn => btn.addEventListener('click', () => openServiceModal(parseInt(btn.dataset.service))));
    }

    function openServiceModal(index) {
        const s = DATA.services[index];
        document.getElementById('serviceModalLabel').innerHTML = `<i class="${s.icon} me-2"></i>${s.title}`;
        document.getElementById('serviceModalBody').innerHTML = `
            <p class="mb-4">${s.desc}</p>
            ${s.features ? `<div class="mb-4"><h6 class="text-success mb-3">Key Features:</h6><div class="row">${s.features.map(f => `<div class="col-md-6 mb-2"><i class="mdi mdi-check-circle text-success me-2"></i>${f}</div>`).join('')}</div></div>` : ''}
            ${s.expandedContent ? `<div class="mb-4"><h6 class="text-success mb-3">Overview:</h6><p>${s.expandedContent}</p></div>` : ''}
            ${s.useCases ? `<div><h6 class="text-success mb-3">Use Cases:</h6>${s.useCases.map(u => `<div class="mb-2"><i class="mdi mdi-arrow-right text-success me-2"></i>${u}</div>`).join('')}</div>` : ''}`;
        new bootstrap.Modal(document.getElementById('serviceModal')).show();
    }

    function renderHighlights() {
        document.getElementById('highlights-grid').innerHTML = DATA.highlights.map(h => `
            <div class="col-lg-6 col-md-6 mb-4">
                <div class="card h-100 border-0 shadow-sm highlight-card" style="background-color:rgba(255,255,255,0.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.1)">
                    <div class="card-body p-4 text-center">
                        <div class="mb-3"><i class="${h.icon} text-primary" style="font-size:3rem;color:#27ae60;text-shadow:0 0 20px rgba(39,174,96,0.4)"></i></div>
                        <h5 class="text-white mb-3">${h.title}</h5>
                        <p class="text-white-50 mb-0">${h.description}</p>
                    </div>
                </div>
            </div>`).join('');
    }

    function renderProducts() {
        document.getElementById('products-grid').innerHTML = `
            <div class="col-lg-10">
                <div class="opensource-list">
                    ${DATA.products.map(p => `
                        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="opensource-item">
                            <div class="opensource-item-header">
                                <span class="opensource-name">${p.name}</span>
                                <span class="opensource-lang">${p.license}</span>
                            </div>
                            <span class="opensource-desc">${p.description}</span>
                        </a>`).join('')}
                </div>
            </div>`;
    }

    function renderContributions() {
        const container = document.getElementById('contributions-accordion');
        container.innerHTML = Object.entries(DATA.contributions).map(([category, items]) => `
            <div style="margin-bottom:1rem">
                <div class="contribution-header" data-category="${category}">
                    <div><h5 class="text-white mb-0">${category}</h5><small class="text-white-50">${items.length} contributions</small></div>
                    <i class="mdi mdi-chevron-down" style="color:#27ae60;font-size:1.5rem"></i>
                </div>
                <div class="contribution-items" data-category="${category}" style="display:none">
                    ${items.map(c => `<a href="${c.url}" target="_blank" rel="noopener noreferrer" class="contribution-link"><i class="mdi mdi-github" style="margin-right:0.5rem"></i><span>${c.name}</span></a>`).join('')}
                </div>
            </div>`).join('');
        container.querySelectorAll('.contribution-header').forEach(header => {
            header.addEventListener('click', () => {
                const cat = header.dataset.category;
                const items = container.querySelector(`.contribution-items[data-category="${cat}"]`);
                const icon = header.querySelector('i');
                const isOpen = items.style.display !== 'none';
                container.querySelectorAll('.contribution-items').forEach(el => el.style.display = 'none');
                container.querySelectorAll('.contribution-header i').forEach(el => el.className = 'mdi mdi-chevron-down');
                if (!isOpen) { items.style.display = 'grid'; icon.className = 'mdi mdi-chevron-up'; }
            });
        });
    }

    function renderTeam() {
        document.getElementById('team-grid').innerHTML = DATA.team.map(t => `
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="team-box text-center">
                    <div class="team-wrapper"><div class="team-member">
                        <img alt="${t.title} - ${t.desc}" src="${t.image}" class="img-fluid rounded team-profile-img ${t.desc === 'FOUNDER & CEO' ? 'ceo-image' : 'cto-image'}" loading="lazy">
                        <div class="team-bio-overlay team-bio-desktop"><div class="team-bio-content"><p>${t.bio}</p></div></div>
                        <div class="team-bio-overlay team-bio-mobile"><div class="team-bio-content"><ul class="team-bio-bullets">${t.mobileBio.map(p => `<li>${p}</li>`).join('')}</ul></div></div>
                    </div></div>
                    <div class="row"><h4 class="team-name">${t.title}</h4></div>
                    <div class="row margin-social-icon"><span class="text-uppercase team-designation">${t.desc}</span></div>
                    <ul class="social-icons-list">
                        ${t.linkedIn ? `<li class="list-inline-item"><a href="${t.linkedIn}" class="social-icon" target="_blank" rel="noopener noreferrer"><i class="mdi mdi-linkedin"></i></a></li>` : ''}
                        ${t.twitter ? `<li class="list-inline-item"><a href="${t.twitter}" class="social-icon" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a></li>` : ''}
                    </ul>
                </div>
            </div>`).join('');
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function sanitizeUrl(url) {
        try {
            const parsed = new URL(url);
            if (parsed.protocol === 'https:' || parsed.protocol === 'http:') return parsed.href;
        } catch {}
        return '#';
    }

    async function renderResources() {
        const grid = document.getElementById('resources-grid');
        grid.innerHTML = '<div class="col-12 text-center"><p class="text-white-50">Loading articles...</p></div>';
        try {
            const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://privkey.substack.com/feed');
            const data = await res.json();
            if (data.status === 'ok' && data.items) {
                const articles = data.items.slice(0, 6);
                grid.innerHTML = articles.map((r, i) => {
                    const date = new Date(r.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                    const rawDesc = r.description.replace(/<[^>]*>/g, '').substring(0, 120) + '...';
                    const safeTitle = escapeHtml(r.title);
                    const safeDesc = escapeHtml(rawDesc);
                    const safeUrl = sanitizeUrl(r.link);
                    return `
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card resource-card h-100 border-0 shadow-sm" data-url="${safeUrl}" style="cursor:pointer">
                            <div class="card-body p-4 d-flex flex-column">
                                <div class="resource-header mb-3"><small class="text-white-50">${date}</small></div>
                                <h5 class="resource-title mb-3 text-white">${safeTitle}</h5>
                                <p class="resource-description text-white-50 mb-3 flex-grow-1">${safeDesc}</p>
                            </div>
                        </div>
                    </div>`;
                }).join('');
                grid.querySelectorAll('.resource-card').forEach(card => card.addEventListener('click', () => window.open(card.dataset.url, '_blank', 'noopener,noreferrer')));
            }
        } catch (e) {
            grid.innerHTML = '<div class="col-12 text-center"><a href="https://privkey.substack.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light">View Articles on Substack</a></div>';
        }
    }

    function initNavbar() {
        const navbar = document.getElementById('navbar');
        const navItems = document.querySelectorAll('.navbar-nav .nav-item');
        const sections = ['home', 'services', 'who-we-are', 'technology', 'team', 'resources', 'contact'];

        function updateActiveSection() {
            if (state.isNavigating) return;
            const scrollY = window.pageYOffset;
            const navbarHeight = navbar.offsetHeight;
            navbar.classList.toggle('nav-sticky', scrollY > 100);
            navbar.classList.toggle('is-sticky', scrollY > 100);

            let active = 'home';
            if (window.innerHeight + scrollY >= document.body.scrollHeight - 5) {
                active = sections[sections.length - 1];
            } else {
                sections.forEach(id => { const el = document.getElementById(id); if (el && scrollY >= el.offsetTop - navbarHeight - 50) active = id; });
            }
            state.activeSection = active;
            navItems.forEach(item => {
                const link = item.querySelector('a');
                item.classList.toggle('active', link && link.getAttribute('href') === '#' + active);
            });
        }

        let ticking = false;
        window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(() => { updateActiveSection(); ticking = false; }); ticking = true; } });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', e => {
                e.preventDefault();
                const id = anchor.getAttribute('href').substring(1);
                state.isNavigating = true;
                if (state.mobileMenuOpen) closeMobileMenu();
                if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); }
                else { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.offsetTop - navbar.offsetHeight - (window.innerWidth < 992 ? 40 : 0), behavior: 'smooth' }); }
                navItems.forEach(item => { const link = item.querySelector('a'); item.classList.toggle('active', link && link.getAttribute('href') === '#' + id); });
                setTimeout(() => { state.isNavigating = false; }, 1000);
            });
        });
    }

    function initMobileMenu() {
        const toggler = document.querySelector('.navbar-toggler');
        const collapse = document.getElementById('navbarCollapse');
        const closeBtn = document.querySelector('.mobile-menu-close-btn');
        toggler.addEventListener('click', () => { state.mobileMenuOpen = !state.mobileMenuOpen; collapse.classList.toggle('show', state.mobileMenuOpen); toggler.setAttribute('aria-expanded', state.mobileMenuOpen); });
        closeBtn.addEventListener('click', closeMobileMenu);
        document.addEventListener('click', e => { if (window.innerWidth < 992 && state.mobileMenuOpen && !document.querySelector('.navbar-custom').contains(e.target)) closeMobileMenu(); });
    }

    function closeMobileMenu() { state.mobileMenuOpen = false; document.getElementById('navbarCollapse').classList.remove('show'); document.querySelector('.navbar-toggler').setAttribute('aria-expanded', 'false'); }

    function initCounters() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target, target = parseInt(counter.dataset.target), step = target / 125;
                    let current = 0;
                    const update = () => { current += step; if (current < target) { counter.textContent = Math.floor(current); requestAnimationFrame(update); } else counter.textContent = target; };
                    update();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        document.querySelectorAll('.counter').forEach(c => observer.observe(c));
    }

    function initContactForm() {
        const form = document.getElementById('contact-form'), status = document.getElementById('form-status'), submitBtn = document.getElementById('submit-btn');
        function sanitize(str) { const div = document.createElement('div'); div.textContent = str; return div.innerHTML; }
        function validate() {
            const errors = {}, name = form.name.value.trim(), email = form.email.value.trim(), comments = form.comments.value.trim();
            if (!name) errors.name = 'Name is required'; else if (name.length < 2) errors.name = 'Name must be at least 2 characters';
            if (!email) errors.email = 'Email is required'; else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email';
            if (!comments) errors.comments = 'Message is required'; else if (comments.length < 10) errors.comments = 'Message must be at least 10 characters';
            ['name', 'email', 'comments'].forEach(field => {
                const input = form[field], errorEl = document.getElementById(field + '-error');
                if (errors[field]) { input.classList.add('is-invalid'); errorEl.textContent = errors[field]; errorEl.style.display = 'block'; errorEl.style.color = '#ff6b6b'; }
                else { input.classList.remove('is-invalid'); errorEl.style.display = 'none'; }
            });
            return Object.keys(errors).length === 0;
        }
        function checkRateLimit() {
            const now = Date.now();
            formState.submissions = formState.submissions.filter(t => now - t < CONFIG.RATE_LIMIT_MS);
            if (formState.submissions.length >= CONFIG.MAX_SUBMISSIONS) { return false; }
            formState.submissions.push(now);
            return true;
        }

        form.addEventListener('submit', async e => {
            e.preventDefault();
            const honeypot = form.querySelector('input[name="_gotcha"]');
            if (honeypot && honeypot.value) return;
            if (!checkRateLimit()) { status.innerHTML = '<div class="alert alert-warning"><i class="mdi mdi-clock me-2"></i>Too many requests. Please wait a moment.</div>'; status.style.display = 'block'; return; }
            if (!validate()) return;
            submitBtn.disabled = true; submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
            const formData = new FormData();
            formData.append('name', sanitize(form.name.value.trim()));
            formData.append('email', sanitize(form.email.value.trim()));
            formData.append('Referral', sanitize(form.referral.value.trim()));
            formData.append('comments', sanitize(form.comments.value.trim()));
            try {
                const response = await fetch(CONFIG.FORM_ENDPOINT, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
                if (response.ok) { status.innerHTML = '<div class="alert alert-success"><i class="mdi mdi-check-circle me-2"></i>Thank you! Your message has been sent.</div>'; status.style.display = 'block'; form.reset(); setTimeout(() => status.style.display = 'none', 5000); }
                else if (response.status === 429) {
                    formState.rateLimited = true;
                    const retryAfter = parseInt(response.headers.get('Retry-After'), 10) || 60;
                    formState.retryAfter = Date.now() + retryAfter * 1000;
                    submitBtn.disabled = true;
                    status.innerHTML = `<div class="alert alert-warning"><i class="mdi mdi-clock me-2"></i>Server rate limit reached. Please wait ${retryAfter} seconds.</div>`;
                    status.style.display = 'block';
                    setTimeout(() => { formState.rateLimited = false; formState.retryAfter = null; submitBtn.disabled = false; submitBtn.innerHTML = 'Send Message'; }, retryAfter * 1000);
                    return;
                }
                else throw new Error('Network error');
            } catch { status.innerHTML = '<div class="alert alert-danger"><i class="mdi mdi-alert-circle me-2"></i>Sorry, there was an error. Please try again.</div>'; status.style.display = 'block'; }
            finally { if (!formState.rateLimited) { submitBtn.disabled = false; submitBtn.innerHTML = 'Send Message'; } }
        });
    }

    document.addEventListener('DOMContentLoaded', init);
})();
