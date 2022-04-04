import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container.js';

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello World!</p>
        <Container type="post"/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-app'));