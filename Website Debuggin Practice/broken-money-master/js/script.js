// calculate expense
const calculateExpense = () => {
  const income = document.querySelector("#income").value;
  const food = document.querySelector("#food").value;
  const rent = document.querySelector("#rent").value;
  const clothes = document.querySelector("#clothes").value;

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense =
    parseFloat(food) + parseFloat(rent) + parseFloat(clothes);

  // calculate balance
  const balance = parseFloat(income) - expense;
  //   validate income
  if (expense > income) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};


// calculate savings
const calculateSavings = () => {
  // getting balance
  const balanceString = document.getElementById("balance").innerText;
  const balance = parseFloat(balanceString);
  // validate save button activity
  if (balanceString === "") {
    alert("Please calculate expenses and income first");
    return;
  }

  // getting income 
  const income = document.querySelector("#income").value;
  // calculate saving amount
  const savePercentage = document.getElementById("save").value;
  // Validate saving percentage value
  if (savePercentage < 0 || savePercentage === "") {
    alert("Provide positive saving value");
    return;
  }

  // calculate remaining balance
  const savingAmountString = (savePercentage / 100) * income;
  const savingAmount = parseFloat(savingAmountString);
  const remainingBalance = balance - savingAmount;

  // validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
    return;
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount.toFixed(2);
    document.getElementById("remaining-balance").innerText = remainingBalance.toFixed(2);
  }
};