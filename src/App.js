import React, { Component } from 'react';
// import logo from './logo.svg';
import MCard from './MCard';
import Header from './Header';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MCard />
        <MCard />
        <MCard />
      </div>
    );
  }
}

export default App;
