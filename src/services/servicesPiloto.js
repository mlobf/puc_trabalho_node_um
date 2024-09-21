import { Piloto } from "../models/modelsPiloto.js";

export class ServicoPiloto {
  /*
    -ServicoPilotos (
        capaz de recuperar as informações relativas aos pilotos que 
        podem ser responsáveis pelos voos
    */
  constructor() {
    this.base = new Map();
  }

  criarPiloto(listaDeRequisitos) {
    const [matricula, ...resto] = listaDeRequisitos;
    this.base.set(matricula, new Piloto(matricula, ...resto)); // Usa o identificador como chave
  }

  listarPilotos() {
    return Array.from(this.base.values()).toString(); // Retornar todas os pilotos
  }

  recuperarPiloto(matricula) {
    return this.base.get(matricula); // Recuperar piloto por identificador
  }

  atualizarPiloto(matricula, novosDados) {
    if (this.base.has(matricula)) {
      let piloto = this.base.get(matriculia);
      Object.assign(piloto, novosDados); // Atualiza os dados da piloto
    }
  }

  deletarPiloto(matricula) {
    this.base.delete(matricula); // Remover piloto do Map
  }

  toStr() {
    return `O nome do Serviço Piloto é ${this.nome}`;
  }
}

// Testes
let sp = new ServicoPiloto();
let payload = ["marcos", "odsdifdsf3232", true];
let payload1 = ["maria", "odsdifdsf3231", true];
let payload2 = ["lis", "odsdifdsf3230", true];
let payload3 = ["carolina", "odsdifdsf3239", true];
let payload4 = ["eliza", "odsdifdsf3we2", true];
let payload5 = ["conceicao", "odsdifddssf3232", true];
let payload6 = ["Gisela", "odsdifdsf32sd32", true];

sp.criarPiloto(payload);
sp.criarPiloto(payload1);
sp.criarPiloto(payload2);
sp.criarPiloto(payload3);
sp.criarPiloto(payload4);
sp.criarPiloto(payload5);
sp.criarPiloto(payload6);
console.log(sp.listarPilotos());
