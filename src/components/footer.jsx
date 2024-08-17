import footer from '../footer.json'

const Foot=()=>{
    return(
        <>
            <div className="box-footer">
                {
                    footer.map((elt)=>(
                        <div className="propos">
                            <h3>{elt.titre}</h3>
                            <p>{elt.details}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Foot;