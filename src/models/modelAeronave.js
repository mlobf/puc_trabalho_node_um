/*
  são identificadas por um prefixo (uma string).
  Serão considerados 3 tipos de aeronave:
• Aeronave particular de pequeno porte;
• Aeronave comercial de passageiros;
• Aeronave comercial de carga.

Sobre qualquer aeronave é necessário armazenar o prefixo, 
o tipo de aeronave, 
a velocidade de cruzeiro (em quilômetros por hora) e 
a autonomia (em quilômetros). 

Para as aeronaves de pequeno porte é necessário armazenar também o nome da empresa responsável pela manutenção. 
Para as aeronaves comerciais de passageiros é necessário armazenar a quantidade de passageiros que pode
transportar e para as de carga o peso máximo em toneladas que é capaz de levar. 
Para qualquer tipo de aeronave comercial é necessário armazenar o nome da companhia aérea.
Aeronaves comerciais de passageiro só podem voar acima de 28.000 pés. 
Aeronaves particulares de pequeno porte só podem voar entre 25.000 pés e 27.000 pés. 
Aeronaves de carga só podem voar entre a meia noite e as 6:00 da manhã.
*/
export class Aeronave {
  #tipo;
  #prefixo;
  #velocidadeCruzeiro;
  #autonomia;

  constructor(tipo, prefixo, velocidadeCruzeiro, autonomia) {
    this.#tipo = tipo;
    this.#prefixo = prefixo;
    this.#velocidadeCruzeiro = velocidadeCruzeiro;
    this.#autonomia = autonomia;
  }

  get tipo() {
    return this.#tipo;
  }
  get prefixo() {
    return this.#prefixo;
  }
  get velocidadeCruzeiro() {
    return this.#velocidadeCruzeiro;
  }
  get autonomia() {
    return this.#autonomia;
  }

  set tipo(newTipo) {
    this.#tipo = newTipo;
  }

  set prefixo(newPrefixo) {
    this.#prefixo = newPrefixo;
  }

  set velocidadeCruzeiro(newVelocidadeCruzeiro) {
    this.#velocidadeCruzeiro = newVelocidadeCruzeiro;
  }

  set autonomia(newAutonomia) {
    this.#autonomia = newAutonomia;
  }
}

export class AeronaveParticular extends Aeronave {
  #respManutencao;

  constructor(tipo, prefixo, velocidadeCruzeiro, autonomia, respManutencao) {
    super(tipo, prefixo, velocidadeCruzeiro, autonomia);
    this.#respManutencao = respManutencao;
  }
  get respManutencao() {
    return this.#respManutencao;
  }

  set respManutencao(newRespManutencao) {
    this.#respManutencao = newRespManutencao;
  }

  toString() {
    return `Aeronave Particular: ${this.prefixo}, velocidade de cruzeiro ${this.velocidadeCruzeiro}, autonomia ${this.autonomia}, responsavel manutencao ${this.#respManutencao}`;
  }
}

export class AeronaveComercial extends Aeronave {
  #nomeCia;

  constructor(tipo, prefixo, velocidadeCruzeiro, autonomia, nomeCia) {
    super(tipo, prefixo, velocidadeCruzeiro, autonomia);
    this.#nomeCia = nomeCia;
  }
  get nomeCia() {
    return this.#nomeCia;
  }

  set nomeCia(newNomeCia) {
    this.#nomeCia = newNomeCia;
  }

  toString() {
    return `Aeronave de Comercial: ${this.prefixo}, velocidade de cruzeiro ${this.velocidadeCruzeiro}, autonomia ${this.autonomia}, nome da compania ${this.nomeCia}`;
  }
}

export class AeronavePassageiros extends AeronaveComercial {
  #maxPassageiros;

  constructor(
    tipo,
    prefixo,
    velocidadeCruzeiro,
    autonomia,
    nomeCia,
    maxPassageiros
  ) {
    super(tipo, prefixo, velocidadeCruzeiro, autonomia, nomeCia);
    this.#maxPassageiros = maxPassageiros;
  }
  get maxPassageiros() {
    return this.#maxPassageiros;
  }

  set maxPassageiros(newMaxPassageiros) {
    this.#maxPassageiros = newMaxPassageiros;
  }
  toString() {
    return `Aeronave de Passageiros: ${this.prefixo}, velocidade de cruzeiro ${this.velocidadeCruzeiro}, autonomia ${this.autonomia}, nome da compania ${this.nomeCia}, max de passageiros ${this.#maxPassageiros}`;
  }
}
