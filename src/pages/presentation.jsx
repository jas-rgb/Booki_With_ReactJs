import { Link } from "react-router-dom";
import Affichage from "../components/affichage";

const Vision=()=>{
    return(
        <>
         <Affichage/>
         <Link to={`/`}>firstpage</Link>
        
        </>
    )

}

export default Vision;