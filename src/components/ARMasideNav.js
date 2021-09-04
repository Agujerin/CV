import { useContext } from "react"
import { NavLink } from "react-router-dom"
import ThemeContext from "../context/ThemeContext"

export default function ARMasideNav({aside,setAside}){
    const handleClick=()=> aside && setAside(false)
    
    const {theme} = useContext(ThemeContext)
    
    return(
        <aside className={`aside-nav-menu ${theme}`} id="asideNavMenu">
            <ul className="aside-nav-menu-list">
                <li><NavLink exact to="/" activeClassName="active-aside" onClick={handleClick}>INICIO</NavLink>
                </li>
                <li><NavLink exact to="/about" activeClassName="active-aside" onClick={handleClick}>PERFIL</NavLink>
                </li>
                <li><NavLink exact to="/projects" activeClassName="active-aside" onClick={handleClick}>GALERIA DE TRABAJOS</NavLink>
                </li>
                <li><NavLink exact to="/contact" activeClassName="active-aside" onClick={handleClick}>CONTACTO</NavLink>
                </li>
            </ul>
        </aside>
    )
}