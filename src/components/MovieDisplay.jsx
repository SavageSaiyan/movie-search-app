import React from 'react'; 
import styled from 'styled-components'
import {Title, MovieImage} from './styles/App.styled'






function MovieDisplay({movie}) {

    const loaded = () => {
        return (
            <>
                <Title>{movie.Title}</Title>
                <h2>{movie.Genre}</h2>
                <MovieImage src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Year}</h2>
            </>
        );
    };

    const loading = () => {
        return <h1> No Movie to Display</h1>
    }

  return movie? loaded() : loading()
}

export default MovieDisplay