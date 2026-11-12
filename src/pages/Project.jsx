
import data from "../data/projects.json";

const Project = () => {

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
                my-10
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
                    XBAM CYBER / PROJECTS
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
                    <span className="text-[#00D9FF]">/</span> MES RÉALISATIONS
                </h1>

                <p className="
                    mt-2
                    max-w-2xl
                    text-sm
                    italic
                    leading-relaxed
                    text-[#94A3B8]
                    sm:text-base
                ">
                    Un aperçu de mes projets, entre réalisations concrètes,
                    expérimentations et projets personnels.
                </p>

            </section>


            {/* CARTES DES PROJETS */}

            <section className="
                mx-auto
                grid
                w-full
                max-w-6xl
                grid-cols-1
                gap-6
                sm:grid-cols-2
                lg:grid-cols-3
            ">

                {data.projects.map((project) => (

                    <article
                        key={project.id}
                        className="
                            group
                            flex
                            flex-col
                            overflow-hidden
                            rounded-2xl
                            border
                            border-white/10
                            bg-[#101820]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#00D9FF]/50
                            hover:bg-[#00D9FF]/5
                            hover:shadow-[0_0_25px_rgba(0,217,255,0.08)]
                        "
                    >

                        {/* IMAGE */}

                        <div className="
                            relative
                            h-44
                            overflow-hidden
                            bg-[#0A0E13]
                        ">

                            <img
                                src={project.image}
                                alt={project.name}
                                loading="lazy"
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-500
                                    group-hover:scale-105
                                "
                            />

                            <div className="
                                pointer-events-none
                                absolute
                                inset-0
                                bg-linear-to-t
                                from-[#0A0E13]/40
                                to-transparent
                            "/>

                        </div>


                        {/* CONTENU */}

                        <div className="
                            flex
                            flex-1
                            flex-col
                            p-5
                        ">

                            <h3 className="
                                mb-3
                                font-mono
                                text-lg
                                font-semibold
                                text-white
                                transition-colors
                                duration-300
                                group-hover:text-[#00D9FF]
                            ">
                                {project.name}
                            </h3>

                            <p className="
                                mb-5
                                flex-1
                                wrap-break-word
                                text-sm
                                leading-relaxed
                                text-[#94A3B8]
                            ">
                                {project.description}
                            </p>


                            {/* TECHNOLOGIES */}

                            <div className="
                                flex
                                flex-wrap
                                gap-2
                                border-t
                                border-white/10
                                pt-4
                            ">

                                {project.stacks.map((stack) => (

                                    <span className="
                                        rounded-lg border border-[#3178C6]/50
                                        bg-[#3178C6]/10 px-3 py-1
                                        text-xs font-semibold text-[#3178C6]
                                        font-mono
                                        "
                                        translate="no"

                                        >
                                        {stack}
                                        </span>

                                ))}

                            </div>

                        </div>

                    </article>

                ))}

            </section>

        </main>
    );
};

export default Project;
