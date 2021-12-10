import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/character/Character';
import Movie from './components/movie/Movie';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState(null);
  const [movies, setMovies] = useState(null);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people').then(resp => {
      setCharacters(resp.data);
    }).catch(error => console.error(error));
    axios.get('https://swapi.dev/api/films').then(resp => {
      setMovies(resp.data.results);
    }).catch(error => console.error(error));
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters && 
      characters.map((character, ind) =><Character character={character} key={ind}/>)
      }
      <h1 className="Header">Movies</h1>
      {movies && 
      movies.map((movie, ind) =><Movie movie={movie} key={ind}/>)
      }

    </div>
  );
}

export default App;
