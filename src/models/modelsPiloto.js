class Piloto {
  /*
   Sobre cada piloto é necessário armazenar seu 
    número de matrícula, 
    nome, 
    e estado de sua habilitação (ativo/inativo). 
    */
  #nome;
  #matricula;
  #habilitacaoAtiva;

  constructor(nome, matricula, habilitacaoAtiva) {
    this.#nome = nome;
    this.#matricula = matricula;
    this.#habilitacaoAtiva = habilitacaoAtiva;
  }

  get nome() {
    return this.#nome;
  }
  get matricula() {
    return this.#matricula;
  }
  get habilitacaoAtiva() {
    return this.#habilitacaoAtiva;
  }

  set nome(valor) {
    this.#nome = valor;
  }

  set matricula(valor) {
    this.#matricula = valor;
  }

  set habilitacaoAtiva(valor) {
    this.#habilitacaoAtiva = valor;
  }
  toString() {
    let r = `O nome do piloto é ${this.#nome}`;
    return r;
  }
}

export { Piloto };
