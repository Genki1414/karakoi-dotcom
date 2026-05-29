import type { Metadata } from "next";
import { PageShell } from "@/components/layout";
import { ProductCard } from "@/components/product-card";
import { salesProducts } from "@/lib/site";

export const metadata: Metadata = {
  title: "販売商品一覧｜仮囲いドットコム",
  description: "仮囲い、A字バリケード、単管パイプ、保安用品の販売商品一覧です。",
};

export default function SalesPage() {
  return (
    <PageShell>
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-black text-blue-700">SALES PRODUCTS</p>
          <h1 className="mt-2 text-4xl font-black tracking-normal text-slate-950">
            販売商品一覧
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-600">
            今後の商品追加は商品データに追加するだけで一覧と詳細ページに反映できます。仮囲いを中心に、現場で継続利用しやすい資材を販売します。
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {salesProducts.map((product) => (
              <ProductCard key={product.slug} product={product} mode="sale" />
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
