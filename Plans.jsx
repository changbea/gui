import { element } from 'prop-types';
import Navigate from '../Navigate';
import { useState, useEffect } from 'react';

// let count;
let num;
// let value = false;
// let valueSecondary = false;
let primary = {value: false, done: false};
let secondary = {value: false, done: false};
let valueArray = [];
let doneArray = [];
let change = false;

function Planning() {
  const [count, setCount] = useState(0);
  const [decision, setDecision] = useState(null);
  const [value, setValue] = useState(null);

  const done = [];
  const onProcess = [];
  onProcess.push(
    <div className='text-bg-info pt-5 px-5'>
      <input className='p-5' type='text' placeholder='enter tasks' value={decision} onKeyDown={(input) => {if (input.key === 'Enter') primaryClick()}} onChange={(input) => Primary(input)}/>
      <span>&emsp;</span>
      <button className='btn btn-primary' onClick={() => primaryClick()}>add</button>
      <span>&emsp;</span>
      <div>on process</div>
    </div>
  );
  done.push(
    <div className='text-bg-info px-5'>
      <div>done</div>
    </div>
  );
  

  for (let element in valueArray) {
    if (doneArray[element] === false) {
      onProcess.push(
        <div className='text-bg-info'>
        <button className='container btn btn-secondary' onClick={() => {
          if (change === element) {
            change = false;
          } else {
            change = element;
          }
          setValue(valueArray[element]);
          setCount(count+1);
        }}>{valueArray[element]}</button>
        <button className='btn btn-success' onClick={() => {
          doneArray[element] = !doneArray[element];
          setCount(count+1);
        }}>on process</button>
        <button className='btn btn-warning' onClick={() => {
          Removal(element)
          setCount(count+1);
        }}>remove</button>
      </div>
      );

      if (change === element) {
        secondary.value = value;
        onProcess.push(
          <div className='text-bg-info'>
            <input className='p-5 container' type='text' placeholder='enter tasks' value={value} onKeyDown={(input) => {if (input.key === 'Enter') {
              secondaryClick(element)
            }}} onChange={(input) => Secondary(input)}/>
            <button className='btn btn-primary container' onClick={() => {
              secondaryClick(element)
            }}>change</button>
          </div>
        );
      }
    } else {
      done.push(
        <div className='text-bg-info'>
        <button className='container btn btn-secondary' onClick={() => {
          if (change === element) {
            change = false;
          } else {
            change = element;
          }
          setValue(valueArray[element]);
          setCount(count+1);
        }}>{valueArray[element]}</button>
        <button className='btn btn-success' onClick={() => {
          doneArray[element] = !doneArray[element];
          setCount(count+1);
        }}>done</button>
        <button className='btn btn-warning' onClick={() => {
          Removal(element)
          setCount(count+1);
        }}>remove</button>
      </div>
      );

      if (change === element) {
        secondary.value = value;
        done.push(
          <div className='text-bg-info'>
            <input className='p-5 container' type='text' placeholder='enter tasks' value={value} onKeyDown={(input) => {if (input.key === 'Enter') {
              secondaryClick(element)
            }}} onChange={(input) => Secondary(input)}/>
            <button className='btn btn-primary container' onClick={() => {
              secondaryClick(element)
            }}>change</button>
          </div>
        );
      }
    }
  }

  function Removal(element) {
    let valueRemoved = [];
    for (num in valueArray) {
      if (num !== element) {
        valueRemoved.push(valueArray[num]);
      }
    }
    valueArray = valueRemoved;
    change = false;
  }

  function Primary(set) {
    primary.value = set.target.value;
    setDecision(primary.value);
  }

  function Secondary(set) {
    secondary.value = set.target.value;
    setValue(secondary.value);
  }

  function primaryClick() {
    valueArray = [...valueArray, primary.value];
    doneArray = [...doneArray, primary.done];
    primary.value = false;
    setDecision(0);
    setCount(count+1)
  }
  
  function secondaryClick(element) {
    valueArray[element] = secondary.value;
    setCount(count+1);
  }

  return (
    <div>
      {onProcess}
      {done}
      <br />
      <button onClick={() => window.location.reload(false)}>refresh</button>
    </div>
  );
}

export default function Plans() {
  return (
    <div>
      <Navigate />
      <br />
      <Planning />
    </div>
  );
}