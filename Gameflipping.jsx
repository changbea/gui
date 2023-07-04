import Navigate from '../Navigate';
import { useState, useEffect } from 'react';
import './Gameflipping.css';

const cards = [];
let flippedColor = [];
const num = 5;
let found = 0;
let foundColor;
let counter;

for (counter = 0; counter < num**2; counter++) {
  if (counter < 2) {
    cards.push({color: "s", flipped: false});
  } else if (counter < 4) {
    cards.push({color: "p", flipped: false});
  } else {
    cards.push({color: "r", flipped: false});
  }
}
cards.sort((a, b) => {
  return Math.random()-0.5;
})

function Pairing() {
  const [flippedcards, setFlippedcards] = useState(0);

  function Flipping(cards, count) {
    if (found !== 2) {
      setFlippedcards(flippedcards+1);
      flippedColor.push(cards[count].color);
      if (flippedColor[0] === flippedColor[1] && flippedColor[0] !== 'r'){
        found = found+1;
        if (found === 1) {
          alert('Single combo');
          foundColor = flippedColor[0];
        } else if (found === 2) {
          alert('Double combo');
          foundColor = flippedColor[0];
        }
        flippedColor = [];
      } else if (flippedcards === 2 && found !== 2) {
        for (let num in cards) {
          if (cards[num].color !== foundColor) {
            cards[num].flipped = false;
          }
        }
        flippedColor = [cards[count].color];
        setFlippedcards(1);
      }
      cards[count].flipped = true;
    }
  }
  
  const display = [];

  for (let count = 0; count < num**2; count++) {
    if (cards[count].flipped === true) {
      if (cards[count].color === 'r'){
        display.push(<button>&#9994;</button>)
      }
      else if (cards[count].color === 's') {
        display.push(<button>&#9996;</button>)
      }
      else {
        display.push(<button>&#9995;</button>)
      }
    }
    else {
      display.push(<button onClick={() => Flipping(cards, count)}>&#127760;</button>)
    }
    if (count % num === num-1) {
      display.push(<br />)
    }
  }
  display.push(<button onClick={() => window.location.reload(false)}>refresh</button>)
  console.log('cards'+flippedcards);

  return display;
}

function Side() {
  const [flippedcards, setFlippedcards] = useState(0);

  function Flipping(cards, count) {
    if (found !== 2 && flippedcards !== 2) {
      setFlippedcards(flippedcards+1);
      flippedColor.push(cards[count].color);
      if (flippedColor[0] === flippedColor[1] && flippedColor[0] !== 'r'){
        found = found+1;
        if (found === 1) {
          alert('Single combo');
          foundColor = flippedColor[0];
        } else if (found === 2) {
          alert('Double combo');
          foundColor = flippedColor[0];
        }
        flippedColor = [];
      } else if (flippedcards === 2 && found !== 2) {
        for (let num in cards) {
          if (cards[num].color !== foundColor) {
            cards[num].flipped = false;
          }
        }
        flippedColor = [cards[count].color];
        setFlippedcards(1);
      }
      cards[count].flipped = true;
    }
  }
  
  const display = [];

  for (let count = 0; count < num**2; count++) {
      if (cards[count].color === 'r'){
        if (cards[count].flipped === false) {
          display.push(
          <div className='flip-card'>
          <div className='flip-card-inner' onClick={() => Flipping(cards, count)}>
            <div className='flip-card-value'>&#9994;</div>
            <div className='flip-card-hidden'>&#127760;</div>
          </div>
          </div>
        )
        }
        else {
          display.push(
          <div className='flip-card'>
          <div className='flip-card-inner-active'>
            <div className='flip-card-value'>&#9994;</div>
            <div className='flip-card-hidden'>&#127760;</div>
          </div>
          </div>
        )
        }
      }
      else if (cards[count].color === 's') {
        if (cards[count].flipped === false) {
        display.push(
        <div className='flip-card'>
          <div className='flip-card-inner' onClick={() => Flipping(cards, count)}>
            <div className='flip-card-value'>&#9996;</div>
            <div className='flip-card-hidden'>&#127760;</div>
          </div>
        </div>
        )
        }
        else {
          display.push(
            <div className='flip-card'>
              <div className='flip-card-inner-active'>
                <div className='flip-card-value'>&#9996;</div>
                <div className='flip-card-hidden'>&#127760;</div>
              </div>
            </div>
          )
        }
      }
      else {
        if (cards[count].flipped === false) {
        display.push(
        <div className='flip-card'>
          <div className='flip-card-inner' onClick={() => Flipping(cards, count)}>
            <div className='flip-card-value'>&#9995;</div>
            <div className='flip-card-hidden'>&#127760;</div>
          </div>
        </div>
        )
        }
        else {
          display.push(
            <div className='flip-card'>
              <div className='flip-card-inner-active'>
                <div className='flip-card-value'>&#9995;</div>
                <div className='flip-card-hidden'>&#127760;</div>
              </div>
            </div>
          )
        }
      }
    if (count % num === num-1) {
      display.push(<br />)
    }
  }

  useEffect(() => {
    if (flippedcards === 2 && found !== 2) {
      setTimeout(() => {
        for (let num in cards) {
          if (cards[num].color !== foundColor) {
            cards[num].flipped = false;
          }
        }
        flippedColor = [];
        setFlippedcards(0);
      }, 1000)
    }
  
  })

  return display
}


export default function Gameflipping() {
  return (
    <main>
      <Navigate />
    <div className='centered'>
      <br />
      <Pairing />
      <br />
      <br />
      <Side />
    </div>
    </main>
  );
}