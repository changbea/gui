import { useEffect } from 'react';
import Navigate from '../Navigate';
import './Subway.css'

const subwayList = ["y1", "d1", "h1", "h2", "s1", "e1", "a1", "c1", "s2"];
const intervalDistance = 3170;

function Loadsubways() {
    let h = [];
    for (let idx in subwayList) {
        h.push(`<option value='${idx}'>${subwayList[idx]}</option>`);
    }

    useEffect(() => {
        function subwayList() {
            document.getElementById("start").innerHTML = h.join("");
            document.getElementById("end").innerHTML = h.join("");
        }

        return subwayList()
    })
}

function Caldistance() {
            const start = document.getElementById("start").value;
            const end = document.getElementById("end").value;
            const type = document.querySelector("[name=group]:checked").value;
            let output = document.getElementById("output");
            
            if (start == end) {
                return output.insertAdjacentHTML(
                    "beforeend",
                    `<p>departure ${subwayList[end]} are same.</p>`
                );
            }

            let stationCount = Math.abs(start - end);
            const distance = stationCount * intervalDistance;
            const cost  = Calsubwaycost(distance, type);
            output.insertAdjacentHTML("beforeend", `<p>total fee is ${cost}.</p>`);
            output.scrollTop = output.scrollHeight;
}

// function Caldistance() {
//     useEffect(() => {
//         function distance() {
//             const start = document.getElementById("start").value;
//             const end = document.getElementById("end").value;
//             const type = document.querySelector("[name=group]:checked").value;
//             let output = document.getElementById("output");
            
//             if (start == end) {
//                 return output.insertAdjacentHTML(
//                     "beforeend",
//                     `<p>departure ${subwayList[end]} are same.</p>`
//                 );
//             }

//             let stationCount = Math.abs(start - end);
//             const distance = stationCount * intervalDistance;
//             const cost  = <Calsubwaycost distance={distance} type={type} />

//             output.insertAdjacentHTML("beforeend", `<p>total fee is ${cost}.</p>`);
//             output.scrollTop = output.scrollHeight;
//         }

//         return distance()
//     })
// }

function Calsubwaycost(distance, type) {
    const baseAmount = 
    type == 'adult' ? 1250
    : type == 'youth' ? 720
    : type == 'child' ? 450
    : 0;
    if (distance <= 10000) {
        return baseAmount;
    } else if (distance <= 50000) {
        return baseAmount + Math.ceil((distance - 10000) / 500) * 100;
    } else {
        return (
            baseAmount + (40000 / 5000) * 100 + Math.ceil((distance - 50000) / 8000) * 100
        );
    }
}

export default function Subway() {
    return (
        <main>
            <Navigate />
            <div className='fadein'>
            <Loadsubways />
            <label>departure</label>
            <select id='start'></select>
            <label>destination</label>
            <select id='end'></select>
            <label>
                <input type='radio' name='group' value='adult' checked readOnly/>adult
            </label>
            <label>
                <input type='radio' name='group' value='youth' />youth
            </label>
            <label>
                <input type='radio' name='group' value='child' />child
            </label>
            <div>
                <button onClick={Caldistance}>fee calculation</button>
            </div>
            <div id='output'></div>
            </div>
        </main>
    );
}