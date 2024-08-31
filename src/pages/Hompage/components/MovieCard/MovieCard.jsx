import React from 'react'
import { Badge } from 'react-bootstrap'
import "./MovieCard.style.css"
import { useMoviesIdList } from '../../../../hooks/usePopularMovies'
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUsers } from '@fortawesome/free-solid-svg-icons'

const MovieCard = ({movie}) => {

  const {data:idList, isLoading, isError, error} = useMoviesIdList();

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
            <h1 className='card-title'>{movie.title}</h1>
            <p className='card-p'>{movie.overview}</p>
            <div className='genre-badge'>{movie.genre_ids.map((id)=>(<Badge bg="danger">{findId(id)}</Badge>))}</div>
            <div className='sub-section'>
                <div><FontAwesomeIcon icon={faStar} style={{color:"yellow"}}/>{movie.vote_average}</div>
                {/* <div><FontAwesomeIcon icon={faUsers} />{movie.popularity}</div> */}
                <div className={`age-badge ${movie.adult? "adult" : "children"}`}>{movie.adult?"18": "ALL"}</div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard