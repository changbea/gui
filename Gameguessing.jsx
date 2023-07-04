import Navigate from '../Navigate';
import { useState, useEffect } from 'react';
import './Gameflipping.css';

const hidden = [];
let count;
// let ball = 0;
// let strike = 0;
// const guess = [1, 3, 5];
let num = [];
const tmp = [];
const different = [];
let value = false;

for (count = 0; count < 3; count++) {
  let num = Math.floor(Math.random()*10);
  if (num !== hidden[0] && num !== hidden[1]) {
    hidden.push(num);
  } 
  else {
    count = count - 1;
  } 
}
console.log(hidden);
function Hint() {
  const [clear, setClear] = useState(0);
  // const [guess, setGuess] = useState(0);
  // const [display, setDisplay] = useState(0);
  // const [strike, setStrike] = useState(0);
  // const [ball, setBall] = useState(0);
  // if (num !== []) {
  //   num = [];
  //   console.log('number')
  // }
  num = [];
  const show = [];
  let ball = 0;
  let strike = 0;
  show.push(
    <div>
      {/* <p>{hidden}</p> */}
      Guess the number: <input type='text' onChange={Guess}/>
      {/* Guess the number: <input type='number' name = 'myInput' /> */}
      {/* <button type='submit'>match </button> */}
      <button onClick={() => onClick()}>match</button>
      <button onClick={() => window.location.reload(false)}>refresh</button>
      <div>{clear} hints</div>
    </div>
  )
  
  for (count = 0; count < clear; count++) {
    show.push(tmp[count]);
  }
  
  // console.log(hidden);
  // function Confirm() {
  //   submitted.preventDefault()
  //   const formData = new FormData(submitted.target);
  //   const form = Object.fromEntries(formData.entries());

  //   for (count = 0; count < 3; count++) {
  //     if (hidden.indexOf(Number(form.number[count])) === count) {
  //       strike++;
  //     } else if (hidden.indexOf(Number(form.number[count])) !== -1) {
  //       ball++;
  //     }
  //     console.log('hidden' + hidden.indexOf(Number(form.number[count])));
  //     console.log(form.number);
  //   }
  //   display = Number(form.number)
  //   show.push(<div>{display}</div>)
  //   show.push(<div>{form.number} & {ball}B {strike}S</div>)
  //   setClear(true)
  // }

  // show.push(<div>{display}</div>);
  // console.log(clear)
  // show.push(<div>{clear}</div>)
  // function Guess(clear) {
  //   if ()
  // }
  // useEffect(() => {
  //   if (clear === true) {
  //     show.push(<div>show{ball}B {strike}S</div>)  
  //   }
  // })
  // if (clear === true) {
  //   show.push(<div>show{ball}B {strike}S</div>)  
  // }

  // console.log('show' + show);
  // console.log(strike);

//   if (match === false) {
//   for (count = 0; count < 3; count++) {
//     if (hidden.indexOf(guess[count]) === count) {
//       strike++;
//     } else if (hidden.indexOf(guess[count]) !== -1) {
//       ball++;
//     }
//     console.log(hidden.indexOf(guess[count]));
//   }
//   show.push(<div>{clear[0]}{clear[1]}{clear[2]} = {ball}B {strike}S</div>)
//   match = true;
// }
  
  // display.push(
  //   <form onSubmit={Confirm}>
  //     <label>
  //       Guess the number: <input type='number' name='number' onChange={(submitted) => setClear(submitted.target.value)}/>
  //     </label>
  //     <button type='submit'>match</button>
  //     <div>{clear[0]}{clear[1]}{clear[2]} = {ball}B {strike}S</div>
  //   </form>
  // )

  function Guess(set) {
    if (set.target.value > 100 && set.target.value < 1000)
    {
      num.push(Math.floor(set.target.value/100))
      num.push(Math.floor(set.target.value/10)%10)
      num.push(set.target.value%10)
      value = set.target.value;
      // setGuess(guess+1);
    } else if (set.target.value[0] == 0 && set.target.value.length === 3) {
      num.push(Math.floor(set.target.value/100))
      num.push(Math.floor(set.target.value/10)%10)
      num.push(set.target.value%10)
      value = set.target.value;
    } else {
      value = false;
    }
    
    if (value[0] === value[1]) {
      value = false;
    } else if (value[0] === value[2]) {
      value = false;
    } else if (value[1] === value[2]) {
      value = false;
    }
  }

  function onClick() {
    if (different.indexOf(value) === -1) {
      for (count = 0; count < 3; count++) {
        if (hidden.indexOf(Number(value[count])) === count) {
          strike++;
        } else if (hidden.indexOf(Number(value[count])) !== -1) {
          ball++;
        }
      }
      different.push(value);
      console.log(num)

      // console.log(num.length)
      // show.push(<div>{num[0]}{num[1]}{num[2]} & {ball/2}B {strike/2}S</div>)
      if (value !== false) {
        console.log(num)
        // tmp.push(<div>{num[0]}{num[1]}{num[2]} = {ball}B {strike}S</div>)
        tmp.push(<div>{value} = {ball}B {strike}S</div>)
        setClear(clear+1)
        // console.log(tmp)
      }
      // console.log(ball)
    }
  }

  // if (clear === true) {
  //   for (count = 0; count < 3; count++) {
  //     if (hidden.indexOf(num[count]) === count) {
  //       strike++;
  //     } else if (hidden.indexOf(num[count]) !== -1) {
  //       ball++;
  //     }
      
  //   }
  //   show.push(<div>{num[0]}{num[1]}{num[2]} & {ball/2}B {strike/2}S</div>)
  // }

  // setClear(false);
  

  return show;
}

export default function Gameguessing() {
  return (
    <div>
      <Navigate />
      <br />
      <div className='centered'>
      <Hint />
      </div>
    </div>
  );
}