"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const slides = [
  {
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
  },
  {
    before: "/images/before-2.jpg",
    after: "/images/after-2.jpg",
  },
  {
    before: "/images/before-3.jpg",
    after: "/images/after-3.jpg",
  },
];

export default function BeforeAfterSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div>
      <div className="mb-5 flex justify-end gap-3">
        <button
          onClick={prev}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2a1005]/20 transition hover:bg-[#2a1005] hover:text-white"
        >
          <ChevronRight size={18} />
        </button>

        <button
          onClick={next}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2a1005]/20 transition hover:bg-[#2a1005] hover:text-white"
        >
          <ChevronLeft size={18} />
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <img
            src={slides[index].before}
            alt="Before restoration"
            className="h-[300px] w-full object-cover md:h-[520px]"
          />
          <p className="mt-3 text-sm text-[#2a1005]/55">قبل الترميم</p>
        </div>

        <div>
          <img
            src={slides[index].after}
            alt="After restoration"
            className="h-[300px] w-full object-cover md:h-[520px]"
          />
          <p className="mt-3 text-sm text-[#2a1005]/55">بعد الترميم</p>
        </div>
      </div>
    </div>
  );
}