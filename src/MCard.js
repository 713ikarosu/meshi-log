import React, { Component } from 'react';
import thumnail from './buta-no-esa.jpg';
import './css/MCard.css';

class MCard extends Component {
  render() {
    return (
      <div className="MCard">
        <div className="card-header">
          <p>Name：tonpachi-debu-ra-</p>
          <img src={thumnail} className="thumnail" alt="thumnail" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            WAROTA
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    );
  }
}

export default MCard;