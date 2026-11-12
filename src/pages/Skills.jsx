
import React, { useEffect, useRef, useState } from "react";
import data from "../data/skills.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faServer,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

// Icônes associées aux catégories
const icons = [
  faCode,
  faServer,
  faScrewdriverWrench,
];

// Barre de progression d'une compétence
function SkillBar({
  name,
  level,
  color = "#00D9FF",
  duration = 1200,
  image,
}) {
  const [width, setWidth] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);

  const barRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      setWidth(level);
      setDisplayValue(level);
      hasAnimated.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateTo(level);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [level, duration]);

  function animateTo(target) {
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setWidth(eased * target);
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  return (
    <article
      ref={barRef}
      className="
        group flex w-full min-w-0 flex-col gap-4
        rounded-xl border border-white/10
        bg-[#101820] p-4
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#00D9FF]/50
        hover:bg-[#00D9FF]/5
        hover:shadow-lg hover:shadow-[#00D9FF]/5
      "
    >
      <div className="flex w-full min-w-0 items-center gap-3">
        {image && (
          <img
            src={image}
            alt={`Logo ${name}`}
            loading="lazy"
            className="h-10 w-10 shrink-0 rounded-lg object-contain"
          />
        )}

        <span className="min-w-0 wrap-break-word font-medium text-slate-200 transition-colors duration-300 group-hover:text-white">
          {name}
        </span>

        <span
          className="ml-auto shrink-0 font-mono text-sm font-bold"
          style={{ color }}
        >
          {displayValue}%
        </span>
      </div>

      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-700/70">
        <div
          className="h-full rounded-full transition-[background] duration-300"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: `0 0 10px ${color}55`,
          }}
        />
      </div>
    </article>
  );
}

const Skills = () => {
  return (
    <main className="min-h-screen bg-[#0A0E13] px-6 py-16 text-slate-200 antialiased sm:px-10 lg:px-20">

      {/* En-tête */}
      <section className="
        mx-auto flex w-full max-w-5xl flex-col
        items-center justify-center rounded-2xl
        border border-white/10 bg-[#101820]
        p-6 text-center sm:p-8
      ">
        <span className="
          mb-4 rounded-full border border-[#00D9FF]/30
          bg-[#00D9FF]/10 px-4 py-1.5
          font-mono text-xs tracking-wide text-[#00D9FF]
        ">
          XBAM CYBER / SKILLS
        </span>

        <h1 className="my-2 font-mono text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          <span className="text-[#00D9FF]">/</span> MES COMPÉTENCES
        </h1>

        <p className="mt-2 max-w-2xl text-sm italic leading-relaxed text-[#94A3B8] sm:text-base">
          Un ensemble de compétences que je développe à travers
          l’apprentissage et la pratique.
        </p>
      </section>

      {/* Catégories et compétences */}
      <section className="mx-auto mt-16 flex w-full max-w-6xl flex-col gap-12">

        {Object.entries(data).map(([category, skills], index) => (
          <div key={category} className="w-full">

            <h2 className="
              mb-5 flex items-center gap-3
              font-mono text-lg font-bold text-white
            ">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#00D9FF]/30 bg-[#00D9FF]/10 text-[#00D9FF]">
                <FontAwesomeIcon icon={icons[index] || faCode} />
              </span>

              <span>{category}</span>
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color || "#00D9FF"}
                  image={skill.image}
                />
              ))}
            </div>

          </div>
        ))}

      </section>
    </main>
  );
};

export default Skills;
