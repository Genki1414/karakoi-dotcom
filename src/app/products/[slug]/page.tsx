import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LineButton, PageShell } from "@/components/layout";
import { getProduct, products, site } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name}｜商品詳細｜仮囲いドットコム`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <PageShell>
      <main>
        <section className="bg-slate-950 px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                {product.modes.map((mode) => (
                  <span
                    key={mode}
                    className="rounded-md bg-white/10 px-3 py-1 text-xs font-black text-blue-100"
                  >
                    {mode === "sale" ? "販売対応" : "レンタル対応"}
                  </span>
                ))}
              </div>
              <h1 className="mt-5 text-4xl font-black tracking-normal sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">
                {product.lead}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-800">
              <Image src={product.image} alt={product.name} fill priority className="object-cover" />
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.45fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-black text-slate-950">商品概要</h2>
            <p className="mt-4 leading-8 text-slate-600">{product.description}</p>

            <h2 className="mt-10 text-2xl font-black text-slate-950">価格目安</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.modes.map((mode) => (
                <div key={mode} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-black text-blue-700">
                    {mode === "sale" ? "販売" : "レンタル"}
                  </p>
                  <p className="mt-2 text-2xl font-black text-slate-950">
                    {product.prices[mode] ?? "要見積"}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 text-2xl font-black text-slate-950">特徴</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {product.features.map((feature) => (
                <li key={feature} className="rounded-lg border border-slate-200 bg-slate-50 p-4 font-bold">
                  {feature}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-black text-slate-950">主な用途</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {product.uses.map((use) => (
                <li key={use} className="border-l-4 border-blue-600 pl-3 font-bold">
                  {use}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-lg border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-black text-blue-700">CONTACT</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">
              {product.name}の見積相談
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              数量、現場住所、希望納期、利用期間がわかる範囲でご相談ください。写真がある場合はLINE見積が便利です。
            </p>
            <a
              href={site.phoneHref}
              className="mt-6 block rounded-md bg-blue-700 px-5 py-3 text-center font-black text-white transition hover:bg-blue-800"
            >
              TEL {site.phone}
            </a>
            <LineButton className="mt-3 w-full" />
            <Link
              href="/rental/apply"
              className="mt-3 block rounded-md border border-blue-700 px-5 py-3 text-center font-black text-blue-700 transition hover:bg-blue-50"
            >
              申込フォームへ
            </Link>
          </aside>
        </section>
      </main>
    </PageShell>
  );
}
