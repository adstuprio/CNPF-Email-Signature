import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Profilebanner8 from './views/profilebanner8'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Profilebanner8} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
