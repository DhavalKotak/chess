import React from 'react'
import { Tile } from './Tile/Tile'

const xAxis = ["a","b","c","d","e","f","g","h"]
const yAxis = ["1","2","3","4","5","6","7","8"]
const pieces = []

for(let i = 0; i < 9; i++)
    pieces.push({image: "img/b-pawn.png" , x: i, y: 6})
for(let i = 0; i < 9; i++)
    pieces.push({image: "img/w-pawn.png" , x: i, y: 1})
for(let i = 0; i < 2; i++){
    let color = (i === 0) ? "w" : "b"
    let y = (i === 0) ? 0 : 7
    pieces.push({image: `img/${color}-king.png`, x: 4, y: y})
    pieces.push({image: `img/${color}-queen.png`, x: 3, y: y})
    pieces.push({image: `img/${color}-bishop.png`, x: 5, y: y})
    pieces.push({image: `img/${color}-bishop.png`, x: 2, y: y})
    pieces.push({image: `img/${color}-knight.png`, x: 6, y: y})
    pieces.push({image: `img/${color}-knight.png`, x: 1, y: y})
    pieces.push({image: `img/${color}-rook.png`, x: 7, y: y})
    pieces.push({image: `img/${color}-rook.png`, x: 0, y: y})
}

let currentPiece = null

const selectPiece = e => {
    if(e.target.classList.contains("piece")){
        const x = e.clientX - 50
        const y = e.clientY - 50
        e.target.style.position = "absolute"
        e.target.style.top = `${y}px`
        e.target.style.left = `${x}px`
    }
    currentPiece = e.target
}

const movePiece = e => {
    if(currentPiece && currentPiece.classList.contains("piece")){
        const x = e.clientX - 50
        const y = e.clientY - 50
        currentPiece.style.position = "absolute"
        currentPiece.style.top = `${y}px`
        currentPiece.style.left = `${x}px`
    }
}

const releasePiece = e => {
    if(currentPiece)
        currentPiece = null
}

export const ChessBoard = () => {
    const board = []
    for(let j = yAxis.length - 1;j >= 0; j--){
        for(let i = 0;i < xAxis.length; i++){
            const number = i + j + 2
            let imgUrl = undefined
            pieces.forEach(p => {
                if (p.x === i && p.y === j) 
                    imgUrl = p.image
            })
            board.push(<Tile number={number} key={xAxis[j]+yAxis[i]} image={imgUrl}/>)
        }
    }
    
    return(
        <div className="board" onMouseDown={e => selectPiece(e)} onMouseMove={e => movePiece(e)} onMouseUp={e => releasePiece(e)}>
            {board}
        </div>
    )
}
