import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [results, setResult] = useState(null);

    function handleClick(e) {
        e.preventDefault();
        const searchByRegex = new RegExp(inputValue, "i");

        const filteredMovie = movies.filter((movie)=>{
            return searchByRegex.test(movie.title)
        })
        
        setResult(filteredMovie)
    }

    function handleChange(e) {
        const input = e.target.value
        setInputValue(input);
    }

    // console.log(results)
    return (
        <div id="main">
            <form id="form">
                <input
                    type="text"
                    onChange={handleChange}
                    value={inputValue}
                    id="movie-input"> 
                </input>
                <button id="button" onClick={handleClick}>
                    Search
                </button>
            </form>
            <div id="result">
                {results &&
                    results.map((movie) => {
                        
                        return <div className="movie" key={movie.id}>{movie.title}</div>
                        
                    })
                }
            </div>
        </div>
    );
};

export default App;
