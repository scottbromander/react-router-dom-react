import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Hobbies from './Pages/Hobbies';
import Home from './Pages/Home';
import Person from './Pages/Person';
import Summary from './Pages/Summary';

class App extends Component {

  render() {

    return (
      <div>
        <h1>HEADER</h1>

        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path="/person" component={Person}/>
          <Route exact path="/hobbies" component={Hobbies}/>
          <Route exact path="/summary" component={Summary}/>
        </Router>

        <h6>Footer</h6>
      </div>
    );
  }
}

export default App;
