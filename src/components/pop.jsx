// import pop1 from '../images/hebergements/emile-guillemot.jpg'
// import pop2 from '../images/hebergements/aw-creative.jpg'
// import pop3 from '../images/hebergements/febrian-zakaria2.jpg'
import pop from '../pop.json'

const Pop=()=>{
    return(
        <>
            <div className="populaires-cards">
                {
                    pop.map((elt)=>(
                        <article className="card">
                            <img src={require("../images/hebergements/"+elt.image)} className="i2"  alt="Image de la chambre d'hôtel montrant un lit"/>
                                <div className="card-content">
                                    <div className="card-txt">
                                        <h3 className="card-title">{elt.titre}</h3>
                                        <p className="card-subtitle">{elt.description}<span className="euro">€</span></p>
                                    </div>
                                    <div className="card-rating">
                                        <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                                        <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                                        <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                                        <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                                        <i className="fa-xs fa-solid fa-star neutral-star" aria-hidden="true"></i>
                                        <span className="sr-only">Note de 4 sur 5</span>
                                    </div>
                                </div>
                    </article> 
                    ))
                }  
            </div>
            
        </>
    )
}
export default Pop;