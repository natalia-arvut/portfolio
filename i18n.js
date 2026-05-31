/* ===== Двуязычность: RU / EN ===== */
const T = {
  ru: {
    /* meta */
    'meta.title': 'Дизайн и разработка под ключ',
    'meta.desc': 'Нейродизайнер и разработчик. Бренды, сайты и приложения под ключ с использованием AI — от идеи до запуска.',

    /* nav */
    'ai.badge': 'в сотрудничестве с <b>AI</b>',
    'nav.services': 'Услуги',
    'nav.portfolio': 'Портфолио',
    'nav.pricing': 'Цены',
    'nav.about': 'Обо мне',
    'nav.faq': 'FAQ',
    'nav.cta': 'Обсудить проект',

    /* hero */
    'hero.eyebrow': 'Графический &amp; веб-дизайнер · разработчик · AI',
    'hero.t1': 'Бренды.',
    'hero.t2': 'Сайты.',
    'hero.t3': 'Приложения.',
    'hero.sub': 'Создаю проекты под ключ — от идеи до запуска. Логотип, фирменный стиль, дизайн и реальная разработка с использованием AI. Один человек закрывает весь цикл.',
    'hero.cta1': 'Обсудить проект',
    'hero.cta2': 'Смотреть работы',
    'hero.stat1.b': '30+', 'hero.stat1.s': 'сайтов',
    'hero.stat2.b': '4+', 'hero.stat2.s': 'крупных проекта',
    'hero.stat3.b': '8', 'hero.stat3.s': 'лет в дизайне',
    'hero.stat4.b': '360°', 'hero.stat4.s': 'бренд · дизайн · код',

    /* services */
    'services.title': 'Услуги',
    'services.lead': 'Полный цикл или отдельный этап — как удобно вам.',
    'srv.brand-site.h': 'Бренд + сайт под ключ',
    'srv.brand-site.p': 'Логотип, фирменный стиль и сайт единым комплектом. Целостный образ и готовый, работающий сайт.',
    'srv.websites.h': 'Сайты под ключ',
    'srv.websites.p': 'Лендинги и многостраничные сайты: дизайн, тексты, реальная вёрстка и запуск. Адаптив и скорость.',
    'srv.apps.h': 'Разработка приложений',
    'srv.apps.p': 'Веб-приложения и платформы: от прототипа до рабочего продукта с базой данных.',
    'srv.ai.h': 'Автоматизация и AI',
    'srv.ai.p': 'Боты, интеграции, ИИ-помощники, рассылки. Снимаю с вас рутину с помощью искусственного интеллекта.',
    'srv.more': 'Подробнее →',

    /* portfolio */
    'work.title': 'Портфолио',
    'work.lead': 'Цельные бренды от логотипа до запущенного продукта — каждый в своём стиле.',

    'case.lb.tag': 'Платформа · цифровые визитки · платные коммуникации',
    'case.lb.h': 'Arvut LiveBook',
    'case.lb.p': 'Бренд и продукт для платформы цифровых визиток и платных коммуникаций: логотип, лендинг и сама платформа.',
    'case.lb.r': ['Бренд и логотип','Лендинг','UX / UI Design','Разработка','Запуск'],

    'case.vb.tag': 'Приложение · симулятор',
    'case.vb.h': 'Вселенский банк изобилия',
    'case.vb.p': 'Дизайн и разработка приложения-симулятора: бренд, интерфейс и рабочее веб-приложение от и до.',
    'case.vb.r': ['Брендинг','UI Design','UX Design','Разработка','Запуск'],

    'case.sl.tag': 'Юридический и финансовый консалтинг',
    'case.sl.h': 'Selinùs Financial Consulting',
    'case.sl.p': 'Премиальный бренд для швейцарской финансовой компании: логотип, фирменный стиль, брендбук и многостраничный сайт.',
    'case.sl.r': ['Логотип и бренд','Дизайн сайта','Вёрстка','Рекламное видео'],

    'case.ar.tag.a': 'Бухгалтерия',
    'case.ar.tag.b': 'сервис',
    'case.ar.h': 'Arvut Accounting',
    'case.ar.p': 'Фирменный стиль и корпоративный сайт бухгалтерской компании: логотип, графика и многостраничный сайт.',
    'case.ar.r': ['Логотип и бренд','Дизайн сайта','Тексты','Сборка','Видео'],

    'role.globe.title': 'Многоязычный сайт',
    'case.view': 'Посмотреть',

    /* pricing */
    'pricing.title': 'Цены',
    'pricing.lead': 'Стартовые цены — минимальные. Финальная стоимость зависит от объёма и обсуждается под задачу. Цена «от» — если у вас уже есть материалы (тексты, бриф, идея, наброски). Если делаю всё с нуля — стоимость собирается из надстроек ниже. Точную цену рассчитаю после короткого брифа.',
    'price.extras.summary': 'Как формируется цена',
    'price.total.label.brand-site': 'Полностью с нуля (только идея от вас):',
    'price.total.label.landing': 'Под ключ с нуля (только идея от вас):',
    'price.total.label.multipage': 'Под ключ с нуля (только идея от вас):',
    'price.total.label.apps': 'Полноценное приложение под ключ:',
    'price.total.label.ai': 'Комплексное решение под ключ:',

    'p.brand-site.h': 'Бренд + сайт под ключ',
    'p.brand-site.p': 'Логотип, фирменный стиль и сайт комплектом.',
    'p.brand-site.base': 'База: есть бриф, тексты, материалы. Логотип + фирстиль + брендбук + одностраничный сайт',
    'p.brand-site.x1': '+ Написание текстов',
    'p.brand-site.x2': '+ Многостраничник вместо лендинга',
    'p.brand-site.x3': '+ Доп. языковая версия сайта',
    'p.brand-site.x4': '+ Создание рекламного видео (или видео с аватаром)',

    'p.landing.h': 'Лендинг под ключ',
    'p.landing.p': 'Одностраничный сайт с дизайном и реальной вёрсткой.',
    'p.landing.base': 'База: есть тексты, материалы, пожелания по дизайну',
    'p.landing.x1': '+ Написание текстов',
    'p.landing.x2': '+ Доп. блоки (свыше 7 секций)',
    'p.landing.x3': '+ Анимации и спецэффекты',
    'p.landing.x4': '+ Подключение CRM, оплат, мессенджеров',
    'p.landing.x5': '+ Создание рекламного видео (или видео с аватаром)',

    'p.multi.h': 'Многостраничный сайт',
    'p.multi.p': 'Корпоративный сайт с разделами, каталогом или блогом.',
    'p.multi.base': 'База: есть структура, тексты, материалы (до 5 страниц)',
    'p.multi.x1': '+ Написание текстов с нуля',
    'p.multi.x2': '+ Каталог товаров (до 50 позиций)',
    'p.multi.x3': '+ Блог с админкой',
    'p.multi.x4': '+ Доп. языковая версия',
    'p.multi.x5': '+ Подключение CRM, оплат, мессенджеров',
    'p.multi.x6': '+ Создание рекламного видео (или видео с аватаром)',

    'p.apps.h': 'Разработка приложений',
    'p.apps.p': 'Веб-приложения и платформы — от прототипа до запущенного продукта.',
    'p.apps.proto': 'Прототип / MVP с базовым функционалом',
    'p.apps.full': 'Полноценное приложение (включая UI/UX, авторизацию, ЛК, интеграции, AI-функции)',
    'p.apps.turnkey': 'Приложение под ключ — беру весь цикл (брендинг, дизайн, разработка, запуск)',
    'p.apps.mob1': 'Мобильная версия — к моему приложению (если делала десктоп)',
    'p.apps.mob2': 'Мобильная версия — к вашему готовому приложению',
    'p.apps.x1': '+ Платёжная интеграция (простая → с подписками и чеками)',
    'p.apps.x2': '+ Админ-панель (простая → полноценная с правами доступа)',

    'p.ai.h': 'Автоматизация и AI',
    'p.ai.p': 'Боты, AI-помощники, рассылки, интеграции и видео с аватарами.',
    'p.ai.base': 'Простой чат-бот для мессенджеров',
    'p.ai.x1': '+ AI-помощник с обучением под бизнес',
    'p.ai.x2': '+ Многошаговая логика и сценарии',
    'p.ai.x3': '+ Приложение для автоматизации рутины',
    'p.ai.x4': '+ Голосовой AI-агент',
    'p.ai.x5': '+ Создание рекламного видео (или видео с аватаром)',

    /* about */
    'about.title': 'Обо мне',
    'about.p1': 'Меня зовут Натали. Я нейродизайнер и разработчик: соединяю графический дизайн с многолетним опытом и современные AI-инструменты. Не просто рисую красивую картинку — довожу проект до рабочего сайта или приложения.',
    'about.p2': 'Активно использую искусственный интеллект в работе: он ускоряет процесс и усиливает результат. А опыт в маркетинге и психологии помогает делать продукт, который продаёт.',
    'about.l1': 'Полный цикл: бренд → дизайн → разработка → запуск',
    'about.l2': 'AI-инструменты на каждом этапе работы',
    'about.l3': 'Обучение в онлайн-университете ZeroCoder',
    'about.cta1': 'Обсудить проект',
    'about.cta2': 'Отзывы',

    /* faq */
    'faq.title': 'Частые вопросы',
    'faq.lead': 'Самое частое, что спрашивают перед началом работы — если вашего вопроса нет, напишите.',
    'faq.q1': 'Что входит в проект «под ключ»?',
    'faq.a1': '<p>«Под ключ» — это полный цикл от идеи до запуска. У меня две таких услуги:</p><p><b>Бренд + сайт под ключ</b> — исследование задачи, концепция, логотип и фирменный стиль, брендбук, дизайн всех страниц, тексты, реальная вёрстка, подключение форм и аналитики, размещение на хостинге и подключение домена.</p><p><b>Приложение под ключ</b> — то же самое, но с веб-приложением вместо сайта: брендинг, UX/UI, frontend и backend, база данных, авторизация, интеграции и запуск. Если у вас только идея — беру на себя весь цикл, одним подрядчиком от концепции до рабочего продукта.</p>',
    'faq.q2': 'Сколько времени занимает разработка?',
    'faq.a2': '<p>Лендинг — от 7 до 14 дней. Многостраничный сайт — от 2 до 4 недель. Бренд + сайт под ключ — от 3 до 5 недель. Приложение — от месяца, зависит от функционала. Точные сроки фиксируем в начале работы.</p>',
    'faq.q3': 'Как мы работаем с AI?',
    'faq.a3': '<p>Искусственный интеллект — мой соавтор, не замена. AI ускоряет рутину (вариативность концепций, тексты, прототипы, код), а я отвечаю за идею, вкус, логику и финальное качество. Вы получаете быстрее и сильнее результат, чем без AI или у тех, кто только на AI.</p>',
    'faq.q4': 'Можно ли заказать только дизайн без разработки?',
    'faq.a4': '<p>Нет — я занимаюсь только комплексными услугами под ключ. Только дизайна у меня нет. Это связано с тем, что моя сила именно в цельном результате: бренд, дизайн и реальная разработка одним подрядчиком, без потерь на передаче и без рассинхрона между макетами и финальным сайтом.</p>',
    'faq.q5': 'Сколько правок входит в работу?',
    'faq.a5': '<p>Правки — это нормальная часть процесса. На этапе концепции — без счёта, пока не найдём то самое. После согласования концепции в каждый этап входит 2 раунда правок. Дополнительные обсуждаются отдельно.</p>',
    'faq.q6': 'Как и когда оплата?',
    'faq.a6': '<p>Предоплата 50% — для старта. Оставшиеся 50% — после согласования финального результата, перед публикацией. Безопасные сделки через Kwork или прямая оплата на удобный вам способ.</p>',
    'faq.q7': 'А если мне не понравится результат?',
    'faq.a7': '<p>Я работаю короткими итерациями: каждый этап согласуем перед тем, как идти дальше. Если что-то идёт не туда — это становится видно на ранних шагах, а не в конце. Я лично заинтересована в результате и всегда стараюсь работать так, чтобы вам понравилось — ваш проект для меня не «галочка», а живая задача, в которую я вкладываюсь.</p>',

    /* contact */
    'contact.title': 'Давайте реализуем ваш проект',
    'contact.lead': 'Пришлите описание задачи и все материалы, которые у вас есть, на почту <a href="mailto:nk@arvut.ch" class="contact__inline-email">nk@arvut.ch</a> — или напишите мне в любой мессенджер. Договоримся о созвоне, на котором вы поделитесь идеей, а я расскажу, как могу её реализовать, со сроками и стоимостью.',
    'contact.cta1': 'Написать на почту',
    'contact.cta2': 'Профиль на Kwork',
    'contact.channels': 'Телефон / WhatsApp / Telegram / GoChat / Viber / Imo / LiveBook / FaceTime',

    /* footer */
    'footer.name': 'Наталья Ковпинец',
    'footer.role': 'Дизайн и разработка под ключ',

    /* reviews modal */
    'rv.title': 'Отзывы клиентов',
    'rv.empty.h': 'Отзывов пока нет — будьте первым.',
    'rv.empty.s': 'Поделитесь впечатлением о работе ниже.',
    'rv.form.h': 'Поделитесь впечатлениями о работе с Натали',
    'rv.form.name': 'Ваше имя',
    'rv.form.role': 'Чем вы занимаетесь (необязательно)',
    'rv.form.text': 'Расскажите, что вам понравилось и что можно улучшить',
    'rv.form.submit': 'Опубликовать',
    'rv.form.note': 'Я буду благодарна за ваш отзыв — он помогает мне становиться лучше и важен для тех, кто ещё думает обратиться.',
    'a11y.menu': 'Меню',
    'a11y.close': 'Закрыть',
    'a11y.prev': 'Предыдущий',
    'a11y.next': 'Следующий',
    'a11y.cert': 'Сертификат',
    'cert.title.1': 'Нейросети: от принципов к практике',
    'cert.title.2': 'Perplexity: от новичка до pro',
    'cert.title.3': 'Вайб-Маркетинг',

    /* service modal */
    'sm.calc': 'Рассчитать стоимость →',
    'sm.cta': 'Обсудить проект',
    'sm.h.included': 'Что входит',
    'sm.h.terms': 'Сроки и цена',
    'sm.h.turnkey': 'Под ключ — если у вас только идея',
    'sm.h.mobile': 'Мобильная версия — отдельной услугой',
    'sm.h.work': 'Что я делаю',
    'sm.h.payment.50': 'Оплата: 50% предоплата, 50% после согласования',
    'sm.h.payment.stages': 'Оплата по этапам',

    /* misc */
    'lang.ru': 'RU',
    'lang.en': 'EN',
  },

  en: {
    'meta.title': 'Design & development end-to-end',
    'meta.desc': 'Neural designer and developer. Brands, websites and apps end-to-end with AI — from idea to launch.',

    'ai.badge': 'in collaboration with <b>AI</b>',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.pricing': 'Pricing',
    'nav.about': 'About me',
    'nav.faq': 'FAQ',
    'nav.cta': 'Discuss project',

    'hero.eyebrow': 'Graphic &amp; web designer · developer · AI',
    'hero.t1': 'Brands.',
    'hero.t2': 'Websites.',
    'hero.t3': 'Apps.',
    'hero.sub': 'I build projects end-to-end — from idea to launch. Logo, brand identity, design and real development powered by AI. One person covers the full cycle.',
    'hero.cta1': 'Discuss project',
    'hero.cta2': 'View work',
    'hero.stat1.b': '30+', 'hero.stat1.s': 'websites',
    'hero.stat2.b': '4+', 'hero.stat2.s': 'major projects',
    'hero.stat3.b': '8', 'hero.stat3.s': 'years in design',
    'hero.stat4.b': '360°', 'hero.stat4.s': 'brand · design · code',

    'services.title': 'Services',
    'services.lead': 'Full cycle or a single stage — whichever suits you.',
    'srv.brand-site.h': 'Brand + website end-to-end',
    'srv.brand-site.p': 'Logo, brand identity and website as one package. Consistent image and a working, finished site.',
    'srv.websites.h': 'Websites end-to-end',
    'srv.websites.p': 'Landing pages and multi-page sites: design, copy, real code and launch. Responsive and fast.',
    'srv.apps.h': 'App development',
    'srv.apps.p': 'Web apps and platforms: from prototype to a working product with a database.',
    'srv.ai.h': 'Automation & AI',
    'srv.ai.p': 'Bots, integrations, AI assistants, mailings. I take routine off your hands using artificial intelligence.',
    'srv.more': 'Read more →',

    'work.title': 'Portfolio',
    'work.lead': 'Whole brands from logo to a launched product — each in its own style.',

    'case.lb.tag': 'Platform · digital business cards · paid communication',
    'case.lb.h': 'Arvut LiveBook',
    'case.lb.p': 'Brand and product for a platform of digital business cards and paid communication: logo, landing page and the platform itself.',
    'case.lb.r': ['Brand & logo','Landing page','UX / UI design','Development','Launch'],

    'case.vb.tag': 'App · simulator',
    'case.vb.h': 'Universal Bank of Abundance',
    'case.vb.p': 'Design and development of a simulator app: brand, interface and a working web application from start to finish.',
    'case.vb.r': ['Branding','UI design','UX design','Development','Launch'],

    'case.sl.tag': 'Legal & financial consulting',
    'case.sl.h': 'Selinùs Financial Consulting',
    'case.sl.p': 'Premium brand for a Swiss financial company: logo, identity, brand guidelines and a multi-page website.',
    'case.sl.r': ['Logo & brand','Website design','Code','Promo video'],

    'case.ar.tag.a': 'Accounting',
    'case.ar.tag.b': 'service',
    'case.ar.h': 'Arvut Accounting',
    'case.ar.p': 'Brand identity and corporate website for an accounting company: logo, graphics and a multi-page site.',
    'case.ar.r': ['Logo & brand','Website design','Copy','Build','Video'],

    'role.globe.title': 'Multilingual website',
    'case.view': 'Visit',

    'pricing.title': 'Pricing',
    'pricing.lead': 'Starting prices are the minimum. Final cost depends on scope and is discussed per task. The "from" price assumes you already have materials (copy, brief, idea, sketches). If I do everything from scratch — the cost is built up from the add-ons below. I\'ll quote exactly after a short brief.',
    'price.extras.summary': 'How the price is built',
    'price.total.label.brand-site': 'From scratch (only the idea is yours):',
    'price.total.label.landing': 'End-to-end from scratch (only the idea is yours):',
    'price.total.label.multipage': 'End-to-end from scratch (only the idea is yours):',
    'price.total.label.apps': 'Full app, end-to-end:',
    'price.total.label.ai': 'End-to-end solution:',

    'p.brand-site.h': 'Brand + website end-to-end',
    'p.brand-site.p': 'Logo, brand identity and website as one package.',
    'p.brand-site.base': 'Base: brief, copy and materials provided. Logo + identity + brand guidelines + single-page website',
    'p.brand-site.x1': '+ Copywriting',
    'p.brand-site.x2': '+ Multi-page instead of landing',
    'p.brand-site.x3': '+ Extra language version',
    'p.brand-site.x4': '+ Promo video (or video with avatar)',

    'p.landing.h': 'Landing page end-to-end',
    'p.landing.p': 'Single-page site with design and real code.',
    'p.landing.base': 'Base: copy, materials and design preferences provided',
    'p.landing.x1': '+ Copywriting',
    'p.landing.x2': '+ Extra blocks (over 7 sections)',
    'p.landing.x3': '+ Animations and effects',
    'p.landing.x4': '+ CRM, payments, messengers integration',
    'p.landing.x5': '+ Promo video (or video with avatar)',

    'p.multi.h': 'Multi-page website',
    'p.multi.p': 'Corporate site with sections, catalog or blog.',
    'p.multi.base': 'Base: structure, copy, materials provided (up to 5 pages)',
    'p.multi.x1': '+ Copywriting from scratch',
    'p.multi.x2': '+ Product catalog (up to 50 items)',
    'p.multi.x3': '+ Blog with admin panel',
    'p.multi.x4': '+ Extra language version',
    'p.multi.x5': '+ CRM, payments, messengers integration',
    'p.multi.x6': '+ Promo video (or video with avatar)',

    'p.apps.h': 'App development',
    'p.apps.p': 'Web apps and platforms — from prototype to launched product.',
    'p.apps.proto': 'Prototype / MVP with basic features',
    'p.apps.full': 'Full app (including UI/UX, auth, accounts, integrations, AI features)',
    'p.apps.turnkey': 'App end-to-end — I take the full cycle (branding, design, dev, launch)',
    'p.apps.mob1': 'Mobile version — to my app (if I built the desktop one)',
    'p.apps.mob2': 'Mobile version — to your existing app',
    'p.apps.x1': '+ Payment integration (simple → with subscriptions & receipts)',
    'p.apps.x2': '+ Admin panel (simple → full with access roles)',

    'p.ai.h': 'Automation & AI',
    'p.ai.p': 'Bots, AI assistants, mailings, integrations and avatar videos.',
    'p.ai.base': 'Simple chatbot for messengers',
    'p.ai.x1': '+ AI assistant trained for your business',
    'p.ai.x2': '+ Multi-step logic and scenarios',
    'p.ai.x3': '+ App for routine automation',
    'p.ai.x4': '+ Voice AI agent',
    'p.ai.x5': '+ Promo video (or video with avatar)',

    'about.title': 'About me',
    'about.p1': 'My name is Natalia. I\'m a neural designer and developer: I combine years of experience in graphic design with modern AI tools. I don\'t just draw a pretty picture — I take the project all the way to a working site or app.',
    'about.p2': 'I actively use AI in my work: it speeds things up and strengthens the result. My background in marketing and psychology helps me build products that actually sell.',
    'about.l1': 'Full cycle: brand → design → development → launch',
    'about.l2': 'AI tools at every stage',
    'about.l3': 'Education at ZeroCoder online university',
    'about.cta1': 'Discuss project',
    'about.cta2': 'Reviews',

    'faq.title': 'FAQ',
    'faq.lead': 'The most common questions before we start — if yours isn\'t here, just ask.',
    'faq.q1': 'What does "end-to-end" include?',
    'faq.a1': '<p>"End-to-end" means the full cycle from idea to launch. I have two such services:</p><p><b>Brand + website end-to-end</b> — research, concept, logo and identity, brand guidelines, design of all pages, copy, real code, forms and analytics setup, hosting and domain.</p><p><b>App end-to-end</b> — the same but with a web app instead of a site: branding, UX/UI, frontend & backend, database, authentication, integrations and launch. If you only have an idea — I handle the full cycle as a single contractor from concept to working product.</p>',
    'faq.q2': 'How long does development take?',
    'faq.a2': '<p>Landing page — 7 to 14 days. Multi-page site — 2 to 4 weeks. Brand + site end-to-end — 3 to 5 weeks. App — from a month, depending on features. We agree on exact timing at the start.</p>',
    'faq.q3': 'How do we work with AI?',
    'faq.a3': '<p>AI is my co-author, not a replacement. AI speeds up routine (concept variations, copy, prototypes, code), while I take care of the idea, taste, logic and final quality. You get a faster and stronger result than without AI — or with those who rely only on AI.</p>',
    'faq.q4': 'Can I order design only, without development?',
    'faq.a4': '<p>No — I only take on end-to-end projects. I don\'t do design alone. My strength is in the integrated result: brand, design and real development from one person, without loss in handover and without disconnect between mock-ups and the final site.</p>',
    'faq.q5': 'How many revisions are included?',
    'faq.a5': '<p>Revisions are a normal part of the process. At the concept stage — unlimited until we find the right one. After the concept is approved, each stage includes 2 rounds of revisions. Additional ones are agreed separately.</p>',
    'faq.q6': 'How and when do I pay?',
    'faq.a6': '<p>50% upfront — to start. The remaining 50% — after final approval, before going live. Secure deals via Kwork or direct payment in a way that suits you.</p>',
    'faq.q7': 'What if I don\'t like the result?',
    'faq.a7': '<p>I work in short iterations: every stage is approved before moving on. If something goes off track — it shows early, not at the end. I\'m personally invested in the result and always try to make it something you\'ll love — your project isn\'t a checkbox for me, it\'s a living task I put myself into.</p>',

    'contact.title': 'Let\'s build your project together',
    'contact.lead': 'Send the task description and any materials you have to <a href="mailto:nk@arvut.ch" class="contact__inline-email">nk@arvut.ch</a> — or message me on any messenger. We\'ll arrange a call where you share the idea, and I\'ll explain how I can build it, with timing and cost.',
    'contact.cta1': 'Email me',
    'contact.cta2': 'Kwork profile',
    'contact.channels': 'Phone / WhatsApp / Telegram / GoChat / Viber / Imo / LiveBook / FaceTime',

    'footer.name': 'Natalia Kovpinetc',
    'footer.role': 'Design & development end-to-end',

    'rv.title': 'Client reviews',
    'rv.empty.h': 'No reviews yet — be the first.',
    'rv.empty.s': 'Share your experience below.',
    'rv.form.h': 'Share your experience working with Natalia',
    'rv.form.name': 'Your name',
    'rv.form.role': 'What you do (optional)',
    'rv.form.text': 'Tell what you liked and what could be improved',
    'rv.form.submit': 'Publish',
    'rv.form.note': 'I\'ll be grateful for your review — it helps me grow and matters for those still deciding whether to reach out.',
    'a11y.menu': 'Menu',
    'a11y.close': 'Close',
    'a11y.prev': 'Previous',
    'a11y.next': 'Next',
    'a11y.cert': 'Certificate',
    'cert.title.1': 'Neural Networks: From Principle to Practice',
    'cert.title.2': 'Perplexity: From Beginner to Pro',
    'cert.title.3': 'Vibe Marketing',

    'sm.calc': 'Calculate price →',
    'sm.cta': 'Discuss project',
    'sm.h.included': 'What\'s included',
    'sm.h.terms': 'Timing and price',
    'sm.h.turnkey': 'End-to-end — if you only have an idea',
    'sm.h.mobile': 'Mobile version — as a separate service',
    'sm.h.work': 'What I do',
    'sm.h.payment.50': 'Payment: 50% upfront, 50% after approval',
    'sm.h.payment.stages': 'Payment by stages',

    'lang.ru': 'RU',
    'lang.en': 'EN',
  }
};

