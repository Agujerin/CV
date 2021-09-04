export default function ARMmodal({response}){
    const handleReload=()=> window.location.reload()
    
    return(
        <div className="modal">
            <p>{response}</p>
            <button onClick={handleReload}>OK</button>
        </div>
    )
}