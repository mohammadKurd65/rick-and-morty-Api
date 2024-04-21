import {HeartIcon} from"@heroicons/react/24/outline";

function NavBar() {
return (
    <nav className="navbar">
        <div className="navbar__logo">logo😒</div>
        <input type="text" className="text-field" placeholder="search..." />
        <div className="navbar__result">Found X characters</div>
        <button className="heart">
            <HeartIcon className="icon"/>
        </button>
        <span className="badge"></span>
    </nav>
)
}

export default NavBar;