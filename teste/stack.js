export class Stack {
  /*
    Pilha de  Objetos.
    LIFO (Last In First Out)

    push - Insere na Stack sempre na ultima posicao..
    pop - Remove sempre o elemento no top da pilha.
    top - Retorna o elemento no topo de uma pilho
    size - Retorna a qtd de uma pilha.
    isEmpty -Retorna true se a pilha esta vazia.
    */
  #base;
  constructor() {
    this.#base = [];
  }

  get base() {
    return this.#base;
  }

  get length() {
    console.log("lenght");
    return this.#base.length;
  }
  push(valor) {
    //push - Insere na Stack sempre na ultima posicao.
    this.#base.push(valor);
  }

  pop() {
    //pop - Remove sempre o elemento no top da pilha.
    this.#base.pop();
  }

  size() {
    //size - Retorna a qtd de uma pilha.
    return this.#base.length;
  }

  isEmpty() {
    //isEmpty -Retorna true se a pilha esta vazia.
    return this.size === 0;
  }
}

let s = new Stack();

console.log(s.base);
console.log(s.size());
s.isEmpty();
s.push(10);
s.size();
s.isEmpty();
s.push("2oio");
s.push("3oio");
s.push("4oio");
s.push("5oio");
console.log(s.base);
s.pop();
console.log(s.base);
