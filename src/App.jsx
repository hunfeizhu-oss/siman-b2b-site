import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Check,
  Factory,
  Globe2,
  Menu,
  PackageCheck,
  Sparkles,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.BASE_URL;
const ASSETS = {
  logo: `${BASE}assets/sibuen/logo.png`,
  hero: `${BASE}assets/sibuen/factory-hero-front.jpg`,
  detail: `${BASE}assets/sibuen/factory-detail.jpg`,
  floor: `${BASE}assets/sibuen/factory-floor.jpg`,
  team: `${BASE}assets/sibuen/factory-team.jpg`,
  packaging: `${BASE}assets/sibuen/factory-packaging.jpg`,
  warehouse: `${BASE}assets/sibuen/factory-warehouse.jpg`,
  productMontessori: `${BASE}assets/sibuen/product-montessori.avif`,
  productPuzzles: `${BASE}assets/sibuen/product-puzzles.avif`,
  productPretend: `${BASE}assets/sibuen/product-pretend-play.avif`,
  productBlocks: `${BASE}assets/sibuen/product-blocks.avif`,
  productRailway: `${BASE}assets/sibuen/product-railway.avif`,
  productPuzzleTrain: `${BASE}assets/sibuen/product-puzzle-train.avif`,
  productPuzzleLetters: `${BASE}assets/sibuen/product-puzzle-letters.avif`,
  productMontessoriMusic: `${BASE}assets/sibuen/product-montessori-music.avif`,
  productMontessoriWall: `${BASE}assets/sibuen/product-montessori-wall.avif`,
  productMontessoriBoard: `${BASE}assets/sibuen/product-montessori-board.avif`,
  productRailwayNatural: `${BASE}assets/sibuen/product-railway-natural.avif`,
  productRailwayStation: `${BASE}assets/sibuen/product-railway-station.avif`,
  productRailwayTable: `${BASE}assets/sibuen/product-railway-table.avif`,
  productPretendKitchen: `${BASE}assets/sibuen/product-pretend-kitchen.avif`,
  productPretendMarket: `${BASE}assets/sibuen/product-pretend-market.avif`,
  productPretendOutdoor: `${BASE}assets/sibuen/product-pretend-outdoor.avif`,
};

