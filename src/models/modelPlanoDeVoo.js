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
    this.#data = data;
    this.#horario = horario;
    this.#altitude = altitude;
    this.#slots = slots;
    this.#estaCancelado = estaCancelado;
  }

  // Getters e setters para acessar e modificar os atributos privados
  get id() {
    return this.#id;
  }
  set id(newId) {
    this.#id = newId;
  }

  get matriculaPiloto() {
    return this.#matriculaPiloto;
  }
  set matriculaPiloto(newMatriculaPiloto) {
    this.#matriculaPiloto = newMatriculaPiloto;
  }

  get idAerovia() {
    return this.#idAerovia;
  }
  set idAerovia(newIdAerovia) {
    this.#idAerovia = newIdAerovia;
  }

  get data() {
    return this.#data;
  }
  set data(newData) {
    this.#data = newData;
  }

  get horario() {
    return this.#horario;
  }
  set horario(newHorario) {
    this.#horario = newHorario;
  }
  get altitude() {
    return this.#altitude;
  }
  set altitude(newAltitude) {
    this.#altitude = newAltitude;
  }

  get slots() {
    return this.#slots;
  }
  set slots(newSlots) {
    this.#slots = newSlots;
  }

  get estaCancelado() {
    return this.#estaCancelado;
  }
  set estaCancelado(NewEstaCancelado) {
    this.#estaCancelado = NewEstaCancelado;
  }

  // Método que retorna uma string com os detalhes de um plano de voo
  toString() {
    /*
    id,
    matriculaPiloto,
    idAerovia,
    data,
    horario,
    altitude,
    slots,
    estaCancelado
    */

    return `
    \n
    ---------------------------------
    Plano de voo :\n 
    ---------------------------------
    \n
    id: ${this.id},\n 
    matricula piloto:  ${this.#matriculaPiloto},\n 
    idAerovia ${this.idAerovia}\n
    data ${this.data}\n
    horario ${this.horario}\n
    altitude ${this.altitude}\n
    slots ${this.slots}\n
    estaCancelado ${this.estaCancelado}\n
    ---------------------------------
    `;
  }
}
/*
    id,
    matriculaPiloto,
    idAerovia,
    data,
    horario,
    altitude,
    slots,
    estaCancelado
    
    let payloadPlanoDeVoo = [
        "ABC123", //id
        "808080", //matriculaPiloto
        "PUC-RS", //idAerovia
        "26/11/1981", //data
        "10:45", //horario
        25001, //altitude
        4, //slots
        false, // estaCancelado
    ];
    
    let testePlanoVoo1 = new PlanoDeVoo(payloadPlanoDeVoo);
    let testePlanoVoo2 = new PlanoDeVoo(
        "ABC123", //id
        "808080", //matriculaPiloto
        "PUC-RS", //idAerovia
        "26/11/1981", //data
        "10:45", //horario
        25001, //altitude
        4, //slots
        false // estaCancelado
    );
    console.log(testePlanoVoo1.toString());
    console.log(testePlanoVoo2.toString());
    
    */
