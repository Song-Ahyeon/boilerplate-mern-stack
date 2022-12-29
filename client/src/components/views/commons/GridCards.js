import React, {useEffect} from 'react'
import { Col } from 'antd'

function GridCards(props) {
    useEffect(() => {

    }, [props])
      let nameSearch = `https://www.google.com/search?q=${props.name}`
    
  return (
    <Col lg={6} xs={24}>
        <div style={{position: 'relative'}}>
            <a href={`/movie/${props.id}`}>
                <img style={{width: '100%', height: '320px'}} src={props.image} alt={props.movieName}/>
            </a>
            <a style={{contentAlign: 'center'}} href={nameSearch}>{props.name}</a>
        </div>
    </Col>
  )
}

export default GridCards