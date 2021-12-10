// Write your Character component here
import React from "react";
import styled from 'styled-components';
import MovieInfo from "./MovieInfo";

const StyledDiv = styled.div`
    
    background: rgba(255,255,255, 0.5);
    border: 1px solid white;
    width: 40%;

    div.MovieTitleBar{
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

export default function MovieDisplay(props){
    const { movie, open, toggleOpen } = props;

    return(
        <StyledDiv onClick={toggleOpen}>
            <div className="MovieTitleBar">
                <h2>{movie.title}</h2>
                <p>{open ? '🔺' : '🔻'}</p>
            </div>
            {open && <MovieInfo movie={movie} />}
            
        </StyledDiv>
    )
}