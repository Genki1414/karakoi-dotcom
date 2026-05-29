import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LineButton, PageShell } from "@/components/layout";
import { getProduct, getServicePage, servicePages, site } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title}｜仮囲いドットコム`,
    description: page.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) {
    notFound();
  }

  const product = getProduct(page.productSlug);

  if (!product) {
    notFound();
  }

  return (
    <PageShell>
      <main>
        <section className="bg-slate-950 px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black text-blue-200">SERVICE</p>
              <h1 className="mt-3 text-4xl font-black tracking-normal sm:text-5xl">
                {page.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">
                {page.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LineButton />
                <a
                  href={site.phoneHref}
                  className="rounded-md bg-white/10 px-6 py-4 text-center font-black text-white ring-1 ring-white/30 transition hover:bg-white/20"
                >
                  TEL {site.phone}
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-800">
              <Image src={product.image} alt={page.title} fill priority className="object-cover" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr]">
            <div>
              <h2 className="text-3xl font-black tracking-normal text-slate-950">
                サービス説明
              </h2>
              <p className="mt-4 leading-8 text-slate-600">{page.description}</p>

              <h2 className="mt-10 text-3xl font-black tracking-normal text-slate-950">
                対応エリア
              </h2>
              <p className="mt-4 leading-8 text-slate-600">{page.area}</p>

              <h2 className="mt-10 text-3xl font-black tracking-normal text-slate-950">
                よくある質問
              </h2>
              <div className="mt-5 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
                {page.faqs.map((faq) => (
                  <div key={faq.q} className="p-5">
                    <h3 className="font-black text-slate-950">{faq.q}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="h-fit rounded-lg border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-black text-blue-700">PRICE</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">
                価格目安
              </h2>
              <p className="mt-3 text-2xl font-black text-slate-950">
                {product.prices[page.mode] ?? "要見積"}
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                写真、数量、現場住所、希望期間をLINEで送るだけで見積相談できます。
              </p>
              <LineButton className="mt-6 w-full" />
            </aside>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
