import React from 'react'
import {ChessBoard} from './components/ChessBoard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Room from './components/Room'

function App() {
  return (
    <div className="App">
      <Router basename={window.location.pathname || ''}>
        <Switch>
          <Route exact path="/" component={Room}/>
          <Route path="/game" component={ChessBoard}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
