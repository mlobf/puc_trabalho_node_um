import { Aerovias } from "./modelsAerovias.js";

export class ServicoAerovias {
  constructor() {
    this.base = new Map();
  }

  criarAerovia(listaDeRequisitos) {
    const [identificador, ...resto] = listaDeRequisitos;
    this.base.set(identificador, new Aerovias(identificador, ...resto)); // Usa o identificador como chave
  }
  //return Array.from(this.#base.values()).toString(); // Retornar todas as aeronaves
  listarAerovias() {
    return Array.from(this.base.values()).toString(); // Retornar todas as aerovias
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
