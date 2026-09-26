import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faGithub,
    faLinkedin,
    faTiktok
} from "@fortawesome/free-brands-svg-icons";

import {
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";


const flex = "flex justify-center items-center";


const Home = () => {

    return (
        <>

            {/* =========================
                HERO
            ========================= */}

            <section
                id="hero"
                className="
                    relative
                    min-h-screen
                    flex
                    flex-col
                    items-center
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >

                {/* Bouton Me contacter */}

                <button
                    className="
                        absolute
                        top-4
                        right-4

                        md:top-6
                        md:right-6

                        border
                        border-white/20
                        rounded-lg

                        px-3
                        py-2

                        text-sm
                        md:text-base

                        hover:bg-white/10
                        transition
                    "
                >
                    Me Contacter
                </button>


                {/* Contenu Hero */}

                <div
                    className="
                        flex
                        flex-col
                        items-center
                        text-center

                        pt-28
                        sm:pt-32
                        md:pt-36

                        w-full
                        max-w-4xl
                    "
                >

                    {/* Badge XBAM Cyber */}

                    <div
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2

                            bg-[#00d9ff3f]
                            text-[#00D9FF]

                            w-fit

                            my-5

                            px-4
                            py-2

                            rounded-3xl

                            border
                            border-[#00D9FF]
                        "
                    >

                        <img
                            src="src/assets/images/LogoXBamCyber.png"
                            alt="Logo XBAM Cyber"
                            className="
                                w-9
                                h-9
                                sm:w-10
                                sm:h-10

                                rounded-full
                                object-cover
                            "
                        />

                        <span
                            className="
                                font-bold
                                text-sm
                                sm:text-base
                            "
                        >
                            XBAM Cyber
                        </span>

                    </div>


                    {/* Texte Hero */}

                    <div
                        className="
                            flex
                            flex-col
                            items-center
                            gap-2

                            px-2
                            sm:px-4

                            max-w-2xl

                            text-sm
                            sm:text-base
                            md:text-lg
                        "
                    >

                        <p>
                            Étudiant en Électronique, Informatique et
                            Télécommunications
                        </p>

                        <p>
                            Développeur web passionné aussi par la cybersécurité
                        </p>

                        <p>
                            Je crée des solutions digitales modernes et utiles.
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================
                À PROPOS
            ========================= */}

            <section
                id="about"
                className="
                    flex
                    flex-col

                    w-[95%]
                    sm:w-[90%]
                    md:w-[80%]

                    max-w-5xl

                    mx-auto
                    my-6

                    p-5
                    sm:p-6
                    md:p-8

                    border
                    border-white/10
                    rounded-xl
                "
            >

                <h2
                    className="
                        font-bold
                        text-lg
                        sm:text-xl
                        md:text-2xl

                        mb-5
                    "
                >
                    À PROPOS DE MOI
                </h2>


                <p
                    className="
                        w-full

                        text-sm
                        sm:text-base
                        md:text-lg

                        leading-relaxed

                        text-gray-300
                    "
                >
                    Je suis étudiant en Électronique, Informatique et
                    Télécommunications, passionné par le développement web
                    et la cybersécurité. J'aime transformer des idées en
                    solutions digitales concrètes, en accordant autant
                    d'importance à l'expérience utilisateur qu'à la sécurité.
                    À travers mes projets, je cherche avant tout à apprendre,
                    expérimenter et créer des solutions utiles qui répondent
                    à de vrais besoins.
                </p>


                <button
                    type="button"
                    className="
                        self-end

                        mt-6

                        text-sm
                        sm:text-base

                        hover:text-[#00D9FF]

                        transition
                    "
                >
                    En savoir plus →
                </button>

            </section>


            {/* =========================
                PROJETS
            ========================= */}

            <section
                id="projects-section"
                className="
                    flex
                    flex-col
                    items-center

                    w-[95%]
                    sm:w-[90%]
                    md:w-[80%]

                    max-w-6xl

                    mx-auto
                    my-8

                    p-5
                    sm:p-6
                    md:p-8

                    border
                    border-white/10
                    rounded-xl
                "
            >

                <button
                    className="
                        self-start

                        px-4
                        py-2

                        border
                        border-[#00D9FF]

                        rounded-lg

                        text-sm
                        sm:text-base

                        hover:bg-[#00D9FF]
                        hover:text-black

                        transition
                    "
                >
                    Voir mes projets
                </button>


                <div
                    id="projects"
                    className="
                        w-full

                        mt-6

                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3

                        gap-5
                    "
                >

                    {/* Les cartes de projets viendront ici */}

                </div>

            </section>


            {/* =========================
                RÉSEAUX
            ========================= */}

            <div
                id="network"
                className="
                    flex
                    flex-wrap

                    justify-center
                    items-center

                    gap-5
                    sm:gap-8

                    w-full

                    px-4
                    my-8
                "
            >

                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        flex
                        items-center
                        gap-2

                        hover:text-[#00D9FF]

                        transition
                    "
                >
                    <FontAwesomeIcon icon={faGithub} />
                    <span>GitHub</span>
                </a>


                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        flex
                        items-center
                        gap-2

                        hover:text-[#00D9FF]

                        transition
                    "
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>LinkedIn</span>
                </a>


                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        flex
                        items-center
                        gap-2

                        hover:text-[#00D9FF]

                        transition
                    "
                >
                    <FontAwesomeIcon icon={faTiktok} />
                    <span>TikTok</span>
                </a>


                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        flex
                        items-center
                        gap-2

                        hover:text-[#00D9FF]

                        transition
                    "
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Email</span>
                </a>

            </div>


            {/* =========================
                FOOTER
            ========================= */}

            <p
                className="
                    text-center

                    text-xs
                    sm:text-sm

                    text-gray-400

                    px-4
                    pb-6
                "
            >
                © Tous droits réservés XBAM Cyber
            </p>

        </>
    );
};


export default Home;