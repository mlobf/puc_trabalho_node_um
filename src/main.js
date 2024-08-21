import { Aeronave } from "./models/modelAeronave.js";

const cesna = new Aeronave("PGT4040", "Comercial Pegueno Porte", 900, 1000);

console.log(cesna.toStr());
console.log(cesna.criarTipoAeronave());
