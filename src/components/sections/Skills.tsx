"use client";

import { portfolio } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionTitle
        eyebrow="Technical Stack"
        title="A modern toolkit for full stack development and product engineering."
      />
      <div className="skills-grid">
        {Object.entries(portfolio.skills).map(([group, skills]) => (
          <div data-reveal key={group} className="premium-panel p-6">
            <h3 className="mb-5 text-lg font-semibold">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
