import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Container} from './components/styles/App.styled.js'
import { DisplayContainer } from './components/styles/Display.styled'
//import { StyledForm } from './components/styles/Form.styled'

// const Container = styled.div`
// width: 100%;
// height: 100vh;
// margin: 0;`



function App() {

  const apiKey = '98e3fb1f'
  const [movie, setMovie] = useState(null)

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      const movie = await response.json();
       console.log(movie)
      setMovie(movie)

    } catch (error) {
      console.log(error)
    }
  }

    useEffect(()=> {
      getMovie('The Matrix')
    }, [])

  return (
    <Container>
     
     <Form movieSearch={getMovie}/>
    
     <MovieDisplay movie={movie}/>
     
    

    </Container>
  
  )
}

export default App
