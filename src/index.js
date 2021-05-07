import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/react/App';
import quotesList from './components/js/quotes'
import bg0 from '../src/assets/img/0.jpg'
import bg1 from '../src/assets/img/1.jpg'
import bg2 from '../src/assets/img/2.jpg'
import bg3 from '../src/assets/img/3.jpg'
import bg4 from '../src/assets/img/4.jpg'


var bgRandom = Math.floor(Math.random() * 5)
var bgArr = [bg0, bg1, bg2, bg3, bg4]
document.body.style.backgroundImage = 'url(' + bgArr[bgRandom] + ')'

var randomQuote = Math.floor(Math.random() * (quotesList.length))

ReactDOM.render( < Card
        default = {
            quotesList[randomQuote]
        }
        / > , document.getElementById('container'))