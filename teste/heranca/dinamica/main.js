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
    if (this.#saldo - valor < 0) {
      return false;
    }
    this.#saldo -= valor;
    return true;
  }

  toString() {
    return `Numero: ${this.#numero}, o saldo ${this.saldo.toFixed(2)}`;
  }
}
class ContaPoupanca extends ContaComum {
  constructor(numero) {
    super(numero);
  }
  computaJuros(taxa) {
    validate(taxa, "Number");
    if (taxa < 0.0 || taxa > 1.0) {
      return false;
    }
    let juros = this.saldo * taxa;
    this.deposito(juros);
  }
}

class ContaLimite extends ContaComum {
  #limite;
  constructor(numero, limite) {
    validate(arguments, ["Number", "Number"]);
    super(numero);
    this.#limite = limite;
    this.deposito(limite);
  }

  get limite() {
    return this.#limite;
  }

  get saldo() {
    let s = super.saldo;
    s = s - this.#limite;
    return s;
  }
}

console.log("----------------------------------------------------------------");
/*
let cp = new ContaPoupanca(101010);
console.log(cp.toString());
cp.deposito(3000);
cp.computaJuros(0.1);
console.log(cp.toString());
cp.retirada(100);
console.log(cp.toString());
*/
console.log("----------------------------------------------------------------");

let cl = new ContaLimite(666, 1000);
console.log(cl.toString());
cl.retirada(200);
console.log(cl.toString());
