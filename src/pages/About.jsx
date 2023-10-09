import React from "react";
import NavBar from "../components/NavBar";

const About =() => {
    return (
        <div>
            <NavBar/>
            <div className="bg-gray-100 h-screen flex items-start justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">About Us</h1>
        <p className="text-gray-600">
            The Rick and Morty API is a REST(ish) and GraphQL API based on the television show [Rick and Morty].
            <p>You will have access to about hundreds of characters, images, locations and episodes.
                <p>The Rick and Morty API is filled with canonical information as seen on the TV show.
                    <p className="text-blue-600"><a href='https://rickandmortyapi.com/' target='_blank'>Rick And Morty Official</a></p>
                </p>
            </p>
        </p>
      </div>
    </div>
        </div>
        
    )
}
export default About;