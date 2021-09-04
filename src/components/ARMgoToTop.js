import { useEffect, useState } from "react"

export default function ARMGoToTop(){
    const [scrollToTop, setScrollToTop] = useState(false)
    
    const goToTop=()=> window.scroll(0,0)
    
    const handleScroll=()=>{
        let pageYOffset = window.pageYOffset
        if(pageYOffset > 500) setScrollToTop(true)
        else setScrollToTop(false)
    }
    
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
            
        return ()=> window.removeEventListener('scroll', handleScroll)
    },[])
    
    return(
        <>
            {(scrollToTop) && <i className="fas fa-arrow-alt-circle-up go-top" title="Volver al principio" onClick={goToTop}></i>}
        </>
    )
}



