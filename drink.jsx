<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <style>
      #output {
        width: 100%;
        height: 100px;
        overflow-y: auto;
        border: 1px solid #111;
      }

      .coin {
        padding: 5px;
        margin-right: 5px;
      }

      .drink {
        padding: 5px;
        margin-right: 5px;
      }

      .active {
        background-color: green;
      }

      .active1 {
        background-color: blue;
      }
    </style>
  </head>
  <body>
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
      /><br />
      <label>inserted money</label><input type="text" name ""
      id="totalInputAmount" value="0" readonly/><br />
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
    <script>
      let totalVendingAmount = 1000;
      let totalInputAmount = 0;
      let totalCustomerAmount = 10000;

      const drinks = [
        {
          drinkId: "1",
          drinkName: "coke",
          price: 700,
          stock: 5,
        },
        {
          drinkId: "2",
          drinkName: "orange",
          price: 1200,
          stock: 5,
        },
        {
          drinkId: "3",
          drinkName: "coffee",
          price: 500,
          stock: 5,
        },
        {
          drinkId: "4",
          drinkName: "water",
          price: 700,
          stock: 5,
        },
        {
          drinkId: "5",
          drinkName: "corn",
          price: 1200,
          stock: 5,
        },
        {
          drinkId: "6",
          drinkName: "milk",
          price: 700,
          stock: 5,
        },
        {
          drinkId: "7",
          drinkName: "trevi",
          price: 1000,
          stock: 5,
        },
      ];

      function renderCoins() {
        const coins = [100, 500, 1000];
        const h = [];
        for (const coin of coins) {
          h.push(
            `<button onclick="inputAmount(${coin});" class="coin">${coin} inserted</button>`
          );
        }

        document.getElementById("divCoins").innerHTML = h.join("");
      }

      function renderDrinks() {
        const h = [];
        for (const drink of drinks) {
          h.push(
            `<button onclick="requestDrink(${drink.drinkId});" id="btnDrink${drink.drinkId}" class="drink">${drink.drinkName}(${drink.price}, stock<span id="drinkStock${drink.drinkId}">${drink.stock}</span>)</button>`
          );
        }

        document.getElementById("divDrinks").innerHTML = h.join("");
      }

      function inputAmount(amount) {
        let output = document.getElementById("output");
        if (amount <= totalCustomerAmount) {
          totalInputAmount += amount;
          totalCustomerAmount -= amount;
          totalVendingAmount += amount;

          for (let drink of drinks) {
            if (drink.price <= totalInputAmount) {
              document.getElementById("btnDrink" + drink.drinkId).className =
                "drink active";
            }
          }

          document.getElementById("totalInputAmount").value = totalInputAmount;
          document.getElementById(
            "totalCustomerAmount"
          ).value = totalCustomerAmount;
          document.getElementById(
            "totalVendingAmount"
          ).value = totalVendingAmount;

          output.insertAdjacentHTML(
            "beforeend",
            `<p>${amount} has inserted.</p>`
          );
          output.insertAdjacentHTML(
            "beforeend",
            `<p>total inserted money is ${totalInputAmount}.</p>`
          );
          output.insertAdjacentHTML(
            "beforeend",
            `<p>your wallet has ${totalCustomerAmount} remain.</p>`
          );
        } else {
          output.insertAdjacentHTML(
            "beforeend",
            `<p>my wallet has ${totalCustomerAmount} remain.</p>`
          );
          output.insertAdjacentHTML(
            "beforeend",
            `<p>cannot insert ${amount}.</p>`
          );
        }
        output.scrollTop = output.scrollHeight;
      }

      function requestDrink(drinkId) {
        let output = document.getElementById("output");
        let drink = drinks.filter((d) => d.drinkId == drinkId)[0];
        if (drink.stock > 0) {
          if (totalInputAmount >= drink.price) {
            let change = totalInputAmount - drink.price;
            if (totalVendingAmount >= change) {
              output.insertAdjacentHTML(
                "beforeend",
                `<p>${drink.drinkName} drink served. here is the change ${change}.</p>`
              );
              totalCustomerAmount += change;
              drink.stock -= 1;
              totalInputAmount = 0;
              totalVendingAmount -= change;
              document.getElementById(
                "totalInputAmount"
              ).value = totalInputAmount;
              document.getElementById(
                "totalCustomerAmount"
              ).value = totalCustomerAmount;
              document.getElementById(
                "totalVendingAmount"
              ).value = totalVendingAmount;

              document.getElementById("drinkStock" + drinkId).innerText =
                drink.stock;

              output.insertAdjacentHTML(
                "beforeend",
                `<p>now your wallet has total ${totalCustomerAmount}.</p>`
              );

              for (let item of drinks) {
                document.getElementById("btnDrink" + item.drinkId).className =
                  "drink";
              }
            } else {
              output.insertAdjacentHTML(
                "beforeend",
                `<p>cannot buy ${drink.drinkName} because drink vending machine has not enough change.</p>`
              );
            }
          } else {
            output.insertAdjacentHTML(
              "beforeend",
              `<p>although total inserted money is ${totalInputAmount}, you cannot purchase because the price of drink is ${drink.price}.</p>`
            );
          }
        } else {
          output.insertAdjacentHTML(
            "beforeend",
            `<p>selected drink ${drink.drinkName} is out of stock.</p>`
          );
        }
        output.scrollTop = output.scrollHeight;
      }

      window.addEventListener("load", function () {
        renderCoins();
        renderDrinks();
      });
    </script>
  </body>
</html>
