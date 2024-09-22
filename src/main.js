<<<<<<< HEAD
import { ServicoAerovias } from "./services/servicesAerovias.js"
import { ServicoPiloto } from "./services/servicesPiloto.js"



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

=======
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
export const servicoPiloto = new ServicoPiloto();
export const servicoAeronaves = new ServicoAeronaves();
export const servicoAerovias = new ServicoAerovias();
export const servicoPlanoDeVoo = new ServicoPlanodeVoo();
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
let aeronaveParticularPayload = ["Particular", "PTX 8080", 500, 800, "Lito"];
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
let aeronaveCargaPayload = ["Carga", "PTX 8082", 500, 800, "VARIG", 1000];
//-------Criando as aeronaves
servicoAeronaves.criarAeronave(aeronaveParticularPayload);
servicoAeronaves.criarAeronave(aeronavePassageiroPayload);
servicoAeronaves.criarAeronave(aeronaveCargaPayload);

// Criar Aerovia
/*
  #identificador;
  #aeroportoOrigem;
  #aeroportoDestino;
  #tamanhoAerovia;
  */

let aeroviaPayload = ["GRU-MAU", "GRU", "MAU", 1500];
servicoAerovias.criarAerovia(aeroviaPayload);
//-----------------------------------------------------------------------------
//---------------Criando os planos de voo------------------------------------------
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
 */

let payloadPlanoDeVooParticular = [
  "ABC121",
  "808080",
  "PTX 8080",
  "PUC-RS",
  "26/11/1981",
  "10:45",
  25001,
  4,
  false,
];

let payloadPlanoDeVooPassageiros = [
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
  "ABC123",
  "808080",
  "PTX 8082",
  "GRU-MAU",
  "26/11/1981",
  "5:45",
  29001,
  4,
  false,
];

servicoPlanoDeVoo.criarPlanoDeVoo(payloadPlanoDeVooParticular);
servicoPlanoDeVoo.criarPlanoDeVoo(payloadPlanoDeVooPassageiros);
servicoPlanoDeVoo.criarPlanoDeVoo(payloadPlanoDeVooCarga);

//-----------------------------------------------------------------------------
console.log("Inicio do testes da funcao");
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// Recuperando os planos de voo
console.log("recuperando os planos de voo");
let planoParticular = servicoPlanoDeVoo.recuperarPlanoDeVoos("ABC121");
let planoPassageiros = servicoPlanoDeVoo.recuperarPlanoDeVoos("ABC122");
let planoCarga = servicoPlanoDeVoo.recuperarPlanoDeVoos("ABC123");

console.log(planoParticular.toString());
console.log(planoPassageiros.toString());
console.log(planoCarga.toString());

//-----------------------------------------------------------------------------
//---------Testando os filtros-------------------------------------------------
//-----------------------------------------------------------------------------
console.log("Testando os filtros");

console.log("==================================================");
console.log(
  "filtro habilitacao particular",
  filtroHabilitacao(planoParticular)
);
console.log(
  "filtro habilitacao passageiros",
  filtroHabilitacao(planoPassageiros)
);
console.log(
  "filtro habilitacao carga           . ",
  filtroHabilitacao(planoCarga)
);

//console.log("==================================================");
//console.log("filtro autonomia aeronave", filtroAutonomiaAeronave(plano));
//console.log("==================================================");
//console.log(
//  "filtro altitude aeronave plano de voo plano",
//  filtroAltitude(plano)
//);
//console.log(
//  "filtro altitude aeronave plano de voo plano1 ",
//  filtroAltitude(planoCargaHorario)
//);
//console.log(filtroRestricaoHorario(planoCargaHorario));
>>>>>>> c84dcb741afb46f1124cb3327d1250beffd16ae8
