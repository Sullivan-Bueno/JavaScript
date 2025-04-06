const calculadora = {
  valor1: 0,
  valor2: 0,

  definirValores: function (v1, v2) {
    this.valor1 = v1;
    this.valor2 = v2;
  },

  somar: function () {
    return this.valor1 + this.valor2;
  },
  subtrair: function () {
    return this.valor1 - this.valor2;
  },
  multiplicar: function () {
    return this.valor1 * this.valor2;
  },
  dividir: function () {
    return this.valor1 / this.valor2;
  },
};

// Exemplo de uso
calculadora.exponenciacao = function () {
  return this.valor1 ** this.valor2;
};

calculadora.definirValores(10, 5);
console.log(calculadora.multiplicar());
console.log(calculadora.subtrair());
console.log(calculadora.somar());
console.log(calculadora.dividir());
console.log(calculadora.exponenciacao());
