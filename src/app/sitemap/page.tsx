import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout";
import { products, servicePages } from "@/lib/site";

export const metadata: Metadata = {
  title: "サイトマップ｜仮囲いドットコム",
};

const pages = [
  { href: "/", label: "TOP" },
  { href: "/sales", label: "販売商品一覧" },
  { href: "/rental", label: "レンタル商品一覧" },
  { href: "/rental/apply", label: "レンタル申込フォーム" },
  { href: "/sitemap", label: "サイトマップ" },
];

export default function SitemapPage() {
  return (
    <PageShell>
      <main className="bg-slate-50">
        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-black text-blue-700">SITEMAP</p>
          <h1 className="mt-2 text-4xl font-black tracking-normal text-slate-950">
            サイトマップ
          </h1>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="font-black text-slate-950">主要ページ</h2>
              <ul className="mt-4 space-y-3">
                {pages.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href} className="font-bold text-blue-700 hover:text-blue-900">
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="font-black text-slate-950">商品詳細</h2>
              <ul className="mt-4 space-y-3">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="font-bold text-blue-700 hover:text-blue-900"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 md:col-span-2">
              <h2 className="font-black text-slate-950">SEO個別サービスページ</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {servicePages.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={`/services/${page.slug}`}
                      className="font-bold text-blue-700 hover:text-blue-900"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
