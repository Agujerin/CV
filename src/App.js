import {useState} from "react"
import { HashRouter, Route, Switch } from 'react-router-dom'
import ARMnavMenu from "./components/ARMnavMenu"
import ARMasideNav from './components/ARMasideNav'
import ARMhome from './components/ARMhome'
import ARMfooter from './components/ARMfooter'
import ARMabout from './components/ARMabout'
import ARMprojects from './components/ARMprojects'
import ARMform from './components/ARMform'
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  const [aside,setAside] = useState(false)
  
  const handleClick=(e)=> {if (e.target.id !== "asideNavMenu" && aside) setAside(false)}
  
  return (
    <div className="flex-container" onClick={handleClick}>
      <HashRouter>
        <ThemeProvider>
          <ARMnavMenu aside={aside} setAside={setAside}/>
          {aside && <ARMasideNav aside={aside} setAside={setAside}/>}
          <Switch>
            <Route exact path="/" component={ARMhome}/>
            <Route exact path="/about">
              <ARMabout />
            </Route>
            <Route exact path="/projects" component={ARMprojects}/>
            <Route exact path="/contact" component={ARMform}/>
            <Route path="*">
              <div className="error404">
                <i className="fas fa-bomb"></i>
                <h3>ERROR 404: La ruta seleccionada no existe</h3>
              </div>
            </Route>
          </Switch>
        </ThemeProvider>
      </HashRouter>
      <ARMfooter/>
    </div>
  )
}

export default App
