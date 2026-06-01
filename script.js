// Год в футере
document.getElementById('year').textContent = new Date().getFullYear();

// Фон шапки при скролле
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
onScroll();
window.addEventListener('scroll', onScroll);

// Мобильное меню
const burger = document.getElementById('burger');
const links = document.querySelector('.nav__links');
function setMenu(open) {
  links.classList.toggle('open', open);
  burger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}
burger.addEventListener('click', () => setMenu(!links.classList.contains('open')));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => setMenu(false))
);

// Появление блоков при скролле
const io = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll('.card, .case, .section__head, .about__photo, .about__text, .contact__card, .price-row')
  .forEach(el => { el.classList.add('reveal'); io.observe(el); });

// Модалка для карточек услуг
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');

const services = {
  'brand-site': {
    title: 'Бренд + сайт под ключ',
    intro: 'Цельный образ компании и готовый работающий сайт — одним комплектом, у одного подрядчика. Без рассинхрона между логотипом, стилем и сайтом.',
    blocks: [
      { h: 'Что входит', items: [
        'Бриф и анализ конкурентов',
        '2-3 концепции логотипа на выбор',
        'Финальный логотип в форматах PNG / SVG / PDF',
        'Фирменный стиль: палитра, типографика, графика',
        'Брендбук с правилами использования',
        'Дизайн сайта (лендинг или многостраничник)',
        'Реальная вёрстка + адаптив под все устройства',
        'Базовая SEO-оптимизация (мета-теги, скорость, Schema, Open Graph, sitemap)',
        'Подключение форм, мессенджеров, аналитики',
        'Размещение на хостинге, подключение домена, финальная проверка'
      ]},
      { h: 'Сроки и цена', items: [
        'Срок: 1-4 недели',
        'Стоимость: от 20 000 ₽',
        'SEO-продвижение (ежемесячно) — отдельно, от 15 000 ₽/мес',
        'Оплата: 50% предоплата, 50% после согласования'
      ]}
    ]
  },
  'websites': {
    title: 'Сайты под ключ',
    intro: 'Лендинг или многостраничный сайт с дизайном, текстами и реальной вёрсткой. Готовый продукт, который сразу можно показывать клиентам.',
    blocks: [
      { h: 'Что входит', items: [
        'Структура и прототип в Figma',
        'Современный дизайн под ваш бренд',
        'Тексты под продажу или адаптация ваших',
        'Подбор изображений и графики',
        'Адаптивная вёрстка: мобильный, планшет, десктоп',
        'Оптимизация скорости (90+ PageSpeed)',
        'Подключение форм заявок и мессенджеров',
        'Базовая SEO-оптимизация: мета-теги, Schema, Open Graph, sitemap',
        'Подключение Google / Яндекс аналитики',
        'Размещение на хостинге и подключение домена'
      ]},
      { h: 'Сроки и цена', items: [
        'Лендинг — 1-2 недели, от 15 000 ₽',
        'Многостраничный сайт — 2-4 недели, от 30 000 ₽',
        'SEO-продвижение (ежемесячно) — отдельно, от 15 000 ₽/мес',
        'Оплата: 50% предоплата, 50% после согласования'
      ]}
    ]
  },
  'apps': {
    title: 'Разработка приложений',
    intro: 'Веб-приложения и платформы с реальной функциональностью — от рабочего прототипа до полноценного продукта с базой данных и личными кабинетами.',
    blocks: [
      { h: 'Что входит', items: [
        'Анализ задачи и схема функционала',
        'Прототип интерфейса в Figma',
        'UI / UX дизайн всех экранов',
        'Frontend на современном стеке',
        'Backend и база данных',
        'Авторизация и личные кабинеты пользователей',
        'Подключение платёжных систем (если нужно)',
        'Тестирование и отладка',
        'Деплой и настройка домена'
      ]},
      { h: 'Под ключ — если у вас только идея', items: [
        'Беру на себя всё: брендинг, дизайн, разработку, запуск',
        'Один подрядчик от идеи до рабочего приложения'
      ]},
      { h: 'Мобильная версия — отдельной услугой', items: [
        'К моему приложению (если делала десктоп) — от 15 000 ₽',
        'К вашему уже готовому приложению — от 30 000 ₽'
      ]},
      { h: 'Сроки и цена', items: [
        'Прототип — от 1 недели, от 20 000 ₽',
        'Полноценное приложение — от 1 месяца, от 50 000 ₽',
        'Мобильная версия — 1-3 недели',
        'Оплата по этапам'
      ]}
    ]
  },
  'ai': {
    title: 'Автоматизация и AI',
    intro: 'Снимаю с вас рутину при помощи искусственного интеллекта и интеграций. Бизнес работает быстрее, вы — меньше делаете руками.',
    blocks: [
      { h: 'Что я делаю', items: [
        'Чат-боты для мессенджеров и сайтов',
        'AI-помощники для бизнеса',
        'Приложения для автоматизации рутины (отчёты, заявки, обработка документов)',
        'Автоматические email и мессенджер-рассылки',
        'Парсинг данных и автоматический сбор информации',
        'Интеграции CRM, Google Sheets, Notion, мессенджеров',
        'Голосовые AI-агенты',
        'Рекламные видео и видео с AI-аватарами'
      ]},
      { h: 'Сроки и цена', items: [
        'Срок: до 4 недель в зависимости от задачи',
        'Стоимость: от 20 000 ₽',
        'Возможна абонентская поддержка после запуска'
      ]}
    ]
  }
};

