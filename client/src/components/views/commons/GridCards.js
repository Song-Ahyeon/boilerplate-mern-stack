import React, {useEffect} from 'react'
import { Col } from 'antd'

function GridCards(props) {
    useEffect(() => {

    }, [props])
    
  return (
    <Col lg={6} xs={24}>
        <div style={{position: 'relative'}}>
            <a href={`/movie/${props.movieId}`}>
                <img style={{width: '100%', height: '320px'}} src={props.image} alt={props.movieName}/>
            </a>
            <a style={{contentAlign: 'center'}}>{props.movieName}</a>
        </div>
    </Col>
  )
}

export default GridCards