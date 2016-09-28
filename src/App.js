import React, { Component } from 'react';

import './App.css';
import Hello from './Hello.js';
import Video from './Video.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>DopeShow Video</h2>
        </div>
        <Hello greeting="Hello" />

        <Video source="https://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4"></Video>
      </div>
    );
  }
}

export default App;
