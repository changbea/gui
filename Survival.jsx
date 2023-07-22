import Navigate from '../Navigate';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const players = [];
const opponents = [];
let competition;
let num;
for (num = 0; num < 5; num++) {
  players.push({
    show: 'hidden',
    decision: 'x',
    state: true
  });
  if (num !== 0) {
    opponents.push(
      <div className='btn'>
      Player {num}
      <br />
      <div id={'player'+num}>hidden</div>
    </div>
    );
  }
}

let decision = ['&#9994;', '&#9996;', '&#9995;'];

export default function Survival() {
  const [stage, setStage] = useState(1);
  const [clear, setClear] = useState(false);
  const collection = [];
  let number;

  for (num = 1; num < 5; num++) {
    number = Math.random()*3;
    if (number < 1) {
      players[num].decision = 'r';
    } else if (number >= 1 && number < 2) {
      players[num].decision = 's';
    } else {
      players[num].decision = 'p';
    }
  }
  
  function Compete(decide) {
    if (clear === false) {
      if (decide === 'r') {
        document.getElementById("decide").innerHTML = decision[0];
      } else if (decide === 's') {
        document.getElementById("decide").innerHTML = decision[1];
      } else {
        document.getElementById("decide").innerHTML = decision[2];
      }
      collection.push(decide);

      for (num = 1; num < 5; num++) {
        if (players[num].decision === 'r') {
          document.getElementById(`player${num}`).innerHTML = decision[0];
        } else if (players[num].decision === 's') {
          document.getElementById(`player${num}`).innerHTML = decision[1];
        } else {
          document.getElementById(`player${num}`).innerHTML = decision[2];
        }
        collection.push(players[num].decision);
      }

      if (collection.indexOf('r') !== -1 && collection.indexOf('s') !== -1) {
        if (collection.indexOf('p') !== -1 ) {
          competition = 'draw'
        } 
        else {
          competition = 'win'
        }
      }
      setClear(true);
    }
  }
  
  function Round() {
    if (clear === true) {
      setClear(false);
      setStage(stage+1);
      for (num = 1; num < 5; num++) {
        if (players[num].state === true) { 
          document.getElementById(`player${num}`).innerHTML = 'hidden';
        }
      }
      document.getElementById("decide").innerHTML = '<br />'
      competition = ''
    }
  }

  if (clear === 1) {
    
  }
  
    return (
      <main>
        <Navigate />
        <div className="h3 p-5 text-center centered">
          Survival
        </div>
        <div>
          <div>Round: {stage}</div>
          {/* <div className='btn'>
            Player 1
            <br />
            {players[1].show}
          </div>
          <div className='btn'>
            Player 2
            <br />
            {players[2].show}
          </div>
          <div className='btn'>
            Player 3
            <br />
            {players[3].show}
          </div>
          <div className='btn'>
            Player 4
            <br />
            {players[4].show}
          </div> */}
          {opponents}
          <br />
          <div id='deciding'>
            Choose
            <br />
            <span onClick = {() => Compete('r')}>&#9994;</span>
            <span>&emsp;</span>
            <span onClick = {() => Compete('s')}>&#9996;</span>
            <span>&emsp;</span>
            <span onClick = {() => Compete('p')}>&#9995;</span>
          </div>
          <div id='decided'>
            My choice is
            <br />
            <div id='decide'>
              <br />
            </div>
            <div id='result'>Result: {competition}</div>
            <button onClick={Round}>next round</button>
          </div>
        </div>
        {/* <Menu />
        <button onClick={() => setClear(!clear)}>menu</button>
      <div className = 'menu' ref = {btnRef}>
        <p>About</p>
      </div>
        <div className='centered'>
            <p>Guess What</p>
            <Display />
            <p>Your Choice</p>
            <span className='choice' onClick = {() => Compete('r')}>&#9994;</span>
            <span>&emsp;</span>
            <span className='choice' onClick = {() => Compete('s')}>&#9996;</span>
            <span>&emsp;</span>
            <span className='choice' onClick = {() => Compete('p')}>&#9995;</span>
            <br />
            <div className='reload'>
               <button  onClick ={ newChoice }>reload</button>
            </div>
        </div>
        <div className='centered'>
    <div>
      <span role='img'>value of {count} {decision}</span>
      <button onClick = {() => Decision(0, count)}>&#9994;</button>
      <button onClick = {() => Decision(1, count)}>&#9996;</button>
      <button onClick = {() => Decision(2, count)}>&#9995;</button>
    </div>
    <br />
    <button className='btn-success'>btn</button>
    <br />
    <Link to='/speed'>speed</Link>
    <br />
    <Link to='/survival'>survival</Link>
    <br />
    <Link to='/speed'>choose</Link>
    <br />
    <Link to='/speed'>change</Link>
    </div> */}
        <div>  
          <Link to='/speed'>speed</Link>
          <br />
          <Link to='/survival'>survival</Link>
          <br />
          <Link to='/speed'>choose</Link>
          <br />
          <Link to='/speed'>change</Link>
        </div>
      </main>
    );
}


// function Decision(btn, count) {
//   if (btn === count%3) {
//     alert('draw');
//   }
//   else {
//     if (btn === 0) {
//       if (count%3 === 1) {
//         alert('win');
//       }
//       else {
//         alert('lose');
//       }
//     }
//     else if (btn === 1) {
//       if (count%3 === 0) {
//         alert('lose');
//       }
//       else  {
//         alert('win');
//       }
//     }
//   }
// }
// export default function App() {
//   const [count, setCount] = useState(10000);
//   const [decision, setDecision] = useState(null);
//   useEffect(() => {
//     const variableInterval = setInterval(() => {
//       setCount((prev) => prev+1); 
//     }, 1000)
//     if (count % 3 === 0) {
//       setDecision(() => <div>&#9994;</div>)
//     }
//     else if (count % 3 === 1) {
//       setDecision(() => <div>&#9996;</div>)
//     }
//     else {
//       setDecision(() => <div>&#9995;</div>)
//     }    
//     return () => clearInterval(variableInterval);
//   }, [count])

//   return (
//     <div>
//     <div>
//       <span role='img'>value of {count} {decision}</span>
//       <button onClick = {() => Decision(0, count)}>&#9994;</button>
//       <button onClick = {() => Decision(1, count)}>&#9996;</button>
//       <button onClick = {() => Decision(2, count)}>&#9995;</button>
//     </div>
//     <br />
//     <button className='btn-success'>btn</button>
//     </div>
//   )

// }