/*
  Plano de voo
  Sobre cada plano de voo é necessário armazenar 
  -um identificador numérico, 
  -a matrícula do piloto
  -responsável por conduzir o voo, 
  -o prefixo da aeronave que será utilizada, 
  -a data e o horário do voo, 
  -a aerovia escolhida, 
  -a altitude que será usada, 
  -a lista de slots de horário ocupados e um
  booleano que indica se foi cancelado ou não.

  validacaoPlanoVoo.

  Para que um plano de voo possa ser aprovado as seguintes condições tem de ser satisfeitas:

  • A habilitação do piloto tem de estar ativa;
  • A aeronave tem de ter autonomia para voar o trecho (a autonomia tem de ser 10% maior que o tamanho da aerovia);
  • A altitude escolhida tem de ser compatível com o tipo de aeronave;
  • Não pode haver restrições de horário para o tipo de aeronave;
  • Os slots de horário necessários têm de estar livres.

  Se um plano de voo é aprovado, ele recebe o identificador numérico e precisa ser registrado no
  sistema para consulta futura. Além disso os controles relativos à ocupação das aerovias (altitudes
  e slots de horário) têm de ser devidamente atualizados de maneira a impedir que outros planos
  possam ser aprovados de maneira sobreposta.
*/

export class PlanoDeVoo {
  #id;
  #matricPiloto;
  #idAerovia;
  #data;
  #horario;
  #altitude;
  #slots;
  #cancelado;

  constructor(
    id,
    matricPiloto,
    idAerovia,
    data,
    horario,
    altitude,
    slots,
    cancelado
  ) {
    this.#id = id;
    this.#matricPiloto = matricPiloto;
    this.#idAerovia = idAerovia;
    this.#data = data;
    this.#horario = horario;
    this.#altitude = altitude;
    this.#slots = slots;
    this.#cancelado = cancelado;
  }

  get id() {
    return this.#id;
  }
  get matricPiloto() {
    return this.#matricPiloto;
  }
  get idAerovia() {
    return this.#idAerovia;
  }
  get data() {
    return this.#data;
  }
  get horario() {
    return this.#horario;
  }
  get altitude() {
    return this.#altitude;
  }
  get slots() {
    return this.#slots;
  }
  get cancelado() {
    return this.#cancelado;
  }

  set id(newId) {
    this.#id = newId;
  }
  set matricPiloto(newMatricPiloto) {
    this.#matricPiloto = newMatricPiloto;
  }
  set idAerovia(newIdAerovia) {
    this.#idAerovia = newIdAerovia;
  }
  set data(newData) {
    this.#data = newData;
  }
  set horario(newHoraio) {
    this.#horario = newHoraio;
  }
  set altitude(newAltitude) {
    this.#altitude = newAltitude;
  }
  set slots(newSlots) {
    this.#slots = newSlots;
  }
  set cancelado(newCancelado) {
    this.#cancelado = newCancelado;
  }

  toStr() {
    let strId = `O identificador é ${this.id}`;
    let strMatriculaPiloto = `O aeroporto de Origem é ${this.matricPiloto}`;
    let strIdAerovia = `O aeroporto de Destino é ${this.idAerovia}`;
    let strData = `O tamanho da Aerovia é de ${this.data}`;

    let strHorario = `O tamanho da Aerovia é de ${this.horario}`;
    let strAltitude = `O tamanho da Aerovia é de ${this.altitude}`;
    let strSlots = `O tamanho da Aerovia é de ${this.slots}`;
    let strCancelado = `O tamanho da Aerovia é de ${this.cancelado}`;

    return `O nome do Aerovias é ${strId}, ${strMatriculaPiloto}, ${strIdAerovia}, ${strData}, ${strHorario}, ${strAltitude}, ${strSlots}, ${strCancelado}}`;
  }
}






