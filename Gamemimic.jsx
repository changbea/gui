import Navigate from '../Navigate';
import { useEffect, useState } from 'react';
// import './Gamefinding.css';


const count = Math.random();
const opponents = ['r', 's', 'p'];
let opponent;

// console.log(count);
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
  // console.log(display);
  
  for (let component in display) {
    if (component % choices === 0){
      selection.push(<br />);
    }
    selection.push(<button>{display[component]}</button>);
  }
  
  return selection;
}


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
// cards.sort(function (a, b) {
//   return Math.random()-0.5;
// })
// for (counter = 0; counter < num**2; counter++) {
//   cards[counter].order = counter;
// }
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
  // console.log('cards'+flippedcards);

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

let decision = [];
let blink = [];
let gap = 0;

function Mimic() {
  const num = 5;
  const statement = [];
  const selection = [];
  const [stage, setStage] = useState(1);
  const [reverse, setReverse] = useState(1);
  const [wrong, setWrong] = useState(false);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(false);
  const [clear, setClear] = useState(false);

  function Show() {
    if (wrong === false && show === false) {
      setShow(true);
      for (let queue = 1; queue <= stage; queue++) {
        blink.push(Math.floor(Math.random()*num**2))
      }
      
      console.log('blink: ');
      console.log(blink);  
    }
  }

  function Decision(count) {
    if (wrong === false && clear === true) { 
      decision.push(count);
      console.log('decision');
      console.log(decision);
      if (decision[decision.length-1] !== blink[decision.length-1]) {
        setWrong(true);
      } else {
        setReverse(reverse-1);
        if (reverse === 1) {
          setStage(stage+1);
          setReverse(stage+1);
          setShow(false);
          setClear(false);
          gap = 0;
          decision = [];
          blink = [];
        }
      }
    }
  }

  useEffect(() => {
    if (show === true && clear === false) {
        setTimeout(() => {
          if (gap < stage && selected === false) {
            setSelected(blink[gap]);
            gap++;
          } else if (gap < stage && selected !== false) {
            setSelected(false);
          } else {
            setSelected(false);
            setClear(true);
          }
        }, 1000)
    }
  })

  if (show === false) {
    statement.push(
      <div>
        <p>Current stage is {stage}</p>
        <p>When you are ready press show</p>
      </div>
    )
  }
  else if (wrong === false) {
      statement.push(
      <div>
        <p>Current stage is {stage}</p>
        <p>Need to select {reverse} more</p>
      </div>
      )
  } 
  else {
      statement.push(
        <div>
          <p>Incorrect</p>
          <p>Start again</p>
        </div>
      )
  }
  
  for (let count = 0; count < num**2; count++) {
    if (count === selected) {
      selection.push(<button className='blink'>{count}</button>)
    } else {
      selection.push(<button className='selection' onClick={() => Decision(count)}>{count}</button>)
    }
    if ((count+1) % num === 0){
      selection.push(<br />)
    }
  }

  return (
    <div className='centered'>
      {statement}
      {selection}
      <br />
      <button onClick={Show}>show</button>
      <span>&emsp;</span>
      <button onClick={() => window.location.reload(false)}>refresh</button>
    </div>
  )
}

export default function Gamefinding() {
  const [clear, setClear] = useState(false);

  return (
    <main>
    <Navigate />
    <div className='centered'>
    <p>Made this choice</p>
    <Hidden props={count}/>
    <p>Your Choice</p>
    <button>&#9994;</button>
    <button>&#9996;</button>
    <button>&#9995;</button>
    <br />
    <button>refresh</button>
    <button>multiple</button>
    </div>
    <br />
    <Mimic />
    </main>
  );
}