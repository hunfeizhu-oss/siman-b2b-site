import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileText,
  FlaskConical,
  Globe2,
  Handshake,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Search,
  ShieldCheck,
  Ship,
  Sparkles,
  Truck,
  X,
} from "lucide-react";

const ASSET = "/assets/site/";

gsap.registerPlugin(ScrollTrigger);

const heroPositions = {
  "siman-hero-face-soap.jpg": {
    desktop: "center center",
    tablet: "center center",
    mobile: "center center",
  },
  "siman-hero-perfume-soap.jpg": {
    desktop: "center center",
    tablet: "center center",
    mobile: "center center",
  },
  "siman-hero-production-equipment.jpg": {
    desktop: "center center",
    tablet: "center center",
    mobile: "center center",
  },
};

const content = {
  en: {
    title: "Siman Biotechnology | OEM/ODM Soap & Personal Care Manufacturer",
    nav: [
      ["home", "Home"],
      ["products", "Products"],
      ["oem", "OEM/ODM"],
      ["about", "About Us"],
      ["factory", "Factory"],
      ["blog", "Blog"],
      ["contact", "Contact Us"],
    ],
    language: "English",
    nextLanguage: "中文",
    quote: "Get A Quote",
    contactTitle: "Contact Us",
    followTitle: "Follow Us",
    mobileBar: {
      phone: "Phone",
      email: "Email",
      inquiry: "Inquiry",
    },
    topbar: {
      note: "Factory direct OEM/ODM soap and personal care supply",
      email: "sales@siman.com",
      phone: "+86 571 8730 0352 / 189 6939 8755",
    },
    hero: {
      slides: [
        {
          eyebrow: "Factory Direct",
          title: "Your One-Stop OEM/ODM Soap Manufacturer",
          lead:
            "Reliable factory supply for soap brands, wholesalers and importers, from formula to finished goods.",
          pains: ["Need fast samples?", "Looking for stable quality?", "Preparing export orders?"],
          primary: "Quick Quote & Free Design",
          secondary: "Start Your Private Brand",
          primaryHref: "#/contact",
          secondaryHref: "#/oem",
          image: "siman-hero-face-soap.jpg",
        },
        {
          eyebrow: "Custom Packaging",
          title: "Private Label Handmade Soap",
          lead:
            "Flexible fragrance, color, shape, label and packaging solutions for differentiated personal care products.",
          pains: ["Custom fragrance and color", "Label and gift-box support", "Small-batch trial available"],
          primary: "Explore OEM/ODM",
          secondary: "Request Samples",
          primaryHref: "#/oem",
          secondaryHref: "#/contact",
          image: "siman-hero-perfume-soap.jpg",
        },
        {
          eyebrow: "Soap Base Supply",
          title: "Stable Production Capacity",
          lead:
            "Soap base and finished soap manufacturing supported by production lines, quality control and export documents.",
          pains: ["Batch control", "On-time delivery", "MSDS and customs documents"],
          primary: "Factory Capability",
          secondary: "Get A Quote",
          primaryHref: "#/factory",
          secondaryHref: "#/contact",
          image: "siman-hero-production-equipment.jpg",
        },
      ],
      chips: [
        ["Factory Direct", "15,000m2+ Plant Area"],
        ["OEM/ODM Service", "One-stop Customization"],
        ["High Quality", "Strict Quality Control"],
        ["Global Export", "Documents Support"],
      ],
    },
    solution: {
      title: "One-Stop OEM Solution for Soap & Personal Care Brands",
      subtitle:
        "Built for importers, wholesalers and private-label teams that need reliable formulas, packaging and export support.",
      challenges: [
        "Long product development cycles?",
        "Need stable soap base and finished soap quality?",
        "Unsure about fragrance, color or packaging fit?",
        "Need export documents and batch consistency?",
      ],
      items: [
        [
          "Formula & Product Development",
          "Soap base, fragrance, color, function and product form support for private label lines.",
          "siman-lab-real.jpg",
          ["Formula matching", "Ingredient options", "Market-ready samples"],
        ],
        [
          "Flexible Manufacturing",
          "Factory lines for soap base, handmade soap, laundry soap and personal care extensions.",
          "siman-hero-production-equipment.jpg",
          ["Stable capacity", "Batch control", "Low-risk trial orders"],
        ],
        [
          "Packaging & Brand Support",
          "Label, carton, gift set and shipping carton solutions matched to your sales channel.",
          "siman-hero-face-soap.jpg",
          ["Logo and label", "Retail packaging", "Export-safe cartons"],
        ],
        [
          "Export & Delivery Coordination",
          "Document support and order coordination from sample approval to shipment.",
          "siman-packaging-line.jpg",
          ["MSDS support", "Customs documents", "Shipping follow-up"],
        ],
      ],
    },
    lab: {
      title: "Siman Custom Soap Lab",
      subtitle:
        "A practical product-development board for turning ideas into manufacturable soap lines.",
      button: "Build My Soap Project",
      tabsLabel: "Custom soap options",
      items: [
        {
          label: "Base",
          headline: "Choose the right soap base",
          text: "Transparent, goat milk, plant oil and functional bases can be matched to your target market.",
          image: "siman-product-soap-base.jpg",
          points: ["Texture and clarity", "Mildness target", "Cost and MOQ planning"],
        },
        {
          label: "Scent",
          headline: "Match fragrance and color",
          text: "Create a scent story with fragrance, color tone and product positioning before sampling.",
          image: "siman-product-luxury-fragrant-soap.jpg",
          points: ["Fragrance direction", "Color sample", "Seasonal line extension"],
        },
        {
          label: "Shape",
          headline: "Design the product form",
          text: "Bar shape, weight, cut surface and functional positioning are aligned for production.",
          image: "siman-hero-perfume-soap.jpg",
          points: ["Shape and size", "Logo embossing", "Gift-set compatibility"],
        },
        {
          label: "Pack",
          headline: "Make packaging export-ready",
          text: "Retail boxes, labels and shipping cartons are developed together for brand and logistics needs.",
          image: "siman-hero-face-soap.jpg",
          points: ["Label and box", "Outer carton", "Barcode and document support"],
        },
      ],
    },
    project: {
      title: "Buyer Project Board",
      subtitle: "Turn a loose idea into a sample-ready inquiry before the first email.",
      kicker: "SIMAN FAST RFQ",
      button: "Send Project Brief",
      tab: "Project Brief",
      note: "Siman can reply with sample route, estimated MOQ and export document list.",
      summaryTitle: "Your sample route",
      selectionLabel: "Selected direction",
      confirmTitle: "What Siman will confirm",
      metrics: [
        ["Trial MOQ", "Discuss by formula"],
        ["Sample Window", "7-10 working days"],
        ["Export Files", "MSDS / COA / customs docs"],
      ],
      points: [
        "Formula, fragrance and color direction",
        "Logo, label and carton requirements",
        "Unit price, MOQ and production lead time",
      ],
      groups: [
        {
          key: "product",
          label: "1. Product Route",
          options: [
            {
              name: "Handmade Soap",
              text: "Natural color, shape and fragrance trials",
              image: "siman-hero-perfume-soap.jpg",
            },
            {
              name: "Soap Base",
              text: "Transparent, goat milk and plant oil bases",
              image: "siman-product-soap-base.jpg",
            },
            {
              name: "Laundry Soap",
              text: "Cost-focused factory supply for bulk channels",
              image: "real-clean-laundry-soap.jpg",
            },
          ],
        },
        {
          key: "channel",
          label: "2. Sales Channel",
          options: [
            { name: "Retail Brand", text: "Gift box, label and shelf display" },
            { name: "Wholesale", text: "Carton packing and repeat orders" },
            { name: "E-commerce", text: "Photo-ready packs and SKU variants" },
          ],
        },
        {
          key: "pack",
          label: "3. Packaging",
          options: [
            { name: "Label + Box", text: "Private label retail box" },
            { name: "Gift Set", text: "Multi-scent set with sleeve" },
            { name: "Export Carton", text: "Durable bulk packing" },
          ],
        },
      ],
    },
    categories: {
      title: "Product Categories",
      subtitle: "Main product lines for wholesale and OEM/ODM cooperation",
      action: "View All Products",
      cardAction: "Get Quote",
      items: [
        ["Soap", "Wholesale & Custom", "siman-hero-face-soap.jpg"],
        ["Handmade Soap", "Natural & Functional", "siman-hero-perfume-soap.jpg"],
        ["Laundry Soap", "Factory Supply", "real-clean-laundry-soap.jpg"],
        ["Soap Base", "Base Material Supply", "siman-product-soap-base.jpg"],
        ["Shampoo Bar", "Personal Care Expansion", "siman-product-shampoo-bar.jpg"],
        ["OEM Soap Solutions", "Formula + Packaging", "siman-product-brand-gift-soap.jpg"],
      ],
    },
    sample: {
      title: "Feel the Quality. Decide with Confidence.",
      lead:
        "Get personalized soap samples before mass production, including fragrance, color, logo and packaging direction.",
      button: "Get Custom Samples",
    },
    oem: {
      title: "OEM/ODM Solutions",
      subtitle: "One-stop customization service from formula to finished product",
      steps: [
        ["Formula", "Customization"],
        ["Fragrance", "& Color"],
        ["Shape", "& Size"],
        ["Packaging", "Design"],
        ["Logo", "& Label"],
        ["Fast", "Sampling"],
        ["Mass", "Production"],
      ],
    },
    choose: {
      title: "Why Brands Choose Siman",
      subtitle: "A practical manufacturing partner for brands, distributors and import buyers",
      items: [
        ["Strong Manufacturing Foundation", "15,000m2+ plant area with soap and personal care production experience."],
        ["Fast Sample Communication", "Clear formula, fragrance, color and packaging confirmation before production."],
        ["Strict Quality Control", "Multiple inspection steps help keep batch quality stable and traceable."],
        ["Private Label Support", "Logo, label, gift set and carton options for different market positions."],
        ["One-Stop Customization", "From soap base and finished goods to documents and shipment coordination."],
        ["Global Delivery Support", "Export-ready packing and document support for overseas cooperation."],
      ],
    },
    factory: {
      title: "Our Factory & Production Capacity",
      stats: [
        ["15,000 m2+", "Plant Area"],
        ["35,000 m2+", "Production Area"],
        ["200+", "Skilled Employees"],
        ["20+ Years", "Production Experience"],
        ["20+", "Own Brands"],
        ["5,000+", "Serving Customers"],
      ],
      gallery: [
        ["siman-factory-building-new.jpg", "Factory Building"],
        ["siman-lab-real.jpg", "Quality Lab"],
        ["siman-hero-production-equipment.jpg", "Production Equipment"],
        ["siman-packaging-line.jpg", "Packaging Line"],
      ],
    },
    equipment: {
      title: "Advanced Equipment Superior Quality",
      bullets: [
        ["Vertical Three-roll Grinder", "Raw materials ground finer than hair"],
        ["High-density Plodder", "Screw length 2 meters"],
        ["Compression Ratio 1:9", "Normal machine ratio 1:6"],
        ["High Density, No Cracking", "High transparency, rich foam"],
      ],
    },
    quality: {
      title: "Quality & Certifications",
      points: [
        ["Strict Quality Control", "Multiple Inspection Process"],
        ["Test Reports", "Available"],
        ["Certification", "Support"],
      ],
      certs: [
        "certificate-1.jpg",
        "certificate-2.jpg",
        "certificate-3.jpg",
        "certificate-4.jpg",
        "certificate-5.jpg",
      ],
    },
    export: {
      title: "Export Support",
      items: [
        ["MSDS Report", "Available"],
        ["Certificate of Origin", "Support"],
        ["Full Set of", "Customs Documents"],
        ["Packaging Solutions", "Safe & Secure"],
        ["FOB Quotation", "Flexible Terms"],
      ],
    },
    buyers: {
      title: "Best Fit for Wholesale & Private Label Channels",
      subtitle:
        "Solutions for supermarkets, distributors, e-commerce sellers, gift suppliers and beauty brands.",
      items: [
        "Supermarkets & chain stores",
        "Wholesalers & distributors",
        "E-commerce and private label brands",
        "Hotel, spa and gifting channels",
        "Beauty retailers and importers",
        "Corporate custom projects",
      ],
    },
    about: {
      title: "About Siman",
      lead:
        "Zhejiang Siman Biotechnology Co., Ltd. is a professional manufacturer of soap and personal care products. With 20+ years of experience, advanced production lines and strict quality control, we provide high-quality products and OEM/ODM solutions to customers worldwide.",
      button: "Learn More",
    },
    blog: {
      title: "Latest Blog",
      action: "View All Blog",
      posts: [
        ["May 12, 2026", "How to Choose the Right Soap for Your Brand?", "siman-hero-face-soap.jpg"],
        ["Apr 25, 2026", "Benefits of Natural Ingredients in Soap Making", "siman-product-luxury-fragrant-soap.jpg"],
        ["Apr 10, 2026", "OEM Soap Manufacturing Process Explained", "siman-hero-production-equipment.jpg"],
        ["Mar 29, 2026", "Laundry Soap vs. Detergent Soap: What is the Difference?", "real-clean-laundry-soap.jpg"],
        ["Mar 15, 2026", "Top 5 Trends in Personal Care Products in 2026", "siman-product-body-wash.jpg"],
      ],
    },
    testimonials: {
      title: "What Customers Value",
      subtitle: "Clear communication, stable samples and export-ready execution",
      items: [
        [
          "Reliable OEM soap factory partner.",
          "Siman helped us confirm fragrance, packaging and carton details before our first wholesale order.",
          "Private Label Buyer",
          "United States",
        ],
        [
          "Fast sample feedback and practical packaging advice.",
          "The team understood our target market and gave options that made production easier to approve.",
          "Beauty Distributor",
          "Europe",
        ],
        [
          "Good support from product idea to shipment.",
          "We needed soap base and finished soap documents together, and the process stayed clear.",
          "Import Manager",
          "Middle East",
        ],
      ],
    },
    cta: {
      title: "Looking for a Reliable Soap Manufacturer?",
      lead: "Contact us today for catalog, quotation and free samples!",
      button: "Contact Us Now",
    },
    footer: {
      desc: "OEM/ODM soap & personal care manufacturer with 20+ years experience, factory direct supply and global export support.",
      columns: [
        ["Quick Links", ["Home", "Products", "OEM/ODM", "About Us", "Factory", "Blog", "Contact Us"]],
        ["Products", ["Soap", "Handmade Soap", "Laundry Soap", "Soap Base", "Shampoo Bar", "OEM Soap Solutions"]],
      ],
      contact: [
        ["Tel", "+86 571 8730 0352 / 189 6939 8755"],
        ["Email", "sales@siman.com"],
        ["Add", "Jinhua, Zhejiang, China"],
      ],
      copyright: "2026 Zhejiang Siman Biotechnology Co., Ltd. All Rights Reserved.",
    },
  },
  zh: {
    title: "浙江丝曼生物科技 | 皂类与个人护理 OEM/ODM 制造商",
    nav: [
      ["home", "首页"],
      ["products", "产品"],
      ["oem", "OEM/ODM"],
      ["about", "关于我们"],
      ["factory", "工厂"],
      ["blog", "博客"],
      ["contact", "联系我们"],
    ],
    language: "中文",
    nextLanguage: "English",
    quote: "获取报价",
    contactTitle: "联系我们",
    followTitle: "关注我们",
    mobileBar: {
      phone: "电话",
      email: "邮箱",
      inquiry: "询盘",
    },
    topbar: {
      note: "源头工厂供应皂类与个人护理 OEM/ODM",
      email: "sales@siman.com",
      phone: "+86 571 8730 0352 / 189 6939 8755",
    },
    hero: {
      slides: [
        {
          eyebrow: "源头工厂",
          title: "一站式 OEM/ODM 皂类制造商",
          lead: "面向品牌商、批发商与进口商，提供从配方到成品的一站式工厂供应。",
          pains: ["需要快速打样？", "追求稳定品质？", "准备出口订单？"],
          primary: "快速报价与设计建议",
          secondary: "启动自有品牌",
          primaryHref: "#/contact",
          secondaryHref: "#/oem",
          image: "siman-hero-face-soap.jpg",
        },
        {
          eyebrow: "包装定制",
          title: "私标手工皂定制方案",
          lead: "支持香型、颜色、形态、标签与包装定制，帮助客户打造差异化个人护理产品。",
          pains: ["香型与颜色定制", "标签与礼盒支持", "支持小批量试单"],
          primary: "了解 OEM/ODM",
          secondary: "申请样品",
          primaryHref: "#/oem",
          secondaryHref: "#/contact",
          image: "siman-hero-perfume-soap.jpg",
        },
        {
          eyebrow: "皂基供应",
          title: "稳定产能与品质交付",
          lead: "皂基与成品皂制造，配套生产线、质量控制和出口单证支持。",
          pains: ["批次控制", "按期交付", "MSDS 与报关资料"],
          primary: "查看工厂实力",
          secondary: "获取报价",
          primaryHref: "#/factory",
          secondaryHref: "#/contact",
          image: "siman-hero-production-equipment.jpg",
        },
      ],
      chips: [
        ["源头工厂", "15,000m2+ 厂区"],
        ["OEM/ODM 服务", "一站式定制"],
        ["高品质控制", "严格质量管理"],
        ["全球出口", "单证支持"],
      ],
    },
    solution: {
      title: "面向皂类与个人护理品牌的一站式 OEM 方案",
      subtitle: "适合进口商、批发商与私标团队，从配方、包装到出口协同都能清晰推进。",
      challenges: [
        "新品开发周期太长？",
        "需要稳定的皂基与成品皂品质？",
        "不确定香型、颜色或包装方向？",
        "需要出口单证与批次一致性？",
      ],
      items: [
        [
          "配方与产品开发",
          "支持皂基、香型、颜色、功效方向与产品形态组合，适配私标产品线。",
          "siman-lab-real.jpg",
          ["配方匹配", "原料与功效选择", "市场化样品"],
        ],
        [
          "灵活制造能力",
          "覆盖皂基、手工皂、洗衣皂与个人护理延展产品的工厂生产能力。",
          "siman-hero-production-equipment.jpg",
          ["稳定产能", "批次管控", "低风险试单"],
        ],
        [
          "包装与品牌支持",
          "根据销售渠道匹配标签、纸盒、礼盒与运输外箱方案。",
          "siman-hero-face-soap.jpg",
          ["LOGO 与标签", "零售包装", "出口安全外箱"],
        ],
        [
          "出口与交付协同",
          "从样品确认到订单出货，提供单证与交付进度协同。",
          "siman-packaging-line.jpg",
          ["MSDS 支持", "报关资料", "物流跟进"],
        ],
      ],
    },
    lab: {
      title: "丝曼定制皂实验室",
      subtitle: "把品牌想法拆成可打样、可量产、可出口的产品开发面板。",
      button: "规划我的定制项目",
      tabsLabel: "定制皂选项",
      items: [
        {
          label: "皂基",
          headline: "选择适合市场的皂基",
          text: "透明皂基、羊奶、植物油与功能型皂基，可根据目标市场进行匹配。",
          image: "siman-product-soap-base.jpg",
          points: ["质感与透明度", "温和度目标", "成本与 MOQ 规划"],
        },
        {
          label: "香型",
          headline: "匹配香型与颜色",
          text: "在打样前先确定香型故事、颜色方向和产品定位，减少反复沟通。",
          image: "siman-product-luxury-fragrant-soap.jpg",
          points: ["香型方向", "颜色样品", "季节系列延展"],
        },
        {
          label: "形态",
          headline: "设计产品形态",
          text: "条形、克重、切面和功能定位一起确认，保证创意能稳定量产。",
          image: "siman-hero-perfume-soap.jpg",
          points: ["形状与尺寸", "LOGO 压印", "礼盒兼容"],
        },
        {
          label: "包装",
          headline: "让包装适合零售与出口",
          text: "零售盒、标签和运输外箱同步开发，兼顾品牌展示与物流安全。",
          image: "siman-hero-face-soap.jpg",
          points: ["标签与纸盒", "运输外箱", "条码与单证支持"],
        },
      ],
    },
    project: {
      title: "采购项目板",
      subtitle: "把模糊想法拆成可打样、可报价、可出口的询盘信息。",
      kicker: "SIMAN 快速询盘",
      button: "发送项目需求",
      tab: "项目询盘",
      note: "丝曼可据此回复打样路径、预估 MOQ 与出口资料清单。",
      summaryTitle: "你的打样路径",
      selectionLabel: "已选方向",
      confirmTitle: "丝曼会确认",
      metrics: [
        ["试单 MOQ", "按配方沟通"],
        ["打样周期", "7-10 个工作日"],
        ["出口资料", "MSDS / COA / 报关资料"],
      ],
      points: [
        "配方、香型与颜色方向",
        "LOGO、标签与外箱要求",
        "单价、MOQ 与生产交期",
      ],
      groups: [
        {
          key: "product",
          label: "1. 产品路线",
          options: [
            {
              name: "手工皂",
              text: "天然色彩、形态与香型打样",
              image: "siman-hero-perfume-soap.jpg",
            },
            {
              name: "皂基",
              text: "透明、羊奶与植物油皂基",
              image: "siman-product-soap-base.jpg",
            },
            {
              name: "洗衣皂",
              text: "面向大货渠道的成本型供应",
              image: "real-clean-laundry-soap.jpg",
            },
          ],
        },
        {
          key: "channel",
          label: "2. 销售渠道",
          options: [
            { name: "零售品牌", text: "纸盒、标签与货架展示" },
            { name: "批发分销", text: "外箱包装与复购订单" },
            { name: "电商 SKU", text: "适合拍摄与多规格组合" },
          ],
        },
        {
          key: "pack",
          label: "3. 包装方式",
          options: [
            { name: "标签 + 纸盒", text: "私标零售包装" },
            { name: "礼盒套装", text: "多香型组合与腰封" },
            { name: "出口外箱", text: "耐运输的大货包装" },
          ],
        },
      ],
    },
    categories: {
      title: "产品分类",
      subtitle: "适用于批发与 OEM/ODM 合作的主营产品线",
      action: "查看全部产品",
      cardAction: "获取报价",
      items: [
        ["香皂", "批发与定制", "siman-hero-face-soap.jpg"],
        ["手工皂", "天然与功能型", "siman-hero-perfume-soap.jpg"],
        ["洗衣皂", "源头工厂供应", "real-clean-laundry-soap.jpg"],
        ["皂基", "基础原料供应", "siman-product-soap-base.jpg"],
        ["洗发皂", "个人护理延展", "siman-product-shampoo-bar.jpg"],
        ["OEM 皂类方案", "配方 + 包装", "siman-product-brand-gift-soap.jpg"],
      ],
    },
    sample: {
      title: "先感受品质，再放心决策",
      lead: "量产前可先确认香型、颜色、LOGO 与包装方向，降低新品开发风险。",
      button: "获取定制样品",
    },
    oem: {
      title: "OEM/ODM 解决方案",
      subtitle: "从配方到成品的一站式定制服务",
      steps: [
        ["配方", "定制"],
        ["香型", "颜色"],
        ["形态", "尺寸"],
        ["包装", "设计"],
        ["LOGO", "标签"],
        ["快速", "打样"],
        ["批量", "生产"],
      ],
    },
    choose: {
      title: "为什么品牌选择丝曼",
      subtitle: "面向品牌商、渠道商与进口采购方的实用型制造合作伙伴",
      items: [
        ["扎实制造基础", "15,000m2+ 厂区与皂类、个人护理生产经验，支撑稳定交付。"],
        ["快速打样沟通", "配方、香型、颜色与包装在量产前清晰确认。"],
        ["严格品质控制", "多环节检验流程帮助保持批次稳定与可追溯。"],
        ["私标包装支持", "支持 LOGO、标签、礼盒与外箱方案，适配不同市场定位。"],
        ["一站式定制", "从皂基、成品到单证与出货协同，减少沟通成本。"],
        ["全球交付支持", "提供出口包装与单证支持，便于海外合作推进。"],
      ],
    },
    factory: {
      title: "工厂与生产能力",
      stats: [
        ["15,000 m2+", "厂区面积"],
        ["35,000 m2+", "生产面积"],
        ["200+", "熟练员工"],
        ["20+ 年", "生产经验"],
        ["20+", "自有品牌"],
        ["5,000+", "服务客户"],
      ],
      gallery: [
        ["siman-factory-building-new.jpg", "工厂外观"],
        ["siman-lab-real.jpg", "实验室实景"],
        ["siman-hero-production-equipment.jpg", "生产设备"],
        ["siman-packaging-line.jpg", "包装流水线"],
      ],
    },
    equipment: {
      title: "先进设备 成就稳定品质",
      bullets: [
        ["立式三滚研磨机", "原料研磨比发丝还细"],
        ["高密度出条机", "螺杆长度 2 米"],
        ["1:9 压缩比", "普通机器约 1:6"],
        ["高密度 不开裂", "高透明度 泡沫丰富"],
      ],
    },
    quality: {
      title: "品质与资质认证",
      points: [
        ["严格质量控制", "多环节检验流程"],
        ["检测报告", "可提供"],
        ["资质文件", "支持"],
      ],
      certs: [
        "certificate-1.jpg",
        "certificate-2.jpg",
        "certificate-3.jpg",
        "certificate-4.jpg",
        "certificate-5.jpg",
      ],
    },
    export: {
      title: "出口支持",
      items: [
        ["MSDS 报告", "可提供"],
        ["原产地证", "支持办理"],
        ["全套", "报关资料"],
        ["包装方案", "安全稳固"],
        ["FOB 报价", "条款灵活"],
      ],
    },
    buyers: {
      title: "适合批发与私标销售渠道",
      subtitle: "面向商超、经销商、电商品牌、礼品渠道、进口商与定制项目提供方案。",
      items: [
        "商超与连锁渠道",
        "批发商与经销商",
        "电商与私标品牌",
        "酒店、SPA 与礼品渠道",
        "美妆零售与进口商",
        "企业定制项目",
      ],
    },
    about: {
      title: "关于丝曼",
      lead:
        "浙江丝曼生物科技有限公司是一家专注皂类与个人护理产品的专业制造企业，拥有 20 余年行业经验、先进生产线与严格品控体系，为全球客户提供高品质产品与 OEM/ODM 解决方案。",
      button: "了解更多",
    },
    blog: {
      title: "最新博客",
      action: "查看全部博客",
      posts: [
        ["2026-05-12", "品牌如何选择合适的香皂？", "siman-hero-face-soap.jpg"],
        ["2026-04-25", "天然成分在手工皂中的优势", "siman-product-luxury-fragrant-soap.jpg"],
        ["2026-04-10", "OEM 香皂生产流程说明", "siman-hero-production-equipment.jpg"],
        ["2026-03-29", "洗衣皂与洗涤剂皂有什么区别？", "real-clean-laundry-soap.jpg"],
        ["2026-03-15", "个人护理产品的五大趋势", "siman-product-body-wash.jpg"],
      ],
    },
    testimonials: {
      title: "客户重视什么",
      subtitle: "清晰沟通、稳定样品与可出口交付能力",
      items: [
        [
          "可靠的 OEM 香皂工厂伙伴。",
          "丝曼帮助我们在首个批发订单前确认香型、包装和外箱细节。",
          "私标采购客户",
          "美国",
        ],
        [
          "打样反馈快，包装建议也很实用。",
          "团队理解我们的目标市场，给出的方案让量产确认更顺畅。",
          "美妆经销商",
          "欧洲",
        ],
        [
          "从产品想法到出货都有支持。",
          "我们同时需要皂基、成品皂和资料文件，整个流程比较清晰。",
          "进口采购经理",
          "中东",
        ],
      ],
    },
    cta: {
      title: "正在寻找可靠的皂类制造商？",
      lead: "立即联系我们，获取产品目录、报价和样品方案！",
      button: "马上联系",
    },
    footer: {
      desc: "拥有 20 余年经验的皂类与个人护理 OEM/ODM 制造商，提供源头工厂供应和全球出口支持。",
      columns: [
        ["快速链接", ["首页", "产品", "OEM/ODM", "关于我们", "工厂", "博客", "联系我们"]],
        ["产品分类", ["香皂", "手工皂", "洗衣皂", "皂基", "洗发皂", "OEM 皂类方案"]],
      ],
      contact: [
        ["电话", "+86 571 8730 0352 / 189 6939 8755"],
        ["邮箱", "sales@siman.com"],
        ["地址", "中国浙江金华"],
      ],
      copyright: "2026 浙江丝曼生物科技有限公司 版权所有",
    },
  },
};

