"use client";

import { portfolio } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Journey() {
  return (
    <section id="journey" className="section-shell">
      <SectionTitle
        eyebrow="The Journey"
        title="From foundational architecture to scalable product execution."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {portfolio.journey.map((item, index) => (
          <div data-reveal key={item} className="journey-card">
            <span>0{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div data-reveal className="positioning-strip">
        {portfolio.positioning.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
