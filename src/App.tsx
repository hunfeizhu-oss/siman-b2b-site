import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { siteAssets } from './siteAssets';

const stats = [
  { value: '15,000 m²+', label: 'Plant Area' },
  { value: '35,000 m²+', label: 'Production Area' },
  { value: '200+', label: 'Skilled Employees' },
  { value: '20+ Years', label: 'Production Experience' },
  { value: '20+', label: 'Own Brands' },
  { value: '5,000+', label: 'Serving Customers' },
];

const categories = [
  {
    title: 'Soap',
    subtitle: 'Daily cleansing bar solutions',
    text: 'Toilet soap and transparent soap for retailers, importers and private-label brands.',
    tags: ['Private Label', 'Custom Scent', 'Retail Pack'],
    image: siteAssets.products.soap,
  },
  {
    title: 'Handmade Soap',
    subtitle: 'Gift-ready natural style',
    text: 'Custom color, fragrance, mold shape, logo embossing and branded gift box support.',
    tags: ['Gift Box', 'Color Design', 'Logo Mold'],
    image: siteAssets.products.handmadeSoap,
  },
  {
    title: 'Laundry Soap',
    subtitle: 'Dense and crack-resistant',
    text: 'Factory supply for household cleaning channels, regional distributors and supermarkets.',
    tags: ['Bulk Supply', 'Strong Cleaning', 'Carton Pack'],
    image: siteAssets.products.laundrySoap,
  },
  {
    title: 'Soap Base',
    subtitle: 'Bulk raw material supply',
    text: 'Soap-base blocks for workshops, soap brands and downstream product development partners.',
    tags: ['Bulk Block', 'Stable Quality', 'B2B Supply'],
    image: siteAssets.products.soapBase,
  },
];

const featured = [
  ['Olive Oil Soap', 'Gentle & Moisturizing', siteAssets.products.oliveOilSoap],
  ['Handmade Essential Oil Soap', 'Natural & Aromatic', siteAssets.products.essentialOilSoap],
  ['Laundry Soap', 'Strong Cleaning Power', siteAssets.products.laundrySoap],
  ['Transparent Soap', 'Pure & Transparent', siteAssets.products.transparentSoap],
  ['Soap Base', 'Premium Quality', siteAssets.products.soapBase],
  ['Goat Milk Soap', 'Nourishing & Mild', siteAssets.products.goatMilkSoap],
] as const;

const oemSteps = [
  'Formula Customization',
  'Fragrance & Color',
  'Shape & Size',
  'Packaging Design',
  'Logo & Label',
  'Fast Sampling',
  'Mass Production',
];

const productionLines = [
  { name: 'Toilet Soap + Laundry Soap', value: '6 Lines' },
  { name: 'Handmade Soap', value: '10 Lines' },
  { name: 'Household Cleaning', value: '4 Lines' },
  { name: 'Cosmetics', value: '4 Lines' },
];

const capacities = [
  { name: 'Handmade / Essential Oil Soap', value: '5,000 tons / year' },
  { name: 'Toilet Soap', value: '10,000 tons / year' },
  { name: 'Laundry Soap', value: '10,000 tons / year' },
];

const equipment = [
  ['Vertical Three-roll Grinder', 'Raw materials ground finer than hair'],
  ['High-density Plodder', 'Screw length 2 meters'],
  ['Compression Ratio 1:9', 'Normal machine ratio 1:6'],
  ['Stable Bar Quality', 'High density, no cracking, rich foam'],
] as const;

const quality = [
  ['Strict Quality Control', 'Multiple inspection process'],
  ['Test Reports', 'Available upon request'],
  ['Certification Support', 'Based on product and market'],
] as const;

const exportSupport = [
  ['MSDS Report', 'Available'],
  ['Certificate of Origin', 'Support'],
  ['Customs Documents', 'Full set support'],
  ['Packing Solutions', 'Safe & secure'],
  ['FOB Quotation', 'Flexible terms'],
] as const;

const factoryAssets = [
  ['Factory Exterior', siteAssets.factory.exterior],
  ['Clean Production Line', siteAssets.factory.productionLine],
  ['Workers & Machines', siteAssets.factory.workersMachines],
  ['Warehouse & Packing', siteAssets.factory.warehousePacking],
] as const;

