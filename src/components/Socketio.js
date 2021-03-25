import {io} from 'socket.io-client'
export const socket = io("http://localhost:4000")

socket.on('connection', () => {
    socket.on('moved', board => {
        return board
    })      
})


export class Socketio {
    createRoom = () => {
        let id = ""
        socket.emit('createRoom',id)
        socket.on('generateId', id => {
            this.id = id
        })
        return this.id
    }
    
    joinRoom = id => {
        window.sessionStorage.setItem("gameId",id)
        socket.emit('join',id)
        return id
    }

}