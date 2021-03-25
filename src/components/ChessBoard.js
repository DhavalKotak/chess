import React, { useRef, useState } from 'react'
import { Tile } from './Tile/Tile'
import Rules from './Rules'
import {socket} from './Socketio'
const rules = new Rules()

const xAxis = ["a","b","c","d","e","f","g","h"]
const yAxis = ["1","2","3","4","5","6","7","8"]
const initialBoard = []

for(let i = 0; i < 2; i++){
    let color = (i === 0) ? "w" : "b"
    let y = (i === 0) ? 0 : 7
    initialBoard.push({image: `img/${color}-king.png`, x: 4, y: y, type: "king" , color})
    initialBoard.push({image: `img/${color}-queen.png`, x: 3, y: y , type: "queen" , color})
    initialBoard.push({image: `img/${color}-bishop.png`, x: 5, y: y, type: "bishop" , color})
    initialBoard.push({image: `img/${color}-bishop.png`, x: 2, y: y, type: "bishop" , color})
    initialBoard.push({image: `img/${color}-knight.png`, x: 6, y: y , type: "knight" , color})
    initialBoard.push({image: `img/${color}-knight.png`, x: 1, y: y , type: "knight", color})
    initialBoard.push({image: `img/${color}-rook.png`, x: 7, y: y , type: "rook" , color})
    initialBoard.push({image: `img/${color}-rook.png`, x: 0, y: y , type: "rook" , color})
}
for(let i = 0; i < 9; i++)
    initialBoard.push({image: "img/b-pawn.png" , x: i, y: 6 ,type: "pawn", color: "b"})
for(let i = 0; i < 9; i++)
    initialBoard.push({image: "img/w-pawn.png" , x: i, y: 1,type: "pawn" , color: "w"})

export const ChessBoard = () => {
    socket.on('moved', newBoard => {
        setPieces(newBoard)
        console.log("boardupdated")
    })
    const [currentPiece, setCurrentPiece] = useState(null)
    const [boardX, setGridX] = useState(0)
    const [boardY ,setGridY] = useState(0)
    const [pieces, setPieces] = useState(initialBoard)
    const chessBoardRule = useRef(null)
    const selectPiece = e => {
        const chessrule = chessBoardRule.current
        if(e.target.classList.contains("piece") && chessrule){
            setGridX(Math.floor((e.clientX - chessrule.offsetLeft)/(chessrule.clientWidth/8)))
            setGridY(Math.abs(Math.ceil((e.clientY - chessrule.offsetTop - 800)/(chessrule.clientWidth/8))))
            const x = e.clientX - e.target.clientWidth/2
            const y = e.clientY - e.target.clientHeight/2
            e.target.style.position = "absolute"
            e.target.style.top = `${y}px`
            e.target.style.left = `${x}px`
        }
        setCurrentPiece(e.target)
    }
    
    const movePiece = e => {
        const chessrule = chessBoardRule.current
        if(currentPiece && currentPiece.classList.contains("piece") && chessrule){
            const minWidth = chessrule.offsetLeft
            const minHeight = chessrule.offsetTop
            const maxWidth = chessrule.clientWidth + chessrule.offsetLeft - chessrule.clientWidth/8
            const maxHeight = chessrule.clientHeight + chessrule.offsetTop - chessrule.clientHeight/8
            const x = e.clientX - e.target.clientWidth/2
            const y = e.clientY - e.target.clientHeight/2
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
        const chessrule = chessBoardRule.current
        if(currentPiece && chessrule){
            const x = Math.floor((e.clientX - chessrule.offsetLeft)/(chessrule.clientWidth/8))
            const y = Math.abs(Math.ceil((e.clientY - chessrule.offsetTop - 800)/(chessrule.clientWidth/8)))
            const playerPiece = pieces.find(p => p.x === boardX && p.y === boardY)
            //const opponentPiece = pieces.find(p => p.x === x && p.y === y)
            
            if(playerPiece){
                const validMove = rules.validMove(boardX, boardY, x, y, playerPiece.type, playerPiece.color, pieces)
                const enPassant = rules.isEnPassant(boardX, boardY, x, y, playerPiece.type, playerPiece.color, pieces)
                const direction = playerPiece.color === "w" ? 1 : -1
                if(enPassant){
                    const newPieces = pieces.reduce((result, piece) => {
                        if(piece.y === boardY && piece.x === boardX){
                            piece.enPassant = false
                            piece.x = x
                            piece.y = y
                            result.push(piece)
                        }else if(!(piece.x === x && piece.y === y - direction)){
                            if(piece.type === "pawn")
                                    piece.enPassant = false
                                result.push(piece)
                        }
                        return result
                    },[])
                    setPieces(newPieces)
                    const id = window.sessionStorage.getItem("gameId")
                    console.log(id)
                    socket.emit('move', id, newPieces)
                }else if(validMove) {
                        const newPieces = pieces.reduce((result, piece) => {
                            if (piece.y === boardY && piece.x === boardX) {
                                if(Math.abs(boardY - y) === 2 && piece.type === "pawn")
                                    piece.enPassant = true
                                else 
                                    piece.enPassant = false
                                piece.x = x
                                piece.y = y
                                result.push(piece)   
                            }else if(!(piece.x === x && piece.y === y)){
                                if(piece.type === "pawn")
                                    piece.enPassant = false
                                result.push(piece)
                            }
                            return result
                        },[])
                        setPieces(newPieces)
                        const id = window.sessionStorage.getItem("gameId")
                        socket.emit('move', id,newPieces)
                }else{
                    currentPiece.style.position = "relative"
                    currentPiece.style.removeProperty("top")
                    currentPiece.style.removeProperty("left")
                }
            }
            setCurrentPiece(null)
        }
    }

    const board = []
    for(let j = yAxis.length - 1; j >= 0; j--){
        for(let i = 0; i < xAxis.length; i++){
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
