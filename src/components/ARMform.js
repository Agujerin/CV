import Loader from "./Loader"
import {useForm} from "../helpers/useForm.js"
import ARMmodal from "./ARMmodal"

let initialForm = {
    name: "",
    email: "",
    subject: "",
    message: ""
}

const validations=(form)=>{
    let errors = {}
    const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if(!form.name.trim()) errors.nameError = "Debe completar su nombre"
    else if (!nameRegex.test(form.name.trim())) errors.nameError = "Este campo solo acepta letras y espacios en blanco"
    
    if(!form.email.trim()) errors.emailError = "Debe completar su email"
    else if(!emailRegex.test(form.email.trim())) errors.emailError = "Debe ingresar un email válido"
    
    if(!form.subject.trim()) errors.subjectError = "Debe completar el asunto del mensaje"
    
    if(!form.message.trim()) errors.messageError = "Debe completar el mensaje"
     
    return errors
}


export default function ARMform(){    
    const {form,loader,response,errors,handleChange,handleSubmit,handleBlur} = useForm(initialForm,validations)
    
    let {name,email,subject,message} = form
    let {nameError,emailError,subjectError,messageError} = errors
    
    return(
        <section className="form-container">
            <h2>CONTACTO</h2>
            
            {(response) 
            ? <ARMmodal response={response} />
            : <form className="contact-form" onSubmit={handleSubmit} onBlur={handleBlur}>
                <label htmlFor="name">NOMBRE</label>
                {nameError && <h5>{nameError} <i className="fas fa-exclamation-triangle"></i></h5>}
                <input type="text" name="name" id="name" placeholder="Introduzca su nombre" value={name} onChange={handleChange}/>
                <label htmlFor="email">E - MAIL</label>
                {emailError && <h5>{emailError} <i className="fas fa-exclamation-triangle"></i></h5>}
                <input type="email" name="email" id="email" placeholder="Introduzca su email" value={email} onChange={handleChange}/>
                <label htmlFor="subject">ASUNTO</label>
                {subjectError && <h5>{subjectError} <i className="fas fa-exclamation-triangle"></i></h5>}
                <input type="text" name="subject" id="subject" placeholder="Asunto" value={subject} onChange={handleChange}/>
                <label htmlFor="message">MENSAJE</label>
                {messageError && <h5>{messageError} <i className="fas fa-exclamation-triangle"></i></h5>}
                <textarea rows="10" name="message" id="message" value={message} onChange={handleChange} placeholder="Su mensaje..."></textarea>
                {(loader)? <Loader/> : <button type="submit">ENVIAR</button>}
            </form> 
            }
            
            <div className="links-container">
                <a href="https://www.instagram.com/agujerin/" rel="noreferrer" target="_blank" title="Mi Instagram"><i className="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/agustin.rodriguezminaverry.9/" rel="noreferrer" target="_blank" title="Mi Facebook"><i className="fab fa-facebook"></i></a>
                <a href="https://github.com/Agujerin" rel="noreferrer" target="_blank" title="Mi Github"><i className="fab fa-github"></i></a>
                <a href="https://ar.linkedin.com/in/agust%C3%ADn-rodr%C3%ADguez-minaverry-267445212" rel="noreferrer" target="_blank" title="Mi Linkedin"><i className="fab fa-linkedin"></i></a>
            </div>
        </section>
    )
}