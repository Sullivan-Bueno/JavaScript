// #1
function tratarErroVariavelNaoDefinida() {
  try {
    console.log(t);
  } catch (err) {
    console.error("erro: a variavel nao foi definida", err);
  }
}

// tratarErroVariavelNaoDefinida();
// #2

function tratarErroFuncaoInexistente() {
  try {
    funcaoinexistente();
  } catch (err) {
    console.error("Erro: funcao nao definida", err);
  }
}

// tratarErroFuncaoInexistente();
// #3

function tratarErroAcessarPropriedadeNull() {
  const objeto = null;
  try {
    const propriedade = objeto.propriedade;
    console.log(propriedade);
  } catch (err) {
    console.error("Erro ao acessar propriedade null", err);
  }
}

// tratarErroAcessarPropriedadeNull();
// #4

function tratarErroPropriedadeInexistente() {
  const obj = {};
  try {
    console.log(obj.propriedadeInexistente.valor);
  } catch (err) {
    console.error("Erro ao acessar proriedade inexistente", err);
  }
}

// tratarErroPropriedadeInexistente();
// #5

function tratarErroConversaoTipo() {
  const numero = "teste";
  try {
    const numeroConvertido = parseInt(numero);
    if (isNaN(numeroConvertido)) {
      throw new Error("Erro ao converter, variavel não é um numero");
    }
  } catch (err) {
    console.error(err);
  }
}
// tratarErroConversaoTipo();
// #6

function tratarErroDivisaoPorZero() {
  const dividendo = 4;
  const divisor = 2;
  try {
    if (divisor == 0) {
      throw new Error("Divisao por zero nao permitida");
    }
    console.log(`A divisão é ${dividendo / divisor}`);
  } catch (err) {
    console.error(err);
  }
}
// tratarErroDivisaoPorZero()
// #7
