import React from 'react'

const xAxis = ["a","b","c","d","e","f","g","h"]
const yAxis = ["1","2","3","4","5","6","7","8"]

export const ChessBoard = () => {
    const board = []

    for(let j = yAxis.length - 1;j >= 0; j--){
        for(let i = 0;i < xAxis.length; i++){
            board.push(
                <div className="tile">[{xAxis[i]} {yAxis[j]}]</div>
            )
        }
    }
    
    return(
        <div className="board">
            {board}
        </div>
    )
}