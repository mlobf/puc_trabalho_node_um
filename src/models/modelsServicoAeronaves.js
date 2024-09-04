import {
  AeronaveComercial,
  AeronaveParticular,
  AeronavePassageiros,
} from "./modelAeronave.js";

class ServicoAeronaves {
  /*
    Capaz de recuperar as informações sobre as aeronaves que 
    podem ser utilizadas nos planos de voo
    */

  constructor() {
    this.base = new Map();
  }

  criarAeronave(listaRequisitos) {
    //Criar uma aeronave dado os parametro informados
    //respManutencao
    //nomeCompania
    //maxPassageiros
    if (listaRequisitos[0] == "Particular") {
      let n = new AeronaveParticular(...listaRequisitos);
      this.base.set(n);
    }
    if (listaRequisitos[0] == "Passageiros") {
      let n = new AeronavePassageiros(...listaRequisitos);
      this.base.set(n);
    }
    if (listaRequisitos[0] == "Comercial") {
      let n = new AeronaveComercial(...listaRequisitos);
      this.base.set(n);
    }
  }
}

export { ServicoAeronaves };

let sn = new ServicoAeronaves();

let listaBase = ["Particular", "PTX 8080", 500, 800, "Lito"];

sn.criarAeronave(listaBase);
console.log(sn.base);
