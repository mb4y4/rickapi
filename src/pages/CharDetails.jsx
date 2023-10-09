import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

function CharDetails() {
    const character = useLocation().state;

    console.log(character)
    return (
        <div>
            <NavBar/>
            <div className="flex items-start justify-center">
                <div className="flex items-start justify-center border-blue-500 border-2 p-1 rounded-lg shadow-md">
                    <img src = {character.image}/>
                </div>
            </div>
            <h1 className="flex items-start justify-center">{character.name}</h1>
            <h1 className="flex items-start justify-center">{character.gender}</h1>
            <h1 className="flex items-start justify-center">{character.species}</h1>
        </div>
        
    )
}

export default CharDetails;