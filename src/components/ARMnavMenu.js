import { useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import ThemeContext from "../context/ThemeContext"

export default function NavMenu({aside,setAside}){
    const {theme,handleTheme} = useContext(ThemeContext)
    
    useEffect(()=>{
        if(theme === "dark"){
            document.body.classList.remove("light")
            document.body.classList.add(`${theme}`)
        } else {
            document.body.classList.remove("dark")
            document.body.classList.add(`${theme}`)
        }
    },[theme])
    
    const handleOpenMenu=()=> {
        window.scroll(0,0)
        aside? setAside(false) : setAside(true)
    }
    
    const goHome=()=>{
        window.location.hash = "/"
        window.scroll(0,0)
    }
    
    return(
        <nav className={`nav-menu ${theme}`}>
            <i className="fas fa-bars nav-menu-bars" onClick={handleOpenMenu}></i>
            <h3 className="nav-menu-title" onClick={goHome}>Agustín Rodríguez Minaverry</h3>
            <NavLink exact to="/" activeClassName="active">INICIO</NavLink>
            <NavLink exact to="/about" activeClassName="active">PERFIL</NavLink>
            <NavLink exact to="/projects" activeClassName="active">GALERÍA DE TRABAJOS</NavLink>
            <NavLink exact to="/contact" activeClassName="active">CONTACTO</NavLink>
            {(theme === "dark")
             ? <i className="fas fa-sun" id="light" onClick={handleTheme}></i>
             : <i className="fas fa-moon" id="dark" onClick={handleTheme}></i>
            }
        </nav>
    )
}