import type { Metadata } from "next";
import { LineButton, PageShell } from "@/components/layout";
import { RentalForm } from "@/components/rental-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "レンタル申込フォーム｜仮囲いドットコム",
  description: "仮囲い、敷鉄板、仮設トイレなどのレンタル申込フォームです。",
};

export default function RentalApplyPage() {
  return (
    <PageShell>
      <main className="bg-slate-50">
        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-black text-blue-700">RENTAL APPLICATION</p>
          <h1 className="mt-2 text-4xl font-black tracking-normal text-slate-950">
            レンタル申込フォーム
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-600">
            仮囲いレンタル、敷鉄板、仮設トイレ、監視カメラなどの見積依頼を受け付けています。写真がある場合はLINE見積も便利です。
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.45fr]">
            <RentalForm />

            <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-black text-blue-700">QUICK CONTACT</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">急ぎの相談はこちら</h2>
              <p className="mt-4 leading-7 text-slate-600">
                現場写真を送るだけで相談できます。電話はタップで発信できます。
              </p>
              <a
                href={site.phoneHref}
                className="mt-6 block rounded-md bg-blue-700 px-5 py-3 text-center font-black text-white transition hover:bg-blue-800"
              >
                TEL {site.phone}
              </a>
              <LineButton className="mt-3 w-full" />
            </aside>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
