// Construçao do Boiler Plate base das classe.

class Piloto {
  constructor(nome) {
    this.nome = nome;
  }
  toStr() {
    return `O nome do Piloto é ${this.nome}`;
  }
}
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
class Aerovias {
  /*
   */
  constructor(nome) {
    this.nome = nome;
  }
  toStr() {
    return `O nome do Aerovias é ${this.nome}`;
  }
}

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

export {
  Piloto,
  ServicoPiloto,
  HierarquiaClasseAeronaves,
  ServicoAeronaves,
  Aerovias,
  ServicoAerovias,
};
