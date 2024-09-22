export class Piloto {
    /*
   Sobre cada piloto é necessário armazenar seu 
    número de matrícula, 
    nome, 
    e estado de sua habilitação (ativo/inativo). 
    */
    #matricula;
    #nome;
    #habilitacaoAtiva;

    constructor(matricula, nome, habilitacaoAtiva) {
        this.#matricula = matricula;
        this.#nome = nome;
        this.#habilitacaoAtiva = habilitacaoAtiva;
    }

    get nome() {
        return this.#nome;
    }
    get matricula() {
        return this.#matricula;
    }
    get habilitacaoAtiva() {
        return this.#habilitacaoAtiva;
    }

    set nome(newNome) {
        this.#nome = newNome;
    }

    set matricula(newMatricula) {
        this.#matricula = newMatricula;
    }

    set habilitacaoAtiva(newHabilitacaoAtiva) {
        this.#habilitacaoAtiva = newHabilitacaoAtiva;
    }
    toString() {
        let pm = `A Matricula do piloto é ${this.#matricula} `;
        let pn = `O nome do piloto é ${this.#nome} `;
        let ph = `A Situacao da habilitacao do piloto é ${this.#habilitacaoAtiva} `;

        return `\n ${pm} + ${pn} + ${ph}`;
    }
}
