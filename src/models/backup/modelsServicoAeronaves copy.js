import {
  AeronaveComercial,
  AeronaveParticular,
  AeronavePassageiros,
} from "../modelAeronave.js";

class ServicoAeronaves {
  constructor() {
    this.base = new Map(); // Usar o prefixo como chave única
  }

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
    }

    // Armazenar a aeronave no Map com o prefixo como chave
    if (aeronave) {
      this.base.set(prefixo, aeronave);
    }
  }

  recuperarAeronave(prefixo) {
    return this.base.get(prefixo); // Recuperar aeronave por prefixo
  }

  atualizarAeronave(prefixo, novosDados) {
    if (this.base.has(prefixo)) {
      let aeronave = this.base.get(prefixo);
      Object.assign(aeronave, novosDados); // Atualiza os dados da aeronave
    }
  }

  deletarAeronave(prefixo) {
    this.base.delete(prefixo); // Remover aeronave do Map
  }

  listarAeronaves() {
    return Array.from(this.base.values()).toString(); // Retornar todas as aeronaves
  }
}

export { ServicoAeronaves };
