"use client";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
}

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div data-reveal className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[.28em] text-cyan-700">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-semibold tracking-[-.04em] sm:text-6xl">
        {title}
      </h2>
    </div>
  );
}
