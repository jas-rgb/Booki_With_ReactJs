import { useState } from "react";


const Try=({title, description})=>{
    const [img , setImg] = useState(false)
    return (
        <div>
            
            <div onClick={()=>setImg(!img)}>
                <h1>{title}</h1>
                {img && <p>{description}</p>}
            </div>
           
        </div>
    )
}
export default Try;



