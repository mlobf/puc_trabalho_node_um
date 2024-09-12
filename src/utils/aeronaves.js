import { ServicoAeronaves } from "../models/modelsServicoAeronaves.js";
import { ServicoPlanodeVoo } from "../models/modelsServicoPlanoDeVoo.js";
import { ServicoPiloto } from "../models/modelsServicoPiloto.js";
import { PlanoDeVoo } from "../models/modelPlanoDeVoo.js";

/*
Aeronaves particulares de pequeno porte só podem voar entre 25.000 pés e 27.000 pés. 
Aeronaves comerciais de passageiro só podem voar acima de 28.000 pés. 
Aeronaves de carga só podem voar entre a meia noite e as 6:00 da manhã.

Para que um plano de voo possa ser aprovado as seguintes condições tem de ser satisfeitas:

• A habilitação do piloto tem de estar ativa;
• A aeronave tem de ter autonomia para voar o trecho (a autonomia tem de ser 10% maior
que o tamanho da aerovia);
• A altitude escolhida tem de ser compatível com o tipo de aeronave;
• Não pode haver restrições de horário para o tipo de aeronave;
• Os slots de horário necessários têm de estar livres.

*/

export function filtroHabilitacao(PlanoDeVoo, Piloto) {}

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
/*
const servicoAeronaves = new ServicoAeronaves();
let aeronaveParticularPayload = ["Particular", "PTX 8080", 500, 800, "Lito"];
let aeronavePassageiroPayload = ["Passageiro", "PTX 8081", 500, 800, "Lito"];
let aeronaveCargaPayload = ["Carga", "PTX 8082", 500, 800, "Lito"];
//-------Criando as aeronaves
servicoAeronaves.criarAeronave(aeronaveParticularPayload);
servicoAeronaves.criarAeronave(aeronavePassageiroPayload);
//-------Recuperando  as aeronaves
//-------Particular
let x = servicoAeronaves.recuperarAeronave("PTX 8080");
console.log("Aeronave");
console.log(x.toString());
console.log(x.tipo);
//-------Passageiro
let xx = servicoAeronaves.recuperarAeronave("PTX 8080");
console.log("Aeronave");
console.log(xx.toString());
console.log(xx.tipo);
//-------Carga
let xxx = servicoAeronaves.recuperarAeronave("PTX 8080");
console.log("Aeronave");
console.log(xxx.toString());
console.log(xxx.tipo);
//-----------------------------------------------------------------------------
  #id; // Identificador da Plano de Voo
  #matriculaPiloto; // Prefixo de identificação do Piloto Responsavel Pelo Plano de Voo
  #idAerovia; // Identificador da Aerovia utilizado no plano de voo.
  #data; // Data usado durante o curso do voo.
  #horario; // Data usado durante o curso do voo.
  #altitude; // Altitude Sugerida no plano de voo.
  #slots; // Numero de slots utilizados durante o curso do plano de voo
  #estaCancelado; // Reflete o Status caso o Plano de Voo Esteja Cancelado
*/
let pv = new ServicoPlanodeVoo();

let payloadPlanoDeVoo = [
  "ABC123",
  "808080",
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
  "GRU-MAU",
  "26/11/1981",
  "10:45",
  25001,
  4,
  false,
];

pv.criarPlanoDeVoo(payloadPlanoDeVoo);
pv.criarPlanoDeVoo(payloadPlanoDeVoo1);
//console.log(pv.toString());

console.log("Listando Plano de Voos");
console.log(pv.listarPlanoDeVoos());
//-----------------------------------------------------------------------------
console.log("Inicio do testes da funcao");

//console.log(filtroAeronavePlanoDevoo(x, pl));
