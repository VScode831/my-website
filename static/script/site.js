(function () {
    const navToggle = document.querySelector('[data-nav-toggle]');
    const nav = navToggle ? navToggle.closest('.nav') : null;
    const navMenu = nav ? nav.querySelector('[data-nav-menu]') : null;
    const navCta = nav ? nav.querySelector('.nav__cta') : null;

    if (!navToggle || !nav || !navMenu) {
        registerScrollNav();
        return;
    }

    const mobileNavMq = typeof window.matchMedia === 'function'
        ? window.matchMedia('(max-width: 900px)')
        : null;

    const toggleMenu = () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!isExpanded));
        navMenu.classList.toggle('is-open', !isExpanded);
        nav.classList.toggle('nav--open', !isExpanded);
        if (navCta) {
            navCta.classList.toggle('is-open', !isExpanded);
        }
    };

    const closeMenu = () => {
        navToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('nav--open');
        navMenu.classList.remove('is-open');
        if (navCta) {
            navCta.classList.remove('is-open');
        }
    };

    const nextFrame = (callback) => {
        const raf = window.requestAnimationFrame;
        if (typeof raf === 'function') {
            raf(callback);
            return;
        }
        window.setTimeout(callback, 16);
    };

    const suppressTransitions = () => {
        nav.classList.add('nav--no-transition');
        nextFrame(() => {
            nextFrame(() => {
                nav.classList.remove('nav--no-transition');
            });
        });
    };

    navToggle.addEventListener('click', toggleMenu);

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
        if (navToggle.getAttribute('aria-expanded') !== 'true') {
            return;
        }
        if (nav.contains(event.target)) {
            return;
        }
        closeMenu();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    if (mobileNavMq) {
        const handleBreakpointChange = (event) => {
            suppressTransitions();
            if (!event.matches) {
                closeMenu();
            }
        };

        if (typeof mobileNavMq.addEventListener === 'function') {
            mobileNavMq.addEventListener('change', handleBreakpointChange);
        } else if (typeof mobileNavMq.addListener === 'function') {
            mobileNavMq.addListener(handleBreakpointChange);
        }
    }

    registerScrollNav();

    function registerScrollNav() {
        const navElement = document.querySelector('.nav');
        if (!navElement) {
            return;
        }
        const evaluate = () => {
            if (window.scrollY > 24) {
                navElement.classList.add('nav--scrolled');
            } else {
                navElement.classList.remove('nav--scrolled');
            }
        };
        evaluate();
        window.addEventListener('scroll', evaluate, { passive: true });
    }
})();
