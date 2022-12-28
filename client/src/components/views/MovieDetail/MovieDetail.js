import React, {useEffect, useState} from 'react'
import { API_KEY, API_URL } from '../../Config'

function MovieDetail(props) {
    let movieId = props.match.params.movieId
    const [cast, setCast] = useState([]);
    const [crew, setCrew] = useState([]);

    useEffect(() => {
        console.log(props.match)

        fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
    }, [])
    
  return (
    <div></div>
  )
}

export default MovieDetail