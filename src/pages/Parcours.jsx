import pathStep from "../data/path.json";
import path from "path";
import { useEffect, useRef, useState } from "react";
   
   
   export default function Parcours({ items = pathStep , stagger = 140 }) {
   const itemRefs = useRef([]);
   // index -> délai (ms) une fois l'élément révélé
   const [revealed, setRevealed] = useState({});
   
   useEffect(() => {
      const reduceMotion = window.matchMedia(
         "(prefers-reduced-motion: reduce)"
      ).matches;
   
      if (reduceMotion || !("IntersectionObserver" in window)) {
         setRevealed(Object.fromEntries(items.map((_, i) => [i, 0])));
         return;
      }
   
      const observer = new IntersectionObserver(
         (entries) => {
         const batch = entries
            .filter((e) => e.isIntersecting)
            .map((e) => Number(e.target.dataset.index))
            .sort((a, b) => a - b);
   
         if (!batch.length) return;
   
         // Le stagger : chaque élément du lot reçoit un délai croissant
         setRevealed((prev) => {
            const next = { ...prev };
            batch.forEach((index, order) => {
               if (!(index in next)) next[index] = order * stagger;
            });
            return next;
         });
   
         entries.forEach((e) => e.isIntersecting && observer.unobserve(e.target));
         },
         { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
      );
   
      itemRefs.current.forEach((el) => el && observer.observe(el));
      return () => observer.disconnect();
   }, [items, stagger]);
   
   return (
      <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
         <ol className="relative">

         {/* Ligne : à gauche sur mobile, centrée dès md */}
         <span
            aria-hidden="true"
            className="absolute bottom-0 left-4 top-0 w-px -translate-x-1/2 bg-stone-300 dark:bg-stone-700 md:left-1/2"
         />
   
         {items.map((item, i) => {
            const isLeft = i % 2 === 0; // l'alternance n'apparaît que dès md
            const isShown = i in revealed;
   
            return (
               <li
               key={`${item.title}-${i}`}
               ref={(el) => (itemRefs.current[i] = el)}
               data-index={i}
               style={{ transitionDelay: isShown ? `${revealed[i]}ms` : "0ms" }}
               className={[
                  "relative pb-10 pl-12 last:pb-0",
                  "md:w-1/2 md:pl-0",
                  isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12",
                  "transition-all duration-700 ease-out motion-reduce:transition-none",
                  isShown
                     ? "translate-x-0 opacity-100"
                     : [
                        "opacity-0 -translate-x-4",
                        isLeft ? "md:-translate-x-10" : "md:translate-x-10",
                     ].join(" "),
               ].join(" ")}
               >
               {/* Point sur la ligne */}
               <span
                  aria-hidden="true"
                  className={[
                     "absolute top-6 h-3 w-3 -translate-x-1/2 rounded-full",
                     "border-2 border-teal-600 bg-white dark:bg-stone-900",
                     "left-4",
                     isLeft
                     ? "md:left-auto md:right-0 md:translate-x-1/2"
                     : "md:left-0",
                  ].join(" ")}
               />
   
               {/* Carte */}
               <article
                  className={[
                     "rounded-lg border border-stone-200 bg-white p-5 shadow-sm",
                     "dark:border-stone-700 dark:bg-stone-900",
                     "transition-shadow duration-200 hover:shadow-md",
                     isLeft ? "md:text-right" : "",
                  ].join(" ")}
               >
                  <time className="text-sm font-medium text-teal-700 dark:text-teal-400">
                     {item.date}
                  </time>
                  <h3 className="mt-1 text-lg font-semibold text-stone-900 dark:text-stone-50">
                     {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                     {item.text}
                  </p>
               </article>
               </li>
            );
         })}
         </ol>
      </section>
   );
   }


















