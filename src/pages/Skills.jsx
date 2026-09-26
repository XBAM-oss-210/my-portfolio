import React, { useEffect, useRef, useState } from "react";
import data from "../data/skills.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faServer,
    faScrewdriverWrench
} from "@fortawesome/free-solid-svg-icons";



//  cree de chaque skill   ( la barre de progression card -image -nom valeur )
function SkillBar({ name, level, color = "#61DAFB", duration = 1200 ,image }) {
    const [width, setWidth] = useState(0);
    const [displayValue, setDisplayValue] = useState(0);

    const barRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = barRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true; 
            animateTo(level); 
            }
        },
        { threshold: 0.3 } 
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [level]);

    function animateTo(target) {
        const start = performance.now(); 

        function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1); 

        const eased = 1 - Math.pow(1 - progress, 3);

        const current = Math.round(eased * target);

        setWidth(eased * target);
        setDisplayValue(current); 

        if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
    }

    return (
        <div ref={barRef} className="flex flex-col gap-3 w-[80%] min-w-0 mb-6 border border-white/20 rounded-lg p-2">
            <div className=" flex items-center w-full gap-2 ">
                <img src={image} alt={image}  className="w-10  rounded-lg " />
                <span className="text-slate-200">{name}</span>

                <div className="ml-auto m-">
                    <span className="font-bold mt-2  self-end " style={{ color }}>
                            {displayValue}%
                    </span>
                </div>

            </div>

            <div className=" h-2.5 rounded-md bg-slate-700 overflow-hidden">
                <div
                className="h-full rounded-md transition-[background] duration-300"
                style={{

                    width: `${width}%`,
                    background: `linear-gradient(90deg, ${color}99, ${color})`,
                }}
                ></div>
            </div>
        </div>
    );
    }
const icons =[
    faCode,
    faServer,
    faScrewdriverWrench
]

const Skills =()=>{
    return (
        <>
    <div className="flex flex-col justify-center  items-center  max-w-full mt-15  mx-auto p-2 border border-white/10 rounded-xl  leading-relaxed   
        md:w-[90%] md:h-30
    ">
        <h1 
            className=" text-2xl font-bold    text-blue-600 my-3
            md:text-4xl md:my-2 " >
            <span  className="text-white ">/ 
            </span> MES COMPETENCES 
        </h1>
        <p  className="text-center italic  text-[#94A3B8] ">Un ensemble de compétences que je développe à travers l’apprentissage et la pratique.</p>
    </div>
    <div  className="mt-15 mx-5  max-w-full w-[95%] ">
        {Object.entries(data).map(([category, skills],index ) => (
            <div key={category} className=" w-full max-w-2xl  flex flex-col  ">
                <h2 className=" flex gap-2 items-center mb-3 text-blue-500 font-bold text-lg "><FontAwesomeIcon icon={icons[index]} />{category}</h2>
            <div className="grid grid-cols-1  gap-2   md:grid-cols-3  md:w-5xl ">
                {skills.map((s,index ) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} color={s.color} image={s.image}/>
                ))}

            </div>

            </div>
        ))}

    </div>
        
        </>
    )}

export default Skills 














