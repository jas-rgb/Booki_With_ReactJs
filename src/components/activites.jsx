import act from '../act.json'

const Act=()=>{
    return(
        <>
             <div class="Activites">
                {
                    act.map((elt)=>(
                        <div class="Activites-div">
                            <img src={require("../images/activites/"+elt.image)} class="Activites-div-images" alt="Image de bateau "/>
                            <h3 class="Activites-div-images-content"> {elt.titre}</h3>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Act; 