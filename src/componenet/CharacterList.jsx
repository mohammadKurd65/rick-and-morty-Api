import {EyeIcon} from"@heroicons/react/24/outline"
import { useState } from "react";

function CharacterList({Characters}) {
    
return (
    <div className="characters-list">
        {
            Characters.map((item)=> (
                <character key={item.id} item={item}/>
            ))
        }
    </div>
)
}

export default CharacterList;

function character({item}){
    return (
    <div className="list__item">
        <img src={item.image} alt={item.title} />
<characterName item={item}/>
        <characterInfo item={item}/>
        <button className="icon red">
            <EyeIcon/>
        </button>
    </div>
    )
}

function characterName({item}){
    return(
        <h3 className="name">
        <span>{item.gender === "Male" ? " 😎" : "🤦‍♀️"}</span>
        <span>{item.name}</span>
    </h3>
    )
}

function characterInfo({item}){
    return(
        <div className="list-item__info info">
            <span className={`status ${item.status === "Dead" ? "red" : ""}`}></span>
            <span>{item.status}</span>
            <span> - {item.specties}</span>
        </div>
    )
}