
import pathStep from "../data/path.json";
import { useEffect, useRef, useState } from "react";

export default function Parcours({ items = pathStep, stagger = 200 }) {

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

                // Le stagger : chaque élément reçoit un délai croissant
                setRevealed((prev) => {
                    const next = { ...prev };

                    batch.forEach((index, order) => {
                        if (!(index in next)) {
                            next[index] = order * stagger;
                        }
                    });

                    return next;
                });

                entries.forEach(
                    (e) => e.isIntersecting && observer.unobserve(e.target)
                );
            },
            { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
        );

        itemRefs.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();

    }, [items, stagger]);

    return (
        <main className="
            min-h-screen
            bg-[#0A0E13]
            px-6
            py-16
            sm:px-10
            lg:px-20
            text-slate-200
            antialiased
        ">

            {/* INTRODUCTION */}

            <section className="
                mx-auto
                flex
                w-full
                max-w-5xl
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-[#101820]
                p-6
                text-center
                sm:p-8
            ">

                <span className="
                    mb-4
                    rounded-full
                    border
                    border-[#00D9FF]/30
                    bg-[#00D9FF]/10
                    px-4
                    py-1.5
                    font-mono
                    text-xs
                    tracking-wide
                    text-[#00D9FF]
                ">
                    XBAM CYBER / TIMELINE
                </span>

                <h1 className="
                    my-2
                    font-mono
                    text-2xl
                    font-bold
                    text-white
                    sm:text-3xl
                    md:text-4xl
                ">
                    <span className="text-[#00D9FF]">/</span> MON PARCOURS
                </h1>

                <p className="
                    mt-2
                    max-w-2xl
                    text-center
                    text-sm
                    italic
                    leading-relaxed
                    text-[#94A3B8]
                    sm:text-base
                ">
                    Une progression continue entre apprentissage,
                    exploration et mise en pratique.
                </p>

            </section>


            {/* TIMELINE */}

            <section className="
                mx-auto
                w-full
                max-w-6xl
                px-0
                py-16
                sm:px-4
                lg:px-8
            ">

                <ol className="relative">

                    {/* LIGNE CENTRALE */}

                    <span
                        aria-hidden="true"
                        className="
                            absolute
                            bottom-0
                            left-4
                            top-0
                            w-px
                            -translate-x-1/2
                            bg-[#00D9FF]/30
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
                                    transitionDelay: isShown
                                        ? `${revealed[i]}ms`
                                        : "0ms",
                                }}
                                className={[
                                    // Positionnement
                                    "group relative pb-12 pl-12 last:pb-0",
                                    "md:w-1/2 md:pl-0",

                                    // Alternance desktop
                                    isLeft
                                        ? "md:mr-auto md:pr-14"
                                        : "md:ml-auto md:pl-14",

                                    // Animation
                                    "transition-all duration-700 ease-out",
                                    "motion-reduce:transition-none",

                                    isShown
                                        ? "translate-x-0 opacity-100"
                                        : [
                                            "-translate-x-4opacity-0",
                                            isLeft
                                                ? "md:-translate-x-10"
                                                : "md:translate-x-10",
                                        ].join(" "),
                                ].join(" ")}
                            >

                                {/* POINT DE LA TIMELINE */}

                                <span
                                    aria-hidden="true"
                                    className={[
                                        `
                                            absolute
                                            top-6
                                            left-4
                                            h-3
                                            w-3
                                            -translate-x-1/2
                                            rounded-full
                                            border-2
                                            border-[#00D9FF]
                                            bg-[#0A0E13]

                                            transition-all
                                            duration-300

                                            group-hover:scale-150
                                            group-hover:bg-[#00D9FF]
                                            group-hover:shadow-[0_0_0_6px_rgba(0,217,255,0.15)]
                                        `,
                                        isLeft
                                            ? "md:left-auto md:right-0 md:translate-x-1/2"
                                            : "md:left-0",
                                    ].join(" ")}
                                />


                                {/* CARTE */}

                                <article
                                    className={[
                                        `
                                            relative
                                            overflow-hidden
                                            rounded-2xl
                                            border
                                            border-white/10
                                            bg-[#101820]
                                            p-6

                                            shadow-sm

                                            transition-all
                                            duration-300
                                            ease-out

                                            hover:-translate-y-1
                                            hover:border-[#00D9FF]/50
                                            hover:bg-[#00D9FF]/5
                                            hover:shadow-lg
                                            hover:shadow-[#00D9FF]/5
                                        `,

                                        // Alignement
                                        isLeft
                                            ? "md:text-right"
                                            : "md:text-left",
                                    ].join(" ")}
                                >

                                    {/* DATE */}

                                    <time className="
                                        font-mono
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-[0.15em]
                                        text-[#00D9FF]
                                    ">
                                        {item.date}
                                    </time>


                                    {/* TITRE */}

                                    <h3 className="
                                        mt-2
                                        text-xl
                                        font-semibold
                                        tracking-tight
                                        text-white
                                        transition-colors
                                        duration-300
                                        group-hover:text-[#00D9FF]
                                    ">
                                        {item.title}
                                    </h3>


                                    {/* DESCRIPTION */}

                                    <p className="
                                        mt-3
                                        text-sm
                                        leading-7
                                        text-[#94A3B8]
                                    ">
                                        {item.text}
                                    </p>

                                </article>

                            </li>
                        );
                    })}

                </ol>

            </section>

        </main>
    );
}
