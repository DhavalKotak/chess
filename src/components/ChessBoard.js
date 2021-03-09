import React from 'react'
import Tile from './Tile/Tile'

const xAxis = ["a","b","c","d","e","f","g","h"]
const yAxis = ["1","2","3","4","5","6","7","8"]

export const ChessBoard = () => {
    const board = []
    for(let j = yAxis.length - 1;j >= 0; j--){
        for(let i = 0;i < xAxis.length; i++){
            const number = i + j + 2
            board.push(<Tile number={number}/>)
        }
    }
    
    return(
        <div className="board">
            {board}
        </div>
    )
}