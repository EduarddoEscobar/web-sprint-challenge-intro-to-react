import React, {useState} from "react";
import styled from 'styled-components';
import MovieDisplay from "./MovieDisplay";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`

export default function Movie(props){
    const { movie } = props;

    const [open, setOpen] = useState(false);

    function toggleOpen(){
        setOpen(!open);
    }

    return(
        <StyledDiv>
            <MovieDisplay movie={movie} open={open} toggleOpen={toggleOpen}/>
        </StyledDiv>
    )
}