const copy = {
  en: {
    meta: {
      topbar: "Factory direct wooden toy supply · Yunhe, Zhejiang",
      switch: "中文",
      quote: "Start an inquiry",
    },
    nav: {
      products: "Products",
      oem: "OEM / ODM",
      factory: "Factory",
      about: "About",
      contact: "Contact",
      menu: "Open menu",
      close: "Close menu",
    },
    hero: {
      eyebrow: "Since 2008 · Wooden toy manufacturer",
      title: "Wooden play,\nmade to last.",
      body: "Sibuen makes thoughtful wooden toys for brands, wholesalers and importers — from first sketch to export-ready cartons.",
      primary: "Request a catalog",
      secondary: "Explore OEM / ODM",
      tag: "Made in Yunhe · Zhejiang",
      caption: "A real factory, a playful point of view.",
      scroll: "Scroll to explore",
      mobileCta: "Start an inquiry",
    },
    stats: [
      ["8,000㎡", "Factory footprint"],
      ["50+", "Product patents"],
      ["20+", "Automated machines"],
      ["EU · US", "Export focus"],
    ],
    products: {
      eyebrow: "What we make",
      title: "A shelf full of\npossibilities.",
      body: "Five product families, one steady production partner. Build a collection that feels coherent from playroom to retail shelf.",
      cta: "View product range",
      galleryTitle: "A closer look at the collection.",
      galleryBody: "Product photos from our working range, ready to be shaped into your next private-label story.",
      items: [
        ["01", "Montessori toys", "Open-ended pieces for curious hands.", ASSETS.productMontessori],
        ["02", "Puzzles & boards", "Simple shapes, considered details.", ASSETS.productPuzzles],
        ["03", "Pretend play", "Small worlds made for big stories.", ASSETS.productPretend],
        ["04", "Wooden blocks", "Reliable forms for endless combinations.", ASSETS.productBlocks],
        ["05", "Railway toys", "A classic line with room to grow.", ASSETS.productRailway],
      ],
      gallery: [
        ["Puzzle train", ASSETS.productPuzzleTrain],
        ["Alphabet boards", ASSETS.productPuzzleLetters],
        ["Montessori music", ASSETS.productMontessoriMusic],
        ["Activity boards", ASSETS.productMontessoriWall],
        ["Open-ended play", ASSETS.productMontessoriBoard],
        ["Railway worlds", ASSETS.productRailwayNatural],
        ["Station sets", ASSETS.productRailwayStation],
        ["Tabletop railway", ASSETS.productRailwayTable],
        ["Play kitchen", ASSETS.productPretendKitchen],
        ["Market play", ASSETS.productPretendMarket],
        ["Outdoor role play", ASSETS.productPretendOutdoor],
      ],
    },
    factory: {
      eyebrow: "Made here",
      title: "From raw wood\nto ready-to-play.",
      body: "Our Yunhe factory brings material preparation, automated cutting, careful assembly and export packing into one connected workflow.",
      points: [
        ["Material preparation", "Wood is sorted and prepared for a stable, smooth finish."],
        ["Automated processing", "20+ automated machines help us keep every batch consistent."],
        ["Assembly & inspection", "Hands-on checks keep edges, joins and details ready for play."],
        ["Packing for export", "Cartons are prepared for wholesale, retail and private-label orders."],
      ],
      more: "See all factory steps",
      less: "Show fewer steps",
      cta: "See our factory",
    },
    process: {
      eyebrow: "OEM / ODM, made clear",
      title: "A calmer route\nfrom idea to order.",
      body: "Bring us a direction, a sketch or a shelf gap. We turn it into a sample-ready project with clear next steps.",
      steps: [
        ["01", "Brief", "Share the market, age range and product idea."],
        ["02", "Design", "Align on shape, function, finish and packaging."],
        ["03", "Sample", "Review a physical direction before the first run."],
        ["04", "Production", "Move into a controlled, export-ready batch."],
      ],
      cta: "Talk through a project",
    },
    values: {
      eyebrow: "Why Sibuen",
      title: "Good work is\nmade together.",
      items: [
        ["Quality first", "A practical quality mindset across materials, details and every outgoing carton.", Factory],
        ["Honest partnership", "Clear conversations on MOQ, timing and what will make the product stronger.", PackageCheck],
        ["Long-term value", "We build collections that can grow with your channel, not just one-off orders.", Boxes],
      ],
    },
    global: {
      eyebrow: "Ready for the world",
      title: "A dependable\npartner for global shelves.",
      body: "Based in Yunhe, Zhejiang, we work with buyers who value stable quality, flexible customization and a partner who keeps the details moving.",
      chips: ["Europe", "North America", "Wholesale", "Private label"],
      cta: "Plan your next collection",
    },
    inquiry: {
      eyebrow: "Start with a brief",
      title: "Tell us what\nyou're building.",
      body: "A few details are enough to begin. We will review your direction and come back with a clear next step.",
      name: "Name",
      company: "Company",
      email: "Work email",
      note: "Project note",
      submit: "Send inquiry",
      success: "Your brief is ready — we’ll review it shortly.",
      successSub: "You can keep this page open while you gather product references.",
      restart: "Start another brief",
    },
    footer: {
      note: "Wooden toys, made with care in Yunhe.",
      links: "Explore",
      legal: "© 2026 Zhejiang Sibuen Toys Co., Ltd.",
      tag: "Wooden toys · OEM / ODM",
    },
  },
  zh: {
    meta: {
      topbar: "工厂直供木制玩具 · 浙江云和",
      switch: "EN",
      quote: "开始询盘",
    },
    nav: {
      products: "产品系列",
      oem: "OEM / ODM",
      factory: "工厂实力",
      about: "关于斯布恩",
      contact: "联系我们",
      menu: "打开菜单",
      close: "关闭菜单",
    },
      hero: {
      eyebrow: "成立于 2008 · 木制玩具制造商",
      title: "让木制玩具，\n经得起时间。",
      body: "斯布恩为品牌商、批发商和进口商提供木制玩具，从创意草图到出口包装，一站式完成。",
      primary: "获取产品目录",
      secondary: "了解 OEM / ODM",
      tag: "中国浙江云和制造",
      caption: "真实工厂，保留童趣视角。",
      scroll: "滚动探索",
      mobileCta: "开始询盘",
    },
    stats: [
      ["8,000㎡", "工厂面积"],
      ["50+", "自主产品专利"],
      ["20+", "自动化设备"],
      ["欧美", "主要出口市场"],
    ],
    products: {
      eyebrow: "我们的产品",
      title: "一整套，\n从容选择。",
      body: "五大产品系列，一个稳定的制造伙伴。让你的产品从游戏房到零售货架，都保持统一的品牌感觉。",
      cta: "查看产品系列",
      galleryTitle: "把产品细节，看得更近一些。",
      galleryBody: "来自现有产品系列的真实图片，为你的下一条品牌产品线提供更具体的起点。",
      items: [
        ["01", "蒙特梭利玩具", "给好奇的小手更多开放式玩法。", ASSETS.productMontessori],
        ["02", "拼图与拼板", "简单的形状，也有被认真打磨的细节。", ASSETS.productPuzzles],
        ["03", "过家家玩具", "用小小的世界，装下大大的故事。", ASSETS.productPretend],
        ["04", "木制积木", "稳定可靠的形态，组合出无限可能。", ASSETS.productBlocks],
        ["05", "轨道玩具", "经典产品线，也能持续扩展。", ASSETS.productRailway],
      ],
      gallery: [
        ["拼图小火车", ASSETS.productPuzzleTrain],
        ["字母拼板", ASSETS.productPuzzleLetters],
        ["蒙氏音乐玩具", ASSETS.productMontessoriMusic],
        ["益智活动板", ASSETS.productMontessoriWall],
        ["开放式玩具", ASSETS.productMontessoriBoard],
        ["轨道场景", ASSETS.productRailwayNatural],
        ["车站套装", ASSETS.productRailwayStation],
        ["桌面轨道", ASSETS.productRailwayTable],
        ["过家家厨房", ASSETS.productPretendKitchen],
        ["角色扮演商店", ASSETS.productPretendMarket],
        ["户外角色玩具", ASSETS.productPretendOutdoor],
      ],
    },
    factory: {
      eyebrow: "在这里制造",
      title: "从原木到\n可以玩耍的成品。",
      body: "在浙江云和，材料准备、自动化切割、细致装配和出口包装被放在同一条清晰的工作流里。",
      points: [
        ["材料准备", "木材经过挑选和预处理，获得稳定、顺滑的触感。"],
        ["自动化加工", "20 多台自动化设备，让每一批产品保持一致。"],
        ["装配与质检", "人工复核边角、连接和细节，让产品真正适合玩耍。"],
        ["出口包装", "为批发、零售和贴牌订单准备好外箱与包装。"],
      ],
      more: "查看全部工厂流程",
      less: "收起流程",
      cta: "查看工厂实力",
    },
    process: {
      eyebrow: "清晰的 OEM / ODM",
      title: "从想法到订单，\n少一点复杂。",
      body: "带着一个方向、一张草图或一个货架空位来找我们，我们会把它变成可打样的项目。",
      steps: [
        ["01", "需求沟通", "分享市场、年龄段和产品想法。"],
        ["02", "设计确认", "确定造型、功能、表面处理与包装。"],
        ["03", "样品确认", "在首批生产前，先确认实物方向。"],
        ["04", "稳定生产", "进入可控、可出口的批量制造。"],
      ],
      cta: "聊聊你的项目",
    },
    values: {
      eyebrow: "为什么选择斯布恩",
      title: "好产品，\n需要一起完成。",
      items: [
        ["品质优先", "从材料、细节到每一箱出货，都保持务实的品质意识。", Factory],
        ["诚信合作", "对 MOQ、交期和如何让产品更好，保持清晰沟通。", PackageCheck],
        ["长期价值", "打造能随销售渠道一起成长的产品系列，而不是一次性订单。", Boxes],
      ],
    },
    global: {
      eyebrow: "面向全球供货",
      title: "为全球货架，\n准备可靠的伙伴。",
      body: "我们位于浙江云和，服务重视稳定品质、灵活定制和细节推进能力的海外采购商。",
      chips: ["欧洲市场", "北美市场", "批发渠道", "品牌定制"],
      cta: "规划你的下一组产品",
    },
    inquiry: {
      eyebrow: "从一份需求开始",
      title: "告诉我们，\n你正在做什么。",
      body: "只需要几条信息就可以开始。我们会先看懂你的方向，再给出清晰的下一步。",
      name: "姓名",
      company: "公司",
      email: "工作邮箱",
      note: "项目说明",
      submit: "提交询盘",
      success: "需求已准备好，我们会尽快查看。",
      successSub: "你可以保留此页面，继续整理产品参考资料。",
      restart: "重新填写需求",
    },
    footer: {
      note: "在浙江云和，用心做好木制玩具。",
      links: "快速浏览",
      legal: "© 2026 浙江斯布恩玩具有限公司",
      tag: "木制玩具 · OEM / ODM",
    },
  },
};

