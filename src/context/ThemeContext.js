import { createContext, useState } from "react"

const ThemeContext = createContext()
const initialTheme = localStorage.getItem('userTheme')

const ThemeProvider=({children})=>{
    const [theme,setTheme] = useState(initialTheme)

    const handleTheme=(e)=>{
        if(e.target.id === "light"){
            setTheme("light") 
            localStorage.setItem('userTheme', 'light')
        }else {
            setTheme("dark")
            localStorage.setItem('userTheme', 'dark')
        }
    }
    
    const data = {theme,handleTheme}

    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider}
export default ThemeContext