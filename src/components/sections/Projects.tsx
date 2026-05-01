"use client";

import { ArrowUpRight, GitBranch } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionTitle
        eyebrow="Featured Work"
        title="Engineered products combining robust architecture with premium UI/UX."
      />
      <div className="grid gap-6">
        {portfolio.projects.map((project, index) => (
          <article data-reveal key={project.name} className="project-card group">
            <div className="project-visual" data-index={index}>
              <div className="scanline" />
              <div className="browser-bars">
                <i />
                <i />
                <i />
              </div>
              <span>{project.metric}</span>
              <small>{project.name}</small>
            </div>
            <div className="project-copy">
              <p>{project.type}</p>
              <h3>{project.name}</h3>
              <span>{project.description}</span>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <em key={tech}>{tech}</em>
                ))}
              </div>
              <div className="project-links">
                {project.live ? (
                  <a
                    data-testid={`live-demo-${index}`}
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo <ArrowUpRight size={15} />
                  </a>
                ) : null}
                <a href={project.repo} target="_blank" rel="noreferrer">
                  GitHub <GitBranch size={15} />
                </a>
              </div>
            </div>
            <div className="project-metric">
              <strong>{project.impact}</strong>
              <div>
                <b>Signal</b>
                {project.features.slice(0, 4).map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
