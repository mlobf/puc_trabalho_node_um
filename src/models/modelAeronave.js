class Aeronave {
  /*
     são identificadas por um prefixo (uma string).
     Serão considerados 3 tipos de aeronave:
    • Aeronave particular de pequeno porte;
    • Aeronave comercial de passageiros;
    • Aeronave comercial de carga.

    Sobre qualquer aeronave é necessário armazenar o prefixo, 
    o tipo de aeronave, 
    a velocidade de cruzeiro (em quilômetros por hora) e 
    a autonomia (em quilômetros). 

    Para as aeronaves de pequeno porte é necessário armazenar também o nome da empresa responsável pela manutenção. 
    Para as aeronaves comerciais de passageiros é necessário armazenar a quantidade de passageiros que pode
    transportar e para as de carga o peso máximo em toneladas que é capaz de levar. 
    Para qualquer tipo de aeronave comercial é necessário armazenar o nome da companhia aérea.
    Aeronaves comerciais de passageiro só podem voar acima de 28.000 pés. 
    Aeronaves particulares de pequeno porte só podem voar entre 25.000 pés e 27.000 pés. 
    Aeronaves de carga só podem voar entre a meia noite e as 6:00 da manhã.
    */
  constructor(prefixo, tipo_aeronave, velocidade_cruzeiro, autonomia) {
    this.prefixo = prefixo;
    this.tipo_aeronave = tipo_aeronave;
    this.velocidade_cruzeiro = velocidade_cruzeiro;
    this.autonomia = autonomia;
  }
  criarTipoAeronave() {
    return "Tipo criado";
  }

  toStr() {
    let str_prefixo = `O prefixo da aeronave é ${this.prefixo} \n`;
    let str_tipo = `O tipo da aeronave é ${this.tipo_aeronave} \n`;
    let str_autonomia = `A autonomia da aeronave é ${this.autonomia} \n`;
    let str_velocidade = `A velocidade da aeronave é ${this.velocidade_cruzeiro} \n`;

    return str_prefixo + str_tipo + str_autonomia + str_velocidade;
  }
}
export { Aeronave };
