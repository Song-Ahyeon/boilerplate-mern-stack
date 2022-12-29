import React, {useEffect, useState} from 'react'
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config'
import MainImage from '../LandingPage/Section/MainImage';
import MovieInfo from './Sections/MovieInfo';
import { Button, Row } from 'antd';
import GridCards from '../commons/GridCards';

function MovieDetail(props) {
    let movieId = props.match.params.movieId
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);
    const [movie, setMovie] = useState([]);
    const [crewToggle, setCrewToggle] = useState(false);
    const [castToggle, setCastToggle] = useState(false);
    useEffect(() => {
        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

        fetch(endpointInfo)
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            setMovie(res)
        })
    }, [])

    const loadCast = () => {
        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        showCast(endpointCrew)
    }

    const loadCrew = () => {
        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        showCrew(endpointCrew)
    }

    const showCast = (props) => {
        fetch(props)
        .then(res => res.json())
        .then(res => {
            setCast(res.cast)
            console.log('cast')
            console.log(res.cast)
        })
        setCastToggle(true)
        setCrewToggle(false)
    }

    const showCrew = (props) => {
        fetch(props)
        .then(res => res.json())
        .then(res => {
            setCrew(res.crew)
            console.log('crew')
            console.log(res.crew)
        })
        setCrewToggle(true)
        setCastToggle(false)
    }

    const hideAll = () => {
        setCastToggle(false)
        setCrewToggle(false)
    }
    
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
            <button onClick={loadCast} style={{margin: '0 5px 0 0'}}>Cast</button>
            <button onClick={loadCrew} style={{margin: '0 5px 0 0'}}>Crew</button>
            <button onClick={hideAll} style={{margin: '0 5px 0 0'}}>Hide</button>
            </div>

            {castToggle && 
            <Row gutter={[16, 16]}>
                <h3 style={{textAlign: 'center'}}>cast</h3>
                {cast && cast.map((cast, index) => (
                <React.Fragment key={index}>
                    <GridCards image={cast.profile_path ? 
                    `${IMAGE_BASE_URL}w500${cast.profile_path}1` : null}
                    id={cast.cast_id}
                    name={cast.name}
                    />
                </React.Fragment>
                ))}
            </Row>}

            {crewToggle && 
            <Row gutter={[16, 16]}>
                <h3 style={{textAlign: 'center'}}>crew</h3>
                {crew && crew.map((crew, index) => (
                <React.Fragment key={index}>
                    <GridCards image={crew.profile_path ? 
                    `${IMAGE_BASE_URL}w500${crew.profile_path}1` : null}
                    id={crew.cast_id}
                    name={crew.name}
                    />
                </React.Fragment>
                ))}
            </Row>}
            
        </div>
    </div>
  )
}

export default MovieDetail