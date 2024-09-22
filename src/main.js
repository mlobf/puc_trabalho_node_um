import { ServicoAeronaves } from "./services/servicesAeronaves.js";
import { ServicoAerovias } from "./services/servicesAerovias.js";
import { ServicoPiloto } from "./services/servicesPiloto.js";
import { ServicoPlanodeVoo } from "./services/servicesPlanoDeVoo.js";
import {
    filtroAltitude,
    filtroHabilitacao,
    filtroRestricaoHorario,
    filtroAutonomiaAeronave,
    filtroAeronavePlanoDevoo,
} from "./utils/aeronaves.js";

//import { testeApprovePlanoDeVoo } from "./services/servicesSistemas.js";

// Instanciar os serviços
export const servicoAeronave = new ServicoAeronaves();
export const servicoAerovia = new ServicoAerovias();
export const servicoPiloto = new ServicoPiloto();
export const servicoPlanoDeVoo = new ServicoPlanodeVoo();

// Definindo Payload para alguns servicos.
//Primeiro Aerovias
let payloadAerovia0 = ["POA-GRU", "POA", "GRU", 1000];
let payloadAerovia1 = ["RJU-GRU", "RJU", "GRU", 1000];
let payloadAerovia2 = ["PPI-GRU", "PPI", "GRU", 1000];
let payloadAerovia3 = ["MAU-GRU", "MAU", "GRU", 1000];
let payloadAerovia4 = ["MAU-TON", "MAU", "TON", 1000];
let payloadAerovia5 = ["MAU-MON", "MAU", "MON", 1000];
// Segundo Pilotos
let payloadPiloto0 = ["001", "Marcos", true];
let payloadPiloto1 = ["002", "Joao", true];
let payloadPiloto2 = ["003", "Caio", true];
let payloadPiloto3 = ["004", "Carlos", true];
// Terceiro Aeronaves
// CARGA
let payloadAeronaveCarga0 = ["Carga", "PTX 8081", 500, 800, "TAM", 8000];
let payloadAeronaveCarga1 = ["Carga", "PTX 8082", 500, 800, "VARIG", 8000];
let payloadAeronaveCarga2 = ["Carga", "PTX 8083", 500, 800, "VASP", 8000];
let payloadAeronaveCarga3 = ["Carga", "PTX 8084", 500, 800, "VASP", 8000];
// Passageiros
let payloadAeronavePassageiros = [
    "Passageiros",
    "PTX 8084",
    500,
    800,
    "TAM",
    550,
];
let payloadAeronavePassageiros1 = [
    "Passageiros",
    "PTX 8085",
    500,
    800,
    "VARIG",
    550,
];
let payloadAeronavePassageiros2 = [
    "Passageiros",
    "PTX 8086",
    500,
    800,
    "VASP",
    550,
];
// Particular
let payloadAeronaveParticular0 = [
    "Particular",
    "PTX 8087",
    500,
    800,
    "TAM",
    "LITO",
];
let payloadAeronaveParticular1 = [
    "Particular",
    "PTX 8088",
    500,
    800,
    "VARIG",
    "LITO",
];
let payloadAeronaveParticular2 = [
    "Particular",
    "PTX 8089",
    500,
    800,
    "VASP",
    "LITO",
];
//Plano de Voo
let payloadPlanoDeVooCarga0 = [
    "ABC123", // #id; // Identificador da Plano de Voo
    //"ABC123", // #id; // Identificador da Plano de Voo
    "001", // #matriculaPiloto; // Prefixo de identificação do Piloto Responsavel Pelo Plano de Voo
    "PTX 8082", //#prefixoAeronave; // Prefixo de identificacao da Aeronave
    "POA-GRU", //#idAerovia; // Identificador da Aerovia utilizado no plano de voo.
    "26/11/1981", //#data; // Data usado durante o curso do voo.
    "5:45", //#horario; // Data usado durante o curso do voo.
    29001, //#altitude; // altitude sugerida no plano de voo.
    4, //#slots; // Numero de slots utilizados durante o curso do plano de voo
    false, //#estaCancelado; // Reflete o Status caso o Plano de Voo Esteja Cancelado
];
//-----------------------------------------------------------------------------
//Criando os objetos por meio de um serviço diretamente relacionado ao objeto
//Primeiro Aerovia
servicoAerovia.criarAerovia(payloadAerovia0);
servicoAerovia.criarAerovia(payloadAerovia1);
servicoAerovia.criarAerovia(payloadAerovia2);
servicoAerovia.criarAerovia(payloadAerovia3);
servicoAerovia.criarAerovia(payloadAerovia4);
servicoAerovia.criarAerovia(payloadAerovia5);
//Segundo Piloto
servicoPiloto.criarPiloto(payloadPiloto0);
servicoPiloto.criarPiloto(payloadPiloto1);
servicoPiloto.criarPiloto(payloadPiloto2);
servicoPiloto.criarPiloto(payloadPiloto3);
//Terceiro Aeronave
servicoAeronave.criarAeronave(payloadAeronaveParticular0);
servicoAeronave.criarAeronave(payloadAeronaveParticular1);
servicoAeronave.criarAeronave(payloadAeronaveParticular2);
servicoAeronave.criarAeronave(payloadAeronavePassageiros);
servicoAeronave.criarAeronave(payloadAeronavePassageiros1);
servicoAeronave.criarAeronave(payloadAeronavePassageiros2);
servicoAeronave.criarAeronave(payloadAeronaveCarga0);
servicoAeronave.criarAeronave(payloadAeronaveCarga1);
servicoAeronave.criarAeronave(payloadAeronaveCarga2);
servicoAeronave.criarAeronave(payloadAeronaveCarga3);
//Quarto PlanoDeVoo
servicoPlanoDeVoo.criarPlanoDeVoo(payloadPlanoDeVooCarga0);
//-----------------------------------------------------------------------------
//Recuperando os arquivos criados.
//console.log(servicoAerovia.listarAerovias());
//console.log(servicoPiloto.listarPilotos());
//console.log(servicoAeronave.listarAeronaves());
let testeApprove = servicoPlanoDeVoo.recuperarPlanoDeVoos("ABC123");
console.log(filtroHabilitacao(testeApprove));
console.log(filtroRestricaoHorario(testeApprove));
console.log(filtroAltitude(testeApprove));
console.log(filtroAutonomiaAeronave(testeApprove));
console.log(filtroAeronavePlanoDevoo(testeApprove));
