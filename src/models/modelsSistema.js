import {
  AeronaveComercial,
  AeronavePassageiros,
  AeronaveParticular,
} from "./modelAeronave.js";
import { Piloto } from "./modelsPiloto.js";
import { PlanoDeVoo } from "./modelPlanoDeVoo.js";
import { Slot } from "./modelSlots.js";
import { Aerovias } from "./modelsAerovias";

export class Sistema {
  //Retorna as Aeronaves Cadastradas
  listarAeronaves() {



  }

  //Retorna as Atitudes Livres
  listarAltitudesLivres() { }

  //Retorna um Boolean aprovando ou nao o plano de voo.
  aprovarPlanoDeVoo() {
    /*
    Aeronaves comerciais de passageiro só podem voar acima de 28.000 pés. 
    Aeronaves particulares de pequeno porte só podem voar entre 25.000 pés e 27.000 pés. 
    Aeronaves de carga só podem voar entre a meia noite e as 6:00 da manhã.
    */
  }

  // Retorna todos os planos de voo Cadastrados.
  listarPlano() { }
}

//Dar Carga no sistema.i

let aeroviaPoaGru = new Aerovias("POA-GRU", "POA", "GRU", 862);
let aeroviaGruRio = new Aerovias("GRU-RIO", "GRU", "RIO", 357);
let aeroviaGruBra = new Aerovias("GRU-BRA", "POA", "GRU", 1018);

let ap = new AeronavePassageiros("PPefgae", 800, 5000, "TAM", 800);
let ac = new AeronaveComercial("PPPae", 800, 5000, "TAM");
let aparticular = new AeronaveParticular("DUG 8035", 300, 600, "Mecanico Lito");

let pilotoMarcos = new Piloto("Marcos", 308784522, true);
let pilotoBoing = new Piloto("Boing", 308884344, true);
let pilotoAirbus = new Piloto("Airbus", 308884354, false);
let pilotoRecreativo = new Piloto("TiaoPiloto", 308884314, true);

let planoVooPilotoMarcos = new PlanoDeVoo(
  "1010101001",
  308784522,
  "POA-GRU",
  "25-12-24"
);

console.log(
  "-------------------------------------------------------------------"
);
console.log("");

console.log(ap.toString());
console.log(ac.toString());
console.log(aparticular.toString());

console.log("");

console.log(
  "-------------------------------------------------------------------"
);
