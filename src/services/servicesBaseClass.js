class BaseService {
    constructor() {
        this.base = new Map(); // Usar o prefixo ou identificador como chave única
    }

    criarItem(chave, item) {
        if (chave && item) {
            this.base.set(chave, item);
        }
    }

    recuperarItem(chave) {
        return this.base.get(chave); // Recuperar item por chave
    }

    atualizarItem(chave, novosDados) {
        if (this.base.has(chave)) {
            let item = this.base.get(chave);
            Object.assign(item, novosDados); // Atualiza os dados do item
        }
    }

    deletarItem(chave) {
        this.base.delete(chave); // Remover item do Map
    }

    listarItens() {
        return Array.from(this.base.values()); // Retornar todos os itens
    }
}

export { BaseService }
