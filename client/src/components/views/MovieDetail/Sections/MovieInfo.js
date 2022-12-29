import React from 'react'
import { Descriptions, Badge } from 'antd'

function MovieStatus(props){
    // alert(JSON.stringify(props))
    if(props.status === 'Released') {
        return(<Badge status='processing' />)
    } else {
        return(<Badge status='Warning' />)
    }
}

function MovieInfo(props) {
    let {movie} = props;
  return (
    <Descriptions title="Movie Info" bordered>
        <Descriptions.Item label="Title">{movie.title}</Descriptions.Item>
        <Descriptions.Item label="Release date">{movie.release_date}</Descriptions.Item>
        <Descriptions.Item label="Revenue">{movie.revenue}</Descriptions.Item>
        <Descriptions.Item label="Runtime">{movie.runtime}</Descriptions.Item>
        <Descriptions.Item label="Vote average" span={2}>{movie.vote_average}</Descriptions.Item>
        <Descriptions.Item label="Vote count">{movie.vote_count}</Descriptions.Item>
        <Descriptions.Item label="Status">
            <MovieStatus status={movie.status} />
            {movie.status}</Descriptions.Item>
        <Descriptions.Item label="Popularity">{movie.popularity}</Descriptions.Item>
    </Descriptions>
  )
}

export default MovieInfo