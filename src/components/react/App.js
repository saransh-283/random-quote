import './App.css';
import React from 'react';
import quotesList from '../js/quotes'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.default
    this.changeQuote = this.changeQuote.bind(this)
  }
  changeQuote() {
    var randomQuote=Math.floor(Math.random()*(quotesList.length))
    this.setState(quotesList[randomQuote])
  }
  render() {
    return (
      <div className="card" >
        <div className="card-body">
          <blockquote>
            <p id="quote">{this.state.text}</p>
            <p className="author">- {this.state.author}</p>
          </blockquote>
          <footer id="footer">
            <div>
              <a href="#" className="btn social-btn"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              <a href="#" className="btn social-btn"><i className="fa fa-tumblr" aria-hidden="true"></i></a>
              </div>
            <div>
              <a href="#" className="btn" id="new-quote" onClick={this.changeQuote}>New Quote</a>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Card
