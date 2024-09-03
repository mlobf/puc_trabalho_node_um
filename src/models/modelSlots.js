export class Slot {
  #idSlot;
  #nomeAerovia;
  #data;
  #horario;
  #altitude;

  constructor(nomeAerovia, data, horario, altitude) {
    this.#idSlot = this.#nomeAerovia + this.#data;
    this.#nomeAerovia = nomeAerovia;
    this.#data = data;
    this.#horario = horario;
    this.#altitude = altitude;
  }

  get idSlot() {
    return this.#idSlot;
  }

  get nomeAerovia() {
    return this.#nomeAerovia;
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
  set nomeAerovia(newNomeAerovia) {
    this.#nomeAerovia = newNomeAerovia;
  }
  set data(newData) {
    this.#data = newData;
  }
  set horario(newHorario) {
    this.#horario = newHorario;
  }
  set altitude(newAltitude) {
    this.#altitude = newAltitude;
  }
}
