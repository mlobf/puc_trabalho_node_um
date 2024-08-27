import { validate } from "bycontract";

class ContaComum {
  #numero;
  #saldo;

  constructor(numero) {
    validate(arguments, ["Number"]);
    this.#numero = numero;
    this.#saldo = 0;
  }
  get numero() {
    return this.#numero;
  }
  get saldo() {
    return this.#saldo;
  }
  deposito(valor) {
    validate(arguments, ["Number"]);
    if (valor < 0) {
      return false;
    }
    this.#saldo += valor;
    return true;
  }
  retirada(valor) {
    validate(arguments, ["Number"]);
    if (valor < 0) {
      return false;
    }
    if ((this.#saldo = this.#saldo - valor < 0)) {
      return false;
    }
    this.#saldo = this.#saldo - valor;
    return true;
  }
  toString() {
    return `Numero: xpto`;
  }
}
