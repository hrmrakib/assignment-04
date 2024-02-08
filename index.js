// Problem-01 : Help The Zoo Manager

function calculateMoney(ticketSale = 0) {
  if (ticketSale < 0) {
    return "Invalid Number! Please give accurate ticket number.";
  }
  // daily security cost = 500
  // daily launch cost (8 * 50) = 400
  // per ticket price = 120
  return ticketSale * 120 - (500 + 8 * 50);
}
let x = calculateMoney(152);
console.log(x);

// Problem-02: Good Name , Bad Name

function checkName(getName) {
  let lastChar = "a, y, i , e , o , u, w";

  let typedStr = typeof getName === "string";
  let typedNum = typeof Number(getName) === "number";

  if (typedStr && getName.length >= 3 && typedNum) {
    let name = getName.toLowerCase();
    let len = name.length;
    let lastLetter = name.charAt(len - 1);
    let test = lastChar.includes(lastLetter);
    if (test) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  } else if (getName.length === 0 && typedStr) {
    return "Please, Give a Name";
  } else if (getName.length <= 3 && typedStr) {
    return "Name should be at least 3 characters";
  } else {
    return "Invalid";
  }
}
let checking = checkName("45334");
console.log(checking);

console.log(Number("45"));

// Problem 03 : Virus in my Array

function deleteInvalids(value) {
  let typedArr = Array.isArray(value);
  const store = [];

  if (typedArr) {
    for (let i = 0; i < value.length; i++) {
      if (typeof value[i] === "number" && !isNaN(value[i])) {
        store.push(value[i]);
      }
    }
  } else {
    return `It's Not An Array`;
  }
  return store;
}

console.log(
  deleteInvalids([
    1,
    null,
    undefined,
    18,
    -19,
    NaN,
    "12",
    57,
    [1, 2],
    { ob: "lala" },
    true,
    false,
  ])
);

// Problem 04 : Make A Great Password
function password(obj) {
  let value = obj["birthYear"];
  let birthStrLength = String(value).length === 4;

  if (!obj.name || !obj.birthYear || !obj.siteName) {
    return "Invalid";
  } else if (!birthStrLength) {
    return "Invalid";
  } else {
    let capitalize =
      obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    let strongPassword = capitalize + "#" + obj.name + "@" + obj.birthYear;
    return strongPassword;
  }
}

let obj = { name: "kolimuddin", birthYear: 1999, siteName: "google" };

let makePassword = password(obj);
console.log(makePassword);

// Problem 05 : Monthly Savings of a Freelancer
function monthlySavings(arr, livingCost) {
  let tax = 0;
  let taxAbleTk = 0;
  let totalEarning = 0;
  let checkArr = Array.isArray(arr);

  if (checkArr && typeof livingCost === "number") {
    // tax calculation
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 3000) {
        taxAbleTk += arr[i];
        tax = (taxAbleTk * 20) / 100;
      }
    }
    // total earning calculation
    for (let i = 0; i < arr.length; i++) {
      totalEarning += arr[i];
    }

    let saving = totalEarning - tax - livingCost;
    if (saving < 0) {
      return "Earn more!";
    }
    return "Total Saving: " + saving;
  } else {
    return "Invalid input!";
  }
}

let freelancer = monthlySavings([1000, 2000, 3000, 4500, 9000], 5000);

console.log(freelancer);
