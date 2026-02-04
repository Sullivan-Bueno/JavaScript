class BankAccount {
  _balance = 0;

  constructor(personName, initialBalance, address) {
    this.personName = personName;
    this._balance = initialBalance;
    this.address = address;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (Math.abs(this._balance - value) > 2000) {
      throw new Error(
        "Não é permitido saques ou depositos maiores que 2000 reais",
      );
    }
    this._balance = value;
  }

  printInfo() {
    console.log(
      `Essa conta pertence a ${this.personName}, residente do endereço ${this.address} e tem um saldo inicial de R$ ${this.initialBalance}`,
    );
  }
}

const acc1 = new BankAccount("Sullivan", 200, "Paralelepipedo");

acc1.balance += 2000;
console.log(acc1);
