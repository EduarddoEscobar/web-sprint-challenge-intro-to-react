import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const CharactersDiv = styled.div`
`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState(null);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people').then(resp => {
      console.log(resp.data);
      setCharacters(resp.data);
    }).catch(error => console.error(error));
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharactersDiv>
        {characters && 
        characters.map((character, ind) =><Character character={character} key={ind}/>)
        }
      </CharactersDiv>
    </div>
  );
}

export default App;
