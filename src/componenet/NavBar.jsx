import {HeartIcon} from"@heroicons/react/24/outline";
import { Characters } from "../../data/data";

function NavBar({numOfResult}) {
return (
    <nav className="navbar">
        <Logo/>
        <Search/>
        <searchResult numOfResult={numOfResult}/>
        <Favourite/>


        
        
        
    </nav>
)
}

export default NavBar;

function Logo(){
    return(
        <div className="navbar__logo">logo😒</div>
    )
}

function Search(){
    return(
<input type="text" className="text-field" placeholder="search..." />
    )
}

export function searchResult({numOfResult}){
    return(
<div className="navbar__result">Found {numOfResult} characters</div>
    )
}

function Favourite(){
    return(
<button className="heart">
            <HeartIcon className="icon"/>
        <span className="badge"></span>
        </button>
    )
}