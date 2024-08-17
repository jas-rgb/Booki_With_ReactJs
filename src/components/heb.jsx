// import heb1 from '../images/hebergements/fred-kleber.jpg'
// import heb2 from '../images/hebergements/febrian-zakaria.jpg'
// import heb3 from '../images/hebergements/reisetopia.jpg'
// import heb4 from '../images/hebergements/annie-spratt.jpg'
// import heb5 from '../images/hebergements/marcus-loke.jpg'
// import heb6 from '../images/hebergements/nicate-lee.jpg'
import card from "../card.json"
import { Link } from "react-router-dom";


const Heb=()=>{
    return(
        <>
            <div className="hebergements-card">
                {
                    card.map((elt)=>( 
                        <Link  to={`/secondpage/${elt.id}`} className="linkpage">
                             <article className="cardH">
                                <img src={require("../images/hebergements/"+elt.image)} alt="chambre" classNameName="heb-image"/>
                                    <div className="cardH-content">
                                        <div className="cardH-txt">
                                            <h3 className="cardH-title">{elt.titre}</h3>
                                            <p className="cardH-subtitle">{elt.description}<span className="euro">€</span></p>
                                        </div>
                                        <div className="cardH-rating">
                                            <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                                            <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                                            <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                                            <i className="fa-xs fa-solid fa-star" aria-hidden="true"></i>
                                            <i className="fa-xs fa-solid fa-star neutral-star" aria-hidden="true"></i>
                                            <span className="sr-only"></span>
                                        </div>
                                    </div>
                             </article>
                        </Link>
                        ))
                } 
             </div>
                
            
        </>
    )
}

export default Heb;