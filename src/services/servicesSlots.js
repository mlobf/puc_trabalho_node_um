import { Slots } from "../models/modelSlot.js";

export class ServicoSlots {
    constructor() {
        this.base = new Map();
    }

    criarSlot(listaDeRequisitos) {
        const [identificador, ...resto] = listaDeRequisitos;
        this.base.set(identificador, new Slots(identificador, ...resto)); // Usa o identificador como chave
    }

    listarSlots() {
        return Array.from(this.base.values()).toString(); // Retornar todas as aerovias
    }

    recuperarAerovia(identificador) {
        return this.base.get(identificador); // Recuperar aerovia por identificador
    }

    atualizarAerovia(identificador, novosDados) {
        if (this.base.has(identificador)) {
            let aerovia = this.base.get(identificador);
            Object.assign(aerovia, novosDados); // Atualiza os dados da aerovia
        }
    }

    deletarAerovia(identificador) {
        this.base.delete(identificador); // Remover aerovia do Map
    }
}
