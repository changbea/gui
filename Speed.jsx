import Navigate from '../Navigate';
import './Speed.css';
import Clock from './Clock.jsx';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

let decision = false;
let number;
export default function Speed() {
  const [count, setCount] = useState(0);
  const [stage, setStage] = useState(0);
  const process = [];
  let num;
  if (decision === false) { 
    number = Math.random();
    decision = true;
  }
  const choices = [];
  const compete = [];
  if (number < 1/3) {
    choices.push('r');
    compete.push(<p>&#9994;</p>)
  }
  else if (number >= 1/3 && number < 2/3) {
    choices.push('s');
    compete.push(<p>&#9996;</p>)
  }
  else {
    choices.push('p');
    compete.push(<p>&#9995;</p>)
  }

  for (num=0; num<10; num++) {
    if (num < stage) {
      process.push(<span className='process'>&emsp;</span>)
    } else{
      process.push(<span className='processing'>&emsp;</span>)
    }
  }

  function Compete(props) {
    if (stage < 10) {
      if (choices[0] === 'r') {
        if (props === 'p') {
          setStage(stage+1);
          decision = false;
        }
      }
      else if (choices[0] === 's') {
        if (props === 'r') {
            setStage(stage+1);
            decision = false;
        }
      }
      else {
        if (props === 's') {
            setStage(stage+1);
            decision = false;
        }
      }
    }
  }
  
  function newChoice() {
      window.location.reload(false);
  }
  
  useEffect(() => {
    if (stage < 10) {
      const variableInterval = setInterval(() => {
        setCount((prev) => prev+1)
      }, 1000)
      return () => clearInterval(variableInterval);
    }
  })
  
  const btnRef = useRef(null);
  const [clear, setClear] = useState(false);
  useEffect(() => {
    const btn = btnRef.current;
    // console.log(clear);
    if (clear === false) {
      btn.style.width = '0px';
      btn.style.color ='slateblue';
      btn.className = 'menus'
    } else {
      btn.style.width = '100px';
      btn.style.color = 'yellow';
      btn.className = 'menu'
    }
  }, [clear])

  function openMenu(btn) {
    btn.style.width = '100px';
  }

    return (
      <main>
        <Navigate />
        <div className="h3 p-5 text-center centered">
          Speed
        </div>
        <button onClick={() => setClear(!clear)}>menu</button>
        <div className = 'menu' ref = {btnRef}>
            <p>About</p>
        </div>
        <div className='centered'>
          <div>Record: {count} seconds</div>
          <br />
          <Clock />
          <div>stage {stage}&emsp;{process}</div>
          <br />
            <p>Guess What</p>
            <div>{compete}</div>
            <p>Your Choice</p>
            <span onClick = {() => Compete('r')}>&#9994;</span>
            <span>&emsp;</span>
            <span onClick = {() => Compete('s')}>&#9996;</span>
            <span>&emsp;</span>
            <span onClick = {() => Compete('p')}>&#9995;</span>
            <br />
            <div className='reload'>
               <button  onClick ={ newChoice }>reload</button>
            </div>
        </div>
        <div className='centered'>
    <br />
    <br />
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