const heroIcons = [Factory, Handshake, ShieldCheck, Globe2];
const categoryIcons = [PackageCheck, Sparkles, ClipboardCheck, Factory, FlaskConical, Handshake];
const oemIcons = [FlaskConical, Sparkles, ShieldCheck, PackageCheck, BadgeCheck, Search, Factory];
const statIcons = [Factory, Factory, Handshake, ShieldCheck, Award, Globe2];
const solutionIcons = [FlaskConical, Factory, PackageCheck, Ship];
const chooseIcons = [Factory, Search, ShieldCheck, Award, Handshake, Truck];
const defaultProjectChoices = { product: 0, channel: 0, pack: 0 };
const pageRoutes = new Set(["products", "oem", "about", "factory", "blog", "contact"]);

function pageHref(id) {
  return id === "home" ? "#home" : `#/${id}`;
}

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return pageRoutes.has(hash) ? hash : "home";
}

function Brand({ compact = false }) {
  return (
    <div className={`brand-lockup ${compact ? "compact" : ""}`}>
      <strong>SIMAN</strong>
      <span>丝曼生物科技</span>
      <small>SIMAN BIOTECHNOLOGY</small>
    </div>
  );
}

function SectionTitle({ title, subtitle, action, href = "#/products" }) {
  return (
    <div className="section-title">
      <div>
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {action ? (
        <a href={href}>
          {action}
          <ArrowRight size={14} />
        </a>
      ) : null}
    </div>
  );
}

