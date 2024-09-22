import { Piloto } from "../models/modelsPiloto.js";

export class ServicoPiloto {
    /*
    -ServicoPilotos (
        capaz de recuperar as informações relativas aos pilotos que 
        podem ser responsáveis pelos voos
    */
    constructor() {
        this.base = new Map();
    }

    criarPiloto(listaDeRequisitos) {
        const [matricula, ...resto] = listaDeRequisitos;
        this.base.set(matricula, new Piloto(matricula, ...resto)); // Usa o identificador como chave
    }

    listarPilotos() {
        return Array.from(this.base.values()).toString(); // Retornar todas os pilotos
    }

    recuperarPiloto(matricula) {
        try {
            return this.base.get(matricula); // Recuperar piloto por identificador
        } catch {
            return console.log("Nao ha pilotos com esta matricula");
        }
    }

    atualizarPiloto(matricula, novosDados) {
        if (this.base.has(matricula)) {
            let piloto = this.base.get(matricula);
            Object.assign(piloto, novosDados); // Atualiza os dados da piloto
        }
    }

    deletarPiloto(matricula) {
        this.base.delete(matricula); // Remover piloto do Map
    }

    toStr() {
        return `O nome do Serviço Piloto é ${this.nome}\n`;
    }
}
