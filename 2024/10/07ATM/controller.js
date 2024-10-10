//utils
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// server
const CLIENTS_ATM = "clientsAtm";
const gClients = getFromStorage(CLIENTS_ATM);

//controller

const pinInput = document.querySelector("#pin-input");
const pinForm = document.querySelector("#pin-form");
const successGreet = document.querySelector("#greet-correct-pin");
const successHeader = document.querySelector("#correct-pin-header");
const btns = document.querySelectorAll(".btns");
const returnBtns = document.querySelectorAll(".return-btn");
const withdrawBtn = document.querySelector("#withdrawal-btn");
const fixedAmounts = document.querySelectorAll(".fixed-amount");
const temporaryAmount = document.querySelector("#temporary-amount");
const resetWithdrawalTempereryNum =
  document.querySelector("#resetTempereryNum");
const withdrawalBtn = document.querySelector("#withdrawal-btn");
const whithdrawalContainer = document.querySelector("#whithdrawal-container");
const whithdrawalInput = document.querySelector("#whithdrawal-input");
const withdrawalForm = document.querySelector("#withdrawal-form");
const addBtn = document.querySelector(".add-btn");
const printedMessage = document.querySelector("#printed-message");
const greetAfterAction = document.querySelector("#greet-after-action");
const depositBtn = document.querySelector("#deposit-btn");
const depositSubmitBtn = document.querySelector("#deposit-submit-btn");
const depositContainer = document.querySelector("#deposit-container");
const depositInput = document.querySelector("#deposit-input");
const balanceBtn = document.querySelector("#balance-btn");
const balanceContainer = document.querySelector("#balance-container");
const balanceDisplayEl = document.querySelector("#balance-display");
const getOutBtn = document.querySelector("#out-btn");

// PIN ENTRY , INCURRECT / CURRECT , 3 TIMES WRRONG, DISPLAY BUTTONS IF CURRECT

let currentClient = {};

function handlePinEntry() {
  let pinCounter = 0;
  pinForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (pinCounter < 3) {
      if (pinInput.value !== "") {
        const matchClient = gClients.find((pin) => {
          return pin.pin.toString() === pinInput.value.toString();
        });
        if (matchClient !== undefined) {
          currentClient = matchClient;
          pinForm.classList.add("hidden");
          btns.forEach((btn) => {
            if (btn.id !== "reset") {
              btn.classList.remove("hidden");
            }
          });
          successGreet.textContent = `wellcom ${matchClient.name}!`;
          successHeader.classList.remove("hidden");
        } else {
          pinCounter++;
          console.log(pinCounter);
          alert("wrong pin - Try again!");
          pinInput.value = "";
          return;
        }
        pinInput.value = "";
      }
    } else {
      alert("too many trys - come back tomorrow");
      const day = 1000 * 60 * 60 * 24;
      setTimeout(() => (pinCounter = 0), day);
    }
  });
}
handlePinEntry();

// RETURN BTNS

returnBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => btn.classList.remove("hidden"));
    greetAfterAction.classList.remove("hidden");
    whithdrawalContainer.classList.add("hidden");
    balanceContainer.classList.add("hidden");
    depositContainer.classList.add("hidden");
  });
});

//  WITHDRAWAL

// hide && show
withdrawalBtn.addEventListener("click", () => {
  greetAfterAction.classList.add("hidden");
  btns.forEach((btn) => btn.classList.add("hidden"));
  whithdrawalContainer.classList.remove("hidden");
  successHeader.classList.add("hidden");
});

// fixed amount  - add to tmperery amount
fixedAmounts.forEach((el) => {
  el.addEventListener("click", () => {
    let beforeNum = Number(temporaryAmount.textContent);
    const toAdd = Number(el.textContent);
    beforeNum += toAdd;
    temporaryAmount.textContent = beforeNum;
  });
});

// reset temperery amount btn
resetWithdrawalTempereryNum.addEventListener("click", () => {
  temporaryAmount.textContent = 0;
});

// replace temperey number in input value
addBtn.addEventListener("click", () => {
  if (
    Number(whithdrawalInput.value) > 0 &&
    Number(whithdrawalInput.value) !== NaN
  ) {
    temporaryAmount.textContent = whithdrawalInput.value;
    whithdrawalInput.value = "";
  } else alert("must be positive and only numbers!");
});

// if allowed - print mony equal to temperey number. save in local storege. hide && show
let printedToday = 0;
withdrawalForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  if (
    printedToday + Number(temporaryAmount.textContent) <= 2000 &&
    Number(temporaryAmount.textContent) <= 2000 &&
    Number(temporaryAmount.textContent) < Number(currentClient.balance) &&
    Number(temporaryAmount.textContent) > 0
  ) {
    console.log(printedToday + Number(temporaryAmount.textContent));
    // here the machine print is money
    printedToday += Number(temporaryAmount.textContent);
    let currentBalance = Number(currentClient.balance);
    currentBalance -= Number(temporaryAmount.textContent);
    currentClient.balance = currentBalance;
    saveToStorage(CLIENTS_ATM, gClients);
    temporaryAmount.textContent = 0;

    // hide && show

    setTimeout(() => {
      greetAfterAction.classList.remove("hidden");
      btns.forEach((btn) => btn.classList.remove("hidden"));
    }, 1000 * 10);
    printedMessage.classList.remove("hidden");
    setTimeout(() => {
      printedMessage.classList.add("hidden");
    }, 1000 * 10);
    whithdrawalContainer.classList.add("hidden");
  } else
    alert(
      "You are trying to print  more than 2000 today, or 0, or you don’t have enough in your account!"
    );
});

// DEPOSIR FUNDS  - demo - input insted of monay

// hide && show
depositBtn.addEventListener("click", () => {
  greetAfterAction.classList.add("hidden");
  btns.forEach((btn) => btn.classList.add("hidden"));
  successHeader.classList.add("hidden");
  depositContainer.classList.remove("hidden");
});

//submit
depositSubmitBtn.addEventListener("click", () => {
  if (
    Number(depositInput.value) !== NaN &&
    Number(depositInput.value) > 0 &&
    Number(depositInput.value) % 5 === 0
  ) {
    let currentBalance = Number(currentClient.balance);
    currentBalance += Number(depositInput.value);
    currentClient.balance = currentBalance;
    saveToStorage(CLIENTS_ATM, gClients);
    depositInput.value = "";
    alert("Your money added to your account successfully");

    // hide && show
    btns.forEach((btn) => btn.classList.remove("hidden"));
    greetAfterAction.classList.remove("hidden");
    depositContainer.classList.add("hidden");
  } else alert("must be positive number and multiples of five");
});

// BALANCE INQUIRY

balanceBtn.addEventListener("click", () => {
  balanceContainer.classList.remove("hidden");
  successHeader.classList.add("hidden");
  greetAfterAction.classList.add("hidden");
  btns.forEach((btn) => btn.classList.add("hidden"));
  const displayBalance = currentClient.balance;
  balanceDisplayEl.textContent = `your balance is ${displayBalance}!`;
});

// GET OUT
//reset && hide && show
getOutBtn.addEventListener("click", () => {
  currentClient = {};
  greetAfterAction.classList.add("hidden");
  btns.forEach((btn) => btn.classList.add("hidden"));
  pinForm.classList.remove("hidden");
  successHeader.classList.add("hidden");
});
