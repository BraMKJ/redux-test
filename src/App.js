import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Home from './components/Home'
import SongsContainer from './containers/SongsContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/songs'>Songs</StyledLink>
          </Header>
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

const StyledLink = styled(Link)`
  margin-right: 16px;
  
  &:last-child {
    margin-right: 0;
  }
`

export default App;
