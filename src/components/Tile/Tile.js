import React from 'react'
import '../../index.css'

export const Tile = (props) => {
    if(props.number % 2 === 0)
        return <div className="tile black-tiles"><img src={props.image} alt=""/></div>
    else
        return <div className="tile white-tiles"><img src={props.image} alt=""/></div>
}