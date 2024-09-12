import {
  AeronaveComercial,
  AeronaveParticular,
  AeronavePassageiros,
  AeronaveCarga,
} from "./modelAeronave.js";

export class ServicoAeronaves {
  #base; // Mapa privado para armazenar aeronaves

  constructor() {
    this.#base = new Map(); // Usar o prefixo como chave única
  }

  // Método público para criar uma nova aeronave
  criarAeronave(listaRequisitos) {
    const [tipo, prefixo, velocidadeCruzeiro, autonomia, ...resto] =
      listaRequisitos;

    let aeronave;
    if (tipo === "Particular") {
      const [respManutencao] = resto;
      aeronave = new AeronaveParticular(
        tipo,
        prefixo,
        velocidadeCruzeiro,
        autonomia,
        respManutencao
      );
    } else if (tipo === "Passageiros") {
      const [nomeCia, maxPassageiros] = resto;
      aeronave = new AeronavePassageiros(
        tipo,
        prefixo,
        velocidadeCruzeiro,
        autonomia,
        nomeCia,
        maxPassageiros
      );
    } else if (tipo === "Comercial") {
      const [nomeCia] = resto;
      aeronave = new AeronaveComercial(
        tipo,
        prefixo,
        velocidadeCruzeiro,
        autonomia,
        nomeCia
      );
    } else if (tipo === "Carga") {
      const [nomeCia, maxCarga] = resto;
      aeronave = new AeronaveCarga(
        tipo,
        prefixo,
        velocidadeCruzeiro,
        autonomia,
        nomeCia,
        maxCarga
      );
    }

    // Armazenar a aeronave no Map com o prefixo como chave
    if (aeronave) {
      this.#base.set(prefixo, aeronave);
    }
  }

  // Método público para recuperar uma aeronave pelo prefixo
  recuperarAeronave(prefixo) {
    return this.#base.get(prefixo); // Recuperar aeronave por prefixocatch (error) {}
  }

  // Método público para atualizar uma aeronave
  atualizarAeronave(prefixo, novosDados) {
    if (this.#base.has(prefixo)) {
      let aeronave = this.#base.get(prefixo);
      Object.assign(aeronave, novosDados); // Atualiza os dados da aeronave
    }
  }

  // Método público para deletar uma aeronave pelo prefixo
  deletarAeronave(prefixo) {
    this.#base.delete(prefixo); // Remover aeronave do Map
  }

  // Método público para listar todas as aeronaves
  listarAeronaves() {
    return Array.from(this.#base.values()).toString(); // Retornar todas as aeronaves
  }
}
