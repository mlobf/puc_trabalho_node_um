class Piloto {
  /*
    Sobre cada piloto é necessário armazenar seu 
    número de matrícula, 
    nome, 
    e estado de sua habilitação (ativo/inativo). 
    */
  constructor(numero_matricula, nome, estado_habilitacao) {
    this.numero_matricula = numero_matricula;
    this.nome = nome;
    this.estado_habilitacao = estado_habilitacao;
  }
  toStr() {
    return `O nome do Piloto é ${this.nome}`;
  }
}

export { Piloto };
