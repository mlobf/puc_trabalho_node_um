class ServicoAerovias {
  /*
    capaz de recuperar as informações sobre as aerovias 
    disponíveis para os voos
    */
  constructor(nome) {
    this.nome = nome;
  }
  toStr() {
    return `O nome do Serviço Aerovias é ${this.nome}`;
  }
}

export { ServicoAerovias };
