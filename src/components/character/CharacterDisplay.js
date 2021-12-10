// Write your Character component here
import React from "react";
import styled from 'styled-components';
import CharacterInfo from "./CharacterInfo";

const StyledDiv = styled.div`
    
    background: rgba(255,255,255, 0.5);
    border: 1px solid white;
    width: 40%;

    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size:1rem;
        margin-top: 2%;
    }

    &:hover{
        background: rgba(255,255,255, 0.8);
    }
`

export default function CharacterDisplay(props){
    const { character, open, toggleOpen } = props;

    return(
        <StyledDiv onClick={toggleOpen}>
            <div>
                <h2>{character.name}</h2>
                <p>{open ? '🔺' : '🔻'}</p>
            </div>
            {open && <CharacterInfo character={character} />}
            
        </StyledDiv>
    )
}