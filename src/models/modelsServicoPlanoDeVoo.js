import { PlanoDeVoo } from "./modelPlanoDeVoo.js";

export class ServicoPlanoDeVoo {
  constructor() {
    this.base = new Map();
  }

  async criarPlanoDeVoo(listaDeRequisitos) {
    const [id, ...resto] = listaDeRequisitos;
    this.base.set(id, new PlanoDeVoo(id, ...resto)); // Usa o identificador como chave
  }

  listarPlanodeVoos() {
    return Array.from(this.base.values()).toString(); // Retornar todas os planos de voo
  }

  recuperarPlanoDeVoo(id) {
    return this.base.get(id); // Recuperar plano de voo por meio do id
  }

  atualizarPlanoDeVoo(id, novosDados) {
    if (this.base.has(id)) {
      let planoDeVoo = this.base.get(id);
      Object.assign(id, novosDados); // Atualiza os dados do plano de voo por meio do id
    }
  }

  deletarPlanoDeVoo(id) {
    this.base.delete(id); // Remover id do Map
  }
}

let payload = [
  "3023",
  "kjdfskjfks",
  "irwfjksjdf",
  "26/11/24",
  "10:25",
  25000,
  3,
  false,
];

let spdv = new ServicoPlanoDeVoo();
spdv.criarPlanoDeVoo(payload);
console.log(spdv.recuperarPlanoDeVoo("3023"));
