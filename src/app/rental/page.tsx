import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout";
import { ProductCard } from "@/components/product-card";
import { rentalProducts } from "@/lib/site";

export const metadata: Metadata = {
  title: "レンタル商品一覧｜仮囲いドットコム",
  description:
    "仮囲い、A字バリケード、敷鉄板、仮設トイレ、監視カメラ、高圧洗浄機のレンタル商品一覧です。",
};

export default function RentalPage() {
  return (
    <PageShell>
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black text-blue-700">RENTAL PRODUCTS</p>
              <h1 className="mt-2 text-4xl font-black tracking-normal text-slate-950">
                レンタル商品一覧
              </h1>
              <p className="mt-5 max-w-3xl leading-8 text-slate-600">
                工期や利用期間に合わせて、仮囲いと周辺資材を必要な期間だけレンタルできます。商品追加は共通データから行えます。
              </p>
            </div>
            <Link
              href="/rental/apply"
              className="rounded-md bg-blue-700 px-5 py-3 text-center text-sm font-black text-white shadow-sm transition hover:bg-blue-800"
            >
              レンタル申込へ
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rentalProducts.map((product) => (
              <ProductCard key={product.slug} product={product} mode="rental" />
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
