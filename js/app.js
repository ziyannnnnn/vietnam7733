/**
 * Vietnam: A Journey Across the Clouds
 * Engine: Editorial Watermarks, Scroll Reveal Choreographer, Apple 3D Parallax
 */

document.addEventListener('DOMContentLoaded', () => {
  initApp();
  registerServiceWorker();
});

function initApp() {
  renderStopCards();
  initScrollReveal();
  initPhotoGallerySwitching();
  initRouteLine();
  initFloatingSelector();
  initModal();
  initImageLightbox();
  initCountdown();
  initSmoothScroll();
  initAppleParallax();
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then(() => {
        const statusEl = document.getElementById('offlineStatus');
        if (statusEl) statusEl.classList.add('is-ready');
      }).catch(err => {
        console.warn('SW registration skipped:', err);
      });
    });
  }
}

/* ==========================================================================
   1. STOP CARDS RENDERING (With Editorial Watermarks & Taglines)
   ========================================================================== */
function renderStopCards() {
  const container = document.getElementById('stopsContainer');
  const data = window.ITINERARY_DATA || [];
  if (!container || !data.length) return;

  container.innerHTML = '';

  data.forEach((stop, index) => {
    const isEven = index % 2 === 0;
    const layoutClass = isEven ? 'layout-left' : 'layout-right';
    const watermarkNum = String(stop.id).padStart(2, '0');

    const highlightsHtml = stop.highlightPoints
      .map(pt => `
        <li class="stop-highlight-item">
          <span class="stop-highlight-bullet">✦</span>
          <span>${pt}</span>
        </li>
      `).join('');

    const secondaryThumbs = stop.gallery && stop.gallery.length > 1
      ? `
        <div class="secondary-photo-strip" data-stop-id="${stop.id}">
          ${stop.gallery.map((imgObj, gIdx) => `
            <div class="thumb-preview-item ${gIdx === 0 ? 'is-active' : ''}" 
                 data-stop-id="${stop.id}" 
                 data-gallery-idx="${gIdx}" 
                 data-src="${imgObj.src}" 
                 data-fallback="${imgObj.fallback}" 
                 data-caption="${imgObj.caption}" 
                 title="Switch view to: ${imgObj.caption}">
              <img src="${imgObj.src}" alt="${imgObj.caption}" onerror="this.onerror=null; this.src='${imgObj.fallback}'" loading="lazy" />
            </div>
          `).join('')}
        </div>
      `
      : '';

    const cardRow = document.createElement('div');
    cardRow.className = `stop-card-row ${layoutClass}`;
    cardRow.id = `stop-${stop.id}`;
    cardRow.setAttribute('data-stop-id', stop.id);
    cardRow.setAttribute('data-region', stop.region.toLowerCase());

    cardRow.innerHTML = `
      <div class="stop-center-anchor" id="waypoint-anchor-${stop.id}">
        <div class="waypoint-node" data-stop-id="${stop.id}" title="${stop.title}">
          <span>${ watermarkNum }</span>
        </div>
      </div>

      <div class="stop-media-side">
        <div class="watercolor-cloud-frame" data-stop-id="${stop.id}">
          <div class="cloud-mask-layer">
            <img src="${stop.heroImage}" alt="${stop.title}" onerror="this.onerror=null; this.src='${stop.fallbackImage}'" loading="lazy" />
          </div>
          <div class="photo-overlay-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${stop.gallery && stop.gallery[0] ? stop.gallery[0].caption : stop.region}</span>
          </div>
          <div class="photo-expand-hint" title="View Fullscreen Photo">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
          </div>
        </div>
        ${secondaryThumbs}
      </div>

      <div class="stop-content-side" data-stop-id="${stop.id}" title="Click to view full schedule">
        <div class="stop-watermark-num" aria-hidden="true">${watermarkNum}</div>

        <div class="stop-meta-header">
          <span class="stop-tag-pill">${stop.stopNumber} • ${stop.dayLabel}</span>
          <span class="stop-date-badge">${stop.dates}</span>
        </div>

        <h3 class="stop-title">${stop.title}</h3>
        <p class="stop-tagline">${stop.tagline || stop.region}</p>

        <ul class="stop-highlights-list">
          ${highlightsHtml}
        </ul>

        <div class="stop-card-footer">
          <button class="btn-open-modal" data-stop-id="${stop.id}">
            <span>Explore Day Schedule</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
          <div class="quick-pace-info">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>${stop.quickStats.pace}</span>
          </div>
        </div>
      </div>
    `;

    container.appendChild(cardRow);
  });
}

