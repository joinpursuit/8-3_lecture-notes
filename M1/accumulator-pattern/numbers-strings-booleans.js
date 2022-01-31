const snowMoney = [40.53, 20, 34.5, 200];
const lawnMoney = [40.53, 20, 34.5, 200];

// money array as arg
const sumMoney = (moneyArr) => {
  // Default value type is a number
  // Value defaults to 0 (dollars)

  let res = 0;

  for (let cash of moneyArr) {
    res += cash; // how do i add this up?
  }

  console.log(res);
};

sumMoney(snowMoney);
sumMoney(lawnMoney);
