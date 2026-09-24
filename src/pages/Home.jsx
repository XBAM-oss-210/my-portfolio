import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTiktok
} from  "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope
} from "@fortawesome/free-solid-svg-icons"; 
const Home =()=>{
    return (
        <>

            <section id="hero"> 
                <button>Me Contacter</button>
                <div>
                    <img src="src/assets/images/LogoXBamCyber.png" alt="Logo" width={100} height={100} />
                    <span> XBAM Cyber</span>
                </div>

                <div>
                    <p>Étudiant en Électronique Informatique et télécommunications</p>
                    <p>Développeur web passionné aussi par la cybersécurité</p>
                    <p>Je crée des solutions digitales modernes et utiles.</p>
                </div>   

            </section>

            <section>
                <h2>À propos de moi</h2>
                <p>Je suis étudiant en Électronique, Informatique et Télécommunications,
                        passionné   par le développement web 
                        et la cybersécurité. J'aime transformer des idées en solutions digitales concrètes,
                        en accordant autant d'importance à l'expérience utilisateur qu'à la sécurité.
                        À travers mes projets, je cherche avant tout à apprendre, expérimenter et créer
                        des solutions utiles qui répondent à de vrais besoins .
                        </p>  
                <button type="button">En savoir plus →</button>                          
            
            </section>
            <section>
                <button>Voir mes projets</button> 
                <div id="projects">

                </div>
            </section>

            <div id="network">

                <a href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />GitHub</a>
                <a href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a>
                <a href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} />TikTok</a>
                <a href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} />Email</a>
            </div>
            <p>© Tous droits reserves XBAM Cyber</p>
        </>
    )
}
export default Home 