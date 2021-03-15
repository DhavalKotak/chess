import React, { useRef } from 'react'
import { Tile } from './Tile/Tile'

const xAxis = ["a","b","c","d","e","f","g","h"]
const yAxis = ["1","2","3","4","5","6","7","8"]
const pieces = []
let currentPiece = null

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

export const ChessBoard = () => {
    const chessBoardRule = useRef(null)
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
        const chessrule = chessBoardRule.current
        if(currentPiece && currentPiece.classList.contains("piece") && chessrule){
            const minWidth = chessrule.offsetLeft
            const minHeight = chessrule.offsetTop
            const maxWidth = chessrule.clientWidth + chessrule.offsetLeft - 100
            const maxHeight = chessrule.clientHeight + chessrule.offsetTop - 100
            const x = e.clientX - 50
            const y = e.clientY - 50
            currentPiece.style.position = "absolute"
            if(x < minWidth)
                currentPiece.style.left = `${minWidth}px`
            else if (x > maxWidth)
                currentPiece.style.left = `${maxWidth}px`
            else 
                currentPiece.style.left = `${x}px`
            if(y < minHeight)
                currentPiece.style.top = `${minHeight}px`
            else if (y > maxHeight) 
                currentPiece.style.top = `${maxHeight}px`
            else 
                currentPiece.style.top = `${y}px`
        }
    }
    
    const releasePiece = e => {
        console.log(e)
        if(currentPiece)
            currentPiece = null
    }

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
        <div className="board" onMouseDown={e => selectPiece(e)} onMouseMove={e => movePiece(e)} onMouseUp={e => releasePiece(e)} ref={chessBoardRule}>
            {board}
        </div>
    )
}
