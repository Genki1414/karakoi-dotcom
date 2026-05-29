import Image from "next/image";
import Link from "next/link";
import { LineButton, PageShell } from "@/components/layout";
import { ProductCard } from "@/components/product-card";
import { rentalProducts, salesProducts, site } from "@/lib/site";

const works = [
  "住宅新築現場の外周仮囲いとA字バリケードを一括手配",
  "解体工事現場の仮囲いレンタル、敷鉄板、仮設トイレを同時手配",
  "資材置場の仮囲い販売と監視カメラレンタルを組み合わせて提案",
];

const faqs = [
  {
    q: "仮囲いは販売とレンタルのどちらも相談できますか？",
    a: "はい。設置期間、保管場所、今後の利用予定を確認し、販売・レンタルのどちらが合うかご提案します。",
  },
  {
    q: "数量がまだ確定していなくても見積できますか？",
    a: "概算寸法や現場写真から相談できます。確定後に数量を調整して再見積も可能です。",
  },
  {
    q: "仮囲い以外の資材もまとめて依頼できますか？",
    a: "A字バリケード、単管パイプ、敷鉄板、仮設トイレ、監視カメラ、高圧洗浄機などをまとめて相談できます。",
  },
];

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="relative isolate overflow-hidden bg-slate-950">
          <Image
            src="/images/hero-construction-materials.png"
            alt="仮囲いを中心に建設資材が並ぶ現場"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/72 to-slate-900/10" />
          <div className="relative mx-auto grid min-h-[640px] max-w-7xl content-center px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-white">
              <p className="mb-5 inline-flex rounded-md border border-white/30 bg-white/10 px-3 py-1 text-sm font-black">
                仮囲い販売・仮囲いレンタルを現場単位で手配
              </p>
              <h1 className="text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
                仮囲いを中心に、建設現場の資材をまとめて見積。
              </h1>
              <p className="mt-6 max-w-xl text-base font-medium leading-8 text-blue-50 sm:text-lg">
                仮囲い、A字バリケード、単管パイプ、敷鉄板、仮設トイレ、監視カメラまで。販売とレンタルを組み合わせ、現場立ち上げに必要な資材をすばやく相談できます。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.phoneHref}
                  className="rounded-md bg-blue-700 px-6 py-4 text-center text-base font-black text-white shadow-lg transition hover:bg-blue-800"
                >
                  TEL {site.phone}
                </a>
                <LineButton />
              </div>
              <div className="mt-9 grid gap-3 text-sm font-bold text-blue-50 sm:grid-cols-3">
                <div className="border-l-4 border-blue-300 pl-3">販売・レンタル両対応</div>
                <div className="border-l-4 border-blue-300 pl-3">仮囲いを主力提案</div>
                <div className="border-l-4 border-blue-300 pl-3">現場写真から相談可能</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-black text-blue-700">SALES</p>
                <h2 className="mt-2 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
                  仮囲い販売を中心に、常備資材を確保
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  継続利用する仮囲いや保安用品は販売での手配が便利です。必要数量が未確定でもご相談ください。
                </p>
              </div>
              <Link href="/sales" className="text-sm font-black text-blue-700 hover:text-blue-900">
                販売商品一覧へ
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {salesProducts.map((product) => (
                <ProductCard key={product.slug} product={product} mode="sale" />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-black text-blue-700">RENTAL</p>
                <h2 className="mt-2 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
                  短期・長期の仮囲いレンタルに対応
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  工期に合わせて必要なものだけレンタルできます。仮囲いと周辺資材をまとめることで手配漏れを減らせます。
                </p>
              </div>
              <Link href="/rental" className="text-sm font-black text-blue-700 hover:text-blue-900">
                レンタル商品一覧へ
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rentalProducts.map((product) => (
                <ProductCard key={product.slug} product={product} mode="rental" />
              ))}
            </div>
          </div>
        </section>

        <section id="works" className="bg-blue-950 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-black text-blue-200">WORKS</p>
            <h2 className="mt-2 text-3xl font-black tracking-normal sm:text-4xl">実績紹介</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {works.map((work) => (
                <div key={work} className="rounded-lg border border-white/15 bg-white/10 p-5 font-bold leading-7">
                  {work}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="line-estimate" className="bg-[#06c755] py-14 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-sm font-black">LINE ESTIMATE</p>
              <h2 className="mt-2 text-3xl font-black tracking-normal">写真を送って、かんたん見積相談</h2>
              <p className="mt-3 max-w-2xl leading-8 text-white/90">
                現場写真、必要な商品、数量、利用期間がわかる範囲でご相談ください。電話での相談も受け付けています。
              </p>
            </div>
            <a
              href={site.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white px-7 py-4 text-center text-base font-black text-[#06a947] shadow-sm transition hover:bg-green-50"
            >
              LINEで見積依頼
              <span className="mt-1 block text-xs">写真を送るだけ簡単見積</span>
            </a>
          </div>
        </section>

        <section id="faq" className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-black text-blue-700">FAQ</p>
            <h2 className="mt-2 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
              よくある質問
            </h2>
            <div className="mt-8 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-5">
                  <h3 className="font-black text-slate-950">{faq.q}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
