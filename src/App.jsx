import {characters} from '../data/data'
import "./App.css";
import characterDetail from "./componenet/CharacterDetail";
import CharacterList from "./componenet/CharacterList";
import NavBar from "./componenet/NavBar";

function App(){
  const[characters, setCharacters] = useState(characters)
  return (
    <div className="app">
      <NavBar numOfResult={characters.length}/>
      <Main characters={characters}>
      <CharacterList characters={characters}/>
        <characterDetail/>
        <Main/>
    </div>
    
  )
}

function Main({children}){
  return(
<div className="main">
        {children}
      </div>
  )
}