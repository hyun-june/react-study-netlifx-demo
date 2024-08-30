import React from 'react'
import { Badge } from 'react-bootstrap'
import "./MovieCard.style.css"
import { useMoviesIdList } from '../../../../hooks/usePopularMovies'
import { Alert } from 'react-bootstrap';

const MovieCard = ({movie}) => {

  const {data:idList, isLoading, isError, error} = useMoviesIdList();
  console.log("ID LIST",idList)

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const findId = (id) => {
    const genre = idList.find((genre) => genre.id === id);
    return genre ? genre.name : 'Unknown';
  };

  return (
    <div className='movie-card' 
    style={{backgroundImage:"url("+`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`+")"}}>
        <div className='overlay'>
            <h1>{movie.title}</h1>
            {movie.genre_ids.map((id)=>(<Badge bg="danger">{findId(id)}</Badge>))}
            <div>
                <div>{movie.vote_average}</div>
                <div>{movie.popularity}</div>
                <div>{movie.adult?"over18": "under18"}</div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard