"use client";

import { GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionTitle
        eyebrow={portfolio.about.eyebrow}
        title={portfolio.about.title}
      />
      <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
        <div data-reveal className="premium-panel p-7 sm:p-10">
          <p className="text-xl leading-9 text-black/64">
            {portfolio.about.body}
          </p>
          <div className="education-card">
            <GraduationCap size={20} />
            <div>
              <strong>{portfolio.education.institution}</strong>
              <span>
                {portfolio.education.degree} / {portfolio.education.years}
              </span>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {portfolio.heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-black/5 bg-white/55 p-4"
              >
                <strong className="block text-2xl">{stat.value}</strong>
                <span className="text-xs text-black/48">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {portfolio.timeline.map((item) => (
            <div data-reveal key={item.title} className="timeline-card">
              <span>{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
