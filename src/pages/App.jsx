import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"
import Search from "../components/Search"



export default function App() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const fetchCharacters = async() => {
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    const data = await response.json()
    console.log(data.results)
    setCharacters(data.results)
    setFilteredCharacters(data.results);
  }
  useEffect(()=>{fetchCharacters()},[])

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };


  return (
    <div className="w-full bg-white flex flex-wrap justify-center gap-4">
      <NavBar />
      <Search onSearch={handleSearch} />
      {filteredCharacters.map((character) => {
        return (
          <div key={character.id} className="border-blue-500 border-2 p-1 rounded-lg">
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <h1>{character.name}</h1>
            <p>{character.gender}</p>
            <Link state={character} to={`/character/${character.id}`}>
              <p className="text-orange-600">View Character</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}