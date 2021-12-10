import React from 'react';
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
    from{
        margin-top: -10%;
        opacity: 0;
    }
    to{
        margin-top: 0;
        opacity: 1;
    }
`

const StyledInfo = styled.div`
    background-color: rgba(255,255,255, 0.7);
    opacity: 0;
    animation: ${kf} 0.3s ease-in-out forwards;
    div.Movie-info{
        text-align: left;
    }
`

export default function CharacterInfo(props){
    const {movie} = props;

    return(
        <StyledInfo>
            <p><strong>Opening</strong>: {movie.opening_crawl}</p>
            <div className="Movie-info">
                <h5>Director: {movie.director}</h5>
                <h5>Producer: {movie.producer}</h5>
                <h5>Release Date: {movie.release_date}</h5>
            </div>
        </StyledInfo>
    )
}