const certificateAssets = [
  ['ISO / GMP certificate slot', siteAssets.certificates.certificate01],
  ['Intertek / SGS test report slot', siteAssets.certificates.report01],
  ['Chinese certificate slot', siteAssets.certificates.certificate02],
  ['Inspection record slot', siteAssets.certificates.inspectionRecord],
] as const;

const blogs = [
  ['May 12, 2024', 'How to Choose the Right Soap for Your Brand?', siteAssets.blog.soapBrandGuide],
  ['Apr 25, 2024', 'Benefits of Natural Ingredients in Soap Making', siteAssets.blog.naturalIngredients],
  ['Apr 10, 2024', 'OEM Soap Manufacturing Process Explained', siteAssets.blog.oemProcess],
  ['Mar 28, 2024', 'Laundry Soap vs. Detergent Soap: What’s the Difference?', siteAssets.blog.laundrySoapGuide],
  ['Mar 15, 2024', 'Top 5 Trends in Personal Care Products in 2024', siteAssets.blog.personalCareTrends],
] as const;

type AssetVariant = 'product' | 'factory' | 'equipment' | 'cert' | 'export';

type AssetSlotProps = {
  label: string;
  src?: string;
  alt?: string;
  variant?: AssetVariant;
  tall?: boolean;
};

function toSrc(value: string) {
  return value.trim() || undefined;
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <span className="section-label">{children}</span>;
}

