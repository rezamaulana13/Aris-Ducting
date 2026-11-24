/**
* Template Name: Keystone
* Template URL: https://bootstrapmade.com/keystone-bootstrap-commercial-real-estate-template/
* Updated: Nov 20 2026 with Bootstrap v5.3.8
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active') && !navmenu.classList.contains('toggle-dropdown')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  window.addEventListener('load', () => {
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      preloader.remove();
    }
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  }

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
    let container = isotopeItem.querySelector('.isotope-container');

    if (!container || typeof Isotope === 'undefined') return;

    let initIsotope = new Isotope(container, {
      itemSelector: '.isotope-item',
      layoutMode: layout,
      filter: filter,
      sortBy: sort
    });

    if (typeof imagesLoaded !== 'undefined') {
      imagesLoaded(container, function() {
        initIsotope.layout();
      });
    }

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filterBtn) {
      filterBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let activeEl = isotopeItem.querySelector('.isotope-filters .filter-active');
        if (activeEl) {
          activeEl.classList.remove('filter-active');
        }
        this.classList.add('filter-active');
        let filterVal = this.getAttribute('data-filter') || '*';
        initIsotope.arrange({
          filter: filterVal
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Initiate glightbox
   */
  if (typeof GLightbox !== 'undefined') {
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  }

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header, .faq-item .faq-question').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      const parent = faqItem.closest('.faq-item');
      if (parent) {
        parent.classList.toggle('active');
        parent.classList.toggle('faq-active');
        const btn = parent.querySelector('.faq-question');
        if (btn) {
          const isExpanded = parent.classList.contains('active');
          btn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        }
      }
    });
  });

  /**
   * Auto-scroll sticky sidebar synchronously with main content scroll
   */
  function initSidebarScrollSync() {
    const sidebars = document.querySelectorAll('.article-sidebar-sticky, .service-sidebar-sticky');
    if (sidebars.length === 0) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          sidebars.forEach((sidebar) => {
            const container = sidebar.closest('.article-layout-grid, .service-detail, .row');
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const containerTop = rect.top;
            const containerHeight = rect.height;
            const windowHeight = window.innerHeight;

            const maxScrollDistance = containerHeight - windowHeight;
            if (maxScrollDistance > 0) {
              const scrolledDistance = Math.max(0, -containerTop + 90);
              const progress = Math.min(1, Math.max(0, scrolledDistance / maxScrollDistance));

              const maxSidebarScroll = sidebar.scrollHeight - sidebar.clientHeight;
              if (maxSidebarScroll > 0) {
                sidebar.scrollTop = progress * maxSidebarScroll;
              }
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  window.addEventListener('load', initSidebarScrollSync);
  initSidebarScrollSync();

})();