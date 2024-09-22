import { PlanoDeVoo } from "../models/modelPlanoDeVoo.js";

export class ServicoSistemas {
    constructor() {
        this.base = new Map();
    }

    criarPlanoDeVoo(listaDeRequisitos) {
        const [identificador, ...resto] = listaDeRequisitos;
        this.base.set(identificador, new PlanoDeVoo(identificador, ...resto)); // Usa o identificador como chave
    }

    listarPlanoDeVoos() {
        return Array.from(this.base.values()).toString(); // Retornar todos os planos de voo
    }

    recuperarPlanoDeVoos(identificador) {
        return this.base.get(identificador); // Recuperar plano de voo por identificador
    }

    atualizarPlanoDeVoo(identificador, novosDados) {
        if (this.base.has(identificador)) {
            let aerovia = this.base.get(identificador);
            Object.assign(aerovia, novosDados); // Atualiza os dados da plano de voo
        }
    }

    deletarPlanoDeVoo(identificador) {
        this.base.delete(identificador); // Remover plano do voo do Map
    }
}
