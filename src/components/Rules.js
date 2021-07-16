export default class Rules{

    isAnyPieceBetweenLinear = (x, y, boardState, type, px, py) => {
        
        if(type === "rook" || type === "queen"){
            if(px > x ){
                for(let prevX = px-1; prevX > x; prevX--){
                    const betweenPiece = boardState.find(p => p.x === prevX && p.y === y)
                    if(betweenPiece)
                        return true
                }
            }else if(px < x ){
                for(let prevX = px+1; prevX < x; prevX++ ) {
                    const betweenPiece = boardState.find(p => p.x === prevX && p.y === y)
                    if(betweenPiece)
                        return true
                }
            }
            if(py > y ){ 
                for(let prevY = py-1; prevY > y; prevY--){
                    const betweenPiece = boardState.find(p => p.y === prevY && p.x === x)
                    if(betweenPiece)
                        return true
                }
            }else if(py < y ){ 
                for(let prevY = py+1; prevY < y; prevY++ ) {
                    const betweenPiece = boardState.find(p => p.y === prevY && p.x === x)
                    if(betweenPiece)
                        return true
                }
            }
        } 
        return false
    }

    isAnyPieceBetweenAcross = (x, y, boardState, type, px, py) => {
        
        if(type === "bishop" || type === "queen"){
            if(px > x && py > y){
                for(let prevX = px - 1,prevY = py - 1;prevX > x && prevY > y; ){
                    const betweenPiece = boardState.find(p => p.x === prevX && p.y === prevY)
                    if(betweenPiece)
                        return true
                    prevX--
                    prevY--
                }
            }else if(px < x && py > y){
                for(let prevX = px + 1,prevY = py - 1;prevX < x && prevY > y; ){
                    const betweenPiece = boardState.find(p => p.x === prevX && p.y === prevY)
                    if(betweenPiece)
                        return true
                    prevX++
                    prevY--
                }
            }else if(px > x && py < y){
                for(let prevX = px - 1,prevY = py + 1;prevX > x && prevY < y; ){
                    const betweenPiece = boardState.find(p => p.x === prevX && p.y === prevY)
                    if(betweenPiece)
                        return true
                    prevX--
                    prevY++
                }
            }else{
                for(let prevX = px + 1,prevY = py + 1;prevX < x && prevY < y ;){
                    const betweenPiece = boardState.find(p => p.x === prevX && p.y === prevY)
                    if(betweenPiece)
                        return true
                    prevX++
                    prevY++
                }
            }
        }
        return false
    }
    isSquareOccupied = (x, y, boardState) => {
        const piece = boardState.find(p => p.x === x && p.y === y)
        if(piece)
            return true
        else
            return false
    }

    isEnPassant = (prevX, prevY, x, y, type, color, boardState) => {
        if(type === "pawn"){
            const direction = color === "w" ? 1 : -1
            if((x - prevX === -1 || x - prevX === 1) && y - prevY === direction){
                const piece = boardState.find(p => p.x === x && p.y === y - direction && p.enPassant)
                if(piece)
                    return true
            }
        }
        return false
    }

    isOpponent = (x , y , boardState, color) => {
        const piece = boardState.find(p => p.x === x && p.y === y && p.color !== color)
        if(piece)
            return true
        else
            return false
    }

    validMove = (prevX, prevY, x, y, type, color, boardState) => {
        if (type === "pawn") {
            const firstRow = (color === "w") ? 1 : 6
            const direction = (color === "w") ? 1 : -1
            if(prevX === x && prevY === firstRow && y - prevY === 2 * direction){
                if(!this.isSquareOccupied(x , y , boardState) && !this.isSquareOccupied(x , y - direction, boardState))
                    return true
            }else if(prevX === x && y - prevY === direction){
                if(!this.isSquareOccupied(x , y , boardState))
                    return true
            }else if(x - prevX === 1 && y - prevY === direction){
                if(this.isOpponent(x , y , boardState , color))
                    return true
            }else if(x - prevX === - 1 && y - prevY === direction){
                if(this.isOpponent(x , y , boardState , color))
                    return true
            }   
        }

        else if (type === "bishop") {
            if (Math.abs(prevX - x) === Math.abs(prevY - y)) {
                if(!this.isAnyPieceBetweenAcross(x, y, boardState, type, prevX, prevY)){
                    if(!this.isSquareOccupied(x , y , boardState))
                        return true
                    else if(this.isOpponent(x, y, boardState ,color))
                        return true
                }
            }
        }

        else if (type === "rook") {
            if ((prevX !== x && prevY === y) || (prevX === x && prevY !== y)) {
                if(!this.isAnyPieceBetweenLinear(x, y, boardState, type, prevX, prevY)){
                    if(!this.isSquareOccupied(x , y, boardState))                    
                        return true
                    else if(this.isOpponent(x, y, boardState ,color))
                        return true
                }
            }
        }
        
        else if(type === "knight"){
            if (prevX - x === 2 || prevX - x === -2) {
                if(prevY - y === 1 || prevY - y === -1){
                    if(!this.isSquareOccupied(x , y, boardState))
                        return true
                    else if(this.isOpponent(x, y, boardState ,color))
                        return true
                }
            }else if (prevY - y === 2 || prevY - y === -2) {
                if(prevX - x === 1 || prevX - x === -1){
                    if(!this.isSquareOccupied(x , y, boardState))
                        return true
                    else if(this.isOpponent(x, y, boardState ,color))
                        return true
                }
            }
        }

        else if(type === "queen"){
            if(Math.abs(x - prevX) === Math.abs(y - prevY)){
                if(!this.isAnyPieceBetweenAcross(x, y, boardState, type, prevX, prevY)){
                    if(!this.isSquareOccupied(x , y ,boardState))
                        return true
                    else if(this.isOpponent(x, y, boardState ,color))
                        return true
                }
            }
            else if((prevX !== x && prevY === y) || (prevX === x && prevY !== y)) {
                if(!this.isAnyPieceBetweenLinear(x, y, boardState, type, prevX, prevY)){
                    if(!this.isSquareOccupied(x , y, boardState))                    
                        return true
                    else if(this.isOpponent(x, y, boardState ,color))
                        return true
                }
            }
        }

        else if(type === "king"){
            if(prevX === x || prevY === y){
                if(Math.abs((prevX + prevY) - (x + y)) < 2){
                    if(!this.isSquareOccupied(x , y, boardState))
                        return true
                }
            }else {
                if(Math.abs((prevX + prevY) - (x + y)) <= 2){
                    if(!this.isSquareOccupied(x , y, boardState))
                        return true
                    
                }
            }
        }
        return false
    }
}