/* ==========================================================================
   2. CHOREOGRAPHED APPLE SCROLL REVEAL (IntersectionObserver)
   ========================================================================== */
function initScrollReveal() {
  const rows = document.querySelectorAll('.stop-card-row');
  if (!('IntersectionObserver' in window)) {
    rows.forEach(r => r.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  rows.forEach(row => observer.observe(row));
}

/* ==========================================================================
   3. ADAPTIVE SVG ROUTE TRACING
   ========================================================================== */
let routeSvg, routeBgPath, routeActivePath, routeHeadMarker;
let totalPathLength = 0;

function initRouteLine() {
  routeSvg = document.getElementById('routeSvg');
  routeBgPath = document.getElementById('routeBgPath');
  routeActivePath = document.getElementById('routeActivePath');
  routeHeadMarker = document.getElementById('routeHeadMarker');

  if (!routeSvg || !routeActivePath) return;

  updateRoutePath();

  window.addEventListener('resize', debounce(updateRoutePath, 120));
  window.addEventListener('scroll', onTimelineScroll, { passive: true });

  setTimeout(() => {
    updateRoutePath();
    onTimelineScroll();
  }, 300);
}

function updateRoutePath() {
  if (!routeSvg || !routeBgPath || !routeActivePath) return;

  const anchors = document.querySelectorAll('.stop-center-anchor');
  if (anchors.length < 2) return;

  const svgRect = routeSvg.getBoundingClientRect();
  const points = [];
  const isMobile = window.innerWidth <= 992;

  anchors.forEach(anchor => {
    const node = anchor.querySelector('.waypoint-node') || anchor;
    const rect = node.getBoundingClientRect();
    const x = rect.left + rect.width / 2 - svgRect.left;
    const y = rect.top + rect.height / 2 - svgRect.top;
    points.push({ x, y });
  });

  if (points.length < 2) return;

  const firstPt = points[0];
  const lastPt = points[points.length - 1];
  let pathD = '';

  if (isMobile) {
    pathD = `M ${firstPt.x} ${Math.max(0, firstPt.y - 50)} L ${firstPt.x} ${firstPt.y}`;
    for (let i = 0; i < points.length - 1; i++) {
      pathD += ` L ${points[i+1].x} ${points[i+1].y}`;
    }
    pathD += ` L ${lastPt.x} ${lastPt.y + 50}`;
  } else {
    const midX = svgRect.width / 2;
    pathD = `M ${midX} ${Math.max(0, firstPt.y - 80)} C ${midX} ${(firstPt.y)/2}, ${firstPt.x} ${(firstPt.y)/2}, ${firstPt.x} ${firstPt.y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const pCurrent = points[i];
      const pNext = points[i + 1];
      const dy = pNext.y - pCurrent.y;
      const cp1x = pCurrent.x;
      const cp1y = pCurrent.y + dy * 0.52;
      const cp2x = pNext.x;
      const cp2y = pNext.y - dy * 0.52;

      pathD += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${pNext.x} ${pNext.y}`;
    }
    pathD += ` C ${lastPt.x} ${lastPt.y + 50}, ${midX} ${lastPt.y + 50}, ${midX} ${lastPt.y + 80}`;
  }

  routeBgPath.setAttribute('d', pathD);
  routeActivePath.setAttribute('d', pathD);

  totalPathLength = routeActivePath.getTotalLength();
  routeActivePath.style.strokeDasharray = `${totalPathLength} ${totalPathLength}`;
  routeActivePath.style.strokeDashoffset = `${totalPathLength}`;

  onTimelineScroll();
}

function onTimelineScroll() {
  if (!routeActivePath || totalPathLength <= 0) return;

  const timelineSection = document.getElementById('timelineSection');
  if (!timelineSection) return;

  const rect = timelineSection.getBoundingClientRect();
  const triggerY = window.innerHeight * 0.55;
  const progress = Math.max(0, Math.min(1, (triggerY - rect.top) / rect.height));

  const drawLength = progress * totalPathLength;
  routeActivePath.style.strokeDashoffset = totalPathLength - drawLength;

  if (routeHeadMarker && totalPathLength > 0) {
    if (progress <= 0.01) {
      routeHeadMarker.style.opacity = '0';
    } else {
      routeHeadMarker.style.opacity = '1';
      const headPoint = routeActivePath.getPointAtLength(drawLength);
      routeHeadMarker.setAttribute('cx', headPoint.x);
      routeHeadMarker.setAttribute('cy', headPoint.y);
    }
  }

  const cardRows = document.querySelectorAll('.stop-card-row');
  let currentActiveStopId = 1;

  cardRows.forEach(row => {
    const node = row.querySelector('.waypoint-node');
    if (!node) return;

    const nodeRect = node.getBoundingClientRect();
    const nodeCenterY = nodeRect.top + nodeRect.height / 2;

    if (nodeCenterY <= triggerY + 40) {
      row.classList.add('is-passed');
    } else {
      row.classList.remove('is-passed');
    }

    if (nodeCenterY <= triggerY + 120 && nodeCenterY >= triggerY - 250) {
      row.classList.add('is-active');
      const stopId = parseInt(row.getAttribute('data-stop-id'), 10);
      if (stopId) currentActiveStopId = stopId;
    } else {
      row.classList.remove('is-active');
    }
  });

  syncSelectorPill(currentActiveStopId);
}

/* ==========================================================================
   4. TRIP SELECTOR & REGION FILTERING
   ========================================================================== */
function initFloatingSelector() {
  const pills = document.querySelectorAll('.selector-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLeg = pill.getAttribute('data-target');

      pills.forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');

      const cardRows = document.querySelectorAll('.stop-card-row');
      
      cardRows.forEach(row => {
        const region = row.getAttribute('data-region') || '';
        if (targetLeg === 'all') {
          row.classList.remove('is-dimmed');
        } else if (targetLeg === 'hanoi' && (region.includes('hanoi') || region.includes('departure') || region.includes('transit'))) {
          row.classList.remove('is-dimmed');
        } else if (targetLeg === 'halong' && region.includes('ha long')) {
          row.classList.remove('is-dimmed');
        } else if (targetLeg === 'sapa' && region.includes('sapa')) {
          row.classList.remove('is-dimmed');
        } else {
          row.classList.add('is-dimmed');
        }
      });

      let targetStop = document.getElementById('stop-1');
      if (targetLeg === 'halong') targetStop = document.getElementById('stop-2');
      if (targetLeg === 'sapa') targetStop = document.getElementById('stop-4');
      if (targetStop) scrollToElement(targetStop);
    });
  });
}

