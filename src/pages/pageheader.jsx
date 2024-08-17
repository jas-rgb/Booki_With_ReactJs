import Header from "../components/header";
import Form from '../components/formulaire'
import Heb from '../components/heb'
import Pop from '../components/pop'
import Act from '../components/activites'
import Foot from "../components/footer";
import { Link } from "react-router-dom";


const Pagebox1=()=>{
    return(
        <>
            <Header/>
            <Form/>
            <main>
                <div className="hebergements-and-populaires">
                    <section className="hebergements">
                        <div className="hebergements-title">
                            <h2 className="sec-title">Hébergements à Marseilles</h2>
                        </div>
                        <Heb/>
                    </section>
                    <section className="populaires">
                        <div className="populaires-title">
                            <h2 className="section-title">Les plus populaires</h2>
                            {/* <!-- élément html pour ajouter la mini courbe bleue ci --> */}
                            <i className="fa-solid fa-chart-line" aria-hidden="true"></i>
                        </div>
                        <Pop/>
                    </section>
                </div>
                <div className="Activites-titre">
                    <div>
                        <h2 className="Activites-Marseilles">Activités à Marseilles</h2>
                    </div>
                    <Act/> 
                </div>
                <footer>
                    <Foot/>
                </footer>
            </main>

            {/* <Link to={`/secondpage`}>secondpage</Link> <br />
            <Link to={`/thirdpage`}>thirdpage</Link> */}
        </>
        
    )
    
}




export default Pagebox1;