import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faGithub,
    faLinkedin,
    faTiktok
} from "@fortawesome/free-brands-svg-icons";


const Network = () => {

    const grid =
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full";

    const flex =
        "flex flex-col justify-center items-center";

    const aStyle = `
        flex
        flex-col
        items-center
        justify-center
        gap-3

        w-full
        p-6

        border
        border-white/10

        rounded-xl

        bg-white/5

        text-white

        transition
        duration-300

        hover:border-[#00D9FF]
        hover:bg-[#00D9FF]/10
        hover:text-[#00D9FF]

        hover:-translate-y-1
    `;


    return (
        <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-10">

            {/* =========================
                INTRODUCTION
            ========================= */}

            <section
                className={`
                    ${flex}

                    text-center

                    max-w-2xl
                    mx-auto

                    my-10
                `}
            >

                <img
                    src="/images/LogoXBamCyber.png"
                    alt="Logo XBAM Cyber"
                    className="
                        w-16
                        h-16

                        sm:w-20
                        sm:h-20

                        object-cover
                        rounded-full

                        mb-4
                    "
                />


                <h1
                    className="
                        text-2xl
                        sm:text-3xl
                        lg:text-4xl

                        font-bold

                        text-white

                        mb-3
                    "
                >
                    Développeur Web FullStack
                </h1>


                <p
                    className="
                        italic

                        text-sm
                        sm:text-base

                        text-gray-400

                        leading-relaxed
                    "
                >
                    Conception de solutions adaptées à vos besoins
                </p>

            </section>


            {/* =========================
                RÉSEAUX
            ========================= */}

            <section
                className={`
                    ${grid}

                    max-w-5xl
                    mx-auto
                `}
            >

                {/* GitHub */}

                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className={aStyle}
                >

                    <FontAwesomeIcon
                        icon={faGithub}
                        className="text-4xl"
                    />

                    <span className="font-semibold">
                        GitHub
                    </span>

                    <span className="text-sm text-gray-400 text-center">
                        Découvrez mes projets et mon code
                    </span>

                </a>


                {/* LinkedIn */}

                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className={aStyle}
                >

                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="text-4xl"
                    />

                    <span className="font-semibold">
                        LinkedIn
                    </span>

                    <span className="text-sm text-gray-400 text-center">
                        Retrouvez mon parcours professionnel
                    </span>

                </a>


                {/* TikTok */}

                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className={aStyle}
                >

                    <FontAwesomeIcon
                        icon={faTiktok}
                        className="text-4xl"
                    />

                    <span className="font-semibold">
                        TikTok
                    </span>

                    <span className="text-sm text-gray-400 text-center">
                        Découvrez mon contenu
                    </span>

                </a>

            </section>

        </main>
    );
};


export default Network;
