import { Link, useParams } from 'react-router-dom';
import card from "../card.json"
import NotFoundPage from '../pages/notfoundpage';


const Info =()=>{
    const { id } = useParams();
    const item = card.find(i => i.id === id);
    console.log(item);

    return(
        <div>
            <p>Informations sur l'image choisie</p>
            <p>L'ID récupéré dans l'URL est : {id}</p>
        {item ? (
          <>
            <div className="hebergements-cardI">
                <article className="cardHI">
                    <img src={require("../images/hebergements/"+item.image)} alt="chambre" classNameName="imageI"/>
                        <div className="cardH-content">
                            <div className="cardH-txt">
                                <h3 className="cardH-title">{item.titre}</h3>
                                <p className="cardH-subtitle">{item.description}<span className="euro">€</span></p>
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
            </div>
            
          </>
        ) : (
          <NotFoundPage/>
        //  <Link to={`/error/`}>
        //  </Link>
        )}
      </div>
    );
};    
export default Info;   



// import React from 'react';
// import { useParams } from 'react-router-dom';
// import data from '../card.json';

// const Info = () => {
//   const { id } = useParams();
//   const isIdInData = (id) => {
//     return data.some(item => item.id === id);
//   };

//   const isValid = isIdInData(id);

//   return (
//     <div>
//       {isValid ? (
//         <div>
//           <h1>{data.find(item => item.id === id).titre}</h1>
//           <img src={data.find(item => item.id === id).altxt} alt={data.find(item => item.id === id).titre} />
//           <p>{data.find(item => item.id === id).description}</p>
//         </div>
//       ) : (
//         <p>Désolé, l'ID {id} n'est pas valide.</p>
//       )}
//     </div>
//   );
// };

// export default Info;



// import React from 'react';
// import data from '../card.json';
// import { useParams } from 'react-router-dom';

// const Info = () => {
//   // Vérifier si un élément avec un ID spécifique existe
//   const { id } = useParams();

//   // Méthode 1 : utiliser some()
//   const hasItemWithId = data.some(item => item.id === id);

//   // Méthode 2 : utiliser find()
//   const itemWithId = data.find(item => item.id === id);
//   const hasItemWithId2 = !!itemWithId;

//   return (
//     <div>
//       {hasItemWithId ? (
//         <p>Un élément avec l'ID {id} a été trouvé.</p>
//       ) : (
//         <p>Aucun élément avec l'ID {id} n'a été trouvé.</p>
//       )}

//       {hasItemWithId2 ? (
//         <div>
          
//           <h2>{itemWithId.titre}</h2>
//           <p>{itemWithId.description}</p>
//         </div>
//       ) : (
//         <p>Aucun élément avec l'ID {id} n'a été trouvé.</p>
//       )}
//     </div>
//   );
// };

// export default Info;



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const Info = () => {
//   const { id } = useParams();
//   const [item, setItem] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('../card.json');
//         const data = await response.json();
//         const foundItem = data.find(i => i.id === id);
//         setItem(foundItem);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des données :', error);
//       }
//     };


    
//     fetchData();
//   }, [id]);

//   return (
//     <div>
//       {item ? (
//         <>
//           <h1>{item.titre}</h1>
//           <p>{item.description}</p>
//         </>
//       ) : (
//         <p>Chargement...</p>
//       )}
//     </div>
//   );
// };

// export default Info;





