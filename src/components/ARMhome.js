import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

export default function ARMhome(){
    const {theme} = useContext(ThemeContext)
    
    return(
        <section className={`home-section ${theme}`}>
            <div>
                <p className="presentation">Hola, mi nombre es<br/>
                    <span>Agustín Rodríguez Minaverry</span><br/>
                    soy<br/>
                    <span>DESARROLLADOR WEB FRONT - END</span><br/>
                </p>
                <div className="links">
                    <a href="https://github.com/Agujerin" rel="noreferrer" target="_blank" title="Mi Github"><i className="fab fa-github"></i></a>
                    <a href="https://ar.linkedin.com/in/agust%C3%ADn-rodr%C3%ADguez-minaverry-267445212" rel="noreferrer" target="_blank" title="Mi Linkedin"><i className="fab fa-linkedin"></i></a>
                </div>
                <hr/>
                <p className="presentation">Tecnologías:<br/>
                    <span>HTML / CSS / SASS / Javascript / React JS</span>
                </p>
            </div>
            <div className="image"></div>
            <p className="declaration">Me encuentro en la búsqueda para poder realizar mis primeras experiencias laborales dentro del mundo del desarrollo web y la programación.
            </p>
        </section>
    )
}