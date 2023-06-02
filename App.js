import './App.css';
import Navigate from './Navigate.js';
import Header from './router/Header.js';
import Main from './router/Main.js';
import { useState, useEffect } from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';

const count = Math.random();
const opponents = ['r', 's', 'p'];
let opponent;

console.log(count);
if (count < 1/3) {
  opponent = opponents[0];
}
else if (count >= 1/3 && count < 2/3) {
  opponent = opponents[1];
}
else {
  opponent = opponents[2];
}

function Hidden(props) {
  if (props.props < 1/3) {
    return (
        <div>&#9994;</div>
    )
  }
  else if (props.props >= 1/3 && props.props < 2/3) {
    return (
        <div>&#9996;</div>
    )
  }
  else {
    return (
        <div>&#9995;</div>
    )
  }
}

function Decision() {
  const [clear, setClear] = useState(false);
  const [choices, setChoices] = useState(5);

  let display = [];
  const selected = Math.random();
  if (selected === 1) {
    window.location.reload()
    return;
  }
  
  function correct() {
    alert('correct');
    setChoices(choices+1)
    // function Difficult() {
    //   let displayer = [];
    //   const selected = Math.random();
    //   if (selected === 1) {
    //     window.location.reload()
    //     return;
    //   }

    //   for (let btn=0; btn<=choices; btn++) {
    //     if (btn === Math.floor(selected*1)) {
    //       displayer.push(<button>5</button>);
    //       console.log('selected');
    //     }
    //     else {
    //       displayer.push(<button>6</button>);
    //     }
    //     if ((btn+1)%5 === 0) {
    //       displayer.push(<br/>)
    //     }
    //   }
    // }
    // Difficult();
  }
  function wrong() {
    alert('wrong');
    window.location.reload();
  }

  for (let btn=0; btn<=choices**2-1; btn++) {
    if (btn === Math.floor(selected*(choices**2+1))) {
      display.push(<button onClick={correct}>1</button>);
    }
    else {
      display.push(<button onClick={wrong}>0</button>);
    }
    if ((btn+1)%choices === 0) {
      display.push(<br/>)
    }
  }

  return display;
}

function Fill() {
  const [choices, setChoices] = useState(5);
  let selection = [];
  let display = new Array(choices**2);
  display.fill(0);
  const selected = Math.random();
  display[Math.floor(selected*choices**2)] = 1;
  console.log(display);
  
  for (let component in display) {
    if (component % choices === 0){
      selection.push(<br />);
    }
    selection.push(<button>{display[component]}</button>);
  }
  
  return selection;
}


const cards = [];
const flippedColor = [];
const num = 5;
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
cards.sort(function (a, b) {
  return Math.random()-0.5;
})
// for (counter = 0; counter < num**2; counter++) {
//   cards[counter].order = counter;
// }
function Pairing() {
  const [flippedcards, setFlippedcards] = useState(0);
  function Flipping(cards, count) {
    cards[count].flipped = true;
    flippedColor.push(cards[count].color);
    setFlippedcards(flippedcards+1);
  }
  if (flippedcards === 2) {
    // console.log(cards.indexOf({color: flippedColor[0], flipped: true}))
    // cards[cards.indexOf({flipped: true}, 2)].flipped = false;
    setFlippedcards(0);
  }
  console.log(cards);
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

  return display;
  
  

  // let select = Math.random();
  // while (cards[Math.floor(select * num**2)].color !== "g") {
  //   select = Math.random();
  // }
  // console.log(cards);
  // for (let count = 0; count < 4; count++) {
  //   if (count < 2) {
  //     cards[Math.floor(select * 4)].color = 'r';
  //     console.log(cards[0]);
  //     cards[0].color = 'r';
  //     console.log(cards[0]);
  //     console.log('card');
  //     console.log(cards);
  //   } else if (count < 4) {
  //     console.log('b')
  //     cards[Math.floor(select * 4)].color = 'b';
  //   }
  // }  
  // const display = [];
  // console.log('cards');
  // console.log(cards);
  // for (let element of cards) {
  //   display.push(<button>{element.color}</button>);
  // }
  // return(display);
}

export default function App() {
  const [clear, setClear] = useState(false);

  return (
    <div>
    <HashRouter>
      <Navigate />
      <Routes>
        <Route exact path="/" Component={Header} />
        <Route exact path="/main" Component={Main} />
      </Routes>
    </HashRouter>
    <br />
    <p>Made this choice</p>
    <Hidden props={count}/>
    <p>Your Choice</p>
    <button>&#9994;</button>
    <button>&#9996;</button>
    <button>&#9995;</button>
    <br />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate />}/>
    </Routes>
    </BrowserRouter>
    <button>refresh</button>
    <button>multiple</button>
    <br />
    <br />
    <Decision />
    <br />
    <Fill />
    <br />
    <br />
    <Pairing />
    </div>
  );
}
