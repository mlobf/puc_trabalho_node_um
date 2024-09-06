export class Piloto {
  /*
   Sobre cada piloto é necessário armazenar seu 
    número de matrícula, 
    nome, 
    e estado de sua habilitação (ativo/inativo). 
    */
  #nome;
  #matricula;
  #habilitacaoAtiva;

  constructor(nome, matricula, habilitacaoAtiva) {
    this.#nome = nome;
    this.#matricula = matricula;
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
    let pn = `O nome do piloto é ${this.#nome} `;
    let pm = `A Matricula do piloto é ${this.#matricula} `;
    let ph = `A Situacao da habilitacao do piloto é ${this.#habilitacaoAtiva} `;

    return pn + pm + ph;
  }
}
