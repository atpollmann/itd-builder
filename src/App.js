import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Concept from './components/Concept'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path={'/'} render={() => (
          <a href="/concept">Concept</a>
        )} />
        <Route exact path={'/concept'} component={Concept} />
      </div>
    );
  }
}

export default App;
