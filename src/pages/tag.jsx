import Try from "../components/accueil";
import {Link} from 'react-router-dom'

const Call=()=>{
    return (
        <>
            <Try 
            title="Formation"
            description={<div>Reactjs is a java script's framework <br/>Java scipt is a language that helps to dynamise html's pages <br/>It's really good to work with it and everyone can use it easy</div>}/>
            <div>
                <p>Do you want to learn how you can use this framework as i do ?!<br/>Let's start our programming with ReactJs</p>
            </div>
            <Link to={`secondpage/`}>secondpage </Link>
        </>
        
    )
    
}
export default Call;

