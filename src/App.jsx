import { useEffect } from 'react';
import {characters} from '../data/data'
import "./App.css";
import characterDetail from "./componenet/CharacterDetail";
import CharacterList from "./componenet/CharacterList";
import NavBar from "./componenet/NavBar";

function App(){
  const[characters, setCharacters] = useState([])

  useEffect(()=>{
    async function feachData(){
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.jason();
      setCharacters(data.results.slice(0, 5))
    }
    feachData();
  } ,[]);
  return (
    <div className="app">
      <NavBar numOfResult={characters.length}/>
      <Main>
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