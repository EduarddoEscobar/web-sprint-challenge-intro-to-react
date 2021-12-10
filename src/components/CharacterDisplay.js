// Write your Character component here
import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    background: rgba(255,255,255, 0.5);
    border: 1px solid white;
    display: flex;
    width: 40%;
    justify-content: space-between;
    font-size: 1.4rem;

    &:hover{
        background: rgba(255,255,255, 0.8);
    }
`

export default function CharacterDisplay(props){
    const { name, open, toggleOpen } = props;

    return(
        <StyledDiv>
            {name}
            <button onClick={toggleOpen}>{open ? '🔺' : '🔻'}</button>
        </StyledDiv>
    )
}