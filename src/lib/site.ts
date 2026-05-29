export const site = {
  name: "仮囲いドットコム",
  title: "仮囲いドットコム｜建設資材販売・レンタル",
  description:
    "仮囲い販売・仮囲いレンタルを中心に、建設現場で必要な資材をまとめて相談できるサイトです。",
  phone: "022-738-7913",
  phoneHref: "tel:0227387913",
  lineUrl: "https://lin.ee/uHxTgwh",
  url: "https://karakoi-dotcom.local",
  googleForm: {
    action: process.env.NEXT_PUBLIC_GOOGLE_FORM_ACTION ?? "",
    entries: {
      company: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_COMPANY ?? "company",
      name: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_NAME ?? "name",
      tel: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_TEL ?? "tel",
      email: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_EMAIL ?? "email",
      product: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_PRODUCT ?? "product",
      start: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_START ?? "start",
      period: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_PERIOD ?? "period",
      message: process.env.NEXT_PUBLIC_GOOGLE_FORM_ENTRY_MESSAGE ?? "message",
    },
  },
};

export type ProductMode = "sale" | "rental";

export type Product = {
  slug: string;
  name: string;
  modes: ProductMode[];
  lead: string;
  description: string;
  features: string[];
  uses: string[];
  image: string;
  prices: Partial<Record<ProductMode, string>>;
};

export const products: Product[] = [
  {
    slug: "temporary-fence",
    name: "仮囲い",
    modes: ["sale", "rental"],
    lead: "工事現場の安全確保と景観対策に欠かせない主力商品です。",
    description:
      "現場規模、設置期間、搬入条件に合わせて、販売・レンタルの両方でご提案します。新規現場の立ち上げから短期工事まで対応できます。",
    features: ["現場寸法に合わせた数量相談", "販売・レンタル対応", "周辺資材との同時手配"],
    uses: ["建築現場の外周養生", "解体現場の安全区画", "イベント・仮設区画"],
    image: "/images/products/temporary-fence.png",
    prices: { sale: "要見積", rental: "要見積" },
  },
  {
    slug: "a-frame-barricade",
    name: "A字バリケード",
    modes: ["sale", "rental"],
    lead: "歩行者導線や立入禁止区画をわかりやすく整える定番保安用品です。",
    description:
      "現場入口、道路際、作業区画の安全対策に使いやすいA字バリケードを、必要数量に応じて手配します。",
    features: ["短期利用にも対応", "仮囲いとの組み合わせに最適", "安全表示の強化に有効"],
    uses: ["歩行者誘導", "資材置場の区画", "工事中の立入制限"],
    image: "/images/products/a-frame-barricade.png",
    prices: { sale: "要見積", rental: "月額300円～" },
  },
  {
    slug: "scaffold-pipe",
    name: "単管パイプ",
    modes: ["sale"],
    lead: "仮設構造、養生、資材固定など幅広い現場用途に使える資材です。",
    description:
      "必要な長さや数量、関連部材の有無を確認し、現場で使いやすい形で販売見積を行います。",
    features: ["数量見積に対応", "仮囲い補強にも活用", "関連資材との同時相談が可能"],
    uses: ["仮設フレーム", "養生固定", "資材置場の整理"],
    image: "/images/products/scaffold-pipe.png",
    prices: { sale: "要見積" },
  },
  {
    slug: "safety-goods",
    name: "保安用品",
    modes: ["sale"],
    lead: "現場の安全表示、誘導、注意喚起に必要な用品をまとめて相談できます。",
    description:
      "現場の危険箇所や導線に合わせて、保安用品の販売品目を選定します。仮囲いと合わせた手配にも向いています。",
    features: ["現場安全対策を一括相談", "仮設区画と合わせて手配", "数量変更の相談がしやすい"],
    uses: ["立入禁止表示", "歩行者誘導", "夜間・車両導線の注意喚起"],
    image: "/images/products/safety-goods.png",
    prices: { sale: "要見積" },
  },
  {
    slug: "steel-plate",
    name: "敷鉄板",
    modes: ["rental"],
    lead: "搬入路や重機作業エリアの地盤保護に使うレンタル資材です。",
    description:
      "軟弱地盤、資材搬入、車両通行の条件を確認し、必要枚数と利用期間に合わせてレンタル見積を行います。",
    features: ["短期・長期レンタル対応", "搬入条件の相談が可能", "仮囲い現場と同時手配"],
    uses: ["車両搬入路", "重機作業スペース", "資材置場の地盤保護"],
    image: "/images/products/steel-plate.png",
    prices: { rental: "要見積" },
  },
  {
    slug: "temporary-toilet",
    name: "仮設トイレ",
    modes: ["rental"],
    lead: "工事期間中の現場環境を整えるための基本設備です。",
    description:
      "現場人数、設置場所、利用期間をもとに仮設トイレのレンタルを手配します。新規現場の立ち上げ時にも相談できます。",
    features: ["現場期間に合わせた手配", "設置場所の相談が可能", "他レンタル品と同時申込"],
    uses: ["建築現場", "解体現場", "短期イベント・仮設会場"],
    image: "/images/products/temporary-toilet.png",
    prices: { rental: "月額8,000円～" },
  },
  {
    slug: "security-camera",
    name: "監視カメラ",
    modes: ["rental"],
    lead: "休日・夜間の現場管理、防犯対策を支えるレンタル機器です。",
    description:
      "資材置場、現場入口、無人時間帯の監視用途に合わせて、レンタル期間と設置目的を確認します。",
    features: ["防犯対策に有効", "資材置場の管理に対応", "短期現場にも相談可能"],
    uses: ["夜間監視", "資材盗難対策", "現場出入口の確認"],
    image: "/images/products/security-camera.png",
    prices: { rental: "月額5,000円～" },
  },
  {
    slug: "pressure-washer",
    name: "高圧洗浄機",
    modes: ["rental"],
    lead: "現場清掃、外構洗浄、引き渡し前の仕上げに便利な機器です。",
    description:
      "利用場所、洗浄対象、利用日数に応じて高圧洗浄機をレンタルできます。必要なタイミングだけ使えるため効率的です。",
    features: ["必要期間だけレンタル", "清掃作業の効率化", "現場仕上げ前に活用"],
    uses: ["現場清掃", "外構洗浄", "資材・仮設設備の洗浄"],
    image: "/images/products/pressure-washer.png",
    prices: { rental: "月額4,000円～" },
  },
];

