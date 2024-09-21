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

