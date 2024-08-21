// Construçao do Boiler Plate base das classe.

class HierarquiaClasseAeronaves {
  /*

    */
  constructor(nome) {
    this.nome = nome;
  }
  toStr() {
    return `O nome do Serviço Piloto é ${this.nome}`;
  }
}

export { HierarquiaClasseAeronaves };
