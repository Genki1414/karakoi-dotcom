"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { rentalProducts, site } from "@/lib/site";

const entryMap = site.googleForm.entries;

export function RentalForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (site.googleForm.action) {
      const googleData = new FormData();
      Object.entries(entryMap).forEach(([localName, googleEntry]) => {
        googleData.append(googleEntry, String(formData.get(localName) ?? ""));
      });

      try {
        await fetch(site.googleForm.action, {
          method: "POST",
          mode: "no-cors",
          body: googleData,
        });
      } catch {
        setError("送信に失敗しました。時間をおいて再度お試しください。");
        setIsSubmitting(false);
        return;
      }
    }

    router.push("/thanks");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
    >
      {!site.googleForm.action && (
        <p className="mb-5 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-bold leading-6 text-amber-900">
          GoogleフォームURL未設定です。公開前にREADMEの手順で環境変数を設定してください。
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-black text-slate-700">会社名</span>
          <input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3" name="company" required />
        </label>
        <label className="block">
          <span className="text-sm font-black text-slate-700">ご担当者名</span>
          <input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3" name="name" required />
        </label>
        <label className="block">
          <span className="text-sm font-black text-slate-700">電話番号</span>
          <input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3" name="tel" type="tel" required />
        </label>
        <label className="block">
          <span className="text-sm font-black text-slate-700">メールアドレス</span>
          <input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3" name="email" type="email" />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-black text-slate-700">希望商品</span>
        <select className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3" name="product" required>
          <option value="">選択してください</option>
          {rentalProducts.map((product) => (
            <option key={product.slug} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </label>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-black text-slate-700">利用開始希望日</span>
          <input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3" name="start" type="date" />
        </label>
        <label className="block">
          <span className="text-sm font-black text-slate-700">利用期間</span>
          <input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3" name="period" placeholder="例：2週間、3か月" />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-black text-slate-700">現場住所・ご相談内容</span>
        <textarea
          className="mt-2 min-h-36 w-full rounded-md border border-slate-300 px-3 py-3"
          name="message"
          placeholder="数量、現場条件、搬入希望などをご記入ください"
          required
        />
      </label>

      {error && <p className="mt-4 text-sm font-bold text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-md bg-blue-700 px-5 py-4 font-black text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {isSubmitting ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