function TopBar({ t }) {
  return (
    <div className="topbar">
      <div className="shell topbar-inner">
        <span>{t.meta.topbar}</span>
        <a href="#contact" className="topbar-link">
          {t.meta.quote} <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function SiteHeader({ t, locale, onLocaleChange, menuOpen, onMenuToggle, onNavigate, scrolled }) {
  const links = [
    ["products", t.nav.products],
    ["oem", t.nav.oem],
    ["factory", t.nav.factory],
    ["about", t.nav.about],
    ["contact", t.nav.contact],
  ];

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="shell header-inner">
        <a className="brand" href="#top" aria-label="Sibuen Toys home" onClick={onNavigate}>
          <img src={ASSETS.logo} alt="Sibuen Toys" />
          <span className="brand-wordmark">SIBUEN <small>TOYS</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={onNavigate}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="locale-toggle" type="button" onClick={onLocaleChange} aria-pressed={locale === "zh"}>
            <Globe2 size={14} aria-hidden="true" /> {locale === "en" ? "中文" : "EN"}
          </button>
          <a className="button button-small button-forest" href="#contact" onClick={onNavigate}>
            {t.meta.quote} <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? t.nav.close : t.nav.menu}
            onClick={onMenuToggle}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      <div id="mobile-navigation" className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={onNavigate}>
            {label} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ))}
        <button type="button" className="mobile-language" onClick={onLocaleChange}>
          <Globe2 size={16} aria-hidden="true" /> {locale === "en" ? "切换到中文" : "Switch to English"}
        </button>
      </div>
    </header>
  );
}