/* Перевод цен: рубли → доллары (округление вверх до красивых сумм) */
const PRICE_USD = {
  5000: '$60', 8000: '$100', 10000: '$120', 15000: '$200',
  20000: '$250', 25000: '$300', 30000: '$400', 45000: '$500',
  50000: '$600', 60000: '$700', 70000: '$800', 80000: '$1000',
  100000: '$1200', 120000: '$1500', 150000: '$1800',
  200000: '$2500', 300000: '$3500',
};
function rubToUsd(rub) {
  if (PRICE_USD[rub]) return PRICE_USD[rub];
  // fallback: округление вверх до $50
  const usd = Math.ceil(rub / 90 / 50) * 50;
  return '$' + usd;
}
/* Конвертирует строку с рублями в строку с долларами (для EN) */
function convertPriceString(s, lang) {
  if (lang === 'ru') return s;
  // Заменяет "20 000 ₽" → "$250", сохраняет "от" → "from", "+" сохраняет
  return s
    .replace(/(\d[\d\s]*)\s*₽/g, (m, num) => rubToUsd(parseInt(num.replace(/\s/g, ''), 10)))
    .replace(/\bот\b/g, 'from')
    .replace(/\bдо\b/g, 'to');
}

/* Применяет переводы ко всему документу */
function applyI18n(lang) {
  if (!T[lang]) lang = 'ru';
  document.documentElement.lang = lang;
  document.title = T[lang]['meta.title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = T[lang]['meta.desc'];

  // textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[lang][key] != null) el.textContent = T[lang][key];
  });
  // innerHTML
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (T[lang][key] != null) el.innerHTML = T[lang][key];
  });
  // placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (T[lang][key] != null) el.placeholder = T[lang][key];
  });
  // title attr
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    if (T[lang][key] != null) el.title = T[lang][key];
  });
  // aria-label
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (T[lang][key] != null) el.setAttribute('aria-label', T[lang][key]);
  });
  // alt
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.dataset.i18nAlt;
    if (T[lang][key] != null) el.alt = T[lang][key];
  });
  // role lists (массивы)
  document.querySelectorAll('[data-i18n-roles]').forEach(ul => {
    const key = ul.dataset.i18nRoles;
    const arr = T[lang][key];
    if (!Array.isArray(arr)) return;
    // оставляем только role--icon, остальные перестраиваем
    const iconLi = ul.querySelector('.role--icon');
    ul.innerHTML = arr.map(t => `<li>${t}</li>`).join('') + (iconLi ? iconLi.outerHTML : '');
  });
  // цены: data-price="20000" → перерисовываем формат
  document.querySelectorAll('[data-price]').forEach(el => {
    const rub = parseInt(el.dataset.price, 10);
    const rawPrefix = el.dataset.pricePrefix || '';
    // Если префикс содержит буквы (от, from) — добавляем пробел; для "+" пробела не нужно
    const sep = rawPrefix && /[a-zа-я]/i.test(rawPrefix) ? ' ' : '';
    if (lang === 'ru') {
      el.textContent = rawPrefix + sep + rub.toLocaleString('ru-RU').replace(/,/g,' ') + ' ₽';
    } else {
      const enPrefix = rawPrefix === 'от' ? 'from' : rawPrefix;
      const enSep = enPrefix && /[a-z]/i.test(enPrefix) ? ' ' : '';
      el.textContent = enPrefix + enSep + rubToUsd(rub);
    }
  });
  // диапазоны цен: data-price-range="5000-25000"; всегда "от … до …" / "from … to …"
  document.querySelectorAll('[data-price-range]').forEach(el => {
    const [a, b] = el.dataset.priceRange.split('-').map(s => parseInt(s, 10));
    const sign = el.dataset.pricePrefix || '';
    const fmt = n => n.toLocaleString('ru-RU').replace(/,/g,' ');
    if (lang === 'ru') {
      el.textContent = 'от ' + sign + fmt(a) + ' до ' + sign + fmt(b) + ' ₽';
    } else {
      el.textContent = 'from ' + (sign ? sign : '') + rubToUsd(a) + ' to ' + (sign ? sign : '') + rubToUsd(b);
    }
  });

  // переключатель — активный
  document.querySelectorAll('.lang-switch button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  // событие для других модулей (services, faq, reviews)
  document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang } }));
}

function currentLang() {
  return localStorage.getItem('nataly_lang') || 'ru';
}
function setLang(lang) {
  localStorage.setItem('nataly_lang', lang);
  applyI18n(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  applyI18n(currentLang());
  document.querySelectorAll('.lang-switch button').forEach(b => {
    b.addEventListener('click', () => setLang(b.dataset.lang));
  });
});

window.i18nT = T;
window.i18nLang = currentLang;
window.i18nApply = applyI18n;
window.i18nRubToUsd = rubToUsd;
window.i18nConvertPrice = convertPriceString;
