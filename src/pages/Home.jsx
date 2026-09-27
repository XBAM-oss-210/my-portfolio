import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faGithub,
    faLinkedin,
    faTiktok
} from "@fortawesome/free-brands-svg-icons";

import {
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";


const specialties = ["Électronique", "Informatique", "Télécommunications"];

const socialLinks = [
    { icon: faGithub, label: "GitHub", href: "#" },
    { icon: faLinkedin, label: "LinkedIn", href: "#" },
    { icon: faTiktok, label: "TikTok", href: "#" },
    { icon: faEnvelope, label: "Email", href: "#" },
];


const Home = () => {

    return (
        <div className="min-h-screen bg-[#0A0E13] text-slate-200 antialiased selection:bg-[#00D9FF] selection:text-[#04121A]">

            {/* =========================
                HERO
            ========================= */}

            <section
                id="hero"
                className="
                    relative
                    isolate
                    overflow-hidden

                    min-h-screen
                    flex
                    flex-col
                    justify-center

                    px-6
                    sm:px-10
                    lg:px-20
                "
            >


                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,217,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.16) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                        maskImage:
                            "radial-gradient(ellipse 60% 55% at 50% 15%, black 0%, transparent 70%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 60% 55% at 50% 15%, black 0%, transparent 70%)",
                    }}
                />

                <div
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute
                        -top-40
                        left-1/2
                        -translate-x-1/2
                        -z-10

                        h-130
                        w-130

                        rounded-full
                        bg-[#00D9FF]/20
                        blur-[120px]
                    "
                />


                {/* Contenu Hero */}

                <div
                    className="
                        mx-auto
                        flex
                        w-full
                        max-w-2xl
                        flex-col
                        items-start
                        text-left
                    "
                >

                    {/* Badge XBAM Cyber */}

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2.5

                            rounded-full
                            border
                            border-[#00D9FF]/30
                            bg-[#00D9FF]/10

                            px-4
                            py-1.5

                            mb-8
                        "
                    >

                        <img
                            src="src/assets/images/LogoXBamCyber.png"
                            alt="Logo XBAM Cyber"
                            className="h-6 w-6 rounded-full object-cover"
                        />

                        <span className="font-mono text-xs tracking-wide text-[#00D9FF] sm:text-sm">
                            XBAM Cyber
                        </span>

                    </div>


                    {/* Titre */}

                    <h1
                        className="
                            font-mono
                            font-semibold

                            text-4xl
                            sm:text-5xl
                            md:text-6xl

                            leading-[1.1]
                            text-white
                        "
                    >
                        Développeur web
                    </h1>


                    {/* Spécialités */}

                    <div className="mt-4 flex flex-wrap gap-2">
                        {specialties.map((tag) => (
                            <span
                                key={tag}
                                className="
                                    rounded-md
                                    border
                                    border-white/10
                                    bg-white/5

                                    px-2.5
                                    py-1

                                    font-mono
                                    text-xs
                                    text-slate-300
                                "
                            >
                                {tag}
                            </span>
                        ))}
                    </div>


                    {/* Texte Hero */}

                    <p
                        className="
                            mt-6
                            max-w-md

                            text-base
                            leading-relaxed
                            text-slate-400
                        "
                    >
                        Je conçois, j’expérimente et je transforme mes idées
                        en solutions digitales.
                    </p>


                    {/* Boutons */}

                    <div className="mt-10 flex flex-wrap gap-4">

                        <button
                            type="button"
                            className="
                                rounded-lg
                                bg-[#00D9FF]

                                px-5
                                py-2.5

                                text-sm
                                font-medium
                                text-[#04121A]

                                transition-colors
                                hover:bg-[#5CE6FF]

                                focus-visible:outline-2
                                focus-visible:outline-offset-2
                                focus-visible:outline-[#00D9FF]
                            "
                        >
                            Voir mes projets
                        </button>

                        <button
                            type="button"
                            className="
                                rounded-lg
                                border
                                border-white/15

                                px-5
                                py-2.5

                                text-sm
                                font-medium
                                text-slate-200

                                transition-colors
                                hover:border-[#00D9FF]/50
                                hover:bg-white/5

                                focus-visible:outline-2
                                focus-visible:outline-offset-2
                                focus-visible:outline-[#00D9FF]
                            "
                        >
                            Me contacter
                        </button>

                    </div>

                </div>

            </section>


            {/* =========================
                À PROPOS
            ========================= */}

            <section
                id="about"
                className="
                    mx-auto
                    my-16
                    sm:my-20

                    w-full
                    max-w-3xl

                    px-6
                    sm:px-10
                "
            >

                <div
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/3

                        p-6
                        sm:p-8
                        md:p-10
                    "
                >

                    <h2 className="font-mono text-xl font-semibold text-white sm:text-2xl">
                        À propos de moi
                    </h2>

                    <p
                        className="
                            mt-5

                            text-sm
                            sm:text-base

                            leading-relaxed
                            text-slate-400
                        "
                    >
                        Je suis étudiant en Électronique, Informatique et
                        Télécommunications, passionné par le développement web
                        et la cybersécurité. J'aime transformer des idées en
                        solutions digitales concrètes, en accordant autant
                        d'importance à l'expérience utilisateur qu'à la
                        sécurité. À travers mes projets, je cherche avant tout
                        à apprendre, expérimenter et créer des solutions
                        utiles qui répondent à de vrais besoins.
                    </p>

                    <button
                        type="button"
                        className="
                            mt-6
                            inline-flex
                            items-center

                            text-sm
                            font-medium
                            text-[#00D9FF]

                            underline
                            decoration-[#00D9FF]/30
                            underline-offset-4

                            transition
                            hover:decoration-[#00D9FF]
                        "
                    >
                        En savoir plus
                    </button>

                </div>

            </section>


            {/* =========================
                PROJETS
            ========================= */}

            <section
                id="projects-section"
                className="
                    mx-auto
                    my-16
                    sm:my-20

                    w-full
                    max-w-5xl

                    px-6
                    sm:px-10
                "
            >

                <h2 className="font-mono text-xl font-semibold text-white sm:text-2xl">
                    Projets
                </h2>

                <div
                    id="projects"
                    className="
                        mt-8

                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3

                        gap-5
                    "
                >

                    {/* Les cartes de projets viendront ici */}

                    <div></div>

                </div>

            </section>


            {/* =========================
                RÉSEAUX
            ========================= */}

            <section
                id="network"
                className="
                    mx-auto
                    my-16
                    sm:my-20

                    flex
                    w-full
                    max-w-3xl
                    flex-wrap

                    items-center
                    justify-center

                    gap-3
                    sm:gap-4

                    px-6
                "
            >

                {socialLinks.map(({ icon, label, href }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/10
                            bg-white/3
                            px-4
                            py-2
                            text-sm
                            text-slate-300
                            transition-colors
                            hover:border-[#00D9FF]/40
                            hover:text-[#00D9FF]
                        "
                    >
                        <FontAwesomeIcon icon={icon} />
                        <span>{label}</span>
                    </a>
                ))}

            </section>


            {/* =========================
                FOOTER
            ========================= */}

            <footer
                className="
                    border-t
                    border-white/10

                    px-4
                    py-6

                    text-center

                    text-xs
                    sm:text-sm

                    text-gray-400
                "
            >
                © {new Date().getFullYear()} XBAM Cyber. Tous droits réservés.
            </footer>

        </div>
    );
};


export default Home;