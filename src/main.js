import { ServicoPiloto } from "./models/modelsServicoPiloto.js";
import { ServicoAeronaves } from "./models/modelsServicoAeronaves.js";
import { ServicoAerovias } from "./models/modelsServicoAerovias.js";

/*
Implementação das seguintes classes:
Piloto
ServicoPilotos (capaz de recuperar as informações relativas aos pilotos que podem ser responsáveis pelos voos)
Hierarquia de classes de Aeronaves (conforme diagrama de classes apresentado no arquivo “Especificação_Projeto_POO.pdf”) 
ServicoAeronaves (capaz de recuperar as informações sobre as aeronaves que podem ser utilizadas nos planos de voo)
Aerovia
ServicoAerovias (capaz de recuperar as informações sobre as aerovias disponíveis para os voos) 
*/

console.log("-----------------------------------");
console.log("Testes Servicos Pilotos");
console.log("-----------------------------------");
// Testes Serviço Piloto
//------------------------------------------------------------------------
const servicoPiloto = new ServicoPiloto();

let pilotoPayload = ["odsdifdsf3232", "marcos", true];
let pilotoPayload1 = ["odsdifdsf3231", "maria", true];
let pilotoPayload2 = ["odsdifdsf3230", "lis", true];
let pilotoPayload3 = ["odsdifdsf3239", "carolina", true];
let pilotoPayload4 = ["odsdifdsf3we2", "eliza", true];
let pilotoPayload5 = ["odsdifddssf3232", "conceicao", true];
let pilotoPayload6 = ["odsdifdsf32sd32", "Gisela", true];

servicoPiloto.criarPiloto(pilotoPayload);
servicoPiloto.criarPiloto(pilotoPayload1);
servicoPiloto.criarPiloto(pilotoPayload2);
servicoPiloto.criarPiloto(pilotoPayload3);
servicoPiloto.criarPiloto(pilotoPayload4);
servicoPiloto.criarPiloto(pilotoPayload5);
servicoPiloto.criarPiloto(pilotoPayload6);
console.log(servicoPiloto.listarPilotos());

console.log("Procurar piloto com matricula odsdifdsf3232");

let result = servicoPiloto.recuperarPiloto("odsdifdsf3232");
console.log(result.toString());
//------------------------------------------------------------------------

// Testes Serviço Aeronaves
console.log("-----------------------------------");
console.log("Testes Servicos Aeronaves");
console.log("-----------------------------------");
//------------------------------------------------------------------------
const servicoAeronaves = new ServicoAeronaves();

let aeronaveParticularPayload = ["Particular", "PTX 8080", 500, 800, "Lito"];
let aeronavePassageirosPayload = [
  "Passageiros",
  "PTX 9090",
  600,
  1000,
  "Compania A",
  150,
];

let aeronaveComercialPayload = [
  "Comercial",
  "PTX 9099",
  660,
  3000,
  "Compania B",
];

servicoAeronaves.criarAeronave(aeronaveParticularPayload);
servicoAeronaves.criarAeronave(aeronavePassageirosPayload);
servicoAeronaves.criarAeronave(aeronaveComercialPayload);

console.log("listar Aeronaves");
console.log(servicoAeronaves.listarAeronaves());

console.log("Recuperar Aeronaves por Matricula ");
let ptx8080 = servicoAeronaves.recuperarAeronave("PTX 8080");
console.log(ptx8080);

//------------------------------------------------------------------------
// Testes Serviço Aerovias

console.log("-----------------------------------");
console.log("Testes Servicos Aerovias");
console.log("-----------------------------------");
let servicoAerovias = new ServicoAerovias();

let payload = ["POA-GRU", "POA", "GRU", 1000];
let payload1 = ["RJU-GRU", "RJU", "GRU", 1000];
let payload2 = ["PPI-GRU", "PPI", "GRU", 1000];
let payload3 = ["MAU-GRU", "MAU", "GRU", 1000];

servicoAerovias.criarAerovia(payload);
servicoAerovias.criarAerovia(payload1);
servicoAerovias.criarAerovia(payload2);
servicoAerovias.criarAerovia(payload3);
console.log("Listar aerovias");
console.log(servicoAerovias.listarAerovias()); // Deve listar todas as aerovias
console.log("Recuperar aerovias por identificador POA-GRU");
console.log(servicoAerovias.recuperarAerovia("POA-GRU"));
