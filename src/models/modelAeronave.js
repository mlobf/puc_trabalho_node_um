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
// Classe base que representa uma aeronave

export class Aeronave {
  #tipo; // Armazena o tipo da aeronave
  #prefixo; // Prefixo de identificação da aeronave
  #velocidadeCruzeiro; // Velocidade de cruzeiro da aeronave em km/h
  #autonomia; // Autonomia da aeronave em km

  // Construtor que inicializa os atributos básicos da aeronave
  constructor(tipo, prefixo, velocidadeCruzeiro, autonomia) {
    this.#tipo = tipo;
    this.#prefixo = prefixo;
    this.#velocidadeCruzeiro = velocidadeCruzeiro;
    this.#autonomia = autonomia;
  }

  // Getters e setters para acessar e modificar os atributos privados
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

  // Método que retorna uma string com os detalhes da aeronave
  toString() {
    return `Aeronave :\n ${this.prefixo},\n velocidade de cruzeiro ${this.velocidadeCruzeiro},\n autonomia ${this.autonomia}\n`;
  }
}

// Classe que representa uma aeronave particular, herdando de Aeronave
export class AeronaveParticular extends Aeronave {
  #respManutencao; // Armazena o responsável pela manutenção da aeronave

  // Construtor que inicializa os atributos da aeronave particular
  constructor(tipo, prefixo, velocidadeCruzeiro, autonomia, respManutencao) {
    super(tipo, prefixo, velocidadeCruzeiro, autonomia); // Chama o construtor da classe pai
    this.#respManutencao = respManutencao;
  }

  // Getter e setter para acessar e modificar o responsável pela manutenção
  get respManutencao() {
    return this.#respManutencao;
  }

  set respManutencao(newRespManutencao) {
    this.#respManutencao = newRespManutencao;
  }

  // Método que retorna uma string com os detalhes da aeronave particular
  toString() {
    return `Aeronave Particular:\n ${this.prefixo},\n velocidade de cruzeiro ${this.velocidadeCruzeiro},\n autonomia ${this.autonomia},\n responsável pela manutenção ${this.#respManutencao}, \n`;
  }
}

// Classe que representa uma aeronave comercial, herdando de Aeronave
export class AeronaveComercial extends Aeronave {
  #nomeCia; // Armazena o nome da companhia aérea

  // Construtor que inicializa os atributos da aeronave comercial
  constructor(tipo, prefixo, velocidadeCruzeiro, autonomia, nomeCia) {
    super(tipo, prefixo, velocidadeCruzeiro, autonomia); // Chama o construtor da classe pai
    this.#nomeCia = nomeCia;
  }

  // Getter e setter para acessar e modificar o nome da companhia aérea
  get nomeCia() {
    return this.#nomeCia;
  }

  set nomeCia(newNomeCia) {
    this.#nomeCia = newNomeCia;
  }

  // Método que retorna uma string com os detalhes da aeronave comercial
  toString() {
    return `Aeronave Comercial:\n ${this.prefixo},\n velocidade de cruzeiro ${this.velocidadeCruzeiro},\n autonomia ${this.autonomia},\n nome da companhia ${this.nomeCia}\n`;
  }
}

// Classe que representa uma aeronave de passageiros, herdando de AeronaveComercial
export class AeronavePassageiros extends AeronaveComercial {
  #maxPassageiros; // Armazena a quantidade máxima de passageiros

  // Construtor que inicializa os atributos da aeronave de passageiros
  constructor(
    tipo,
    prefixo,
    velocidadeCruzeiro,
    autonomia,
    nomeCia,
    maxPassageiros
  ) {
    super(tipo, prefixo, velocidadeCruzeiro, autonomia, nomeCia); // Chama o construtor da classe pai
    this.#maxPassageiros = maxPassageiros;
  }

  // Getter e setter para acessar e modificar a quantidade máxima de passageiros
  get maxPassageiros() {
    return this.#maxPassageiros;
  }

  set maxPassageiros(newMaxPassageiros) {
    this.#maxPassageiros = newMaxPassageiros;
  }

  // Método que retorna uma string com os detalhes da aeronave de passageiros
  toString() {
    return `Aeronave de Passageiros:\n ${this.prefixo},\n velocidade de cruzeiro ${this.velocidadeCruzeiro},\n autonomia ${this.autonomia},\n nome da companhia ${this.nomeCia},\n máximo de passageiros ${this.#maxPassageiros}\n`;
  }
}

// Classe que representa uma aeronave de carga, herdando de AeronaveComercial
export class AeronaveCarga extends AeronaveComercial {
  #maxCarga; // Armazena a quantidade máxima de Carga

  // Construtor que inicializa os atributos da aeronave de carga
  constructor(tipo, prefixo, velocidadeCruzeiro, autonomia, nomeCia, maxCarga) {
    super(tipo, prefixo, velocidadeCruzeiro, autonomia, nomeCia); // Chama o construtor da classe pai
    this.#maxCarga = maxCarga;
  }

  // Getter e setter para acessar e modificar a quantidade máxima de carga
  get maxCarga() {
    return this.#maxCarga;
  }

  set maxCarga(newMaxCarga) {
    this.#maxCarga = newMaxCarga;
  }

  // Método que retorna uma string com os detalhes da aeronave de carga
  toString() {
    return `Aeronave de Carga:\n ${this.prefixo},\n velocidade de cruzeiro ${this.velocidadeCruzeiro},\n autonomia ${this.autonomia},\n nome da companhia ${this.nomeCia},\n máximo de carga ${this.maxCarga}\n`;
  }
}