function syncSelectorPill(activeStopId) {
  const pills = document.querySelectorAll('.selector-pill');
  let targetRegion = 'all';

  if ([1, 3, 7, 8].includes(activeStopId)) {
    targetRegion = 'hanoi';
  } else if (activeStopId === 2) {
    targetRegion = 'halong';
  } else if (activeStopId >= 4 && activeStopId <= 6) {
    targetRegion = 'sapa';
  }

  pills.forEach(pill => {
    if (pill.getAttribute('data-target') === targetRegion) {
      pill.classList.add('is-active');
    } else {
      pill.classList.remove('is-active');
    }
  });
}

function scrollToElement(el) {
  const yOffset = -95;
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

/* ==========================================================================
   5. PHOTO GALLERY SWITCHER
   ========================================================================== */
function initPhotoGallerySwitching() {
  document.addEventListener('click', (e) => {
    const thumb = e.target.closest('.thumb-preview-item');
    if (!thumb) return;

    e.preventDefault();
    e.stopPropagation();

    const stopId = parseInt(thumb.getAttribute('data-stop-id'), 10);
    const newSrc = thumb.getAttribute('data-src');
    const newFallback = thumb.getAttribute('data-fallback');
    const newCaption = thumb.getAttribute('data-caption');

    const cardRow = document.getElementById(`stop-${stopId}`);
    if (!cardRow) return;

    const strip = cardRow.querySelector('.secondary-photo-strip');
    if (strip) {
      strip.querySelectorAll('.thumb-preview-item').forEach(item => item.classList.remove('is-active'));
      thumb.classList.add('is-active');
      thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    const mainImg = cardRow.querySelector('.cloud-mask-layer img');
    if (mainImg) {
      mainImg.classList.add('is-switching');
      mainImg.src = newSrc;
      mainImg.alt = newCaption || '';
      mainImg.onerror = () => { mainImg.src = newFallback; };
      setTimeout(() => mainImg.classList.remove('is-switching'), 180);
    }

    const badge = cardRow.querySelector('.photo-overlay-badge span');
    if (badge && newCaption) badge.textContent = newCaption;
  });
}

/* ==========================================================================
   6. MODAL WITH ICONS & STAGGER ANIMATION
   ========================================================================== */
let currentModalStopId = 1;

const SCHEDULE_ICONS = {
  'plane-arrival': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 18h20"></path><path d="M19 13l-7-3-4 1.5-1.5-2L8 8l7 2 4-2.5L21 9l-2 4z"></path></svg>',
  'plane': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.3-1.8 1.1l-.2.8 5.6 3.6-3.2 3.2-2.1-.7-1.1.4 2 2 2 2 .4-1.1-.7-2.1 3.2-3.2 3.6 5.6.8-.2c.8-.2 1.3-1 1.1-1.8z"></path></svg>',
  'car': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="8" rx="2"></rect><circle cx="7.5" cy="16.5" r="1.5"></circle><circle cx="16.5" cy="16.5" r="1.5"></circle><path d="M5 11l1.5-4.5h11L19 11"></path></svg>',
  'bus': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="4" y="3" width="16" height="16" rx="2"></rect><path d="M4 11h16"></path><circle cx="8" cy="15" r="1"></circle><circle cx="16" cy="15" r="1"></circle></svg>',
  'train': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="4" y="3" width="16" height="14" rx="2"></rect><path d="M4 11h16"></path><path d="M12 3v8"></path><circle cx="8" cy="14" r="1"></circle><circle cx="16" cy="14" r="1"></circle><path d="M6 17l-2 3"></path><path d="M18 17l2 3"></path></svg>',
  'coffee': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>',
  'utensils': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"></path><path d="M15 11v11"></path><path d="M5 2v20"></path><path d="M5 2c3 0 3 4 3 6s0 3-3 3"></path></svg>',
  'camera': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>',
  'anchor': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>',
  'mountain': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>',
  'sunrise': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v6"></path><path d="m4.93 10.93 4.24-4.24"></path><path d="m14.83 6.69 4.24 4.24"></path><path d="M2 18h20"></path><path d="M20 18a8 8 0 0 0-16 0"></path></svg>',
  'landmark': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>',
  'compass': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>',
  'default': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="3"></circle></svg>'
};

function initModal() {
  const backdrop = document.getElementById('itineraryModalBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');
  const prevBtn = document.getElementById('modalPrevBtn');
  const nextBtn = document.getElementById('modalNextBtn');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.thumb-preview-item') || e.target.closest('.place-map-link') || e.target.closest('.watercolor-cloud-frame')) return;

    const trigger = e.target.closest('.stop-content-side, .btn-open-modal, .waypoint-node');
    if (trigger) {
      const stopId = parseInt(trigger.getAttribute('data-stop-id') || trigger.closest('[data-stop-id]')?.getAttribute('data-stop-id'), 10);
      if (stopId) openModal(stopId);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { if (currentModalStopId > 1) openModal(currentModalStopId - 1); });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    const data = window.ITINERARY_DATA || [];
    if (currentModalStopId < data.length) openModal(currentModalStopId + 1);
  });

  // Touch swipe-down to dismiss modal on mobile
  let modalTouchStartY = 0;
  const modalEl = document.querySelector('.itinerary-modal');
  if (modalEl) {
    modalEl.addEventListener('touchstart', (e) => {
      modalTouchStartY = e.touches[0].clientY;
    }, { passive: true });

    modalEl.addEventListener('touchend', (e) => {
      const modalTouchEndY = e.changedTouches[0].clientY;
      const deltaY = modalTouchEndY - modalTouchStartY;
      if (deltaY > 65 && modalEl.scrollTop <= 5) {
        closeModal();
      }
    }, { passive: true });
  }

  window.addEventListener('keydown', (e) => {
    if (!backdrop || !backdrop.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft' && currentModalStopId > 1) openModal(currentModalStopId - 1);
    if (e.key === 'ArrowRight' && currentModalStopId < (window.ITINERARY_DATA?.length || 8)) openModal(currentModalStopId + 1);
  });
}

function openModal(stopId) {
  const data = window.ITINERARY_DATA || [];
  const stop = data.find(s => s.id === stopId);
  if (!stop) return;

  currentModalStopId = stopId;
  const backdrop = document.getElementById('itineraryModalBackdrop');

  document.getElementById('modalStopBadge').textContent = `${stop.stopNumber} • ${stop.dayLabel}`;
  document.getElementById('modalDateText').textContent = stop.dates;
  document.getElementById('modalTitle').textContent = stop.title;
  
  const coverImg = document.getElementById('modalHeroImg');
  coverImg.src = stop.heroImage;
  coverImg.onerror = () => { coverImg.src = stop.fallbackImage; };

  const scheduleContainer = document.getElementById('modalScheduleList');
  scheduleContainer.innerHTML = stop.detailedSchedule.map(item => {
    const iconSvg = SCHEDULE_ICONS[item.icon] || SCHEDULE_ICONS['default'];
    return `
      <div class="modal-timeline-item ${item.time ? 'has-transit-time' : 'no-transit-time'}">
        <div class="modal-timeline-dot">${iconSvg}</div>
        ${item.time ? `<div class="modal-timeline-time">${item.time}</div>` : ''}
        <div class="modal-timeline-text ${!item.time ? 'place-only' : ''}">${item.event}</div>
      </div>
    `;
  }).join('');

  const mapBtn = document.getElementById('modalMapBtn');
  if (mapBtn && stop.coordinates) {
    mapBtn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.coordinates.query)}`;
  }

  const prevBtn = document.getElementById('modalPrevBtn');
  const nextBtn = document.getElementById('modalNextBtn');
  if (prevBtn) prevBtn.disabled = stopId === 1;
  if (nextBtn) nextBtn.disabled = stopId === data.length;

  backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    const items = scheduleContainer.querySelectorAll('.modal-timeline-item');
    items.forEach((item, idx) => {
      item.style.transitionDelay = `${idx * 35}ms`;
      item.classList.add('is-revealed');
    });
  }, 60);
}

function closeModal() {
  const backdrop = document.getElementById('itineraryModalBackdrop');
  if (backdrop) backdrop.classList.remove('is-open');
  document.body.style.overflow = '';
}

/* ==========================================================================
   7. FULLSCREEN IMAGE LIGHTBOX VIEWER
   ========================================================================== */
let currentLightboxStopId = 1;
let currentLightboxPhotoIdx = 0;

function initImageLightbox() {
  const backdrop = document.getElementById('imageLightboxBackdrop');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.thumb-preview-item') || e.target.closest('.place-map-link')) return;

    const frame = e.target.closest('.watercolor-cloud-frame');
    if (frame) {
      e.preventDefault();
      e.stopPropagation();

      const stopId = parseInt(frame.getAttribute('data-stop-id'), 10);
      if (!stopId) return;

      const data = window.ITINERARY_DATA || [];
      const stop = data.find(s => s.id === stopId);
      if (!stop) return;

      const currentImg = frame.querySelector('.cloud-mask-layer img');
      const currentSrc = currentImg ? currentImg.getAttribute('src') : stop.heroImage;

      const gallery = stop.gallery && stop.gallery.length ? stop.gallery : [{ src: stop.heroImage, caption: stop.title, fallback: stop.fallbackImage }];
      let photoIdx = gallery.findIndex(item => item.src === currentSrc);
      if (photoIdx < 0) photoIdx = 0;

      openLightbox(stopId, photoIdx);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop || e.target.classList.contains('lightbox-container') || e.target.classList.contains('lightbox-media-wrapper')) {
        closeLightbox();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!backdrop || !backdrop.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(stopId, photoIdx = 0) {
  const data = window.ITINERARY_DATA || [];
  const stop = data.find(s => s.id === stopId);
  if (!stop) return;

  currentLightboxStopId = stopId;
  const gallery = stop.gallery && stop.gallery.length ? stop.gallery : [{ src: stop.heroImage, caption: stop.title, fallback: stop.fallbackImage }];

  if (photoIdx < 0) photoIdx = 0;
  if (photoIdx >= gallery.length) photoIdx = gallery.length - 1;
  currentLightboxPhotoIdx = photoIdx;

  const item = gallery[photoIdx];
  const backdrop = document.getElementById('imageLightboxBackdrop');
  const imgEl = document.getElementById('lightboxMainImg');
  const captionEl = document.getElementById('lightboxCaption');
  const counterEl = document.getElementById('lightboxCounter');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (imgEl) {
    imgEl.src = item.src;
    imgEl.alt = item.caption || stop.title;
    imgEl.onerror = () => { imgEl.src = item.fallback || stop.fallbackImage; };
  }

  if (captionEl) captionEl.textContent = item.caption || stop.title;
  if (counterEl) counterEl.textContent = `${photoIdx + 1} / ${gallery.length}`;

  if (prevBtn) prevBtn.disabled = (photoIdx === 0);
  if (nextBtn) nextBtn.disabled = (photoIdx === gallery.length - 1);

  if (backdrop) backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function navigateLightbox(direction) {
  const data = window.ITINERARY_DATA || [];
  const stop = data.find(s => s.id === currentLightboxStopId);
  if (!stop) return;

  const gallery = stop.gallery && stop.gallery.length ? stop.gallery : [{ src: stop.heroImage, caption: stop.title, fallback: stop.fallbackImage }];
  const newIdx = currentLightboxPhotoIdx + direction;
  if (newIdx >= 0 && newIdx < gallery.length) {
    openLightbox(currentLightboxStopId, newIdx);
  }
}

function closeLightbox() {
  const backdrop = document.getElementById('imageLightboxBackdrop');
  if (backdrop) backdrop.classList.remove('is-open');

  const itineraryModal = document.getElementById('itineraryModalBackdrop');
  if (!itineraryModal || !itineraryModal.classList.contains('is-open')) {
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   8. APPLE 3D PERSPECTIVE PARALLAX TILT
   ========================================================================== */
function initAppleParallax() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cards = document.querySelectorAll('.stop-content-side');

  cards.forEach(card => {
    let bounds;

    function onMouseEnter() {
      bounds = card.getBoundingClientRect();
      card.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease';
    }

    function onMouseMove(e) {
      if (!bounds) bounds = card.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const xPct = (mouseX / bounds.width - 0.5);
      const yPct = (mouseY / bounds.height - 0.5);

      const rotateX = (-yPct * 4.5).toFixed(2);
      const rotateY = (xPct * 4.5).toFixed(2);

      card.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.012)`;
    }

    function onMouseLeave() {
      card.style.transition = 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
    }

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
  });
}

/* ==========================================================================
   9. REAL-TIME COUNTDOWN (March 6, 2027 08:25 AM)
   ========================================================================== */
function initCountdown() {
  const tripDate = new Date('2027-03-06T08:25:00+07:00').getTime();

  function update() {
    const now = new Date().getTime();
    const diff = tripDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = n => String(n).padStart(2, '0');

    const dEl = document.getElementById('cdDays');
    const hEl = document.getElementById('cdHours');
    const mEl = document.getElementById('cdMins');
    const sEl = document.getElementById('cdSecs');

    if (dEl) dEl.textContent = days;
    if (hEl) hEl.textContent = pad(hours);
    if (mEl) mEl.textContent = pad(mins);
    if (sEl) sEl.textContent = pad(secs);
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   10. SMOOTH SCROLL & UTILITY
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        scrollToElement(target);
      }
    });
  });
}

function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}