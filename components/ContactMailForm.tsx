"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  dir: "rtl" | "ltr";
  labels: {
    name: string;
    phone: string;
    notes: string;
    button: string;
    subject: string;
  };
  email: string;
};

export default function ContactMailForm({ dir, labels, email }: Props) {
  const isRtl = dir === "rtl";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const notes = String(formData.get("notes") ?? "").trim();

    const body = [
      `${labels.name}: ${name}`,
      `${labels.phone}: ${phone}`,
      "",
      `${labels.notes}:`,
      notes,
    ].join("\n");

    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      labels.subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="name"
        placeholder={labels.name}
        className="h-14 w-full border border-[#2a1005]/15 bg-transparent px-5 text-sm outline-none transition placeholder:text-[#2a1005]/40 focus:border-[#2f9c95]"
      />

      <input
        type="tel"
        name="phone"
        placeholder={labels.phone}
        className="h-14 w-full border border-[#2a1005]/15 bg-transparent px-5 text-sm outline-none transition placeholder:text-[#2a1005]/40 focus:border-[#2f9c95]"
      />

      <textarea
        name="notes"
        placeholder={labels.notes}
        rows={6}
        className="w-full resize-none border border-[#2a1005]/15 bg-transparent px-5 py-4 text-sm outline-none transition placeholder:text-[#2a1005]/40 focus:border-[#2f9c95]"
      />

      <button
        type="submit"
        className="flex h-14 items-center justify-center gap-3 bg-[#2a1005] px-10 text-sm font-light text-white transition hover:bg-[#2f9c95]"
      >
        {labels.button}
        <ArrowIcon size={16} />
      </button>
    </form>
  );
}
