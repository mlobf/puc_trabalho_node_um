class Slot {
  #nomeAerovia;
  #data;
  #horario;
  #altitude;

  constructor(nomeAerovia, data, horario, altitude) {
    this.#data = data;
    this.#nomeAerovia = nomeAerovia;
    this.#altitude = altitude;
    this.#horario = horario;
    this.#altitude = altitude;
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
let data = new Date(2022, 10, 22);
console.log(data);
let hoje = new Date();
console.log(hoje);
//let s = new Slot('GRU-POA',)
