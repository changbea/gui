import Navigate from '../Navigate';
import { useRef } from 'react';
import { createRoot } from "react-dom/client";

/*
export default function Rendercoins() {
  const coins = [100, 500, 1000];
  const h =[];
  for (const coin of coins) {
    h.push(
      `<button onclick="inputAmount(${coin});" class="coin">${coin} inserted</button>`
    );
  }

  return(
    <div id='divCoins'></div>  
  );
}
document.getElementsById("divCoins").innerHTML = h.join("");
*/

export default function Rendercoins() {
  
  return (
    <div ref={ref}></div>
  );
}
const coins = [100, 500, 1000];
const h =[];
for (const coin of coins) {
    h.push(
        `<button onclick="inputAmount(${coin});" class="coin">${coin} inserted</button>`
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Rendercoins />);