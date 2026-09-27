import pathStep from "../data/path.json";
import { useEffect, useRef, useState } from "react";
    
    
    export default function Parcours({ items = pathStep , stagger = 200 }) {
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

        <>

        <section className="flex flex-col justify-center  items-center  w-xs mt-15  mx-auto p-2 border border-white/10 rounded-xl  leading-relaxed   
          md:w-[90%] md:h-30
        ">
          <h1 
              className=" text-2xl font-bold    text-blue-600 
                md:text-4xl md:my-2 " >
              <span  className="text-white ">/ 
              </span> MON PARCOURS
          </h1>
          <p  className="text-center italic  text-[#94A3B8] ">Une progression continue entre apprentissage, exploration et mise en pratique.</p>
        </section>
  <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
    <ol className="relative">

      {/* Ligne centrale */}
      <span
        aria-hidden="true"
        className="
          absolute bottom-0 left-4 top-0 w-px
          -translate-x-1/2
          bg-stone-200
          dark:bg-stone-800
          md:left-1/2
        "
      />

      {items.map((item, i) => {
        const isLeft = i % 2 === 0;
        const isShown = i in revealed;

        return (
          <li
            key={`${item.title}-${i}`}
            ref={(el) => (itemRefs.current[i] = el)}
            data-index={i}
            style={{
              transitionDelay: isShown ? `${revealed[i]}ms` : "0ms",
            }}
            className={[
              /* Positionnement */
              "group relative pb-12 pl-12 last:pb-0",
              "md:w-1/2 md:pl-0",

              /* Alternance desktop */
              isLeft
                ? "md:mr-auto md:pr-14"
                : "md:ml-auto md:pl-14",

              /* Animation d'apparition */
              "transition-all duration-700 ease-out",
              "motion-reduce:transition-none",

              isShown
                ? "translate-x-0 opacity-100"
                : [
                    "translate-x-[-16px] opacity-0",
                    isLeft
                      ? "md:translate-x-[-40px]"
                      : "md:translate-x-[40px]",
                  ].join(" "),
            ].join(" ")}
          >

            {/* Point de la timeline */}
            <span
              aria-hidden="true"
              className={[
                `
                  absolute top-6 left-4
                  h-3 w-3
                  -translate-x-1/2
                  rounded-full
                  border-2
                  border-teal-500
                  bg-white
                  dark:bg-stone-950

                  transition-all
                  duration-300

                  group-hover:scale-150
                  group-hover:bg-teal-500
                  group-hover:shadow-[0_0_0_6px_rgba(20,184,166,0.10)]
                `,
                isLeft
                  ? "md:left-auto md:right-0 md:translate-x-1/2"
                  : "md:left-0",
              ].join(" ")}
            />

            {/* Carte */}
            <article
              className={[
                `
                  relative
                  rounded-2xl
                  border
                  border-stone-200
                  bg-white
                  p-6

                  shadow-sm

                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-1
                  hover:border-teal-200
                  hover:shadow-lg

                  dark:border-stone-800
                  dark:bg-stone-950
                  dark:hover:border-teal-900
                  dark:hover:shadow-teal-950/20
                `,

                /* Alignement du contenu */
                isLeft ? "md:text-right" : "md:text-left",
              ].join(" ")}
            >

              {/* Petite ligne décorative */}


              {/* Date */}
              <time
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-teal-600

                  dark:text-teal-400
                "
              >
                {item.date}
              </time>

              {/* Titre */}
              <h3
                className="
                  mt-2
                  text-xl
                  font-semibold
                  tracking-tight
                  text-stone-900

                  transition-colors
                  duration-300

                  group-hover:text-teal-600

                  dark:text-stone-50
                  dark:group-hover:text-teal-400
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-stone-600

                  dark:text-stone-400
                "
              >
                {item.text}
              </p>

            </article>
          </li>
        );
      })}
    </ol>
  </section>
        
        </>

    );
    }


















