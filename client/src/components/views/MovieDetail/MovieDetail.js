import React, {useEffect, useState} from 'react'
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config'
import MainImage from '../LandingPage/Section/MainImage';
import MovieInfo from './Sections/MovieInfo';

function MovieDetail(props) {
    let movieId = props.match.params.movieId
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

        fetch(endpointInfo)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setMovie(res)
        })
    }, [])
    
  return (
    <div>
        {movie && <MainImage 
        // backdrop_path === undefined
        image={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`}
        title={movie.title}    // 원제: original_title
        text={movie.overview}/>}

        <div style={{width: '85%', margin: '1rem auto'}}>
            {/* Movie Info */}
            <MovieInfo 
            movie={movie}
            />
            <br />
            <div style={{display: 'flex', justifyContent: 'center', margin: '2rem'}}>
            <button>Toggle Action View</button>
            </div>
        </div>
    </div>
  )
}

export default MovieDetail