const servicesEN = {
  'brand-site': {
    title: 'Brand + website end-to-end',
    intro: 'A cohesive brand image and a working, finished website — as one package, from one contractor. No disconnect between logo, identity and site.',
    blocks: [
      { h: "What's included", items: [
        'Brief and competitor analysis',
        '2-3 logo concepts to choose from',
        'Final logo in PNG / SVG / PDF formats',
        'Brand identity: palette, typography, graphics',
        'Brand guidelines with usage rules',
        'Website design (landing or multi-page)',
        'Real code + responsive for all devices',
        'Basic SEO optimization (meta tags, speed, Schema, Open Graph, sitemap)',
        'Forms, messengers and analytics setup',
        'Hosting deployment, domain setup, final checks'
      ]},
      { h: 'Timing and price', items: [
        'Timing: 1-4 weeks',
        'Cost: from $250',
        'SEO promotion (monthly) — separate, from $200/mo',
        'Payment: 50% upfront, 50% after approval'
      ]}
    ]
  },
  'websites': {
    title: 'Websites end-to-end',
    intro: 'Landing or multi-page website with design, copy and real code. A finished product you can show clients right away.',
    blocks: [
      { h: "What's included", items: [
        'Structure and prototype in Figma',
        'Modern design tailored to your brand',
        'Sales copy or adaptation of yours',
        'Image and graphic selection',
        'Responsive code: mobile, tablet, desktop',
        'Speed optimization (90+ PageSpeed)',
        'Forms and messenger integration',
        'Basic SEO optimization: meta tags, Schema, Open Graph, sitemap',
        'Google / Yandex Analytics setup',
        'Hosting deployment and domain setup'
      ]},
      { h: 'Timing and price', items: [
        'Landing — 1-2 weeks, from $200',
        'Multi-page — 2-4 weeks, from $400',
        'SEO promotion (monthly) — separate, from $200/mo',
        'Payment: 50% upfront, 50% after approval'
      ]}
    ]
  },
  'apps': {
    title: 'App development',
    intro: 'Web apps and platforms with real functionality — from a working prototype to a full product with database and user accounts.',
    blocks: [
      { h: "What's included", items: [
        'Task analysis and feature scheme',
        'Interface prototype in Figma',
        'UI / UX design for all screens',
        'Frontend on modern stack',
        'Backend and database',
        'User authentication and personal accounts',
        'Payment integrations (if needed)',
        'Testing and debugging',
        'Deploy and domain setup'
      ]},
      { h: 'End-to-end — if you only have an idea', items: [
        'I take everything: branding, design, development, launch',
        'One contractor from idea to working app'
      ]},
      { h: 'Mobile version — as a separate service', items: [
        'To my app (if I built the desktop one) — from $200',
        'To your existing app — from $400'
      ]},
      { h: 'Timing and price', items: [
        'Prototype — from 1 week, from $250',
        'Full app — from 1 month, from $600',
        'Mobile version — 1-3 weeks',
        'Payment by stages'
      ]}
    ]
  },
  'ai': {
    title: 'Automation & AI',
    intro: 'I take routine off your hands using AI and integrations. Your business runs faster, and you do less manual work.',
    blocks: [
      { h: 'What I do', items: [
        'Chatbots for messengers and websites',
        'AI assistants for business',
        'Apps for routine automation (reports, requests, document processing)',
        'Automated email and messenger campaigns',
        'Data parsing and automated information gathering',
        'CRM, Google Sheets, Notion, messenger integrations',
        'Voice AI agents',
        'Promo videos and AI avatar videos'
      ]},
      { h: 'Timing and price', items: [
        'Timing: up to 4 weeks depending on the task',
        'Cost: from $250',
        'Ongoing support available after launch'
      ]}
    ]
  }
};

function renderService(key) {
  const lang = (window.i18nLang && window.i18nLang()) || 'ru';
  const dict = lang === 'en' ? servicesEN : services;
  const s = dict[key] || services[key];
  if (!s) { modalContent.innerHTML = ''; return; }
  modalTitle.textContent = s.title;
  modalContent.innerHTML = `
    <p class="modal__intro">${s.intro}</p>
    ${s.blocks.map(b => `
      <h4 class="modal__h">${b.h}</h4>
      <ul class="modal__list">${b.items.map(i => `<li>${i}</li>`).join('')}</ul>
    `).join('')}
  `;
}
// Перерисовка модалки при смене языка, если открыта
document.addEventListener('i18n:changed', () => {
  if (!modal.hidden && currentService) renderService(currentService);
});

const priceAnchors = {
  'brand-site': 'price-brand-site',
  'websites': 'price-websites',
  'apps': 'price-apps',
  'ai': 'price-ai',
};
let currentService = null;
const modalCalc = document.getElementById('modalCalc');

document.querySelectorAll('.card__more').forEach(btn => {
  btn.addEventListener('click', () => {
    currentService = btn.dataset.modal;
    renderService(currentService);
    if (modalCalc) modalCalc.href = '#' + (priceAnchors[currentService] || 'pricing');
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  });
});

// При клике на «Рассчитать стоимость» — открываем нужный блок details и скроллим к нему
modalCalc && modalCalc.addEventListener('click', e => {
  const id = priceAnchors[currentService];
  if (!id) return;
  // Дать модалке закрыться, потом раскрыть нужный блок и проскроллить
  setTimeout(() => {
    const row = document.getElementById(id);
    if (!row) return;
    const det = row.querySelector('details.price-extras');
    if (det) det.open = true;
    row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    row.classList.add('price-row--highlight');
    setTimeout(() => row.classList.remove('price-row--highlight'), 2000);
  }, 60);
});
modal.addEventListener('click', e => {
  if (e.target.matches('[data-close]')) { modal.hidden = true; document.body.style.overflow = ''; }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) { modal.hidden = true; document.body.style.overflow = ''; } });

// При смене языка — подменяем источники сертификатов (RU = -ru, EN = базовая версия)
function applyCertLang() {
  const lang = (window.i18nLang && window.i18nLang()) || 'ru';
  document.querySelectorAll('.cert--thumb[data-cert-base]').forEach(btn => {
    const base = btn.dataset.certBase;
    const tryPath = (lang === 'ru') ? `assets/${base}-ru.png` : `assets/${base}.png`;
    const enPath = `assets/${base}.png`;
    const img = btn.querySelector('img');
    // Проверка существования через Image()
    const probe = new Image();
    probe.onload = () => { img.src = tryPath; btn.dataset.cert = tryPath; };
    probe.onerror = () => { img.src = enPath; btn.dataset.cert = enPath; };
    probe.src = tryPath;
  });
}
document.addEventListener('DOMContentLoaded', applyCertLang);
document.addEventListener('i18n:changed', applyCertLang);

// Подмена обложек кейсов по языку (--shot)
function applyCoverLang() {
  const lang = (window.i18nLang && window.i18nLang()) || 'ru';
  document.querySelectorAll('[data-cover-base]').forEach(el => {
    const base = el.dataset.coverBase;
    const tryPath = (lang === 'ru') ? `assets/${base}-ru.png` : `assets/${base}.png`;
    const enPath = `assets/${base}.png`;
    const probe = new Image();
    probe.onload = () => { el.style.setProperty('--shot', `url('${tryPath}')`); };
    probe.onerror = () => { el.style.setProperty('--shot', `url('${enPath}')`); };
    probe.src = tryPath;
  });
}
document.addEventListener('DOMContentLoaded', applyCoverLang);
document.addEventListener('i18n:changed', applyCoverLang);

// ===== ОТЗЫВЫ =====
const reviewsModal = document.getElementById('reviewsModal');
const reviewsList = document.getElementById('reviewsList');
const reviewForm = document.getElementById('reviewForm');
const reviewStars = document.getElementById('reviewStars');
const reviewsBtn = document.getElementById('reviewsBtn');

// ===== Подключение Supabase =====
// Чтобы заработала общая база отзывов:
// 1. Создай проект на supabase.com (бесплатный tier)
// 2. SQL Editor → выполни этот код:
//    create table reviews (
//      id uuid default gen_random_uuid() primary key,
//      name text not null,
//      role text,
//      text text not null,
//      rating int not null check (rating between 1 and 5),
//      language text default 'ru',
//      created_at timestamptz default now()
//    );
//    alter table reviews enable row level security;
//    create policy "anyone can read"  on reviews for select using (true);
//    create policy "anyone can insert" on reviews for insert with check (true);
// 3. Settings → API → скопируй Project URL и anon key
// 4. Подставь их сюда:
const SUPABASE_URL = 'https://vrszciahlkxfzypmyasz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc3pjaWFobGt4Znp5cG15YXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMjY1OTEsImV4cCI6MjA5NTgwMjU5MX0.VoFRxWYnUvCKe1n5_HzqvPjZ9HMx17ZnZS5zFlnlETQ';
let supa = null;
if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) {
  supa = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Фоллбэк: пока Supabase не подключён, храним локально (только в этом браузере)
function loadLocal() {
  try { return JSON.parse(localStorage.getItem('nataly_reviews') || '[]'); }
  catch { return []; }
}
function saveLocal(arr) { localStorage.setItem('nataly_reviews', JSON.stringify(arr)); }

async function fetchAllReviews() {
  if (supa) {
    const { data, error } = await supa
      .from('reviews')
      .select('name, role, text, rating, language, created_at')
      .order('created_at', { ascending: false });
    if (!error && data) return data.map(r => ({ ...r, date: r.created_at }));
  }
  return loadLocal();
}

async function pushReview(review) {
  if (supa) {
    const { error } = await supa.from('reviews').insert(review);
    return !error;
  }
  const arr = loadLocal();
  arr.unshift({ ...review, created_at: new Date().toISOString() });
  saveLocal(arr);
  return true;
}

async function renderReviews() {
  const all = await fetchAllReviews();
  const lang = (window.i18nLang && window.i18nLang()) || 'ru';
  const T = window.i18nT || {ru:{},en:{}};
  if (!all.length) {
    reviewsList.innerHTML = `
      <div class="reviews-empty">
        <p>${T[lang]['rv.empty.h'] || 'Отзывов пока нет — будьте первым.'}</p>
        <small>${T[lang]['rv.empty.s'] || 'Поделитесь впечатлением о работе ниже.'}</small>
      </div>`;
    return;
  }
  reviewsList.innerHTML = all.map(r => `
    <article class="review">
      <header class="review__head">
        <div>
          <div class="review__name">${escapeHtml(r.name)}</div>
          ${r.role ? `<div class="review__role">${escapeHtml(r.role)}</div>` : ''}
        </div>
        <div class="review__stars">${'★'.repeat(r.rating)}<span class="review__stars-dim">${'★'.repeat(5 - r.rating)}</span></div>
      </header>
      <p class="review__text">${escapeHtml(r.text)}</p>
      <time class="review__date">${formatDate(r.date || r.created_at)}</time>
    </article>
  `).join('');
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function formatDate(d){const lang=(window.i18nLang&&window.i18nLang())||'ru';const D=new Date(d);return D.toLocaleDateString(lang==='en'?'en-US':'ru-RU',{day:'numeric',month:'long',year:'numeric'});}

// Открытие модалки отзывов
reviewsBtn && reviewsBtn.addEventListener('click', async () => {
  reviewsModal.hidden = false;
  document.body.style.overflow = 'hidden';
  await renderReviews();
});
reviewsModal.addEventListener('click', e => {
  if (e.target.matches('[data-close]')) { reviewsModal.hidden = true; document.body.style.overflow = ''; }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !reviewsModal.hidden) { reviewsModal.hidden = true; document.body.style.overflow = ''; } });
document.addEventListener('i18n:changed', () => { if (!reviewsModal.hidden) renderReviews(); });

// Звёзды
function updateStars(rating) {
  reviewStars.dataset.rating = rating;
  [...reviewStars.children].forEach(s => s.classList.toggle('active', +s.dataset.v <= rating));
}
reviewStars.addEventListener('click', e => { if (e.target.dataset.v) updateStars(+e.target.dataset.v); });
updateStars(5);

// Отправка формы — публикует в общую базу (или локально как фоллбэк)
reviewForm.addEventListener('submit', async e => {
  e.preventDefault();
  const fd = new FormData(reviewForm);
  const review = {
    name: fd.get('name').trim(),
    role: fd.get('role').trim() || null,
    text: fd.get('text').trim(),
    rating: +reviewStars.dataset.rating,
    language: (document.documentElement.lang || 'ru').slice(0, 2)
  };
  if (!review.name || !review.text) return;
  const ok = await pushReview(review);
  if (ok) {
    reviewForm.reset();
    updateStars(5);
    await renderReviews();
  }
});
