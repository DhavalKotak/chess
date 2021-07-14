import React from 'react'
import '../../index.css'

export const Tile = (props) => {
    if(props.number % 2 === 0)
        return (
            <div className="tile black-tiles">
                {props.image && <div style={{backgroundImage: `url(${props.image})`}} className={`piece ${props.color}`}></div>}
            </div>
        )
    else
        return (
            <div className="tile white-tiles">
                {props.image && <div style={{backgroundImage: `url(${props.image})`}} className={`piece ${props.color}`}></div>}
            </div>
        )
}