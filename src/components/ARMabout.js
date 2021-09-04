import ARM from "../assets/ARM.png"
import linkedin from "../assets/linkedin.png"
import ARMGoToTop from "./ARMgoToTop"

export default function ARMabout(){    
    return(
        <section className="about-section">
            <h2>MI PERFIL</h2>
            
            <div className="about-personal-info">
                <img src={ARM} alt="foto"/>  
                <div className="profile-data">
                    <ul>
                        <li><b>NOMBRE:</b> Agustín Rodríguez Minaverry</li>
                        <li><b>EDAD:</b> 36 años</li>
                        <li><b>RESIDENCIA:</b> Buenos Aires, Argentina</li>
                        <li><b>PROFESIÓN:</b> Desarrollador web front - end </li>
                        <li><b>TECNOLOGÍAS:</b> React JS, Javascript, CSS, SASS y HTML</li>
                    </ul>
                </div>
                <button>
                    <a href="https://drive.google.com/uc?id=15uae5SZJSxPYNdrMPmN_C_uwJ4VZnCCq&export=download&authuser=0">DESCARGAR CV</a>
                </button>
            </div>
            
            <div className="about-history">
                <p><b>RESEÑA:</b> mi experiencia con los lenguajes de programación era prácticamente nula a principios de este año 2021. De hecho llegué a este apasionante mundo casi de casualidad, desde la lectura un libro sobre la "edad de oro del software español" en el que se cuenta la historia de muchos jóvenes programadores autodidactas que llegaron a crear joyas como "La abadía del crimen" o "Commandos".<br/>
                Esa particular influencia me hizo descubrir que la programación no sólo es accesible a cualquiera que le pierda el miedo (y que le ponga dedicación), sino que además me ayudó a encontrar una vocación que creía no tener.<br/>
                Salta a la vista que en mi currículum constan variadas experiencias laborales para nada relacionadas con el desarrollo web. Puedo asegurar que cada una ayudó a formar a la persona que soy ahora, mi ética laboral y mis motivaciones.<br/>
                Soy prolijo, detallista y me gustan las cosas simples, sin exagerado ornamento. Ese es el estilo que busco en mis proyectos.<br/>
                </p>
                <hr/>
                <p><b>APRENDIZAJE:</b> después de interiorizarme en los usos más comunes de los distintos lenguajes de programación decidí comenzar a aprender Javascript. Me atrajo la idea de su creación como amalgama de todo lo que estaba circulando en la web. Pero claro, primero debía conocer qué era eso del HTML y CSS.<br/>
                El primer curso de YouTube que hice fue el de SoyDalto de HTML y de su mano vino el de CSS. Después, realizando prácticas del de Javascript básico, noté que necesitaba reforzar mis conocimientos de los dos primeros antes de adentrarme más en JS.<br/>
                Allí descubrí los cursos de Dorian Designs, más específicos y detallados. Con una base más sólida fui alternando entre el curso de JS de Dorian, el de SoyDalto y las prácticas de cada uno.<br/>
                También fui desarrollando algunos proyectos propios como "¿Dónde está Caricias?" o la "Calculadora de exposición" que podrás ver en la "GALERÍA DE TRABAJOS", que me ayudaron a fijar los conceptos que fui aprendiendo en los cursos.<br/>
                Actualmente estoy siguiendo los cursos de React JS y Javascript de JonMircha, que es un purista de vanilla Javascript y que profundiza en los mecanismos básicos del lenguaje detrás de cada concepto de React JS.
                </p>
                <hr/>
                <p><b>CONOCIMIENTOS:</b> además de los cursos de HTML, CSS, Javascript y React JS en los que basé esta primera etapa de aprendizaje, también cuento en la actualidad con conocimientos de Git, Github, SASS y Responsive Design.
                </p>
            </div>
            
            <a className="linkedin-btn" href="https://ar.linkedin.com/in/agust%C3%ADn-rodr%C3%ADguez-minaverry-267445212" rel="noreferrer" target="_blank">
                <img src={linkedin} alt="linkedin"/>
                Ver Perfil
            </a>
            
            <ARMGoToTop />
        </section>
    )
}