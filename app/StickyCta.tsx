"use client";

import { useEffect, useState } from "react";

export function StickyCta({ href = "#suscribete" }: { href?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewport = window.innerHeight;
      const doc = document.documentElement.scrollHeight;
      const distanceFromBottom = doc - (scrolled + viewport);
      // Show after passing the hero, hide once near the footer.
      setVisible(scrolled > viewport * 0.7 && distanceFromBottom > 120);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-neutral-800 bg-neutral-900 text-white shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.25)] transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-5 sm:py-6">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-cta)] sm:text-xs">
            Oferta por tiempo limitado
          </p>
          <p className="mt-1 font-display text-lg leading-tight text-white sm:text-2xl">
            25% de descuento el primer año
          </p>
        </div>
        <a
          href={href}
          tabIndex={visible ? 0 : -1}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--color-cta)] px-6 py-3 text-base font-semibold text-white shadow-[0_10px_30px_-12px_rgba(238,77,58,0.6)] transition-all hover:bg-[var(--color-cta-hover)] sm:px-7 sm:py-3.5 sm:text-lg"
        >
          <span>Suscríbete</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
