import {io} from 'socket.io-client'
export const socket = io("https://react-chess-backend.herokuapp.com/")

socket.on('updateBoard', board => {
    return board
})

export const createRoom = () => {
    let id = ""
    socket.emit('createRoom',id) 
}

export const joinRoom = id => {
    window.sessionStorage.setItem("gameId",id)
    socket.emit('join',id)
    return id
}
