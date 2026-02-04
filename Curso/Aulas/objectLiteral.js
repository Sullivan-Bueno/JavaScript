// Object Literal
const account1 = {
  name: "Sullivan",
  accountNumber: 5,
  balance: 5000,
  displayBalance: function () {
    console.log(this.balance);
  },
};

const account2 = {
  name: "Sullivan 2",
  accountNumber: 6,
  balance: 512000,
  displayBalance: function () {
    console.log(this.balance);
  },
};

// function createAccount(username, accountNumber, initialBalance) {
//   return {
//     name: username,
//     accountNumber,
//     balance: initialBalance,
//     displayBalance: function () {
//       console.log(balance);
//     },
//   };
// }

function Account(username, accountNumber, initialBalance) {
  this.name = username;
  this.accountNumber = accountNumber;
  this.balance = initialBalance;
  this.displayBalance = function () {
    console.log(balance);
  };
}

const account3 = new Account("Sullivan", 294, 55);
console.log(account3);
