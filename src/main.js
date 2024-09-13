import { ServicoAeronaves } from "./models/modelsServicoAeronaves.js";
import { ServicoAerovias } from "./models/modelsServicoAerovias.js";
import { ServicoPiloto } from "./models/modelsServicoPiloto.js";
import { ServicoPlanodeVoo } from "./models/modelsServicoPlanoDeVoo.js";

import {
  filtroAeronavePlanoDevoo,
  filtroAltitude,
  filtroAutonomiaAeronave,
  filtroHabilitacao,
  filtroRestricaoHorario,
} from "./utils/aeronaves.js";

/*
 */
//-----------------------------------------------------------------------------
//---------------------Instanciar os serviços ---------------------------------
//-----------------------------------------------------------------------------
const servicoPiloto = new ServicoPiloto();
const servicoAeronaves = new ServicoAeronaves();
const servicoAerovias = new ServicoAerovias();
const servicoPlanoDeVoo = new ServicoPlanodeVoo();
//-----------------------------------------------------------------------------
// Criar Pilotos
/*
  #matricula;
  #nome;
  #habilitacaoAtiva;
*/
let pilotoPayloadAtivo = ["808080", "marcos", true];
servicoPiloto.criarPiloto(pilotoPayloadAtivo);
let pilotoAtivo = servicoPiloto.recuperarPiloto("808080");

let pilotoPayloadInativo = ["808081", "Joao", false];
servicoPiloto.criarPiloto(pilotoPayloadInativo);
let pilotoInativo = servicoPiloto.recuperarPiloto("808081");

//-----------------------------------------------------------------------------
//---------------Criando as aeronaves------------------------------------------
//Gerando os payloads.

//Aeronave Particular
/*
tipo, 
prefixo, 
velocidadeCruzeiro, 
autonomia, 
respManutencao
*/
let aeronaveParticularPayload = [
  "Particular", 
  "PTX 8080", 
  500, 
  800, 
  "Lito"
];
// Aeronave Passageiros
/*
tipo, 
prefixo, 
velocidadeCruzeiro, 
autonomia, 
nomeCia, 
maxPassageiros
*/
let aeronavePassageiroPayload = [
  "Passageiros",
  "PTX 8081",
  500,
  800,
  "TAM",
  800,
];
// Aeronave Carga
/*
tipo, 
prefixo, 
velocidadeCruzeiro, 
autonomia, 
nomeCia, 
maxCarga
*/
let aeronaveCargaPayload = [
  "Carga", 
  "PTX 8082", 
  500, 
  800, 
  "VARIG", 
  1000
];
//-------Criando as aeronaves
servicoAeronaves.criarAeronave(aeronaveParticularPayload);
servicoAeronaves.criarAeronave(aeronavePassageiroPayload1);
servicoAeronaves.criarAeronave(aeronaveCargaPayload);

// Criar Aerovia
/*
  #identificador;
  #aeroportoOrigem;
  #aeroportoDestino;
  #tamanhoAerovia;
  let aeroviaPayload = ["GRU-MAU", "GRU", "MAU", 1500];
  servicoAerovias.criarAerovia(aeroviaPayload);

  // Criar Piloto
  let pilotoPayload = ["808080", "marcos", true];
  servicoPiloto.criarPiloto(pilotoPayload);
  let piloto = servicoPiloto.recuperarPiloto("808080");
  //-----------------------------------------------------------------------------
  let aeronaveParticularPayload = ["Particular", "PTX 8080", 500, 800, "Lito"];
  //tipo, prefixo, velocidadeCruzeiro, autonomia, nomeCia, maxPassageiros;
  let aeronavePassageiroPayload1 = [
    "Passageiros",
    "PTX 8081",
    500,
    800,
    "TAM",
    800,
  ];
  
  let aeronavePassageiroPayload2 = ["Carga", "PTX 8081", 500, 800, "TAM", 800];
  
  let aeronaveCargaPayload = ["Carga", "PTX 8082", 500, 800, "VARIG", 1000];
  //-------Criando as aeronaves
  servicoAeronaves.criarAeronave(aeronaveParticularPayload);
  servicoAeronaves.criarAeronave(aeronavePassageiroPayload1);
  servicoAeronaves.criarAeronave(aeronaveCargaPayload);
  
  console.log(servicoAeronaves.recuperarAeronave("PTX 8080").toString());
  console.log(servicoAeronaves.recuperarAeronave("PTX 8081").toString());
  console.log(servicoAeronaves.recuperarAeronave("PTX 8082").toString()); //CARGA
  */

/*
 */
/*
    id,
    matriculaPiloto,
    prefixoAeronave,
    idAerovia,
    data,
    horario,
    altitude,
    slots,
    estaCancelado
    let payloadPlanoDeVoo = [
      "ABC121",
      "808080",
      "PTX 8081",
      "PUC-RS",
      "26/11/1981",
      "10:45",
      25001,
      4,
      false,
    ];

    let payloadPlanoDeVoo1 = [
      "ABC122",
      "808080",
      "PTX 8081",
      "GRU-MAU",
  "26/11/1981",
  "10:45",
  29001,
  4,
  false,
];
let payloadPlanoDeVooCarga = [
  "ABC124",
  "808080",
  "PTX 8082",
  "GRU-MAU",
  "26/11/1981",
  "5:45",
  29001,
  4,
  false,
];

//servicoPlanoDeVoo.criarPlanoDeVoo(payloadPlanoDeVoo);
//servicoPlanoDeVoo.criarPlanoDeVoo(payloadPlanoDeVoo1);
servicoPlanoDeVoo.criarPlanoDeVoo(payloadPlanoDeVooCarga);
//console.log(pv.toString());

//-----------------------------------------------------------------------------
console.log("Inicio do testes da funcao");
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
//let plano = servicoPlanoDeVoo.recuperarPlanoDeVoos("ABC124");
//let plano1 = servicoPlanoDeVoo.recuperarPlanoDeVoos("ABC123");
let planoCargaHorario = servicoPlanoDeVoo.recuperarPlanoDeVoos("ABC124");
//-----------------------------------------------------------------------------
/*
console.log("==================================================");
console.log("filtro habilitacao", filtroHabilitacao(plano));
console.log("==================================================");
console.log("filtro autonomia aeronave", filtroAutonomiaAeronave(plano));
console.log("==================================================");
console.log(
  "filtro altitude aeronave plano de voo plano",
  filtroAltitude(plano)
);
console.log(
  "filtro altitude aeronave plano de voo plano1 ",
  filtroAltitude(planoCargaHorario)
);
console.log(filtroRestricaoHorario(planoCargaHorario));
*/
