import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/react/App';
import quotesList from './assets/js/quotes'
import bg0 from '../src/assets/img/0.jpg'
import bg1 from '../src/assets/img/1.jpg'
import bg2 from '../src/assets/img/2.jpg'
import bg3 from '../src/assets/img/3.jpg'

var current = 0

function randomWallpaper() {
    
    var bgArr = [bg0, bg1, bg2, bg3]
    document.body.style.backgroundImage = 'url(' + bgArr[current] + ')'
    if(current===bgArr.length-1){
        current=0
    }
    else{
        current++
    }
    console.log('hi')
}

randomWallpaper()

var randomQuote = Math.floor(Math.random() * (quotesList.length))

ReactDOM.render(< Card default={
    quotesList[randomQuote]
} />, document.getElementById('container'))

document.getElementById('new-wallpaper').onclick=function(){randomWallpaper()}