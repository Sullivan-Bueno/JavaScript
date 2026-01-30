class BankAccount {
  constructor(personName, initialBalance, address) {
    this.personName = personName;
    this.balance = initialBalance;
    this.address = address;
  }

  printInfo() {
    console.log(
      `Essa conta pertence a ${this.personName}, residente do endereço ${this.address} e tem um saldo inicial de R$ ${this.initialBalance}`,
    );
  }
}

const acc1 = new BankAccount("Sullivan", 200, "Paralelepipedo");

acc1.printInfo();
console.log(acc1);
console.log(acc1 instanceof BankAccount);
