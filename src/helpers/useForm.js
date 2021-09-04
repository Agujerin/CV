import { useState } from "react"

export const useForm=(initialForm,validations)=>{
    const [form,setForm] = useState(initialForm)
    const [errors,setErrors] = useState({})
    const [loader,setLoader] = useState(false)
    const [response,setResponse] = useState(null)
    
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    
    const handleBlur=()=> setErrors(validations(form))
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        if(form.name !== "" && form.email !== "" && form.subject !== "" && form.message !== "" && Object.keys(errors).length === 0){
            setLoader(true) 
            fetch("https://formsubmit.co/ajax/minaverryagustin@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: `${form.name}`,
                    email: `${form.email}`,
                    subject: `${form.subject}`,
                    message: `${form.message}`
                })
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                setResponse("El formulario fue enviado exitosamente")
                setLoader(false)
                setForm(initialForm)
            })
            .catch(error =>{
                console.log(error)
                setResponse("Hubo un error en el envío del formulario")
                setLoader(false)
            })
        }else return
    }
    
    return {
        form,errors,loader,response,handleChange,handleSubmit,handleBlur
    }
}