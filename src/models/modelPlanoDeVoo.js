class PlanoDeVoo {
  /*
    Plano de voo
    Sobre cada plano de voo é necessário armazenar 
    -um identificador numérico, 
    -a matrícula do piloto
    -responsável por conduzir o voo, 
    -o prefixo da aeronave que será utilizada, 
    -a data e o horário do voo, 
    -a aerovia escolhida, 
    -a altitude que será usada, 
    -a lista de slots de horário ocupados e um
    booleano que indica se foi cancelado ou não.

    validacaoPlanoVoo.

    Para que um plano de voo possa ser aprovado as seguintes condições tem de ser satisfeitas:

    • A habilitação do piloto tem de estar ativa;
    • A aeronave tem de ter autonomia para voar o trecho (a autonomia tem de ser 10% maior que o tamanho da aerovia);
    • A altitude escolhida tem de ser compatível com o tipo de aeronave;
    • Não pode haver restrições de horário para o tipo de aeronave;
    • Os slots de horário necessários têm de estar livres.

    Se um plano de voo é aprovado, ele recebe o identificador numérico e precisa ser registrado no
    sistema para consulta futura. Além disso os controles relativos à ocupação das aerovias (altitudes
    e slots de horário) têm de ser devidamente atualizados de maneira a impedir que outros planos
    possam ser aprovados de maneira sobreposta.
*/
  constructor(
    identificadorNumerico,
    matriculaPiloto,
    responsavelVoo,
    prefixoAeronave,
    dataHoraVoo,
    nomeAerovia,
    altitude,
    listaSlots,
    foiCancelado
  ) {
    this.identificadorNumerico = identificadorNumerico;
    this.matriculaPiloto = matriculaPiloto;
    this.responsavelVoo = responsavelVoo;
    this.prefixoAeronave = prefixoAeronave;
    this.dataHoraVoo = dataHoraVoo;
    this.nomeAerovia = nomeAerovia;
    this.altitude = altitude;
    this.listaSlots = listaSlots;
    this.foiCancelado = foiCancelado;
  }
  toStr() {
    let strPlanoVoo = "Plano de voo.";
    let strMatriculaPiloto = `Matricula do Piloto é ${this.matriculaPiloto} \n`;
    let strResponsavelVoo = `Responsavel Voo  é ${this.responsavelVoo} \n`;
    let strPrefixoAeronave = `Prefixo Aeronave é ${this.prefixoAeronave} \n`;
    let strDataHoraVoo = `Data Hora Voo é ${this.dataHoraVoo} \n`;
    let strNomeAerovia = `Nome Aerovia é ${this.nomeAerovia} \n`;
    let strAltitude = `Altitude é ${this.altitude} \n`;
    let strListaSlots = `Lista Stots é ${this.listaSlots} \n`;
    let strFoiCancelado = `Foi Cancelado é ${this.foiCancelado} \n`;

    return (
      strPlanoVoo +
      strMatriculaPiloto +
      strResponsavelVoo +
      strPrefixoAeronave +
      strDataHoraVoo +
      strNomeAerovia +
      strAltitude +
      strListaSlots +
      strFoiCancelado
    );
  }
}

export { PlanoDeVoo };
