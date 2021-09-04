import ProjectCard from "./ProjectCard"
import caricias from "../assets/caricias.png"
import caricias2 from "../assets/caricias2.png"
import estenometro from "../assets/estenometro.png"
import estenometro2 from "../assets/estenometro2.png"
import rickandmorty from "../assets/rickandmorty.png"
import rickandmorty2 from "../assets/rickandmorty2.png"
import zelda from "../assets/zelda.png"
import zelda2 from "../assets/zelda2.png"
import simon from "../assets/simon.png"
import simon2 from "../assets/simon2.png"
import todolist from "../assets/todolist.png"
import todolist1 from "../assets/todolist1.png"
import pptls from "../assets/pptls.png"
import pptls1 from "../assets/pptls1.png"
import ARMGoToTop from "./ARMgoToTop"

export default function ARMprojects(){
    const rickAndMortyCard = {
        img1: rickandmorty,
        img2: rickandmorty2,
        web: "https://agujerin.github.io/rickandmorty/#/",
        repo: "https://github.com/Agujerin/rickandmorty"
    }
    const zeldaStoreCard = {
        img1: zelda,
        img2: zelda2,
        web: "https://agujerin.github.io/zeldaStore/",
        repo: "https://github.com/Agujerin/zeldaStore"
    }
    const cariciasCard = {
        img1: caricias,
        img2: caricias2,
        web: "https://agujerin.github.io/caricias/",
        repo: "https://github.com/Agujerin/caricias"
    }
    const simonSPACard = {
        img1: simon,
        img2: simon2,
        web: "https://agujerin.github.io/SPA-simon/#/",
        repo: "https://github.com/Agujerin/SPA-simon"
    }
    const estenometroCard = {
        img1: estenometro,
        img2: estenometro2,
        web: "https://agujerin.github.io/calculadora-de-exposicion/",
        repo: "https://github.com/Agujerin/calculadora-de-exposicion"
    }
    const pptlsCard = {
        img1: pptls,
        img2: pptls1,
        web: "https://agujerin.github.io/Piedra-papel-tijera-lagarto-spock/",
        repo: "https://github.com/Agujerin/Piedra-papel-tijera-lagarto-spock"
    }
    const todoCard = {
        img1: todolist,
        img2: todolist1,
        web: "https://agujerin.github.io/to-do-list-drag-drop/",
        repo: "https://github.com/Agujerin/to-do-list-drag-drop"
    }
    
    return(
        <section className="projects-container">
            <h2>GALERÍA DE TRABAJOS</h2>
            <hr/>
            <h3><b>CATÁLOGO RICK AND MORTY</b></h3>
            <ProjectCard cardData={rickAndMortyCard}>
                <p><b>DESCRIPCIÓN:</b> la página interactúa con la API de Rick and Morty y cuenta con un buscador de personajes, información extra sobre cada uno de ellos y una vista de "favoritos" en los que el usuario puede guardar sus personajes predilectos.<br/>
                <b>TECNOLOGÍAS:</b> HTML / CSS / React JS</p>
            </ProjectCard>
            <hr/>
            <h3><b>ZELDA STORE</b></h3>
            <ProjectCard cardData={zeldaStoreCard}>
                <p><b>DESCRIPCIÓN:</b> un falso negocio online con algunos de los ítems más característicos del juego de NES. Apenas una excusa simpática para practicar el contexto global (Context) y el manejo de estados complejos (Reducer) de React JS.<br/>
                <b>TECNOLOGÍAS:</b> HTML / CSS / React JS</p>
            </ProjectCard>
            <hr/>
            <h3><b>¿DÓNDE ESTÁ CARICIAS?</b></h3>
            <ProjectCard cardData={cariciasCard}>
                <p><b>DESCRIPCIÓN:</b> es un juego de búsqueda de personajes del estilo de ¿Dónde está Wally? que cuenta con 2 niveles. Está basado en el universo de un programa radial argentino. No es responsive design ya que no podía alterar el tamaño de la imagen.<br/>
                <b>TECNOLOGÍAS:</b> HTML / CSS / Javascript</p>
            </ProjectCard>
            <hr/>
            <h3><b>SPA SIMÓN DICE</b></h3>
            <ProjectCard cardData={simonSPACard}>
                <p><b>DESCRIPCIÓN:</b> juego de memoria desarrollado como una Single Page Application a modo de práctica para reforzar los conocimientos sobre Javascript puro. El enrutado fue manejado mediante la manipulación del "hash" de la url. El dispositivo de juego está totalmente desarrollado en CSS para practicar los conceptos de "position".<br/>
                <b>TECNOLOGÍAS:</b> HTML / CSS / Javascript</p>
            </ProjectCard>    
            <hr/>
            <h3><b>CALCULADORA DE EXPOSICIÓN</b></h3>
            <ProjectCard cardData={estenometroCard}>
                <p><b>DESCRIPCIÓN:</b> esta calculadora de exposición nació como una necesidad de un fotógrafo estenopeico. Me pidió una aplicación para realizar el cálculo de tiempo de exposición de sus fotografías que solía hacer con una herramienta manual. La idea a futuro es convertirla en una App que permita unificar la función calculadora con el fotómetro, reemplazando la inserción manual de datos por valores obtenidos con la cámara del celular.<br/>
                <b>TECNOLOGÍAS:</b> HTML / CSS / Javascript</p>
            </ProjectCard>    
            <hr/>
            <h3><b>PIEDRA, PAPEL, TIJERA, LAGARTO, SPOCK</b></h3>
            <ProjectCard cardData={pptlsCard}>
                <p><b>DESCRIPCIÓN:</b> el conocido juego de piedra, papel o tijera con el agregado de lagarto y Spock, cortesía de Sheldon de la serie "The Big Bang Theory". También es el resultado de una práctica, en este caso del curso de Javascript Dorian Designs.<br/>
                <b>TECNOLOGÍAS:</b> HTML / CSS / Javascript</p>
            </ProjectCard>    
            <hr/>
            <h3><b>TO DO LIST CON DRAG AND DROP</b></h3>
            <ProjectCard cardData={todoCard}>
                <p><b>DESCRIPCIÓN:</b> la clásica lista de tareas con almacenamiento en el localStorage y con el agregado de Drag and Drop para pasar las tareas de pendientes a terminadas. Una de las correcciones que me queda pendiente hacerle es que las tareas conserven el color elegido cuando abrimos una nueva sesión del navegador. Se cargan con el color por defecto.<br/>
                <b>TECNOLOGÍAS:</b> HTML / CSS / Javascript</p>
            </ProjectCard> 
            
            <ARMGoToTop /> 
        </section>
    )
}