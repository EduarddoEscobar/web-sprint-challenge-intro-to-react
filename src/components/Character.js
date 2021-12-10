// Write your Character component here
import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import CharacterDisplay from "./CharacterDisplay";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`

export default function Character(props){
    const { character } = props;

    const [open, setOpen] = useState(false);

    function toggleOpen(){
        setOpen(!open);
    }

    return(
        <StyledDiv>
            <CharacterDisplay name={character.name} open={open} toggleOpen={toggleOpen}/>
        </StyledDiv>
    )
}