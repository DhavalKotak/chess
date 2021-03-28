import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { joinRoom, createRoom,socket} from './Socketio'

class Room extends Component{
    constructor(){
        super()
        this.state = {
            gameId : ""
        }
        this.join = this.join.bind(this)
        this.create = this.create.bind(this)
        this.id = React.createRef(null)
    }
    create = () => {
        createRoom()
        socket.on('generateId', gameId => {
            this.setState({gameId: gameId})   
        })
        
    }
    join = () => {
        const id = joinRoom(this.id.current.value)
        this.setState({gameId : id})
    }
    render(){
        return(
            <React.Fragment>
                <Jumbotron className="text-center">
                    <h1>Welcome to Chess</h1>
                    <h2>
                        <Button variant="success" className="w-100" onClick={this.create}>Create Room</Button>
                    </h2>
                    <div>{this.state.gameId}</div>
                    <Link to={this.state.gameId ? "/game" : "/"}>
                        <h2>
                            <Button variant="primary" className="w-100" onClick={this.join}>Join Room</Button>
                        </h2>
                    </Link>
                    <input type="text" className="w-100" ref={this.id}/>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Room