function InnerHero({ eyebrow, title, lead, image, quoteLabel, highlights = [] }) {
  return (
    <section className="inner-hero" style={{ "--inner-hero-image": `url(${ASSET}${image})` }}>
      <div className="inner-hero-grid">
        <div className="inner-hero-copy">
          <p>{eyebrow}</p>
          <h1>{title}</h1>
          <span>{lead}</span>
          <a className="primary-button" href="#/contact">
            {quoteLabel}
            <ArrowRight size={15} />
          </a>
        </div>
        <aside className="inner-hero-panel">
          <strong>{quoteLabel}</strong>
          <div>
            {highlights.map(([label, text]) => (
              <span key={label}>
                <CheckCircle2 size={15} />
                <b>{label}</b>
                {text}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function InnerCta({ title, lead, button }) {
  return (
    <section className="inner-cta">
      <div>
        <h2>{title}</h2>
        <p>{lead}</p>
      </div>
      <a className="light-button" href="#/contact">
        {button}
      </a>
    </section>
  );
}

function InnerNav({ route, t }) {
  return (
    <nav className="inner-page-nav" aria-label="Inner page navigation">
      {t.nav
        .filter(([id]) => id !== "home")
        .map(([id, label]) => (
          <a className={route === id ? "is-active" : ""} key={id} href={pageHref(id)}>
            {label}
          </a>
        ))}
    </nav>
  );
}

function InnerPage({ route, t }) {
  const isZh = t.language === "中文";
  const labels = {
    quote: isZh ? "获取报价" : "Get A Quote",
    learnMore: isZh ? "了解详情" : "Learn More",
    productCenter: isZh ? "产品中心" : "Product Center",
    productLead: isZh ? "适合批发、私标和 OEM/ODM 项目的核心产品线。" : "Core product lines for wholesale, private label and OEM/ODM projects.",
    categoryList: isZh ? "产品分类" : "Categories",
    oemEyebrow: isZh ? "定制服务" : "OEM/ODM Service",
    aboutEyebrow: isZh ? "关于丝曼" : "About Siman",
    factoryEyebrow: isZh ? "工厂实力" : "Factory Capability",
    blogEyebrow: isZh ? "资讯中心" : "Blog Center",
    contactEyebrow: isZh ? "联系我们" : "Contact Us",
    projectInfo: isZh ? "项目需求" : "Project Request",
    name: isZh ? "姓名 / 公司" : "Name / Company",
    email: isZh ? "邮箱 / WhatsApp" : "Email / WhatsApp",
    productNeed: isZh ? "产品需求、数量、包装方向" : "Product needs, quantity and packaging direction",
    send: isZh ? "发送询盘" : "Send Inquiry",
    quickContact: isZh ? "快速联系" : "Quick Contact",
    address: isZh ? "地址" : "Address",
    phone: isZh ? "电话" : "Phone",
    emailLabel: isZh ? "邮箱" : "Email",
    sideCtaTitle: isZh ? "需要匹配项目？" : "Need Matched Options?",
    sideCtaText: isZh ? "告诉我们产品、数量和包装方向，丝曼会给出打样建议。" : "Share product, quantity and packaging direction. Siman will suggest a sample route.",
    requestSample: isZh ? "申请样品" : "Request Sample",
  };
  const heroHighlights = t.hero.chips.slice(0, 3);

  if (route === "products") {
    return (
      <>
        <InnerHero
          eyebrow={labels.productCenter}
          title={t.categories.title}
          lead={labels.productLead}
          image="siman-hero-perfume-soap.jpg"
          quoteLabel={t.quote}
          highlights={heroHighlights}
        />
        <InnerNav route={route} t={t} />
        <section className="inner-section">
          <div className="inner-two-column">
            <aside className="inner-side-panel">
              <h2>{labels.categoryList}</h2>
              <ul>
                {t.categories.items.map(([title]) => (
                  <li key={title}>
                    <CheckCircle2 size={15} />
                    {title}
                  </li>
                ))}
              </ul>
              <div className="inner-side-cta">
                <strong>{labels.sideCtaTitle}</strong>
                <span>{labels.sideCtaText}</span>
                <a href="#/contact">
                  {labels.requestSample}
                  <ArrowRight size={13} />
                </a>
              </div>
            </aside>
            <div className="inner-product-grid">
              {t.categories.items.map(([title, subtitle, image], index) => {
                const Icon = categoryIcons[index];
                return (
                  <a className="inner-product-card" href="#/contact" key={title}>
                    <img src={`${ASSET}${image}`} alt={title} />
                    <div>
                      <small className="inner-card-index">{String(index + 1).padStart(2, "0")}</small>
                      <Icon size={23} />
                      <h3>{title}</h3>
                      <p>{subtitle}</p>
                      <span>
                        {labels.quote}
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
        <InnerCta title={t.sample.title} lead={t.sample.lead} button={t.sample.button} />
      </>
    );
  }

  if (route === "oem") {
    return (
      <>
        <InnerHero
          eyebrow={labels.oemEyebrow}
          title={t.oem.title}
          lead={t.solution.subtitle}
          image="siman-packaging-line.jpg"
          quoteLabel={t.quote}
          highlights={heroHighlights}
        />
        <InnerNav route={route} t={t} />
        <section className="inner-section">
          <SectionTitle title={t.solution.title} subtitle={t.solution.subtitle} />
          <div className="inner-solution-list">
            {t.solution.items.map(([title, text, image, points], index) => {
              const Icon = solutionIcons[index];
              return (
                <article className="inner-solution-row" key={title}>
                  <img src={`${ASSET}${image}`} alt={title} />
                  <div>
                    <Icon size={28} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <ul>
                      {points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 size={14} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <section className="inner-section inner-dark-section">
          <SectionTitle title={t.oem.title} subtitle={t.oem.subtitle} />
          <div className="inner-process-grid">
            {t.oem.steps.map(([title, subtitle], index) => {
              const Icon = oemIcons[index];
              return (
                <div className="inner-process-card" key={`${title}-${subtitle}`}>
                  <Icon size={26} />
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  <span>{title}</span>
                  <small>{subtitle}</small>
                </div>
              );
            })}
          </div>
        </section>
        <InnerCta title={t.cta.title} lead={t.cta.lead} button={t.cta.button} />
      </>
    );
  }

  if (route === "about") {
    return (
      <>
        <InnerHero
          eyebrow={labels.aboutEyebrow}
          title={t.about.title}
          lead={t.about.lead}
          image="siman-factory-building-new.jpg"
          quoteLabel={t.quote}
          highlights={heroHighlights}
        />
        <InnerNav route={route} t={t} />
        <section className="inner-section">
          <div className="inner-about-layout">
            <div>
              <SectionTitle title={t.choose.title} subtitle={t.choose.subtitle} />
              <div className="inner-feature-list">
                {t.choose.items.map(([title, text], index) => {
                  const Icon = chooseIcons[index];
                  return (
                    <div className="inner-feature-item" key={title}>
                      <Icon size={24} />
                      <strong>{title}</strong>
                      <span>{text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="inner-about-gallery">
              <img src={`${ASSET}siman-factory-building-new.jpg`} alt="SIMAN factory building" />
              <img src={`${ASSET}siman-office-showroom.jpg`} alt="SIMAN office and showroom" />
              <img src={`${ASSET}siman-lab-real.jpg`} alt="SIMAN quality lab" />
            </div>
          </div>
        </section>
        <InnerCta title={t.cta.title} lead={t.cta.lead} button={t.cta.button} />
      </>
    );
  }

  if (route === "factory") {
    return (
      <>
        <InnerHero
          eyebrow={labels.factoryEyebrow}
          title={t.factory.title}
          lead={t.equipment.title}
          image="siman-hero-production-equipment.jpg"
          quoteLabel={t.quote}
          highlights={heroHighlights}
        />
        <InnerNav route={route} t={t} />
        <section className="inner-section">
          <div className="inner-stat-grid">
            {t.factory.stats.map(([number, label], index) => {
              const Icon = statIcons[index];
              return (
                <div className="inner-stat-card" key={label}>
                  <Icon size={26} />
                  <strong>{number}</strong>
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
          <div className="inner-factory-gallery">
            {t.factory.gallery.map(([image, label]) => (
              <figure key={image}>
                <img src={`${ASSET}${image}`} alt={label} />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section className="inner-section inner-equipment-section">
          <div>
            <h2>{t.equipment.title}</h2>
            <ul>
              {t.equipment.bullets.map(([title, text]) => (
                <li key={title}>
                  <CheckCircle2 size={17} />
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <img src={`${ASSET}siman-hero-production-equipment.jpg`} alt="Advanced production equipment" />
        </section>
        <InnerCta title={t.cta.title} lead={t.cta.lead} button={t.cta.button} />
      </>
    );
  }

  if (route === "blog") {
    return (
      <>
        <InnerHero
          eyebrow={labels.blogEyebrow}
          title={t.blog.title}
          lead={t.buyers.subtitle}
          image="siman-product-luxury-fragrant-soap.jpg"
          quoteLabel={t.quote}
          highlights={heroHighlights}
        />
        <InnerNav route={route} t={t} />
        <section className="inner-section">
          <div className="inner-blog-grid">
            {t.blog.posts.map(([date, title, image]) => (
              <article className="inner-blog-card" key={title}>
                <img src={`${ASSET}${image}`} alt={title} />
                <div>
                  <time>{date}</time>
                  <h3>{title}</h3>
                  <a href="#/contact">
                    {labels.learnMore}
                    <ArrowRight size={13} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <InnerHero
        eyebrow={labels.contactEyebrow}
        title={t.cta.title}
        lead={t.cta.lead}
        image="siman-packaging-line.jpg"
        quoteLabel={t.quote}
        highlights={heroHighlights}
      />
      <InnerNav route={route} t={t} />
      <section className="inner-section">
        <div className="inner-contact-layout">
          <div className="inner-contact-panel">
            <h2>{labels.quickContact}</h2>
            <a href="tel:+8657187300352">
              <Phone size={18} />
              <span>{labels.phone}</span>
              <strong>+86 571 8730 0352 / 189 6939 8755</strong>
            </a>
            <a href="mailto:sales@siman.com">
              <Mail size={18} />
              <span>{labels.emailLabel}</span>
              <strong>sales@siman.com</strong>
            </a>
            <div>
              <MapPin size={18} />
              <span>{labels.address}</span>
              <strong>{isZh ? "中国浙江金华" : "Jinhua, Zhejiang, China"}</strong>
            </div>
          </div>
          <form className="inner-inquiry-form">
            <h2>{labels.projectInfo}</h2>
            <input aria-label={labels.name} placeholder={labels.name} />
            <input aria-label={labels.email} placeholder={labels.email} />
            <textarea aria-label={labels.productNeed} placeholder={labels.productNeed} rows="5" />
            <a className="primary-button" href="mailto:sales@siman.com">
              {labels.send}
              <ArrowRight size={15} />
            </a>
          </form>
        </div>
      </section>
    </>
  );
}

function App() {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const heroTransitionReady = useRef(false);
  const [lang, setLang] = useState("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [projectChoices, setProjectChoices] = useState(defaultProjectChoices);
  const [route, setRoute] = useState(getRouteFromHash);
  const t = content[lang];
  const activeHero = t.hero.slides[heroIndex % t.hero.slides.length];
  const activeHeroPosition = heroPositions[activeHero.image];
  const projectSelections = t.project.groups.map((group) => group.options[projectChoices[group.key] ?? 0] || group.options[0]);
  const activeProjectImage = projectSelections[0]?.image || "siman-hero-perfume-soap.jpg";

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = t.title;
  }, [lang, t.title]);

  useEffect(() => {
    const syncRoute = () => setRoute(getRouteFromHash());
    window.addEventListener("hashchange", syncRoute);
    syncRoute();
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [route]);

  useEffect(() => {
    setHeroIndex(0);
    setProjectChoices(defaultProjectChoices);
  }, [lang]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % t.hero.slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [lang, t.hero.slides.length]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return undefined;
    }

    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        finePointer: "(pointer: fine)",
      },
      ({ conditions }) => {
        if (conditions.reduceMotion) {
          return undefined;
        }

        const hoverCleanups = [];
        const ctx = gsap.context(() => {
          gsap.defaults({ ease: "power2.out" });
          gsap.set(
            [
              ".site-header",
              ".hero-copy > *",
              ".hero-chip",
              ".hero-visual-card",
              ".hero-proof-card",
              ".page-section",
              ".sample-band",
              ".cta-band",
              ".inner-section",
              ".inner-cta",
              ".category-card",
              ".solution-card",
              ".product-card",
              ".blog-card",
              ".buyer-card",
              ".testimonial-card",
              ".project-board",
              ".project-option",
              ".project-snapshot",
              ".module-card",
            ],
            { willChange: "transform, opacity" },
          );

          const intro = gsap.timeline({ defaults: { duration: 0.68, ease: "power3.out" } });
          intro
            .from(".site-header", { y: -18, autoAlpha: 0 })
            .from(".hero-eyebrow", { y: 18, autoAlpha: 0 }, "-=0.22")
            .from(".hero-copy h1", { y: 28, autoAlpha: 0 }, "-=0.45")
            .from(".hero-copy > p", { y: 18, autoAlpha: 0 }, "-=0.42")
            .from(".hero-chip", { y: 18, autoAlpha: 0, stagger: 0.06 }, "-=0.28")
            .from(".hero-actions a", { y: 12, autoAlpha: 0, stagger: 0.08 }, "-=0.32")
            .from(".hero-visual-card", { x: 36, rotate: 1.4, autoAlpha: 0 }, "-=0.52")
            .from(".hero-proof-card", { y: 16, autoAlpha: 0, stagger: 0.08 }, "-=0.36")
            .from(".hero-dots button", { scaleX: 0, autoAlpha: 0, stagger: 0.06, transformOrigin: "center" }, "-=0.25");

          ScrollTrigger.batch(".category-card, .solution-card, .product-card, .blog-card, .buyer-card, .testimonial-card, .project-option", {
            start: "top 88%",
            once: true,
            onEnter: (batch) => {
              gsap.fromTo(
                batch,
                { y: 24, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.58, stagger: { each: 0.055, from: "start" }, overwrite: "auto" },
              );
            },
          });

          ScrollTrigger.batch(".module-card, .project-board", {
            start: "top 86%",
            once: true,
            onEnter: (batch) => {
              gsap.fromTo(batch, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.08 });
            },
          });

          ScrollTrigger.batch(".challenge-list li, .stat-item, .process-step, .quality-point, .export-item, .choose-list-item", {
            start: "top 90%",
            once: true,
            onEnter: (batch) => {
              gsap.fromTo(
                batch,
                { y: 16, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.48, stagger: { amount: 0.35, from: "center" } },
              );
            },
          });

          gsap.utils.toArray(".section-title").forEach((title) => {
            gsap.fromTo(
              title,
              { y: 18, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.52,
                scrollTrigger: {
                  trigger: title,
                  start: "top 88%",
                  once: true,
                },
              },
            );
          });

          if (conditions.finePointer) {
            gsap.utils
              .toArray(
                ".category-card, .solution-card, .product-card, .blog-card, .buyer-card, .testimonial-card, .factory-gallery figure, .cert-grid img, .project-option",
              )
              .forEach((card) => {
                const enter = () => {
                  gsap.to(card, { y: -5, scale: 1.012, duration: 0.24, ease: "power2.out", overwrite: "auto" });
                };
                const leave = () => {
                  gsap.to(card, { y: 0, scale: 1, duration: 0.28, ease: "power2.out", overwrite: "auto" });
                };
                card.addEventListener("mouseenter", enter);
                card.addEventListener("mouseleave", leave);
                hoverCleanups.push(() => {
                  card.removeEventListener("mouseenter", enter);
                  card.removeEventListener("mouseleave", leave);
                });
              });
          }
        }, root);

        return () => {
          hoverCleanups.forEach((cleanup) => cleanup());
          ctx.revert();
        };
      },
    );

    return () => mm.revert();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !rootRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".page-section, .sample-band, .cta-band, .inner-section, .inner-cta").forEach((section) => {
        gsap.fromTo(
          section,
          { y: 42, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.72,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.utils
        .toArray(
          [
            ".solution-card",
            ".project-snapshot",
            ".category-card",
            ".factory-gallery figure",
            ".inner-product-card",
            ".inner-solution-row",
            ".inner-about-gallery img",
            ".inner-factory-gallery figure",
            ".inner-blog-card",
            ".inner-equipment-section img",
          ].join(", "),
        )
        .forEach((media) => {
          gsap.fromTo(
            media,
            { clipPath: "inset(10% 0 0 0)", autoAlpha: 0.82 },
            {
              clipPath: "inset(0% 0 0 0)",
              autoAlpha: 1,
              duration: 0.78,
              ease: "power3.out",
              scrollTrigger: {
                trigger: media,
                start: "top 90%",
                once: true,
              },
            },
          );
        });
    }, rootRef.current);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [route, lang]);

  useEffect(() => {
    if (!heroTransitionReady.current) {
      heroTransitionReady.current = true;
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !heroRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const transition = gsap.timeline({ defaults: { duration: 0.48, ease: "power2.out" } });
      transition
        .fromTo(".hero-copy > .hero-eyebrow, .hero-copy h1, .hero-copy > p", { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.055 })
        .fromTo(".hero-chip", { y: 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.04 }, "<0.08")
        .fromTo(".hero-actions a", { y: 8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.05 }, "<0.04")
        .fromTo(".hero-visual-card", { x: 24, autoAlpha: 0 }, { x: 0, autoAlpha: 1 }, "<0.02")
        .fromTo(".hero-proof-card", { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.05 }, "<0.08");
    }, heroRef);

    return () => ctx.revert();
  }, [heroIndex, lang]);

  const updateHero = (direction) => {
    setHeroIndex((current) => (current + direction + t.hero.slides.length) % t.hero.slides.length);
  };

  const toggleLanguage = () => {
    setLang((current) => (current === "en" ? "zh" : "en"));
    setMobileOpen(false);
  };

  const footerHref = (label) => {
    const hrefs = {
      Home: "#home",
      Products: "#/products",
      "OEM/ODM": "#/oem",
      "About Us": "#/about",
      Factory: "#/factory",
      Blog: "#/blog",
      "Contact Us": "#/contact",
      Soap: "#/products",
      "Handmade Soap": "#/products",
      "Laundry Soap": "#/products",
      "Soap Base": "#/products",
      "Shampoo Bar": "#/products",
      "OEM Soap Solutions": "#/oem",
      首页: "#home",
      产品: "#/products",
      关于我们: "#/about",
      工厂: "#/factory",
      博客: "#/blog",
      联系我们: "#/contact",
      香皂: "#/products",
      手工皂: "#/products",
      洗衣皂: "#/products",
      皂基: "#/products",
      洗发皂: "#/products",
      "OEM 皂类方案": "#/oem",
    };

    return hrefs[label] || "#home";
  };

  return (
    <div className="site-shell" ref={rootRef}>
      <div className="site-topbar">
        <div className="topbar-inner">
          <span>{t.topbar.note}</span>
          <a href="mailto:sales@siman.com">
            <Mail size={13} />
            {t.topbar.email}
          </a>
          <a href="tel:+8657187300352">
            <Phone size={13} />
            {t.topbar.phone}
          </a>
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="SIMAN Biotechnology">
          <Brand />
        </a>

        <nav className={`site-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {t.nav.map(([id, label]) => (
            <a className={route === id ? "is-active" : ""} key={id} href={pageHref(id)} onClick={() => setMobileOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="language-button" onClick={toggleLanguage} type="button">
            <Globe2 size={15} />
            {t.nextLanguage}
          </button>
          <a className="quote-button" href="#/contact">
            {t.quote}
          </a>
          <button
            className="menu-button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation"
            type="button"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        {route === "home" ? (
          <>
        <section
          className="hero-section"
          id="home"
          ref={heroRef}
          style={{
            "--hero-image": `url(${ASSET}${activeHero.image})`,
            "--hero-position-desktop": activeHeroPosition?.desktop,
            "--hero-position-tablet": activeHeroPosition?.tablet,
            "--hero-position-mobile": activeHeroPosition?.mobile,
          }}
        >
          <button className="hero-arrow prev" type="button" aria-label="Previous hero" onClick={() => updateHero(-1)}>
            ‹
          </button>
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="hero-eyebrow">{activeHero.eyebrow}</p>
              <h1>{activeHero.title}</h1>
              <p>{activeHero.lead}</p>
              <ul className="hero-pains">
                {activeHero.pains.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={15} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="hero-chips">
                {t.hero.chips.map(([title, text], index) => {
                  const Icon = heroIcons[index];
                  return (
                    <div className="hero-chip" key={title}>
                      <Icon size={28} />
                      <strong>{title}</strong>
                      <span>{text}</span>
                    </div>
                  );
                })}
              </div>
              <div className="hero-actions">
                <a className="primary-button" href={activeHero.primaryHref}>
                  {activeHero.primary}
                </a>
                <a className="secondary-button" href={activeHero.secondaryHref}>
                  {activeHero.secondary}
                </a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-visual-card">
                <img src={`${ASSET}${activeHero.image}`} alt="" style={{ objectPosition: activeHeroPosition?.desktop }} />
                <div className="hero-visual-label">
                  <span>{activeHero.eyebrow}</span>
                  <strong>SIMAN</strong>
                </div>
              </div>
              {[t.hero.chips[1], t.hero.chips[2]].map(([title, text], index) => (
                <div className={`hero-proof-card proof-${index + 1}`} key={title}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="hero-arrow next" type="button" aria-label="Next hero" onClick={() => updateHero(1)}>
            ›
          </button>
          <div className="hero-dots" aria-label="Hero banners">
            {t.hero.slides.map((slide, index) => (
              <button
                className={index === heroIndex ? "active" : ""}
                key={slide.image}
                type="button"
                aria-label={`Show banner ${index + 1}`}
                onClick={() => setHeroIndex(index)}
              />
            ))}
          </div>
        </section>

        <section className="page-section solution-section">
          <SectionTitle title={t.solution.title} subtitle={t.solution.subtitle} />
          <ul className="challenge-list">
            {t.solution.challenges.map((challenge) => (
              <li key={challenge}>
                <ArrowRight size={14} />
                {challenge}
              </li>
            ))}
          </ul>
          <div className="solution-grid">
            {t.solution.items.map(([title, text, image, points], index) => {
              const Icon = solutionIcons[index];
              return (
                <article className="solution-card" key={title}>
                  <div className="solution-image">
                    <img src={`${ASSET}${image}`} alt={title} />
                  </div>
                  <div className="solution-info">
                    <Icon size={28} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <ul>
                      {points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 size={14} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="page-section project-board-section">
          <SectionTitle title={t.project.title} subtitle={t.project.subtitle} />
          <div className="project-board">
            <div className="project-controls">
              <p className="project-kicker">
                <FileText size={16} />
                {t.project.kicker}
              </p>
              {t.project.groups.map((group) => (
                <div className="project-group" key={group.key}>
                  <span>{group.label}</span>
                  <div className="project-option-row">
                    {group.options.map((option, index) => {
                      const isActive = (projectChoices[group.key] ?? 0) === index;
                      return (
                        <button
                          className={`project-option ${isActive ? "is-active" : ""}`}
                          key={option.name}
                          type="button"
                          aria-pressed={isActive}
                          onClick={() =>
                            setProjectChoices((current) => ({
                              ...current,
                              [group.key]: index,
                            }))
                          }
                        >
                          <CheckCircle2 size={16} />
                          <strong>{option.name}</strong>
                          <small>{option.text}</small>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <aside className="project-snapshot" aria-label={t.project.summaryTitle}>
              <div className="project-snapshot-media">
                <img src={`${ASSET}${activeProjectImage}`} alt={projectSelections[0]?.name || t.project.summaryTitle} />
                <span>{t.project.selectionLabel}</span>
              </div>
              <div className="project-snapshot-copy">
                <h3>{t.project.summaryTitle}</h3>
                <div className="project-tags">
                  {projectSelections.map((option, index) => (
                    <span key={`${option.name}-${index}`}>{option.name}</span>
                  ))}
                </div>
                <div className="project-metrics">
                  {t.project.metrics.map(([title, value]) => (
                    <div key={title}>
                      <strong>{title}</strong>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
                <div className="project-confirm">
                  <strong>{t.project.confirmTitle}</strong>
                  <ul>
                    {t.project.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={15} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <p>{t.project.note}</p>
                <a className="primary-button" href="#/contact">
                  {t.project.button}
                  <ArrowRight size={15} />
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="page-section categories-section" id="products">
          <SectionTitle title={t.categories.title} subtitle={t.categories.subtitle} action={t.categories.action} />
          <div className="category-grid">
            {t.categories.items.map(([title, subtitle, image], index) => {
              const Icon = categoryIcons[index];
              return (
                <a className="category-card" href="#/contact" key={title}>
                  <img src={`${ASSET}${image}`} alt={title} />
                  <div className="round-icon">
                    <Icon size={19} />
                  </div>
                  <h3>{title}</h3>
                  <p>{subtitle}</p>
                  <span className="category-cta">
                    {t.categories.cardAction}
                    <ArrowRight size={13} />
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="sample-band">
          <div>
            <Sparkles size={30} />
            <h2>{t.sample.title}</h2>
            <p>{t.sample.lead}</p>
          </div>
          <a className="light-button" href="#/contact">
            {t.sample.button}
          </a>
        </section>

        <section className="page-section factory-section" id="factory">
          <div className="module-card">
            <SectionTitle title={t.factory.title} />
            <div className="stats-grid">
              {t.factory.stats.map(([number, label], index) => {
                const Icon = statIcons[index];
                return (
                  <div className="stat-item" key={label}>
                    <Icon size={28} />
                    <strong>{number}</strong>
                    <span>{label}</span>
                  </div>
                );
              })}
            </div>
            <div className="factory-gallery">
              {t.factory.gallery.map(([image, label]) => (
                <figure key={image}>
                  <img src={`${ASSET}${image}`} alt={label} />
                  <figcaption>{label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band" id="contact">
          <div>
            <h2>{t.cta.title}</h2>
            <p>{t.cta.lead}</p>
          </div>
          <a className="light-button" href="mailto:sales@siman.com">
            {t.cta.button}
          </a>
        </section>
          </>
        ) : (
          <InnerPage route={route} t={t} />
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Brand compact />
          <p>{t.footer.desc}</p>
        </div>
        {t.footer.columns.map(([title, links]) => (
          <div className="footer-column" key={title}>
            <h3>{title}</h3>
            {links.map((link) => (
              <a key={link} href={footerHref(link)}>
                {link}
              </a>
            ))}
          </div>
        ))}
        <div className="footer-column">
          <h3>{t.contactTitle}</h3>
          {t.footer.contact.map(([label, value], index) => {
            const icons = [Phone, Mail, MapPin];
            const Icon = icons[index];
            return (
              <span className="footer-contact" key={label}>
                <Icon size={14} />
                <b>{label}:</b> {value}
              </span>
            );
          })}
        </div>
        <div className="footer-column follow-column">
          <h3>{t.followTitle}</h3>
          <div className="social-row">
            <span>f</span>
            <span>in</span>
            <span>ig</span>
            <span>yt</span>
          </div>
        </div>
        <p className="copyright">{t.footer.copyright}</p>
      </footer>

      <div className="mobile-contact-bar" aria-label="Quick contact">
        <a href="tel:+8657187300352">
          <Phone size={18} />
          <span>{t.mobileBar.phone}</span>
        </a>
        <a href="mailto:sales@siman.com">
          <Mail size={18} />
          <span>{t.mobileBar.email}</span>
        </a>
        <a href="#/contact">
          <FileText size={18} />
          <span>{t.mobileBar.inquiry}</span>
        </a>
      </div>
    </div>
  );
}

export { App };
