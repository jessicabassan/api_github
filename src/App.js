import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import Search from './components/search/Search';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Search/>
          </div>
      </Router>
    );
  }
}

export default App;