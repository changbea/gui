import { useState } from 'react';
import Navigate from '../Navigate';

function Display() {
    const [stop, setStop] = useState(false);
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

export default function Gamersp() {
    function newChoice() {
        window.location.reload(false);
    }
    return (
      <main>
        <Navigate />
        <div className='fadein'>
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
      </main>
    );
}