class ServicoAeronaves {
  /*
    Capaz de recuperar as informações sobre as aeronaves que 
    podem ser utilizadas nos planos de voo
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

  toStr() {
    return `O nome do ServiçoAeronaves é ${this.nome}`;
  }
}

export { ServicoAeronaves };
