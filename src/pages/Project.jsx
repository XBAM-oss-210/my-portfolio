import data from "../data/projects.json";

const Project =()=>{
    return (
        <>
            <div>
            {data.projects.map((project) => (
                <div key={project.id}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>

                    <p>{project.stacks.map((stack)=>(
                        <span key={stack}>{stack}</span>
                        ))}
                    </p>
                </div>
            ))}
            </div>        
        </>
    )
}
export default Project 