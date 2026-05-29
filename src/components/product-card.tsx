import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/site";

export function ProductCard({
  product,
  mode,
}: {
  product: Product;
  mode?: "sale" | "rental";
}) {
  const priceMode = mode ?? product.modes[0];
  const price = product.prices[priceMode] ?? "要見積";

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {product.modes.map((item) => (
            <span
              key={item}
              className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-black text-blue-700"
            >
              {item === "sale" ? "販売" : "レンタル"}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-black text-slate-950">{product.name}</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">{product.lead}</p>
        <div className="mt-5 rounded-md bg-slate-50 px-3 py-2">
          <span className="text-xs font-black text-slate-500">価格目安</span>
          <p className="font-black text-slate-950">{price}</p>
        </div>
        <span className="mt-5 inline-flex text-sm font-black text-blue-700 transition group-hover:translate-x-1">
          詳細を見る
        </span>
      </div>
    </Link>
  );
}
