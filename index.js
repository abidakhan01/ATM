class User {
  constructor() {
    this.name = "Ali";
    this.pin = "1234";
    this.acc = "5353553";
    this.balance = "80000";
  }
  setPin(pin) {
    this.pin = pin;
  }
  setName(name) {
    this.name = name;
  }
  setAcc(acc) {
    this.acc = acc;
  }
  setBalance(balance) {
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  getname() {
    return this.name;
  }
  getPin() {
    return this.pin;
  }
  getAcc() {
    return this.acc;
  }
  getBlance() {
    return this.balance;
  }
}
const user = new User();
user.getname();
user.getPin();
user.getAcc();
user.getBlance();

//second user
class User0 {
  constructor() {
    this.name = "Ahmed";
    this.BankName = "UBL Bank";
    this.acc = "1234567";
    this.balance = "50000.0";
  }
  setPin(BankName) {
    this.BankName = BankName;
  }
  setName(name) {
    this.name = name;
  }
  setAcc(acc) {
    this.acc = acc;
  }
  setBalance(balance) {
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  getname() {
    return this.name;
  }
  getBankName() {
    return this.BankName;
  }
  getAcc() {
    return this.acc;
  }
  getBlance() {
    return this.blance;
  }
}
const user2 = new User0();
user2.getname();
user2.getBankName();
user2.getAcc();
user2.getBlance();
let login = document.querySelector(".main");
login.innerHTML += `<div class="login">
<div id="heading">
  <h1>Wellcome   ATM Machine</h1>
</div>
<div id="text2">
  <h3>Enter Your Pin</h3>
</div>
<div>
  <input
    class="txt"
    type="number"
    placeholder="Enter Your Pin"
    id="txt1"
  />
</div>

<div class="btn">
  <button id="btn1">Enter</button>
</div>
</div>`;
//event Listener
const enterButton = document.getElementById("btn1");
enterButton.addEventListener("click", (e) => {
  const input = document.getElementById("txt1").value;
  if (input == user.pin) {
    if (login.style.display !== "none") {
      login.style.display = "none";
      menu.style.display = "grid";
    }
  } else {
    alert("please Enter a valid number");
  }
});
//menu
let menu = document.querySelector(".menu");
menu.innerHTML += `<div class="home">
<div class="btn1">
  <button id="withdrawl">withdrawl</button>
</div>
<div class="btn2">
  <button id="changePin">change pin</button>
</div>
<div class="btn3">
  <button id="accInfo">Acc Info</button>
</div>
<div class="btn4">
  <button id="deposit">deposit</button>
</div>
<div class="btn5">
  <button id="blnInq">blnInq</button>
</div>
<div class="btn6">
  <button id="transfer">transfer</button>
</div>
<div class="btn7">
  <button id="cancel">cancel</button>
</div>
</div>`;
// menu cancel
const cancel2 = document.getElementById("cancel");
cancel2.addEventListener("click", (e) => {
  if (menu.style.display != "none") {
    login.style.display = "grid";
    menu.style.display = "none";
  }
});

//withdraw page
let withdraw = document.querySelector(".main2");
withdraw.innerHTML += `<div class="login">
<h1 class="heading1">withdraw Amount</h1>
<div>
  <input
    class="txt01"
    type="text"
    placeholder="Enter Amount"
    id="ccc"
  />
</div>
<div class="btn">
  <button id="btn0" type="button">Enter</button>
  <button id="btn3" type="button">Back</button>
</div>
</div>`;

//transaction success page
const withdrawBack = document.querySelector(".withdraw");
withdrawBack.innerHTML += ` <div class="success">
<div id="congrats">
  <h1>Your Transaction Is Successfully</h1>
</div>
<div class="congrats2">
  <button id="cancel0">Back</button>
</div>
</div>`;

// withdraw enter
const withdraw1212 = document.getElementById("withdrawl");
withdraw1212.addEventListener("click", (e) => {
  if (menu.style.display != "none") {
    withdraw.style.display = "grid";
    menu.style.display = "none";
  }
});

//withdraw cancel
const backWithdraw = document.getElementById("btn3");
backWithdraw.addEventListener("click", (e) => {
  if (withdraw.style.display != "none") {
    menu.style.display = "grid";
  }
});
//withdraw enter//to be continued.....
const enterwithDraw = document.getElementById("btn0");
enterwithDraw.addEventListener("click", (e) => {
  if (withdraw.style.display != "none") {
    withdrawBack.style.display = "grid";
    withdraw.style.display = "none";
  }
});

//not transaction messsage
const notTransaction = document.querySelector(".noWithdraw");
notTransaction.innerHTML += `  <div class="noSuccess">
<div id="again">
  <h1>Sorry! Transaction is Not processed</h1>
</div>
<div class="remove00">
  <button id="back00">Back</button>
</div>
</div>`;

// transaction is success or unsuccess
const transit = document.getElementById("btn0");
transit.addEventListener("click", (e) => {
  const transitsss = document.getElementById("ccc").value;
  if (transitsss <= user.balance && transitsss >= 500) {
    user.balance -= transitsss;
    withdraw.style.display != "none";
    withdrawBack.style.display = "grid";
    withdraw.style.display = "none";
    console.log(user.balance);
  } else {
    withdraw.style.display != "none";
    notTransaction.style.display = "grid";
    withdraw.style.display = "none";
    console.log(user.balance);
  }
});

//success back
const success = document.getElementById("cancel0");
success.addEventListener("click", (e) => {
  if (withdrawBack.style.display != "none") {
    menu.style.display = "grid";
    withdrawBack.style.display = "none";
  }
});

//not-success back
const notSuccess = document.getElementById("back00");
notSuccess.addEventListener("click", () => {
  if (notTransaction.style.display != "none") {
    menu.style.display = "grid";
    notTransaction.style.display = "none";
  }
});
// change pin
const changedPin01 = document.querySelector(".changePin1");
changedPin01.innerHTML += ` <div class="toChange">
<div>
  <h2 class="byline">Change Your Pin Account</h2>
</div>
<div>
  <input type="number" id="txt1" placeholder="Enter your old pin" />
</div>
<div>
  <input
    type="number"
    id="pinChanged"
    placeholder="Enter your New pin"
  />
</div>
<div>
  <button id="btnChange0">Enter</button>
  <button id="btnChange">Back</button>
</div>
</div>`;
//change pinlogic
User.prototype.changePin = function (oldPin, newPin) {
  if (this.pin === oldPin) {
    this.pin = newPin;
    return true; // PIN changed successfully
  } else {
    return false; // Incorrect old PIN
  }
};
// Event listener for the "change pin" button in the menu
const changePinButton = document.getElementById("changePin");
changePinButton.addEventListener("click", (e) => {
  if (menu.style.display !== "none") {
    menu.style.display = "none";
    changedPin01.style.display = "grid";
  }
});

// Event listener for the "Enter" button in the change PIN page
const changePinEnterButton = document.getElementById("btnChange0");
changePinEnterButton.addEventListener("click", (e) => {
  const oldPin = document.getElementById("txt1").value;
  const newPin = document.getElementById("pinChanged").value;

  // Check if the PIN change is successful
  if (user.changePin(oldPin, newPin)) {
    alert("PIN changed successfully!");
  } else {
    alert("Incorrect old PIN. PIN change unsuccessful.");
  }
});

// Event listener for the "Back" button in the change PIN page
const changePinBackButton = document.getElementById("btnChange");
changePinBackButton.addEventListener("click", (e) => {
  if (changedPin01.style.display !== "none") {
    menu.style.display = "grid";
    changedPin01.style.display = "none";
  }
});
//changepin back btn

const backchanged = document.getElementById("btnChange");
backchanged.addEventListener("click", (e) => {
  if (changedPin01.style.display != "none") {
    menu.style.display = "grid";
    changedPin01.style.display = "none";
  }
});

// acc info
const accInfo3 = document.querySelector(".accinfo");
accInfo3.innerHTML += `<div class="info">
<div class="info1">
  <h2>Account information</h2>
</div>
<div class="info2">
  <h3>User name:${user.name}</h2>
</div>
<div class="info3">
  <h3>Account number:${user.acc}</h3>
</div>
<div>
<button id="accBtn">Back</button>
</div>
</div>`;
//acc button
const btnnacc = document.getElementById("accInfo");
btnnacc.addEventListener("click", (e) => {
  if (menu.style.display != "none") {
    accInfo3.style.display = "grid";
    menu.style.display = "none";
  }
});

//acc back

const backAcc = document.getElementById("accBtn");
backAcc.addEventListener("click", (e) => {
  if (accInfo3.style.display != "none") {
    menu.style.display = "grid";
    accInfo3.style.display = "none";
  }
});
//event deposit button
const eventDeposit = document.getElementById("deposit");
eventDeposit.addEventListener("click", (e) => {
  if (menu.style.display != "none") {
    deposit.style.display = "grid";
    menu.style.display = "none";
  }
});

//deposit;
const deposit = document.querySelector(".deposited");
deposit.innerHTML += `<div class="deposit0">
<div>
  <h2 class="depositmore">deposit your Amount</h2>
</div>
 <div class="deposit222">
  <h3> user-name:${user.name}</h3>
</div>
<div>
  <h3 id="deposit11"> user-Acc:${user.acc}</h3>
</div>
<div>
  <input
    type="number"
    id="InputAmount"
    placeholder="Enter your Amount"
  />
</div>
<div>
  <button id="enter111">Enter</button>
  <button id="exit111">back</button>
</div>
</div>`;
//deposit back
const depositEnter = document.getElementById("exit111");
depositEnter.addEventListener("click", (e) => {
  if (deposit.style.display != "none") {
    menu.style.display = "grid";
    deposit.style.display = "none";
  }
});
// enter deposit
const depositEnter0 = document.getElementById("enter111");
depositEnter0.addEventListener("click", (e) => {
  const inputdeposit = document.getElementById("InputAmount");
  if (inputdeposit <= user.balance && inputdeposit >= 100) {
    user.balance += inputdeposit;
    deposit.style.display != "none";
    amount222.style.display = "grid";
    deposit.style.display = "none";
  } else {
    alert("please enter a valid amount");
  }
});

// deposit success
const amount222 = document.querySelector(".run");
amount222.innerHTML += ` <div class="run2">
<div class="run3">
  <h2>Successfully! Deposit your Amount</h2>
</div>
<div class="depositMoney">
  <button id="depositBtn22">back</button>
</div>
</div>`;
//deposit success back

const backDeposit = document.getElementById("depositBtn22");
backDeposit.addEventListener("click", (e) => {
  if (amount222.style.display != "none") {
    menu.style.display = "grid";
    amount222.style.display = "none";
  }
});

//inquiry balnace
const inquriy = document.querySelector(".blnceinqu");
inquriy.innerHTML += `<div class="inquriy">
<div>
  <h2 class="blnceDetails">Balance Details</h2>
</div>
<div class="deposit222">
  <h5>user-name:${user.name}</h5>
</div>
<div>
  <h5 id="deposit11">user-Acc:${user.acc}</h5>
</div>
<div>
  <h5 id="inq">user-balance: ${user.balance}</h5>
</div>
<div>
  <button id="blnBtn2">Back</button>
</div>
</div>`;
// inquiry btn

const inquiry00 = document.getElementById("blnInq");
inquiry00.addEventListener("click", (e) => {
  if (menu.style.display != "none") {
    inquriy.style.display = "grid";
    menu.style.display = "none";
  }
});
// inquriy back
const backinqu = document.getElementById("blnBtn2");
backinqu.addEventListener("click", (e) => {
  if (inquriy.style.display != "none") {
    menu.style.display = "grid";
    inquriy.style.display = "none";
  }
});

//transfer from menu
const transfered = document.querySelector(".transfe");
transfered.innerHTML += `<div class="trans">
<div>
  <h2 class="trans22">Transfer your Amount</h2>
</div>
<div>
<label>
  Acc no:
  </label>
  <input
    class="trans22"
    type="number"
    id="transf"
    placeholder="Enter amount number"
  />
</div>
<div>
  <button id="Btntrans">Enter</button>
  <button id="backtrans1">back</button>
</div>
</div>`;

// enter fromtrans
const toTrans = document.querySelector(".transUser");
toTrans.innerHTML += `<div class="user">
<div>
  <h2 class="userBnk">${user2.BankName}</h2>
</div>
<div>
  <h4 class="userNme">User-name:${user2.name}</h4>
</div>
<div>
  <h4 class="userNme">User-Acc:${user2.acc}</h4>
</div>
<div>
  Enter Amount:
  <input type="number" class="userClass"  id="transf11" placeholder="Enter Amount" />
</div>
<div>
  <button id="btnTrns">Transfer</button>
</div>
<div>
  <button id="btnTrns0">Back</button>
</div>
</div>`;
//event transfer menu
const transferUser = document.getElementById("transfer");
transferUser.addEventListener("click", (e) => {
  if (menu.style.display != "none") {
    transfered.style.display = "grid";
    menu.style.display = "none";
  }
});
// transfer enter

const enterTrans = document.getElementById("Btntrans");
enterTrans.addEventListener("click", (e) => {
  const inputTrs = document.getElementById("transf").value;
  if (inputTrs == user2.acc) {
    if (transfered.style.display != "none") {
      toTrans.style.display = "grid";
      transfered.style.display = "none";
    } else {
      alert("please enter a valid Acc NUMBER");
    }
  }
});
// transfer to success
const transferTO = document.querySelector(".transSuccess");
transferTO.innerHTML += `<div class="trns">
<div>
  <h1 class="success22">Successfully! Transfered</h1>
</div>
<div>
  <button id="btnsucc">Back</button>
</div>
</div>`;

// event to succes
const valid = document.getElementById("btnTrns");
valid.addEventListener("click", (e) => {
  const input12121 = document.getElementById("transf11").value;
  if (input12121 <= user.balance && input12121 >= 500) {
    user.balance -= input12121;
    toTrans.style.display != "none";
    transferTO.style.display = "grid";
    toTrans.style.display = "none";
    console.log(user.balance);
  } else {
    toTrans.style.display != "none";
    notTrnsd.style.display = "grid";
    toTrans.style.display = "none";
    console.log(user.balance);
  }
});
//trans back acc
const backAccto = document.getElementById("btnTrns0");
backAccto.addEventListener("click", (e) => {
  if (toTrans.style.display != "none") {
    menu.style.display = "grid";
    toTrans.style.display = "none";
  }
});
//not succs
const notTrnsd = document.querySelector(".notSuccTr");
notTrnsd.innerHTML += `<div class="notTrans">
<div>
  <h1>Sorry! Your balance is unsufficient.</h1>
</div>
<button id="btnsucc00">Back</button>
</div>`;

//back tansfer
const tansferbak = document.getElementById("btnsucc");
tansferbak.addEventListener("click", () => {
  if (transferTO.style.display != "none");
  {
    menu.style.display = "grid";
    transferTO.style.display = "none";
  }
});
const backTOtrans = document.getElementById("btnsucc00");
backTOtrans.addEventListener("click", (e) => {
  if (notTrnsd.style.display != "none") {
    menu.style.display = "grid";
    notTrnsd.style.display = "none";
  }
});

//to transfer ammount eventlistener
