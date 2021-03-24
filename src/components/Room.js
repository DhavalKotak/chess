import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import {io} from 'socket.io-client'
const socket = io("http://localhost:4000")

class Room extends Component{
    constructor(){
        super()
        this.state = {
            gameId : ""
        }
        this.joinRoom = this.joinRoom.bind(this)
        this.createRoom = this.createRoom.bind(this)
        this.id = React.createRef(null)
    }
    createRoom = () => {
        socket.emit('createRoom',this.state.gameId)
        socket.on('generateId', gameId => {
            this.setState({
                gameId: gameId
            })
        })
    }
    joinRoom = () => {
        this.setState({
            gameId: this.id.current.value
        })
        window.sessionStorage.setItem("gameId",this.id.current.value)
        socket.emit('joinRoom',this.state.gameId ? this.state.gameId : this.id.current.value)
    }
    render(){
        return(
            <React.Fragment>
                <Jumbotron className="text-center">
                    <h1>Welcome to Chess</h1>
                    <h2><Button variant="success" className="w-100" onClick={this.createRoom}>Create Room</Button></h2>
                    <div>{this.state.gameId}</div>
                    <Link to={this.state.gameId ? "/game" : ""}>
                    <h2><Button variant="primary" className="w-100" onClick={this.joinRoom}>Join Room</Button></h2>
                    </Link>
                    <input type="text" className="w-100" ref={this.id}/>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Room