function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="shell hero-grid">
        <div className="hero-copy js-reveal">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="hero-body">{t.hero.body}</p>
          <div className="hero-actions">
            <a className="button button-forest" href="#contact">
              {t.hero.primary} <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="text-link" href="#oem">
              {t.hero.secondary} <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-note">
            <span className="note-dot" aria-hidden="true" />
            <span>{t.hero.caption}</span>
          </div>
        </div>
        <figure className="hero-media js-reveal">
          <picture>
            <source media="(max-width: 640px)" srcSet={ASSETS.productMontessori} />
            <img className="hero-image" src={ASSETS.hero} alt="Sibuen wooden toy manufacturing and product collection" />
          </picture>
          <figcaption className="hero-tag">
            <span>{t.hero.tag}</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </figcaption>
        </figure>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span>{t.hero.scroll}</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}

function StatRibbon({ t }) {
  return (
    <section className="stat-ribbon" aria-label="Sibuen factory highlights">
      <div className="shell stat-grid">
        {t.stats.map(([value, label]) => (
          <div className="stat-item js-reveal" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoryGrid({ t }) {
  return (
    <section className="section products-section" id="products">
      <div className="shell">
        <div className="section-intro split-intro js-reveal">
          <div>
            <span className="eyebrow">{t.products.eyebrow}</span>
            <h2>{t.products.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
          </div>
          <div className="intro-side">
            <p>{t.products.body}</p>
            <a className="text-link" href="#contact">
              {t.products.cta} <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="category-grid">
          {t.products.items.map(([number, title, body, image], index) => (
            <a className={`category-card category-card-${index + 1} js-reveal`} href="#contact" key={title}>
              <img src={image} alt={`${title} manufacturing at Sibuen`} />
              <div className="category-overlay" />
              <div className="category-content">
                <span className="mono-label">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
                <span className="circle-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductGallery({ t }) {
  return (
    <section className="product-gallery-section" aria-label={t.products.eyebrow}>
      <div className="shell">
        <div className="gallery-heading js-reveal">
          <div>
            <span className="eyebrow">{t.products.eyebrow}</span>
            <h3>{t.products.galleryTitle}</h3>
          </div>
          <p>{t.products.galleryBody}</p>
        </div>
        <div className="product-gallery-grid">
          {t.products.gallery.map(([title, image], index) => (
            <figure className={`gallery-card gallery-card-${(index % 5) + 1} js-reveal`} key={title}>
              <img src={image} alt={`${title} wooden toy product`} loading="lazy" />
              <figcaption><span>{title}</span><span className="mono-label">{String(index + 1).padStart(2, "0")}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FactoryStory({ t }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section factory-section" id="factory">
      <div className="shell factory-grid">
        <div className="factory-visual js-reveal">
          <div className="factory-main-image">
            <img src={ASSETS.detail} alt="Wooden toy production detail at Sibuen" />
            <span className="image-stamp">SIBUEN / MADE HERE</span>
          </div>
          <div className="factory-small-image">
            <img src={ASSETS.floor} alt="Sibuen factory floor with wooden toy equipment" />
          </div>
          <div className="factory-detail-image">
            <img src={ASSETS.packaging} alt="Sibuen team preparing wooden toy packaging" loading="lazy" />
          </div>
        </div>
        <div className="factory-copy js-reveal">
          <span className="eyebrow">{t.factory.eyebrow}</span>
          <h2>{t.factory.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
          <p className="section-lead">{t.factory.body}</p>
          <div className={`story-points ${expanded ? "is-expanded" : ""}`}>
            {t.factory.points.map(([title, body], index) => (
              <div className="story-point" key={title}>
                <span className="story-number">0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="story-more" type="button" aria-expanded={expanded} onClick={() => setExpanded((value) => !value)}>
            {expanded ? t.factory.less : t.factory.more} <ArrowRight size={16} aria-hidden="true" />
          </button>
          <a className="button button-outline" href="#contact">
            {t.factory.cta} <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProcessRail({ t }) {
  return (
    <section className="section process-section" id="oem">
      <div className="shell">
        <div className="section-intro split-intro process-intro js-reveal">
          <div>
            <span className="eyebrow">{t.process.eyebrow}</span>
            <h2>{t.process.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
          </div>
          <div className="intro-side">
            <p>{t.process.body}</p>
            <a className="text-link" href="#contact">
              {t.process.cta} <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="process-rail">
          {t.process.steps.map(([number, title, body], index) => (
            <div className="process-step js-reveal" key={number}>
              <span className="process-node">{number}</span>
              <span className="mono-label">{index === 0 ? "START" : `STEP ${number}`}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuesSection({ t }) {
  return (
    <section className="section values-section" id="about">
      <div className="shell">
        <div className="section-intro values-heading js-reveal">
          <span className="eyebrow">{t.values.eyebrow}</span>
          <h2>{t.values.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
        </div>
        <div className="values-grid">
          {t.values.items.map(([title, body, Icon]) => (
            <article className="value-card js-reveal" key={title}>
              <span className="value-icon"><Icon size={21} strokeWidth={1.8} /></span>
              <h3>{title}</h3>
              <p>{body}</p>
              <span className="value-line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalSupply({ t }) {
  return (
    <section className="global-section" id="global">
      <div className="global-image-wrap">
        <img src={ASSETS.team} alt="Sibuen team preparing wooden toy orders" />
        <div className="global-image-shade" />
      </div>
      <div className="shell global-content js-reveal">
        <span className="eyebrow eyebrow-light">{t.global.eyebrow}</span>
        <h2>{t.global.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
        <p>{t.global.body}</p>
        <div className="chip-row">
          {t.global.chips.map((chip) => <span className="supply-chip" key={chip}>{chip}</span>)}
        </div>
        <a className="button button-honey" href="#contact">
          {t.global.cta} <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function InquiryForm({ t, form, onChange, onSubmit, submitted }) {
  return (
    <section className="section inquiry-section" id="contact">
      <div className="shell inquiry-grid">
        <div className="inquiry-copy js-reveal">
          <span className="eyebrow">{t.inquiry.eyebrow}</span>
          <h2>{t.inquiry.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
          <p className="section-lead">{t.inquiry.body}</p>
          <div className="inquiry-mark" aria-hidden="true"><Sparkles size={20} /><span>PLAY / MAKE / GROW</span></div>
        </div>
        <div className="inquiry-card js-reveal">
          {submitted ? (
            <div className="form-success" role="status">
              <span className="success-icon"><Check size={22} /></span>
              <h3>{t.inquiry.success}</h3>
              <p>{t.inquiry.successSub}</p>
              <button type="button" className="text-link" onClick={() => window.location.reload()}>
                {t.inquiry.restart} <ArrowRight size={15} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <div className="form-row">
                <label><span>{t.inquiry.name}</span><input name="name" value={form.name} onChange={onChange} required /></label>
                <label><span>{t.inquiry.company}</span><input name="company" value={form.company} onChange={onChange} /></label>
              </div>
              <label><span>{t.inquiry.email}</span><input name="email" type="email" value={form.email} onChange={onChange} required /></label>
              <label><span>{t.inquiry.note}</span><textarea name="note" value={form.note} onChange={onChange} rows="5" required /></label>
              <button type="submit" className="button button-forest button-submit">{t.inquiry.submit} <ArrowRight size={17} aria-hidden="true" /></button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ t, onLocaleChange, locale }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand">
          <a className="brand brand-footer" href="#top">
            <img src={ASSETS.logo} alt="Sibuen Toys" />
            <span className="brand-wordmark">SIBUEN <small>TOYS</small></span>
          </a>
          <p>{t.footer.note}</p>
        </div>
        <div className="footer-links">
          <span className="mono-label">{t.footer.links}</span>
          <a href="#products">{t.nav.products}</a>
          <a href="#oem">{t.nav.oem}</a>
          <a href="#factory">{t.nav.factory}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>
        <div className="footer-cta">
          <span className="mono-label">{locale === "en" ? "LANGUAGE" : "语言"}</span>
          <button type="button" className="footer-language" onClick={onLocaleChange}><Globe2 size={15} /> {locale === "en" ? "中文" : "EN"}</button>
          <a className="button button-honey" href="#contact">{t.meta.quote} <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="shell footer-bottom"><span>{t.footer.legal}</span><span>{t.footer.tag}</span></div>
    </footer>
  );
}

export function App() {
  const [locale, setLocale] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", note: "" });
  const rootRef = useRef(null);
  const t = copy[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "zh-CN";
    const scrollY = window.scrollY;
    requestAnimationFrame(() => window.scrollTo({ top: scrollY, behavior: "auto" }));
  }, [locale]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 42);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact || !("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting), { rootMargin: "0px 0px -30% 0px" });
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        gsap.set(".js-reveal", { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(".hero-copy > *, .hero-media", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power2.out" });
      gsap.utils.toArray(".js-reveal").forEach((element) => {
        if (element.closest(".hero")) return;
        gsap.fromTo(element, { opacity: 0, y: 16 }, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 82%", once: true },
        });
      });
      gsap.to(".hero-image", { yPercent: 5, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const handleLocaleChange = () => {
    const currentScroll = window.scrollY;
    setLocale((value) => value === "en" ? "zh" : "en");
    requestAnimationFrame(() => window.scrollTo({ top: currentScroll, behavior: "auto" }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" ref={rootRef}>
      <TopBar t={t} />
      <SiteHeader t={t} locale={locale} onLocaleChange={handleLocaleChange} menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((value) => !value)} onNavigate={closeMenu} scrolled={scrolled} />
      <main>
        <Hero t={t} />
        <StatRibbon t={t} />
        <CategoryGrid t={t} />
        <ProductGallery t={t} />
        <FactoryStory t={t} />
        <ProcessRail t={t} />
        <ValuesSection t={t} />
        <GlobalSupply t={t} />
        <InquiryForm t={t} form={form} onChange={handleChange} onSubmit={handleSubmit} submitted={submitted} />
      </main>
      <a className={`mobile-cta-bar ${contactVisible ? "is-hidden" : ""}`} href="#contact">
        <span>{t.hero.mobileCta}</span><ArrowRight size={18} aria-hidden="true" />
      </a>
      <SiteFooter t={t} onLocaleChange={handleLocaleChange} locale={locale} />
    </div>
  );
}