function AssetSlot({ label, src, alt, variant = 'product', tall = false }: AssetSlotProps) {
  const imageSrc = src ? toSrc(src) : undefined;

  return (
    <div className={`asset-slot asset-${variant} ${tall ? 'asset-tall' : ''} ${imageSrc ? 'asset-has-image' : ''}`} role={imageSrc ? undefined : 'img'} aria-label={imageSrc ? undefined : label}>
      {imageSrc ? (
        <img className="asset-img" src={imageSrc} alt={alt ?? label} loading="lazy" />
      ) : (
        <>
          <div className="asset-orb" />
          <div className="asset-frame">
            <span>Replace Image</span>
            <strong>{label}</strong>
          </div>
        </>
      )}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-ivory/90 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="SIMAN homepage">
          {toSrc(siteAssets.logo) ? (
            <img className="h-11 w-auto object-contain" src={siteAssets.logo} alt="SIMAN logo" />
          ) : (
            <div className="grid h-11 w-11 place-items-center rounded-full bg-forest text-sm font-bold text-ivory">S</div>
          )}
          <div>
            <p className="text-lg font-bold tracking-[0.22em] text-forest">SIMAN</p>
            <p className="text-xs uppercase tracking-[0.22em] text-moss">丝曼生物科技</p>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-ink/70 lg:flex" aria-label="Main navigation">
          <a href="#products">Products</a>
          <a href="#oem">OEM / ODM</a>
          <a href="#factory">Factory</a>
          <a href="#quality">Quality</a>
          <a href="#export">Export</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn-primary hidden sm:inline-flex" href="#contact">Request a Quote</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="site-container grid items-center gap-12 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <SectionLabel>OEM / ODM SOAP & PERSONAL CARE MANUFACTURER</SectionLabel>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] text-forest md:text-7xl">
            Reliable Soap Manufacturing for Global Brands.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/68">
            Zhejiang Siman Biotechnology Co., Ltd. provides soap, handmade soap, laundry soap and soap-base solutions with formula, fragrance, shape, label and packaging customization support.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a className="btn-primary" href="#oem">Start OEM Project</a>
            <a className="btn-secondary" href="#factory">View Factory Capacity</a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.slice(0, 3).map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div className="hero-visual-wrap" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <AssetSlot label="Hero soap product family + factory background" src={siteAssets.hero} variant="product" tall />
          <div className="floating-card top-8 left-6">OEM / ODM</div>
          <div className="floating-card bottom-12 left-10">Fast Sampling</div>
          <div className="floating-card right-8 top-1/2">Global Export</div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCategories() {
  return (
    <section id="products" className="section-block bg-white">
      <div className="site-container">
        <div className="section-heading">
          <SectionLabel>PRODUCT CATEGORIES</SectionLabel>
          <h2>Four Core Product Lines for B2B Buyers</h2>
          <p>Clear product entrances help importers, wholesalers and brand owners quickly find the right cooperation model.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => (
            <article className="category-card" key={item.title}>
              <AssetSlot label={`${item.title} image`} src={item.image} alt={`${item.title} product`} />
              <h3>{item.title}</h3>
              <p className="subtitle">{item.subtitle}</p>
              <p>{item.text}</p>
              <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className="section-block bg-ivory">
      <div className="site-container">
        <div className="split-heading">
          <div>
            <SectionLabel>FEATURED PRODUCTS</SectionLabel>
            <h2>Buyer-facing Product Display Area</h2>
          </div>
          <a href="#contact" className="btn-secondary">View All Products</a>
        </div>
        <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-6">
          {featured.map(([name, desc, image]) => (
            <article className="featured-card" key={name}>
              <AssetSlot label={name} src={image} alt={`${name} product`} />
              <h3>{name}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Oem() {
  return (
    <section id="oem" className="section-block bg-white">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <AssetSlot label="YOUR BRAND soap packaging mockup" src={siteAssets.oem.packaging} alt="Custom private label soap packaging" variant="product" tall />
        <div>
          <SectionLabel>OEM / ODM SOLUTIONS</SectionLabel>
          <h2 className="section-title">From Formula to Retail-ready Packaging.</h2>
          <p className="section-copy">Build this section as the conversion core: show what can be customized, how buyers start, and why SIMAN is suitable for repeat B2B orders.</p>
          <div className="timeline-grid">
            {oemSteps.map((step, index) => (
              <div className="step-card" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
          <div className="timing-panel">
            <div><strong>3-5 Days</strong><span>Sample proofing</span></div>
            <div><strong>15-20 Days</strong><span>OEM production</span></div>
            <div><strong>~20 Days</strong><span>Export delivery cycle</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Factory() {
  return (
    <section id="factory" className="section-block bg-forest text-ivory">
      <div className="site-container">
        <div className="section-heading text-ivory">
          <SectionLabel>OUR FACTORY & PRODUCTION CAPACITY</SectionLabel>
          <h2>Modern facilities built for stable soap supply.</h2>
          <p className="text-ivory/68">Use real exterior, workshop, production floor and warehouse photos in this section.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          {stats.map((item) => (
            <div className="dark-stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {factoryAssets.map(([label, image]) => (
            <AssetSlot key={label} label={label} src={image} alt={`SIMAN ${label}`} variant="factory" />
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {productionLines.map((item) => (
            <div className="line-dark" key={item.name}>
              <span>{item.name}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {capacities.map((item) => (
            <div className="capacity-card" key={item.name}>
              <p>{item.name}</p>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Equipment() {
  return (
    <section className="section-block bg-white">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionLabel>ADVANCED EQUIPMENT</SectionLabel>
          <h2 className="section-title">Superior Quality Starts from Better Processing.</h2>
          <p className="section-copy">Present equipment details as buyer benefits: finer material processing, higher density, stable bar texture and reduced cracking risk.</p>
          <div className="equipment-list">
            {equipment.map(([name, desc]) => (
              <div className="equipment-card" key={name}>
                <strong>{name}</strong>
                <span>{desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
          <AssetSlot label="Green industrial equipment" src={siteAssets.equipment.threeRollGrinder || siteAssets.equipment.plodder} alt="SIMAN soap production equipment" variant="equipment" tall />
          <AssetSlot label="Soap bars on conveyor" src={siteAssets.equipment.conveyor} alt="Soap bars on conveyor" variant="equipment" tall />
        </div>
      </div>
    </section>
  );
}

function Quality() {
  return (
    <section id="quality" className="section-block bg-ivory">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionLabel>QUALITY & CERTIFICATIONS</SectionLabel>
          <h2 className="section-title">Inspection and documentation support for overseas orders.</h2>
          <p className="section-copy">Use verified certificate images only. Keep wording safe: report and certification availability depends on product model and target market.</p>
          <div className="quality-grid">
            {quality.map(([name, desc]) => (
              <div className="check-card" key={name}>
                <strong>{name}</strong>
                <span>{desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="cert-wall">
          {certificateAssets.map(([label, image]) => (
            <AssetSlot key={label} label={label} src={image} alt={label} variant="cert" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Export() {
  return (
    <section id="export" className="section-block bg-white">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <SectionLabel>EXPORT SUPPORT</SectionLabel>
          <h2 className="section-title">Documents, packing and FOB quotation support.</h2>
          <p className="section-copy">This section answers the procurement team’s practical concerns before they send an inquiry.</p>
          <div className="export-grid">
            {exportSupport.map(([name, desc]) => (
              <div className="export-card" key={name}>
                <i />
                <strong>{name}</strong>
                <span>{desc}</span>
              </div>
            ))}
          </div>
        </div>
        <AssetSlot label="Container / warehouse / export cartons" src={siteAssets.export.container || siteAssets.export.loading || siteAssets.export.cartons} alt="SIMAN export cartons and loading" variant="export" tall />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-block bg-ivory">
      <div className="site-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionLabel>ABOUT SIMAN</SectionLabel>
          <h2 className="section-title">A professional manufacturer of soap and personal care products.</h2>
          <p className="section-copy">With production experience, advanced production lines and quality-control processes, SIMAN provides OEM / ODM solutions to customers worldwide.</p>
          <a className="btn-primary mt-8" href="#contact">Learn More</a>
        </div>
        <div className="about-collage">
          <AssetSlot label="SIMAN building exterior" src={siteAssets.about.building || siteAssets.factory.exterior} alt="SIMAN building exterior" variant="factory" />
          <AssetSlot label="Office / lab scene" src={siteAssets.about.officeLab} alt="SIMAN office or lab scene" variant="factory" />
          <AssetSlot label="Team photo" src={siteAssets.about.team} alt="SIMAN team" variant="factory" />
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="section-block bg-white">
      <div className="site-container">
        <div className="split-heading">
          <div>
            <SectionLabel>LATEST BLOG</SectionLabel>
            <h2>Buyer education topics for SEO and trust building.</h2>
          </div>
          <a href="#contact" className="btn-secondary">View All Blog</a>
        </div>
        <div className="blog-scroll">
          {blogs.map(([date, title, image]) => (
            <article className="blog-card" key={title}>
              <AssetSlot label="Blog thumbnail" src={image} alt={title} />
              <p>{date}</p>
              <h3>{title}</h3>
              <a href="#contact">Read More</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaFooter() {
  return (
    <footer id="contact" className="footer-section">
      <div className="site-container">
        <div className="cta-band">
          <div>
            <h2>Looking for a Reliable Soap Manufacturer?</h2>
            <p>Contact us today for catalog, quotation and sample support.</p>
          </div>
          <a className="btn-light" href="mailto:sale@zjmsw.com">Contact Us Now</a>
        </div>
        <div className="footer-grid">
          <div>
            <div className="footer-logo">SIMAN<span>丝曼生物科技</span></div>
            <p>OEM/ODM soap and personal care manufacturer with factory direct supply and global export support.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="#top">Home</a>
            <a href="#products">Products</a>
            <a href="#oem">OEM / ODM</a>
            <a href="#factory">Factory</a>
          </div>
          <div>
            <h3>Products</h3>
            <a href="#products">Soap</a>
            <a href="#products">Handmade Soap</a>
            <a href="#products">Laundry Soap</a>
            <a href="#products">Soap Base</a>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>Tel: +86 571 87103032</p>
            <p>Email: sale@zjmsw.com</p>
            <p>Add: Jinhua, Zhejiang, China</p>
          </div>
        </div>
        <div className="copyright">© 2024 Zhejiang Siman Biotechnology Co., Ltd. All Rights Reserved.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <Oem />
      <Factory />
      <Equipment />
      <Quality />
      <Export />
      <About />
      <Blog />
      <CtaFooter />
    </main>
  );
}
