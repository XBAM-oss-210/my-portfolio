import data from "../data/projects.json";

const Project =()=>{
    return (
        <>
<section>
    <div className="flex flex-col justify-center items-center w-[90%] max-w-5xl mt-15 mx-auto p-4 md:p-6 border border-white/10 rounded-xl leading-relaxed">

        <h1
            className="text-2xl font-bold text-blue-600 text-center md:text-4xl md:my-2"
        >
            <span className="text-white">/</span> MES REALISATIONS
        </h1>

        <p className="text-center italic text-sm text-[#94A3B8] max-w-2xl md:text-base">
            Un aperçu de mes projets, entre réalisations concrètes, expérimentations et projets personnels.
        </p>
    </div>

    <div className="m-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
        {data.projects.map((project) => (
            <div
                key={project.id}
                className="w-full overflow-hidden border border-white/20 rounded-xl bg-white/2 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
            >
                <img
                    src={project.image}
                    alt=""
                    className="w-full h-40 object-cover"
                />

                <div>
                    <h3 className="font-bold my-3 ml-3 font-montserrat text-white text-lg">
                        {project.name}
                    </h3>

                    <p className="font-inter m-3 text-sm leading-relaxed text-[#94A3B8] wrap-break-words">
                        {project.description}
                    </p>
                </div>

                <p className="grid grid-cols-2 gap-1 p-2">
                    {project.stacks.map((stack) => (
                        <span
                            key={stack}
                            className="border border-blue-700/60 rounded-lg text-blue-400 text-xs text-center  font-bold  m-1 p-1"
                        >
                            {stack}
                        </span>
                    ))}
                </p>
            </div>
        ))}
    </div>
</section>

        </>
    )
}
export default Project 