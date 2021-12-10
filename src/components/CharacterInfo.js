import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
    background-color: rgba(255,255,255, 0.7);
    border-color: 1px solid red;
`

export default function CharacterInfo(props){
    const {character} = props;

    return(
        <StyledInfo>
            <h5>Gender: {character.gender}</h5>
            <h5>Height: {character.height}</h5>
            <h5>Mass: {character.mass}</h5>
            <h5>BirthYear: {character.birth_year}</h5>
            <h5>Eye Color: {character.eye_color}</h5>
            <h5>Hair Color: {character.hair_color}</h5>
        </StyledInfo>
    )
}