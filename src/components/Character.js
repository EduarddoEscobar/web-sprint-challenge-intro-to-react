// Write your Character component here
import React, {useState, useEffect} from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: auto;
    display: flex;
    width: 40%;
    justify-content: space-between;
    font-size: 1.4rem;
`

export default function Character(props){
    const { character } = props;

    const [open, setOpen] = useState(false);

    function toggleOpen(){
        setOpen(!open);
    }

    return(
        <StyledDiv>

            {character.name}
            <button onClick={toggleOpen}>{open ? '🔺' : '🔻'}</button>
        </StyledDiv>
    )
}