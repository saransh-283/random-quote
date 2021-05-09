import './App.css';
import '../../assets/css/mobile-react.css'
import React from 'react';
import quotesList from '../../assets/js/quotes'

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
            <div id="social-btns">
              <a href="#" className="btn social-btn" id="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              <a href="#" className="btn social-btn" id="tumblr"><i className="fa fa-tumblr" aria-hidden="true"></i></a>
              </div>
            <div id="new-btns">
              <a href="#" className="btn btn-light new-btn"  onClick={this.changeQuote}>New Quote</a>
              <a href="#" className="btn btn-light new-btn"  id="new-wallpaper">New Wallpaper</a>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Card
