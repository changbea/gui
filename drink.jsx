import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div id="divCoins"></div>
      <br />
      <div>
        <label>total money saved in the drink vending machine</label>
        <input
          type="text"
          name=""
          id="totalVendingAmount"
          value="1000"
          readonly
        />
        <br />
        <label>inserted money</label>
        <input type="text" name="" id="totalInputAmount" value="0" readonly />
        <br />
        <label>my wallet</label>
        <input
          type="text"
          name=""
          id="totalCustomerAmount"
          value="10000"
          readonly
        />
      </div>
      <br />
      <div id="divDrinks"></div>
      <br />
      <div id="output"></div>
    </div>
  );
}
