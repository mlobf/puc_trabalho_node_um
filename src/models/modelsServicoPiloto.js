class ServicoPiloto {
  /*
    -ServicoPilotos (
        capaz de recuperar as informações relativas aos pilotos que 
        podem ser responsáveis pelos voos
    */
  constructor(nome) {
    this.nome = nome;
  }
  toStr() {
    return `O nome do Serviço Piloto é ${this.nome}`;
  }
}

export { ServicoPiloto };
