import { Aerovias } from "../modelsAerovias.js";

export class ServicoAerovias {
  constructor() {
    this.base = new Map();
  }

  criarAerovia(listaDeRequisitos) {
    const [identificador, ...resto] = listaDeRequisitos;
    this.base.set(identificador, new Aerovias(identificador, ...resto)); // Usa o identificador como chave
  }

  listarAerovias() {
    return Array.from(this.base.values()); // Retornar todas as aerovias
  }

  recuperarAerovia(identificador) {
    return this.base.get(identificador); // Recuperar aerovia por identificador
  }

  atualizarAerovia(identificador, novosDados) {
    if (this.base.has(identificador)) {
      let aerovia = this.base.get(identificador);
      Object.assign(aerovia, novosDados); // Atualiza os dados da aerovia
    }
  }

  deletarAerovia(identificador) {
    this.base.delete(identificador); // Remover aerovia do Map
  }
}

let sn = new ServicoAerovias();

let payload = ["POA-GRU", "POA", "GRU", 1000];
let payload1 = ["RJU-GRU", "POA", "GRU", 1000];
let payload2 = ["PPI-GRU", "POA", "GRU", 1000];
let payload3 = ["MAU-GRU", "POA", "GRU", 1000];

sn.criarAerovia(payload);
sn.criarAerovia(payload1);
sn.criarAerovia(payload2);
sn.criarAerovia(payload3);

console.log(sn.listarAerovias()); // Deve listar todas as aerovias
