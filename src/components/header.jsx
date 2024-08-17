import { useState } from "react";
import logo  from '../images/logo/Booki@3x.png'



import act1 from '../images/activites/reno-laithienne.jpg'
import act2 from '../images/activites/paul-hermann.jpg'
import act3 from '../images/activites/kilyan-sockalingum.jpg'
import act4 from '../images/activites/florian-wehde.jpg'

import {FaLocationDot} from "react-icons/fa";

const Header=()=>{
    return(
        <body>
            <div className="barre-chargement">
                <div className="barre" id="barre"></div>
            </div>
            <div className="menu">
                <header className="menu-entete">
                    <div className="limitedWidthBlock">
                    <a>
                        <img src={logo} alt="Logo de l'entreprise"  className="logo"/>
                    </a>
                    </div>  
                    <nav className="nav">
                        <ul>
                            <li><a className="navi" href="#">Hébergements</a></li>
                            <li><a className="navi" href="#">Activités</a></li>
                        </ul>
                    </nav>
                    
                </header>
            </div>
           
        </body>
    )
    
}
export default Header;