import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const navItems = [
  { href: "/sales", label: "販売商品" },
  { href: "/rental", label: "レンタル商品" },
  { href: "/services/temporary-fence-sales", label: "仮囲い販売" },
  { href: "/services/temporary-fence-rental", label: "仮囲いレンタル" },
  { href: "/rental/apply", label: "申込" },
];

export function LineButton({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={site.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex flex-col items-center justify-center rounded-md bg-[#06c755] px-5 py-3 text-center font-black text-white shadow-sm transition hover:bg-[#05b54d] ${className}`}
    >
      <span>{compact ? "LINEで見積依頼" : "LINEで見積依頼"}</span>
      {!compact && (
        <span className="mt-0.5 text-xs font-bold text-white/90">
          写真を送るだけ簡単見積
        </span>
      )}
    </a>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center">
          <Image
            src="/logo.png"
            alt="仮囲いドットコム"
            width={190}
            height={54}
            priority
            className="h-11 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-bold text-slate-700 xl:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden text-right font-black leading-tight text-slate-950 sm:block"
          >
            <span className="block text-xs text-slate-500">TEL</span>
            <span className="text-lg">{site.phone}</span>
          </a>
          <a
            href={site.phoneHref}
            className="hidden rounded-md bg-blue-700 px-4 py-3 text-sm font-black text-white shadow-sm transition hover:bg-blue-800 sm:inline-flex"
          >
            電話する
          </a>
          <LineButton compact className="hidden sm:inline-flex" />
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 pb-16 text-slate-300 sm:pb-0">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Image
            src="/logo.png"
            alt="仮囲いドットコム"
            width={190}
            height={54}
            className="h-12 w-auto rounded bg-white object-contain p-1"
          />
          <p className="mt-4 text-sm leading-7">
            仮囲い販売・仮囲いレンタルを中心に、建設現場の資材手配をまとめてサポートします。
          </p>
          <a href={site.phoneHref} className="mt-4 inline-block text-xl font-black text-white">
            TEL {site.phone}
          </a>
        </div>
        <div>
          <p className="font-black text-white">商品</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/sales" className="hover:text-white">販売商品一覧</Link></li>
            <li><Link href="/rental" className="hover:text-white">レンタル商品一覧</Link></li>
            <li><Link href="/rental/apply" className="hover:text-white">レンタル申込フォーム</Link></li>
            <li><Link href="/sitemap" className="hover:text-white">サイトマップ</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-black text-white">主要サービス</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/services/temporary-fence-sales" className="hover:text-white">仮囲い販売</Link></li>
            <li><Link href="/services/temporary-fence-rental" className="hover:text-white">仮囲いレンタル</Link></li>
            <li><Link href="/services/a-frame-barricade-rental" className="hover:text-white">A字バリケードレンタル</Link></li>
            <li><Link href="/services/temporary-toilet-rental" className="hover:text-white">仮設トイレレンタル</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400">
        © 仮囲いドットコム
      </div>
    </footer>
  );
}

export function MobileFixedActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/20 bg-white p-2 shadow-2xl sm:hidden">
      <a
        href={site.phoneHref}
        className="mx-1 rounded-md bg-blue-700 px-3 py-3 text-center text-sm font-black text-white"
      >
        電話する
      </a>
      <a
        href={site.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-1 rounded-md bg-[#06c755] px-3 py-3 text-center text-sm font-black text-white"
      >
        LINEで見積依頼
      </a>
    </div>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      {children}
      <Footer />
      <MobileFixedActions />
    </div>
  );
}
