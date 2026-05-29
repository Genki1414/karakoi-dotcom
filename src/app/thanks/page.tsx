import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout";

export const metadata: Metadata = {
  title: "お問い合わせありがとうございました｜仮囲いドットコム",
};

export default function ThanksPage() {
  return (
    <PageShell>
      <main className="bg-slate-50">
        <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <p className="text-sm font-black text-blue-700">THANK YOU</p>
          <h1 className="mt-3 text-4xl font-black tracking-normal text-slate-950">
            お問い合わせありがとうございました
          </h1>
          <p className="mt-5 leading-8 text-slate-600">
            内容を確認のうえ、担当者よりご連絡いたします。お急ぎの場合はお電話でもお問い合わせください。
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-md bg-blue-700 px-6 py-3 font-black text-white transition hover:bg-blue-800"
          >
            TOPへ戻る
          </Link>
        </section>
      </main>
    </PageShell>
  );
}
