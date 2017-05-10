import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import HeaderContainer from './containers/HeaderContainer'
import Wrapper from './components/Wrapper'
import Home from './components/Home'
import SongsContainer from './containers/SongsContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderContainer/>
          <div id="main">
            <Wrapper>
              <Route exact path='/' component={Home}/>
              <Route path='/songs' component={SongsContainer}/>
            </Wrapper>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
