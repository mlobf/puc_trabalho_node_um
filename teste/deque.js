//Abstract Class Data Type
// Base Queue Class with a options simultanious input at
// first and last positions.
//Is a FIFO (first in, first out) queue

export class Deque {
  #base;
  constructor() {
    this.#base = [];
  }
  get base() {
    return this.#base;
  }
  enqueue(valor) {
    //enqueue: insere um elemento no fim da fila.
    this.#base.push(valor);
  }
  denqueue() {
    //denqueue: remove o primeiro elemento da fila
    return this.#base.splice(0, 1)[0];
  }
  first() {
    //first: retorna o primeiro elemeto da fila.
  }
  last() {
    //last:  retorna o ultimo elemento da fila.
  }
  get size() {
    //size: retorna o total de elementos na fila.
    return this.#base.length;
  }
  get first() {
    //: retorna o  primieiro elemento na fila.
    return this.#base[0];
  }
  get last() {
    //: retorna o  primieiro elemento na fila.
    return this.#base[this.size - 1];
  }

  isEmpty() {
    if (this.#base.size === 0) {
      return true;
    }
  }
}

let q = new Queue();

q.enqueue(0);
console.log(q.base);
q.enqueue(1);
console.log(q.base);
q.enqueue(2);
console.log(q.base);
q.enqueue(3);
console.log(q.base);
q.enqueue(4);
console.log(q.base);
q.enqueue(5);
console.log(q.base);
q.enqueue(6);
console.log(q.base);
q.enqueue(7);
console.log(q.base);
console.log(q.size);
console.log(q.first);
console.log(q.last);
console.log(q.base);
q.denqueue();
console.log(q.base);
