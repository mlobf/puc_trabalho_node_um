class ServicoAeronaves {
  /*
    Capaz de recuperar as informações sobre as aeronaves que 
    podem ser utilizadas nos planos de voo
    */
  constructor(nome) {
    this.nome = nome;
  }
  toStr() {
    return `O nome do ServiçoAeronaves é ${this.nome}`;
  }
}

export { ServicoAeronaves };
