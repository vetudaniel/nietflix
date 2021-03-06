import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './Movies.css'


export default function Movie() {
    let [movies, setMovies] = useState([])
    let [userInput, setUserInput] = useState('')


    const handleUserInput = (e) => {
        if(e.target.value !== ''){
            setUserInput(e.target.value)
        }  
    }

    const handleSearch = async () => {
        if(userInput !== ''){
            const response = await fetch(`https://www.omdbapi.com/?apikey=86d01909&s=${userInput}&page=1`)
            if(response.ok){
                const jsonResponse = await response.json()
                const usableData = jsonResponse.Search
                setMovies(usableData)
           }
        }
    }

    return (
        <>
         <div className="showcase">
            <p>Browse now over <span>10000 TV Series, Movies</span> and much more...</p>
            <div className="showcase-form">
                <input type="text" placeholder="Search..." onChange = {handleUserInput} className="showcase-input"/>
                <input type="submit" onClick={handleSearch} className="loginBtn"/>
            </div>
        </div>
        <div className="movies-container">
            {
                movies && movies.map(movie => {
                    return(
                        
                            <Link to={`login/${movie.imdbID}`} key={movie.imdbID}>
                                <div className="movieCard">
                                    <img className="moviePoster" src={movie.Poster} alt={movie.Title}/>
                                    <h3>{movie.Title}</h3>
                                </div>
                            </Link>
                    )
                })
            }
         </div>
        </>
    )
}
