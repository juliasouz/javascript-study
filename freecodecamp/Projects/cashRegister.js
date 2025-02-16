/* Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price
as the first argument (price), payment as the second argument (cash),
and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due,
or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change
if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills,
sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
] */

function checkCashRegister(price, cash, cid) {
    const currencyUnit = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };
    let change = cash - price;
    let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);
    if (totalCid < change) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (totalCid === change) {
        return { status: "CLOSED", change: cid };
    } else {
        let changeArr = [];
        cid = cid.reverse();
        for (let i = 0; i < cid.length; i++) {
            let curr = cid[i][0];
            let currVal = cid[i][1];
            let currTotal = 0;
            while (change >= currencyUnit[curr] && currVal > 0) {
                change -= currencyUnit[curr];
                currVal -= currencyUnit[curr];
                currTotal += currencyUnit[curr];
                change = Math.round(change * 100) / 100;
            }
            if (currTotal > 0) {
                changeArr.push([curr, currTotal]);
            }
        }
        if (change > 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        }
        return { status: "OPEN", change: changeArr };
    }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);