export const salesProducts = products.filter((product) =>
  product.modes.includes("sale"),
);

export const rentalProducts = products.filter((product) =>
  product.modes.includes("rental"),
);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export type ServicePage = {
  slug: string;
  title: string;
  productSlug: string;
  mode: ProductMode;
  description: string;
  area: string;
  faqs: { q: string; a: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "temporary-fence-sales",
    title: "仮囲い販売",
    productSlug: "temporary-fence",
    mode: "sale",
    description:
      "継続利用する現場会社様向けに、仮囲いの販売見積を行います。数量、仕様、納品場所に合わせてご相談ください。",
    area: "宮城県を中心に東北エリアでご相談いただけます。その他地域も内容により対応可能です。",
    faqs: [
      { q: "数量が未確定でも相談できますか？", a: "概算寸法や現場写真から概算見積が可能です。" },
      { q: "A字バリケードも一緒に頼めますか？", a: "仮囲いと合わせて保安用品もまとめてご相談いただけます。" },
    ],
  },
  {
    slug: "temporary-fence-rental",
    title: "仮囲いレンタル",
    productSlug: "temporary-fence",
    mode: "rental",
    description:
      "短期工事から長期現場まで、利用期間に合わせた仮囲いレンタルを提案します。",
    area: "宮城県を中心に東北エリアで対応しています。搬入条件も合わせてご相談ください。",
    faqs: [
      { q: "短期レンタルは可能ですか？", a: "短期利用も相談可能です。期間と数量をお知らせください。" },
      { q: "現場写真だけで見積できますか？", a: "写真と寸法の目安があれば、初期見積を進められます。" },
    ],
  },
  {
    slug: "a-frame-barricade-sales",
    title: "A字バリケード販売",
    productSlug: "a-frame-barricade",
    mode: "sale",
    description:
      "工事現場や資材置場の安全区画に使うA字バリケードの販売に対応します。",
    area: "宮城県内を中心に、数量や納品条件により周辺エリアも対応します。",
    faqs: [
      { q: "少量でも購入できますか？", a: "必要数量に合わせてご相談いただけます。" },
      { q: "保安用品も同時に相談できますか？", a: "看板や安全用品も合わせて確認できます。" },
    ],
  },
  {
    slug: "a-frame-barricade-rental",
    title: "A字バリケードレンタル",
    productSlug: "a-frame-barricade",
    mode: "rental",
    description:
      "一時的な区画、歩行者誘導、工事中の立入制限に使うA字バリケードをレンタルできます。",
    area: "宮城県を中心に、短期現場・長期現場どちらもご相談ください。",
    faqs: [
      { q: "月額いくらですか？", a: "目安は月額300円～です。数量と期間で正式見積します。" },
      { q: "仮囲いと同時に借りられますか？", a: "同時手配できます。" },
    ],
  },
  {
    slug: "temporary-toilet-rental",
    title: "仮設トイレレンタル",
    productSlug: "temporary-toilet",
    mode: "rental",
    description:
      "建設現場、解体現場、短期イベント向けに仮設トイレをレンタルできます。",
    area: "宮城県を中心に、設置場所と利用期間を確認してご案内します。",
    faqs: [
      { q: "設置場所が決まっていなくても相談できますか？", a: "候補地の条件から確認できます。" },
      { q: "月額の目安はありますか？", a: "仮価格として月額8,000円～を目安にしています。" },
    ],
  },
  {
    slug: "steel-plate-rental",
    title: "敷鉄板レンタル",
    productSlug: "steel-plate",
    mode: "rental",
    description:
      "搬入路、重機作業、資材置場の地盤保護に使う敷鉄板をレンタルできます。",
    area: "宮城県を中心に、搬入条件と現場住所を確認して対応します。",
    faqs: [
      { q: "枚数がわからなくても相談できますか？", a: "必要な面積や現場写真から概算をご案内します。" },
      { q: "仮囲いと同時に依頼できますか？", a: "同時依頼に対応しています。" },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}
