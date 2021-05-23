import './Movie.css'
import React, { useState, useEffect} from 'react';





export default function Movie({match}) {
    const [movie, setMovie] = useState({})

    useEffect(() => {
        async function fetchMovie(){
            const response = await fetch(`http://www.omdbapi.com/?apikey=86d01909&i=${match.params.id}`)
            const jsonResponse = await response.json()
            setMovie(jsonResponse)
        }
        fetchMovie()
    },[match.params.id])

    return (
        <div className="movieWrap" key={match.params.id}>
            <div className="movie" key={match.params.id}>
                <img src={movie.Poster} alt={movie.Title}/>
                <p>In order to watch <span style={spanStyle}>{movie.Title}</span> you need to Log In.</p>
                <div className="loginForm">
                    <input type="text" placeholder="Username" className="movieInput"/>
                    <input type="password"  placeholder="Password" className="movieInput"/>
                    <input type="submit" value="Login" className="loginBtn"/>
                </div>
            </div>
        </div>
    )
}

const spanStyle={
    color:'brown',
    fontWeight:'bold'
}