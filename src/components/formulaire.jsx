// import image from '../images/hebergements/emile-guillemot.jpg'
// import image1 from '../images/activites/kilyan-sockalingum.jpg'
// import '../CSS/style.css';

const Form=()=>{
    return(
        <body>
            <div className="menu-title">
                <h2>Trouvez votre hébergement pour des vacances de reves</h2>
                <p>En plein centre-ville ou en pleine nature</p>
            </div>
            <div className="infos">
                <div className="localisation">
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="ville">
                    <input value={"Marseilles , France"} className="info-value" />
                </div>
                <div className="but-recherche">
                    <button className="recherche"> Rechercher</button>
                </div>
            </div>
            <div className="filtres">  
                <div className="fil-title">
                    <h2>Filtres</h2>
                </div>
                <div className="fil-space">
                    <button className="fil-content">
                        <h2>Economique</h2>
                        {/* icone d'économie */}
                    </button>
                </div>
                <div className="fil-space">
                    <button className="fil-content">
                        <h2>Familial</h2>
                        {/* icone de Familial */}
                </button>
                </div>
                <div className="fil-space">
                    <button className="fil-content">
                        <h2>Romantique</h2>
                        {/* icone de Romantique */}
                    </button>
                </div>
                <div className="fil-space">
                    <button className="fil-content">
                        <h2>Nos Pépites</h2>
                        {/* icone de Nos Pépites */}
                    </button>
                </div>
            </div>
            <div className="description">
                <p>
                    Plus de 500 logements sont disponibles dans cette ville
                </p>
            </div>
        </body>
        
    )
}
export default Form;