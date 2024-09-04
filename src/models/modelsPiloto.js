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

export class ServicoPiloto {
  constructor() {
    this.base = [];
  }
  createPiloto(nome, matricula, habilitacaoAtiva) {
    let p = new Piloto(nome, matricula, habilitacaoAtiva);
    this.base.push(p);
    return p;
  }
  getAllPiloto() {
    return this.base;
  }
  getPilotoByMatricula(matricula) {
    for (let i = 0; i < this.base.length; i++) {
      if (this.base[i].matricula === matricula) {
        let piloto = this.base[i];
        return piloto;
      }
    }
  }
}

let sp = new ServicoPiloto();

sp.createPiloto("Marcos", 303030301, true);
sp.createPiloto("Joao", 303030302, true);
sp.createPiloto("Maria", 303030303, true);
sp.createPiloto("Jose", 303030304, true);
sp.createPiloto("Caio", 303030305, true);
sp.createPiloto("Ze", 303030306, true);
sp.createPiloto("Anna", 303030307, true);
sp.createPiloto("Gabriela", 303030308, true);

let pilotoMatricula = sp.getPilotoByMatricula(303030303);
