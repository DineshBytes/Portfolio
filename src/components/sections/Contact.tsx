"use client";

import { Code2, GitBranch, Link2, Mail, MapPin, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Contact() {
  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const message = formData.get("message") || "";
    
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolio.person.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <section id="contact" className="section-shell pb-16">
      <div data-reveal className="contact-panel p-8 sm:p-12">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.28em] text-cyan-700">
            Contact
          </p>
          <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-[-.04em] sm:text-5xl">
            Building a modern digital product? Let&apos;s collaborate.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-black/60">
            {portfolio.person.availability}
          </p>
        </div>
        <form
          className="contact-form"
          onSubmit={handleEmailSubmit}
        >
          <input name="name" aria-label="Name" placeholder="Name" required />
          <input name="email" aria-label="Email" placeholder="Email" type="email" required />
          <textarea
            name="message"
            aria-label="Message"
            placeholder="Project, internship, hackathon, or idea"
            rows={3}
            required
          />
          <button type="submit">
            Send signal <Mail size={18} />
          </button>
        </form>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="secondary-cta"
            href={portfolio.links.github}
            data-testid="contact-github-link"
          >
            <GitBranch size={18} /> GitHub
          </a>
          <a
            className="secondary-cta"
            href={portfolio.links.linkedin}
            data-testid="contact-linkedin-link"
          >
            <Link2 size={18} /> LinkedIn
          </a>
          <span className="secondary-cta">
            <MapPin size={18} /> {portfolio.person.location}
          </span>
          <a
            className="secondary-cta"
            href={`tel:${portfolio.person.phone.replaceAll(" ", "")}`}
          >
            <Phone size={18} /> {portfolio.person.phone}
          </a>
          <a className="secondary-cta" href={`mailto:${portfolio.person.email}`}>
            <Code2 size={18} /> {portfolio.person.email}
          </a>
        </div>
      </div>
    </section>
  );
}
