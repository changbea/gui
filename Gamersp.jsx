import Navigate from '../Navigate';
import './Gamersp.css';
import { useState, useEffect, useRef } from 'react';

const number = Math.random();
const choices = ['r', 's', 'p'];
let compete;
if (number < 1/3) {
    compete = choices[0];
}
else if (number >= 1/3 && number < 2/3) {
    compete = choices[1];
}
else {
    compete = choices[2];
}

function Display() {
    if (compete === 'r') {
        return(
            <p>&#9994;</p>
        );
    }
    else if (compete === 's') {
        return(
            <p>&#9996;</p>
        );       
    }
    else {
        return(
            <p>&#9995;</p>
        );
    }
}

function Compete(props) {
    if (compete === 'r') {
        if (props === 'r') {
            alert('draw');
        }
        else if (props === 's') {
            alert('lose');
        }
        else {
            alert('win');
        }
    }
    else if (compete === 's') {
        if (props === 'r') {
            alert('win');
        }
        else if (props === 's') {
            alert('draw');
        }
        else {
            alert('lose');
        }
    }
    else {    
        if (props === 'r') {
            alert('lose');
        }
        else if (props === 's') {
            alert('win');
        }
        else {
            alert('draw');
        }
    }
}

function Decision(btn, count) {
    if (btn === count%3) {
      alert('draw');
    }
    else {
      if (btn === 0) {
        if (count%3 === 1) {
          alert('win');
        }
        else {
          alert('lose');
        }
      }
      else if (btn === 1) {
        if (count%3 === 0) {
          alert('lose');
        }
        else  {
          alert('win');
        }
      }
    }
  }

function Menu() {
  const btnRef = useRef(null);
  const [clear, setClear] = useState(false);
  useEffect(() => {
    const btn = btnRef.current;
    console.log(clear);
    if (clear === false) {
      btn.style.width = '0px';
      btn.style.color ='slateblue';
    } else {
      btn.style.width = '100px';
      btn.style.color = 'yellow';
    }
  }, [])

  function openMenu(btn) {
    btn.style.width = '100px';
  }

  return (
    <div>
      <button onClick={() => setClear(!clear)}>menu</button>
      <div className = 'menu' ref = {btnRef}>
        <p>About</p>
      </div>
    </div>
  )
}

export default function Gamersp() {
    function newChoice() {
        window.location.reload(false);
    }

    const [count, setCount] = useState(10000);
  const [decision, setDecision] = useState(null);
  // const [clear, setClear] = useState(false);
  
  useEffect(() => {
    const variableInterval = setInterval(() => {
      setCount((prev) => prev+1); 
    }, 1000)
    if (count % 3 === 0) {
      setDecision(() => <div>&#9994;</div>)
    }
    else if (count % 3 === 1) {
      setDecision(() => <div>&#9996;</div>)
    }
    else {
      setDecision(() => <div>&#9995;</div>)
    }    
    return () => clearInterval(variableInterval);
  }, [count])

  function openMenu() {
    if (clear === false) {
      document.getElementById('id').style.color = 'blue';
    }
  }

  const btnRef = useRef(null);
  const [clear, setClear] = useState(false);
  useEffect(() => {
    const btn = btnRef.current;
    console.log(clear);
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
          Rock and Scissors and Paper
        </div>
        {/* <Menu /> */}
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