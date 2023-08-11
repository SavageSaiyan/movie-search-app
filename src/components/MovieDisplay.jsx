import React from "react";
import styled from "styled-components";
import { Title, MovieImage } from "./styles/App.styled";
import {
  DisplayContainer,
  DisplayZ,
  LittleDiv,
  BigDiv,
} from "./styles/Display.styled";

function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <DisplayZ>
        <BigDiv>
          <MovieImage src={movie.Poster} alt={movie.Title} />
        </BigDiv>
        <LittleDiv>
          <Title>{movie.Title}</Title>
          <h2>{movie.Genre}</h2>
          <h2>{movie.Year}</h2>
          {/* <h2>{movie.Ratings}</h2> */}
        </LittleDiv>
      </DisplayZ>
    );
  };

  const loading = () => {
    return <h1> No Movie to Display</h1>;
  };

  return movie ? loaded() : loading();
}

export default MovieDisplay;
