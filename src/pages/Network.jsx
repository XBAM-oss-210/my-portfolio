
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faGithub,
    faLinkedin,
    faTiktok
} from "@fortawesome/free-brands-svg-icons";

const Network = () => {

    const networks = [
        {
            icon: faGithub,
            name: "GitHub",
            description: "Découvrez mes projets et mon code",
            href: "#"
        },
        {
            icon: faLinkedin,
            name: "LinkedIn",
            description: "Retrouvez mon parcours professionnel",
            href: "#"
        },
        {
            icon: faTiktok,
            name: "TikTok",
            description: "Découvrez mon contenu",
            href: "#"
        }
    ];

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
                flex
                flex-col
                items-center
                justify-center
                mx-auto
                my-10
                max-w-2xl
                text-center
            ">

                <div className="
                    relative
                    mb-6
                    rounded-full
                    p-1
                    border
                    border-[#00D9FF]/30
                    shadow-[0_0_25px_rgba(0,217,255,0.12)]
                ">
                    <img
                        src="/images/LogoXBamCyber.png"
                        alt="Logo XBAM Cyber"
                        className="
                            h-16
                            w-16
                            rounded-full
                            object-cover
                            sm:h-20
                            sm:w-20
                        "
                    />
                </div>

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
                    XBAM CYBER / NETWORK
                </span>

                <h1 className="
                    mb-4
                    font-mono
                    text-2xl
                    font-semibold
                    text-white
                    sm:text-3xl
                    lg:text-4xl
                ">
                    Développeur Web FullStack
                </h1>

                <p className="
                    max-w-lg
                    text-sm
                    leading-relaxed
                    text-[#94A3B8]
                    sm:text-base
                ">
                    Conception de solutions adaptées à vos besoins.
                    Retrouvez-moi sur mes différentes plateformes.
                </p>

            </section>


            {/* RÉSEAUX SOCIAUX */}

            <section className="
                mx-auto
                grid
                w-full
                max-w-5xl
                grid-cols-1
                gap-5
                sm:grid-cols-2
                sm:gap-6
                lg:grid-cols-3
            ">

                {networks.map(({ icon, name, description, href }) => (

                    <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visiter mon profil ${name}`}
                        className="
                            group
                            flex
                            w-full
                            flex-col
                            items-center
                            justify-center
                            gap-4
                            rounded-2xl
                            border
                            border-white/10
                            bg-[#101820]
                            p-7
                            text-white
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-[#00D9FF]/50
                            hover:bg-[#00D9FF]/5
                            hover:shadow-[0_0_25px_rgba(0,217,255,0.08)]
                        "
                    >

                        <div className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            transition-all
                            duration-300
                            group-hover:border-[#00D9FF]/30
                            group-hover:bg-[#00D9FF]/10
                        ">

                            <FontAwesomeIcon
                                icon={icon}
                                className="
                                    text-3xl
                                    text-slate-300
                                    transition-colors
                                    duration-300
                                    group-hover:text-[#00D9FF]
                                "
                            />

                        </div>

                        <span className="
                            font-mono
                            text-lg
                            font-semibold
                            transition-colors
                            duration-300
                            group-hover:text-[#00D9FF]
                        ">
                            {name}
                        </span>

                        <span className="
                            text-center
                            text-sm
                            leading-relaxed
                            text-[#94A3B8]
                        ">
                            {description}
                        </span>

                        <span className="
                            mt-2
                            font-mono
                            text-xs
                            text-[#00D9FF]/70
                            transition-colors
                            group-hover:text-[#00D9FF]
                        "
                        translate="no"
                        >
                            EXPLORER →
                        </span>

                    </a>

                ))}

            </section>

        </main>
    );
};

export default Network;
