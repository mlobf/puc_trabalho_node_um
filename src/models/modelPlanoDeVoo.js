export class PlanoDeVoo {
  #id; // Identificador da Plano de Voo
  #matriculaPiloto; // Prefixo de identificação do Piloto Responsavel Pelo Plano de Voo
  #idAerovia; // Identificador da Aerovia utilizado no plano de voo.
  #data; // Data usado durante o curso do voo.
  #horario; // Data usado durante o curso do voo.
  #altitude; // Altitude Sugerida no plano de voo.
  #slots; // Numero de slots utilizados durante o curso do plano de voo
  #estaCancelado; // Reflete o Status caso o Plano de Voo Esteja Cancelado

  // Construtor que inicializa os atributos básicos da aeronave
  constructor(
    id,
    matriculaPiloto,
    idAerovia,
    data,
    horario,
    altitude,
    slots,
    estaCancelado
  ) {
    this.#id = id;
    this.#matriculaPiloto = matriculaPiloto;
    this.#idAerovia = idAerovia;
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
