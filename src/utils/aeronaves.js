import { ServicoAeronaves } from "../models/modelsServicoAeronaves.js";
import { ServicoAerovias } from "../models/modelsServicoAerovias.js";
import { ServicoPlanodeVoo } from "../models/modelsServicoPlanoDeVoo.js";
import { ServicoPiloto } from "../models/modelsServicoPiloto.js";

/*
Aeronaves particulares de pequeno porte só podem voar entre 25.000 pés e 27.000 pés. 
Aeronaves comerciais de passageiro só podem voar acima de 28.000 pés. 
Aeronaves de carga só podem voar entre a meia noite e as 6:00 da manhã.

Para que um plano de voo possa ser aprovado as seguintes condições tem de ser satisfeitas:

Check list

(X)• A habilitação do piloto tem de estar ativa;
(X)• A aeronave tem de ter autonomia para voar o trecho (a autonomia tem de ser 10% maior
que o tamanho da aerovia);

( )• A altitude escolhida tem de ser compatível com o tipo de aeronave;
( )• Não pode haver restrições de horário para o tipo de aeronave;
( )• Os slots de horário necessários têm de estar livres.

*/

export function filtroAutonomiaAeronave(PlanoDeVoo) {
  let prefixoAeronave = PlanoDeVoo.prefixoAeronave;
  let idAerovia = PlanoDeVoo.idAerovia;
  let aeronave = servicoAeronaves.recuperarAeronave(prefixoAeronave);
  let aerovia = servicoAerovias.recuperarAerovia(idAerovia);

  let automiaSeguranca = aerovia.tamanhoAerovia * 1.1; //ERROOOOOOOOOOO
  let aeronaveAutonomia = aeronave.autonomia;

  if (automiaSeguranca < aeronaveAutonomia) {
    return true;
  }
  return false;
}

export function filtroHabilitacao(PlanoDeVoo) {
  let piloto = servicoPiloto.recuperarPiloto(PlanoDeVoo.matriculaPiloto);
  if (piloto.habilitacaoAtiva) {
    return true;
  }
  return false;
}

export function filtroAeronavePlanoDevoo(Aeronave, PlanoDeVoo) {
  if (
    Aeronave.tipo === "Particular" &&
    PlanoDeVoo.altitude < 27000 &&
    PlanoDeVoo.altitude > 25000
  ) {
    console.log("Dentro de tipo Particular");
    return true;
  } else if (Aeronave.tipo === "Passageiro" && PlanoDeVoo.altitude > 28000) {
    console.log("Dentro de tipo passageiro");
    return true;
  } else if (Aeronave.tipo === "Carga" && PlanoDeVoo.altitude > 28000) {
    console.log("Dentro de tipo carga");
    return true;
  }
  console.log("rodou o false");
  return false;
}
//-----------------------------------------------------------------------------
//---------------------Instanciar os serviços ---------------------------------
//-----------------------------------------------------------------------------
const servicoPiloto = new ServicoPiloto();
const servicoAeronaves = new ServicoAeronaves();
const servicoPlanoDeVoo = new ServicoPlanodeVoo();
const servicoAerovias = new ServicoAerovias();
//-----------------------------------------------------------------------------
// Criar Aerovia
/*
  #identificador;
  #aeroportoOrigem;
  #aeroportoDestino;
  #tamanhoAerovia;
*/
let aeroviaPayload = ["GRU-MAU", "GRU", "MAU", 1500];
servicoAerovias.criarAerovia(aeroviaPayload);

// Criar Piloto
let pilotoPayload = ["808080", "marcos", true];
servicoPiloto.criarPiloto(pilotoPayload);
let piloto = servicoPiloto.recuperarPiloto("808080");
//-----------------------------------------------------------------------------
let aeronaveParticularPayload = ["Particular", "PTX 8080", 500, 800, "Lito"];
let aeronavePassageiroPayload = ["Passageiro", "PTX 8081", 500, 800, "Lito"];
let aeronaveCargaPayload = ["Carga", "PTX 8082", 500, 800, "Lito"];
//-------Criando as aeronaves
servicoAeronaves.criarAeronave(aeronaveParticularPayload);
servicoAeronaves.criarAeronave(aeronavePassageiroPayload);
//-------Recuperando  as aeronaves
//-------Particular
let x = servicoAeronaves.recuperarAeronave("PTX 8080");
//-------Passageiro
let xx = servicoAeronaves.recuperarAeronave("PTX 8080");
//-------Carga
let xxx = servicoAeronaves.recuperarAeronave("PTX 8080");
//-----------------------------------------------------------------------------

let payloadPlanoDeVoo = [
  "ABC123",
  "808080",
  "PTX 8080",
  "PUC-RS",
  "26/11/1981",
  "10:45",
  25001,
  4,
  false,
];

let payloadPlanoDeVoo1 = [
  "ABC124",
  "808080",
  "PTX 8080",
  "GRU-MAU",
  "26/11/1981",
  "10:45",
  25001,
  4,
  false,
];

servicoPlanoDeVoo.criarPlanoDeVoo(payloadPlanoDeVoo);
servicoPlanoDeVoo.criarPlanoDeVoo(payloadPlanoDeVoo1);
//console.log(pv.toString());

//-----------------------------------------------------------------------------
console.log("Inicio do testes da funcao");
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
let plano = servicoPlanoDeVoo.recuperarPlanoDeVoos("ABC124");
//-----------------------------------------------------------------------------
console.log("==================================================");
console.log("filtro habilitacao", filtroHabilitacao(plano));
console.log("==================================================");
console.log("filtro autonomia aeronave", filtroAutonomiaAeronave(plano));
