"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Link2, MousePointer2, Sparkles } from "lucide-react";
import { portfolio } from "@/data/portfolio";


const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(12px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-screen items-center px-5 pb-16 pt-28 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div
            variants={fadeUp}
            className="glass-chip mb-7 inline-flex items-center gap-2"
          >
            <Sparkles size={16} />
            {portfolio.person.role} / {portfolio.person.location}
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-balance text-[clamp(2.5rem,5.5vw,5.5rem)] font-semibold leading-[1.05] tracking-[-.04em]"
          >
            {portfolio.person.headline}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-pretty text-base leading-7 text-black/70 sm:text-lg"
          >
            {portfolio.person.subheadline}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a className="primary-cta" href="#projects">
              View work <ArrowUpRight size={18} />
            </a>
            <a
              className="secondary-cta"
              href={portfolio.links.liveProject}
              target="_blank"
              rel="noreferrer"
            >
              10Kicks Live <ArrowUpRight size={18} />
            </a>
            <a
              className="secondary-cta"
              href={portfolio.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <Link2 size={18} />
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="identity-rail">
            {portfolio.person.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="relative mx-auto aspect-square w-full max-w-[560px]"
          initial={{ opacity: 0, scale: 0.92, rotateX: 12 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-visual-stage">
            <div className="hero-aurora" />
            <div className="hero-orbit" />
            <div className="orbital-ring ring-one" />
            <div className="orbital-ring ring-two" />
            <div className="orbital-ring ring-three" />
            <div className="glass-plane plane-back" />
            <div className="glass-plane plane-mid">
              <span>AI</span>
              <span>UX</span>
              <span>FE</span>
            </div>
            <div className="interface-grid">
              {Array.from({ length: 18 }).map((_, index) => (
                <i key={index} />
              ))}
            </div>
            <div className="chrome-sphere">
              <span>{portfolio.person.name}</span>
            </div>
            <div className="glass-plane plane-front">
              <b>Full Stack Architecture</b>
              <small>End-to-end digital products</small>
            </div>
            <div className="data-comet comet-one" />
            <div className="data-comet comet-two" />
            <div className="data-comet comet-three" />
          </div>
          <div className="floating-panel left-0 top-[14%]">
            <b>AI-Powered Workflow</b>
            <small>Accelerating product development</small>
          </div>
          <div className="floating-panel bottom-[16%] right-0">
            <b>Product Engineering</b>
            <small>Scalable systems & premium UI</small>
          </div>
          <div className="system-dock">
            <span>Full Stack</span>
            <span>UI/UX</span>
            <span>AI</span>
          </div>
          <div className="floating-panel right-[18%] top-0 hidden sm:block">
            <b>{portfolio.education.status}</b>
            <small>{portfolio.education.institution}</small>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[.24em] text-black/45 sm:flex">
        <MousePointer2 size={15} /> Scroll
      </div>
    </section>
  );
}
