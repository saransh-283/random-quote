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
      <div className="card" id="quote-box">
        <div className="card-body">
          <blockquote>
            <p id="text">{this.state.text}</p>
            <p id="author" className="author">- {this.state.author}</p>
          </blockquote>
          <footer id="footer">
            <div id="social-btns">
              <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22"+this.state.text.split(' ').join('%20')+"%22%20-"+this.state.author.split(' ').join('%20')} className="btn social-btn" id="tweet-quote"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,random&caption="+this.state.author.split(' ').join('%20')+"&content="+this.state.text.split(' ')+"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"} className="btn social-btn" id="tumblr"><i className="fa fa-tumblr" aria-hidden="true"></i></a>
              </div>
            <div id="new-btns">
              <a href="#" id="new-quote" className="btn btn-light new-btn"  onClick={this.changeQuote}>New Quote</a>
              <a href="#" className="btn btn-light new-btn"  id="new-wallpaper">New Wallpaper</a>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Card
