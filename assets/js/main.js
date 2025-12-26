(function() {
    'use strict';

    const DATA = {
        services: [
            { icon: "pe-7s-rocket", title: "Custom Software Development", desc: "Full-cycle software development from ideation to production. Since 2018, we've been building custom enterprise solutions tailored to your unique business needs.", features: ["End-to-End Development", "Agile Methodology", "Cloud-Native Architecture", "Continuous Integration/Deployment"], expandedContent: "With years of experience since 2018, we've delivered custom software solutions for various companies across industries.", useCases: ["Enterprise application development", "SaaS platform creation", "Mobile and web application development", "Legacy system modernization"] },
            { icon: "pe-7s-lock", title: "Cybersecurity Services", desc: "Comprehensive cybersecurity solutions including threat intelligence, penetration testing, incident response, and security consulting.", features: ["24/7 Security Operations Center", "AI-Powered Threat Detection", "Incident Response Team", "Vulnerability Management"], expandedContent: "Our cybersecurity services leverage 30+ years of combined expertise to deliver enterprise-grade protection.", useCases: ["Enterprise network security hardening", "Regulatory compliance implementation", "Security incident investigation", "Employee security awareness training"] },
            { icon: "pe-7s-gleam", title: "Lightning Security", desc: "Enterprise security solutions for Bitcoin Lightning Network including node management, channel security, and payment routing protection.", features: ["CCSS-Compliant Infrastructure", "Automated Channel Management", "Multi-Signature Protection", "Real-time Transaction Monitoring"], expandedContent: "PrivKey pioneered the industry's first comprehensive Lightning security framework.", useCases: ["Institutional Lightning node deployment", "Payment channel security optimization", "High-volume transaction processing", "Cross-border payment infrastructure"] },
            { icon: "pe-7s-safe", title: "Blockchain & Digital Asset Consulting", desc: "Strategic consulting for blockchain implementation, digital asset security, and regulatory compliance.", features: ["Custody Solution Architecture", "Regulatory Compliance Guidance", "Security Best Practices", "Technology Stack Selection"], expandedContent: "Our blockchain consulting services help enterprises navigate the complexities of digital asset adoption.", useCases: ["Enterprise blockchain strategy development", "Digital asset custody implementation", "DeFi protocol security assessment", "Nostr protocol implementation"] },
            { icon: "pe-7s-note2", title: "Security Auditing & Certification", desc: "Professional security audits and compliance certification services for enterprises.", features: ["Security Assessment", "Smart Contract Auditing", "Compliance Assessments", "Security Gap Analysis"], expandedContent: "Our audit services combine automated scanning tools with manual expert review.", useCases: ["Pre-deployment smart contract audits", "Annual security compliance reviews", "Regulatory readiness assessments", "Third-party vendor security audits"] },
            { icon: "pe-7s-plugin", title: "Smart Contract Development", desc: "Secure smart contract development and auditing across multiple blockchain platforms.", features: ["Multi-Chain Development", "Security-First Architecture", "Gas Optimization", "Formal Verification"], expandedContent: "We develop smart contracts with security as the primary focus.", useCases: ["DeFi protocol development", "NFT marketplace contracts", "Enterprise tokenization solutions", "Cross-chain bridge implementation"] }
        ],
        highlights: [
            { icon: "pe-7s-medal", title: "30+ Years Experience", description: "Decades of expertise in networking, cybersecurity, and blockchain technology" },
            { icon: "pe-7s-lock", title: "Enterprise Security", description: "Protecting networks, systems, and digital assets from evolving cyber threats" },
            { icon: "pe-7s-network", title: "Blockchain Specialists", description: "Expert consulting, smart contracts, and cryptocurrency wallet security solutions" },
            { icon: "pe-7s-check", title: "Compliance Ready", description: "AML/KYC guidance and regulatory compliance for all digital asset operations" }
        ],
        techModules: [
            { icon: "https://cdn-icons-png.flaticon.com/512/159/159478.png", alt: "Security Lock", title: "FROST Lightning Multisig", desc: "Industry-first 2-of-3 threshold signatures for Lightning channels", features: ["MuSig2/FROST protocols", "No single point of failure", "Sub-2 second signing"] },
            { icon: "https://cdn-icons-png.flaticon.com/512/15552/15552192.png", alt: "Attestation", title: "TAP Authorization Layer", desc: "Advanced transaction policies beyond basic velocity limits", features: ["Risk scoring engine", "Multi-tier approvals", "Miniscript-aware rules"] },
            { icon: "https://cdn-icons-png.flaticon.com/512/5172/5172584.png", alt: "Tokens", title: "Taproot Assets Module", desc: "Issue and manage stablecoins on Bitcoin's Lightning Network", features: ["Stablecoin issuance", "Lightning-fast transfers", "EVM bridge ready"] },
            { icon: "https://cdn-icons-png.flaticon.com/512/4252/4252491.png", alt: "Compliant", title: "Compliance Suite", desc: "Full Version 8.1 compliance with audit trails", features: ["Automated compliance", "Audit trail generation", "Regulatory reporting"] }
        ],
        openSourceProjects: [
            { name: "Taproot Assets REST Gateway", description: "A lightweight REST proxy that makes Lightning Labs' Taproot Assets daemon accessible to web applications.", language: "Rust", url: "https://github.com/privkeyio/taproot-assets-rest-gateway" },
            { name: "libnostr-c", description: "A lightweight, portable C library for the Nostr protocol with native Lightning Network integration.", language: "C", url: "https://github.com/privkeyio/libnostr-c" }
        ],
        contributions: {
            "Bitcoin & Lightning Network": [
                { name: "Sparrow - Hide Amounts (v2.3.1)", url: "https://github.com/sparrowwallet/sparrow/releases/tag/2.3.1" },
                { name: "LND - Multi-Path Payment Records", url: "https://github.com/lightningnetwork/lnd/pull/10091" },
                { name: "Core Lightning - Handle NULL Short Channel ID", url: "https://github.com/ElementsProject/lightning/pull/8435" },
                { name: "Lightning BOLTs - Add Security Policy", url: "https://github.com/lightning/bolts/pull/1278" },
                { name: "Liana - User-Agent Header Support", url: "https://github.com/wizardsardine/liana/pull/1902" },
                { name: "Bitcoin Knots - Export GUI Policy Options", url: "https://github.com/bitcoinknots/bitcoin/pull/154" }
            ],
            "Nostr Protocol": [
                { name: "Amber - Export All Accounts Feature", url: "https://github.com/greenart7c3/Amber/pull/255" },
                { name: "Routstr Core - Integration Tests", url: "https://github.com/Routstr/routstr-core/pull/78" },
                { name: "Routstr Core - Fix USD Pricing Fees", url: "https://github.com/Routstr/routstr-core/pull/189" },
                { name: "Orly - Relay Performance Benchmark", url: "https://github.com/mleku/orly/pull/4" }
            ],
            "Developer Tools & AI": [
                { name: "Goose - Enable Zero-Config Providers in GUI", url: "https://github.com/block/goose/pull/3378" },
                { name: "Goose - Auto-Compact on Context Limit", url: "https://github.com/block/goose/pull/3635" },
                { name: "Goose - Middle-Out Message Compression", url: "https://github.com/block/goose/pull/3907" }
            ],
            "Mobile Applications": [
                { name: "Zeus - Disable Express Graph Sync by Default", url: "https://github.com/ZeusLN/zeus/pull/3154" },
                { name: "BitChat Android - Password-Protected Channel Discovery", url: "https://github.com/permissionlesstech/bitchat-android/pull/178" },
                { name: "Bull Bitcoin - Hide Exchange Features", url: "https://github.com/SatoshiPortal/bullbitcoin-mobile/pull/1345" }
            ],
            "Bitcoin Development Kits": [
                { name: "BDK - Replace Examples with Rustdoc", url: "https://github.com/bitcoindevkit/bdk/pull/2006" },
                { name: "DLC Dev Kit - Oracle Announcement Creation", url: "https://github.com/bennyhodl/dlcdevkit/pull/104" }
            ],
            "Web3 & Blockchain": [
                { name: "Chainlink Rust Contracts", url: "https://github.com/kwsantiago/Chainlink-Rust-Contracts" },
                { name: "Ethereum.org - Chainlink Price Feeds Tutorial", url: "https://github.com/ethereum/ethereum-org-website/pull/3134" }
            ]
        },
        team: [
            { image: "assets/images/william_profile.png", title: "William K. Santiago", desc: "FOUNDER & CEO", bio: "30-year cybersecurity veteran who pioneered institutional Bitcoin infrastructure since 2011. Led enterprise blockchain implementations for Fortune 500 clients. BS in Management Information Systems from the University of South Florida.", mobileBio: ["30-year cybersecurity veteran", "Bitcoin infrastructure since 2011", "Fortune 500 blockchain leader"], linkedIn: "https://linkedin.com/in/wksantiago", twitter: "https://x.com/williamsantiago" },
            { image: "assets/images/kyle_profile.png", title: "Kyle W. Santiago", desc: "FOUNDER & CTO", bio: "Over a decade of cryptocurrency, software engineering, and cybersecurity expertise since 2011. BS & MS in Cybersecurity from the University of South Florida. Led integrations for Chainlink Labs and scaled institutional digital asset platforms.", mobileBio: ["10+ years crypto & cybersecurity", "BS & MS in Cybersecurity, USF", "Full stack development for 7+ years"], linkedIn: "https://linkedin.com/in/kwsantiago", twitter: "https://x.com/kwsantiago" }
        ],
        resources: [
            { title: "Stablecoins on Bitcoin: A New Era", readTime: "15 min read", description: "Exploring the revolutionary potential of stablecoins built on the Bitcoin network.", link: "https://privkey.substack.com/p/stablecoins-on-bitcoin-a-new-era" },
            { title: "Building a Bridge to Taproot Assets", readTime: "12 min read", description: "Understanding how Taproot Assets are creating new possibilities for Bitcoin-based applications.", link: "https://privkey.substack.com/p/building-a-bridge-to-taproot-assets" },
            { title: "PrivKey LLC: Pioneering Cybersecurity", readTime: "10 min read", description: "An in-depth look at PrivKey's approach to cybersecurity and blockchain technology solutions.", link: "https://privkey.substack.com/p/privkey-llc-pioneering-cybersecurity" }
        ],
        typingTexts: ["enterprise cybersecurity and Lightning Network solutions", "robust security for Lightning Network operations", "blockchain and digital asset protection expertise", "30+ years of cybersecurity experience"]
    };

    let state = { activeSection: 'home', isNavigating: false, isSticky: false, mobileMenuOpen: false };

    function init() {
        renderServices();
        renderHighlights();
        renderTechModules();
        renderOpenSourceProjects();
        renderContributions();
        renderTeam();
        renderResources();
        initNavbar();
        initTypingEffect();
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
                    <div class="mt-auto pt-3"><button class="btn btn-sm service-learn-more-btn" data-service="${i}">Learn More</button></div>
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

    function renderTechModules() {
        document.getElementById('tech-modules-grid').innerHTML = DATA.techModules.map(m => `
            <div class="technology-module technology-module-custom">
                <div style="width:60px;height:60px;display:flex;align-items:center;justify-content:center;margin-bottom:15px">
                    <img src="${m.icon}" alt="${m.alt}" style="width:60px;height:60px;object-fit:contain;filter:brightness(0) saturate(100%) invert(67%) sepia(14%) saturate(1816%) hue-rotate(99deg) brightness(96%) contrast(87%) drop-shadow(0 0 10px rgba(39,174,96,0.6))">
                </div>
                <h3 class="technology-module-title">${m.title}</h3>
                <p class="technology-module-description">${m.desc}</p>
                <ul class="technology-module-features">${m.features.map(f => `<li>${f}</li>`).join('')}</ul>
            </div>`).join('');
    }

    function renderOpenSourceProjects() {
        document.getElementById('opensource-projects').innerHTML = DATA.openSourceProjects.map(p => `
            <div class="col-lg-5 col-md-6 mb-4">
                <div class="project-card p-4 text-center rounded shadow-sm h-100" onclick="window.open('${p.url}','_blank')">
                    <div class="project-header mb-3"><i class="mdi mdi-github-box" style="font-size:3rem;color:#27ae60"></i></div>
                    <h5 class="project-name mb-3 text-white">${p.name}</h5>
                    <p class="project-description text-white-50 mb-3">${p.description}</p>
                    <span class="language-badge">${p.language}</span>
                </div>
            </div>`).join('');
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
                    <div class="outer-flex-div-team-box"><div class="inner-flex-div-team-box">
                        ${t.linkedIn ? `<a href="${t.linkedIn}" class="social-icon" target="_blank" rel="noopener noreferrer"><i class="mdi mdi-linkedin"></i></a>` : ''}
                        ${t.twitter ? `<a href="${t.twitter}" class="social-icon" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>` : ''}
                    </div></div>
                </div>
            </div>`).join('');
    }

    function renderResources() {
        document.getElementById('resources-grid').innerHTML = DATA.resources.map(r => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card resource-card h-100 border-0 shadow-sm" onclick="window.open('${r.link}','_blank')">
                    <div class="card-body p-4 d-flex flex-column">
                        <div class="resource-header mb-3"><small class="text-white-50">${r.readTime}</small></div>
                        <h5 class="resource-title mb-3 text-white">${r.title}</h5>
                        <p class="resource-description text-white-50 mb-3 flex-grow-1">${r.description}</p>
                    </div>
                </div>
            </div>`).join('');
    }

    function initNavbar() {
        const navbar = document.getElementById('navbar');
        const navItems = document.querySelectorAll('.navbar-nav .nav-item');
        const sections = ['home', 'services', 'who-we-are', 'team', 'resources', 'contact'];

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

    function initTypingEffect() {
        const typedEl = document.querySelector('.typed-text');
        const cursor = document.querySelector('.cursor');
        const texts = DATA.typingTexts;
        let textIndex = 0, charIndex = 0, isDeleting = false;
        function type() {
            const current = texts[textIndex];
            typedEl.textContent = current.substring(0, isDeleting ? --charIndex : ++charIndex);
            let delay = isDeleting ? 30 : 50;
            if (!isDeleting && charIndex === current.length) { delay = 3000; isDeleting = true; }
            else if (isDeleting && charIndex === 0) { isDeleting = false; textIndex = (textIndex + 1) % texts.length; delay = 500; }
            setTimeout(type, delay);
        }
        setInterval(() => cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0', 500);
        setTimeout(type, 1000);
    }

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
        form.addEventListener('submit', async e => {
            e.preventDefault();
            if (!validate()) return;
            submitBtn.disabled = true; submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
            const formData = new FormData();
            formData.append('name', sanitize(form.name.value.trim()));
            formData.append('email', sanitize(form.email.value.trim()));
            formData.append('Referral', sanitize(form.referral.value.trim()));
            formData.append('comments', sanitize(form.comments.value.trim()));
            try {
                const response = await fetch('https://formspree.io/f/mwkwqwkl', { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
                if (response.ok) { status.innerHTML = '<div class="alert alert-success"><i class="mdi mdi-check-circle me-2"></i>Thank you! Your message has been sent.</div>'; status.style.display = 'block'; form.reset(); setTimeout(() => status.style.display = 'none', 5000); }
                else throw new Error('Network error');
            } catch { status.innerHTML = '<div class="alert alert-danger"><i class="mdi mdi-alert-circle me-2"></i>Sorry, there was an error. Please try again.</div>'; status.style.display = 'block'; }
            finally { submitBtn.disabled = false; submitBtn.innerHTML = 'Send Message'; }
        });
    }

    document.addEventListener('DOMContentLoaded', init);
})();
