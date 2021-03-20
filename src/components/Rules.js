export default class Rules{
    isSqureOccupied = (x, y, boardState) => {
        const piece = boardState.find(p => p.x === x && p.y === y)
        if(piece)
            return true
        else
            return false
    }


    validMove = (prevX, prevY, x, y, type, color, boardState) => {

        if (type === "pawn") {
            if (color === "w") {
                if (prevY === 1) {
                    if (prevX === x && y - prevY === 1){
                        if(!this.isSqureOccupied(x , y, boardState))
                            return true
                    }
                    if(prevX === x && y - prevY === 2){
                        if(!this.isSqureOccupied(x , y, boardState))
                            return true
                    }
                }else{
                    if (prevX === x && y - prevY === 1) {
                        if(!this.isSqureOccupied(x , y, boardState))
                            return true
                    }
                }
            }else{
                if (prevY === 6) {
                    if (prevX === x && prevY - y === 1){
                        if(!this.isSqureOccupied(x , y, boardState))
                            return true
                    }
                    if(prevX === x && prevY - y === 2){
                        if(!this.isSqureOccupied(x , y + 1, boardState))
                            return true
                    }
                        
                }else{
                    if (prevX === x && prevY - y === 1) {
                        if(!this.isSqureOccupied(x , y, boardState))
                            return true
                    }
                }
            }
        }

        else if (type === "bishop") {
            if((prevX + prevY) % 2 === 0 && (x + y) % 2 === 0){
                if (prevX !== x && prevY !== y){
                    if(!this.isSqureOccupied(x , y, boardState))
                            return true
                }                    
            }else if((prevX + prevY) % 2 !== 0 && (x + y) % 2 !== 0){
                if(prevX !== x && prevY !== y){
                    if(!this.isSqureOccupied(x , y, boardState))
                            return true
                }
            }
        }

        else if (type === "rook") {
            if ((prevX !== x && prevY === y) || (prevX === x && prevY !== y)) {
                if(!this.isSqureOccupied(x , y, boardState))
                            return true
            }
        }
        
        else if(type === "knight"){
            if (prevX - x === 2 || prevX - x === -2) {
                if(prevY - y === 1 || prevY - y === -1){
                    if(!this.isSqureOccupied(x , y, boardState))
                            return true
                }
            }else if (prevY - y === 2 || prevY - y === -2) {
                if(prevX - x === 1 || prevX - x === -1){
                    if(!this.isSqureOccupied(x , y, boardState))
                            return true
                }
            }
        }

        else if(type === "queen"){
            if((prevX + prevY) % 2 === 0 && (x + y) % 2 === 0){
                if (prevX !== x && prevY !== y){
                    if(!this.isSqureOccupied(x , y, boardState))
                            return true
                }
            }   
            if((prevX + prevY) % 2 !== 0 && (x + y) % 2 !== 0){
                if(prevX !== x && prevY !== y){
                    if(!this.isSqureOccupied(x , y, boardState))
                            return true
                }
            }
            if((prevX !== x && prevY === y) || (prevX === x && prevY !== y)) {
                if(!this.isSqureOccupied(x , y, boardState))
                            return true
            }
        }

        else if(type === "king"){
            if(prevX - x === 1 || x - prevX === 1){
                if(!this.isSqureOccupied(x , y, boardState))
                            return true
            }
            if(prevY - y === 1 || y - prevY === 1){
                if(!this.isSqureOccupied(x , y, boardState))
                            return true
            }
        }
        return false
    }
}