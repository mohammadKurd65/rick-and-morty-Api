import { useEffect, useState } from 'react';
import {characters} from '../data/data'
import "./App.css";
import characterDetail from "./componenet/CharacterDetail";
import CharacterList from "./componenet/CharacterList";
import NavBar from "./componenet/NavBar";
import Loader from './componenet/Loader';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast/headless';

function App(){
  const[characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    async function feachData(){
    try {
      setIsLoading(true)
      const res = await fetch("https://rickandmortyapi.com/api/character");
      if(!res.ok) throw new Error("somthing went wrong!..")
      const data = await res.jason();
      setCharacters(data.results.slice(0, 5))
      // setIsLoading(false);
    } catch (error) {
      toast.error(error.message)
    } finally{
      setIsLoading(false)
    }
    }
    feachData();
  } ,[]);
  return (
    <div className="app">
      <Toaster />
      <NavBar numOfResult={characters.length}/>
      <Main>
      <CharacterList characters={characters} isLoading={isLoading}/>
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