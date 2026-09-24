import data from "../data/skills.json";

const Skills =()=>{
    return (
        <>
    <div>
        {Object.entries(data).map(([category, skills]) => (
            <div key={category}>
            <h2>{category}</h2>

            {skills.map((skill, index) => (
                <div key={index}>
                <img src={skill.image} alt={skill.name} width="50" />
                <p>{skill.name}</p>
                <p> {skill.level}</p>
                </div>
            ))}
            </div>
        ))}
        </div>
        
        </>
    )}
export default Skills 