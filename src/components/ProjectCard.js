export default function ProjectCard({children,cardData}){
    let {img1,img2,web,repo} = cardData
    
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={img1} alt="webImg" className="img1"></img>
                <img src={img2} alt="webImg" className="img2"></img>
                <i className="fas fa-eye"></i>
            </div>
            {children}
            
            <div className="buttons-container">
                <button><a href={web} rel="noreferrer" target="_blank">WEB</a></button>
                <button><a href={repo} rel="noreferrer" target="_blank">CÓDIGO</a></button>
            </div>
        </div>
    )
}