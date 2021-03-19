export default class Rules{
    validMove = (prevX, prevY, x, y, type, color) => {

        if (type === "pawn") {
            if (color === "w") {
                if (prevY === 1) {
                    if (y - prevY === 1 || y - prevY === 2)
                        return true
                }else{
                    if (y - prevY === 1) 
                        return true
                }
            }else{
                if (prevY === 6) {
                    if (prevY - y === 1 || prevY - y === 2)
                        return true
                }else{
                    if (prevY - y === 1) 
                        return true
                }
            }
        }

        else if (type === "bishop") {
            if((prevX + prevY) % 2 === 0 && (x + y) % 2 === 0){
                if (prevX !== x && prevY !== y)
                    return true
            }else if((prevX + prevY) % 2 !== 0 && (x + y) % 2 !== 0){
                if(prevX !== x && prevY !== y)
                    return true
            }
        }

        else if (type === "rook") {
            if ((prevX !== x && prevY === y) || (prevX === x && prevY !== y)) 
                return true
        }
        
        else if(type === "knight"){
            if (prevX - x === 2 || prevX - x === -2) {
                if(prevY - y === 1 || prevY - y === -1)
                    return true
            }else if (prevY - y === 2 || prevY - y === -2) {
                if(prevX - x === 1 || prevX - x === -1)
                    return true
            }
        }

        else if(type === "queen"){
            if((prevX + prevY) % 2 === 0 && (x + y) % 2 === 0){
                if (prevX !== x && prevY !== y)
                    return true
            }   
            if((prevX + prevY) % 2 !== 0 && (x + y) % 2 !== 0){
                if(prevX !== x && prevY !== y)
                    return true
            }
            if((prevX !== x && prevY === y) || (prevX === x && prevY !== y)) 
                return true
        }

        else if(type === "king"){
            if(prevX - x === 1 || x - prevX === 1)
                return true
            if(prevY - y === 1 || y - prevY === 1)
                return true
        }
        return false
    }
}