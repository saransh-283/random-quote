import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="card" >
        <div className="card-body">
          <blockquote className="blockquote">
            <p className="quote">Quote</p>
            <footer className="card-blockquote author">Footer</footer>
          </blockquote>
        </div>
      </div>
    )
  }
}

export default Card;
