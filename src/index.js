import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './App';

var bgRandom = Math.floor(Math.random() * 12)
document.body.style.backgroundImage = 'url(./img/' + bgRandom + '.jpg)'

ReactDOM.render( < Card / > , document.getElementById('container'))