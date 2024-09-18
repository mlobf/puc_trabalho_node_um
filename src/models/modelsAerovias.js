export class Aerovias {
  /*
    Aerovias

    Sobre cada aerovia é necessário armazenar um 
    -identificador (string), 
    -o aeroporto de origem, 
    -o aeroporto de destino e o 
    -tamanho da aerovia (em quilômetros). 
    --------------------------------------------------------------------------------------------------------------
    Por simplicidade iremos assumir que as aerovias possuem sentido único 
    (neste caso para que se possa ir e voltar entre Porto Alegre e Florianópolis serão necessárias duas aerovias: 
    POA-FLO e FLO-POA).

    Como já foi visto no enunciado geral, as aerovias são divididas em altitudes. Por simplicidade
    iremos assumir que todas as aerovias são divididas em 10 altitudes começando em 25.000 pés
    até 35.000 pés.

    A ocupação de cada aerovia se dá por slot de tempo. Por simplicidade vamos assumir slots de
    hora cheia. Para saber quantos slots de tempo uma aeronave necessita para percorrer uma
    aerovia basta dividir o tamanho da aerovia pela velocidade de cruzeiro da aeronave.

    Exemplo:
    Aerovia: POA-RJ, 1.000Km
    Velocidade de cruzeiro da aeronave: 800Km/h

    Tempo de viagem = 1000 / 800 → 1,25 horas o que equivale a 75 minutos ou 1h:15min.

    Como estamos assumindo slots de hora cheia, mesmo que a aeronave utilize apenas 15 minutos
    do segundo slot este voo irá ocupar 2 slots de horário. Então se o voo estiver previsto para as
    15:00hs, iremos ocupar os slots das 15:00 e o das 16:00. Se o voo estiver previsto para as 15:52,
    iremos ocupar os slots das 15:00hs, 16:00hs e 17:00hs.

    Para que o controle de ocupação das aerovias possa ser feito, será necessário manter a lista das
    altitudes e slots de cada aerovia ocupados em cada dia (data).
   */

  constructor(
    identificador,
    aeroportoOrigem,
    aeroportoDestino,
    tamanhoAerovia
  ) {
    this.identificador = identificador;
    this.aeroportoOrigem = aeroportoOrigem;
    this.aeroportoDestina = aeroportoDestino;
    this.tamanhoAerovia = tamanhoAerovia;
  }
  // Criar slots.
  /*
  Um slot é composto por altitude e de horario e dia 
  Isso pode ser o Id composto Ano-Dia-Hora-Altitude
  // Criar um today e dar um split com o ano + mes + dia + hora + altitude.
  A altitude pode ser de uma range de 25.000 a 35.000 divididos em 1.000 metros.
  Eu vou criar somente um range de um ano so para exempleficar.
  Desta forma 


  */
  gerarRangeDeAnos() {
    let listaRangeAnos = [];
    for (let i = 2024; i < 2044; i++) {
      listaRangeAnos.push(i);
    }
    return listaRangeAnos;
  }

  gerarDiasAno() {
    let listaDiasAno = [];
    for (let i = 1; i < 366; i++) {
      listaDiasAno.push(i);
    }
    return listaDiasAno;
  }

  gerarMesAno() {
    let listaMesAno = [];
    for (let i = 1; i < 13; i++) {
      listaMesAno.push(i);
    }
    return listaMesAno;
  }

  gerarHorasDia() {
    let listaHorasDia = [];
    for (let i = 0; i < 25; i++) {
      listaHorasDia.push(i);
    }
    return listaHorasDia;
  }

  gerarRangeAltitude() {
    let listaRangeAltitude = [];
    for (let i = 25000; i < 36000; i = i + 1000) {
      listaRangeAltitude.push(i);
    }
    return listaRangeAltitude;
  }

  // Gerar a lista de números de 1 a 365

  gerarTodosSlots() {
    let listaSlots = [];

    let anos = this.gerarRangeDeAnos();
    let meses = this.gerarMesAno();
    let dias = this.gerarDiasAno();
    let horas = this.gerarHorasDia();
    let altitudes = this.gerarRangeAltitude();

    for (let ano = 0; ano < anos.length; ano++) {
      for (let mes = 0; mes < meses.length; mes++) {
        for (let dia = 0; dia < dias.length; dia++) {
          for (let hora = 0; hora < horas.length; hora++) {
            for (let altitude = 0; altitude < altitudes.length; altitude++) {
              let input =
                String(anos[ano]) +
                "-" +
                String(meses[mes]) +
                "-" +
                String(dias[dia]) +
                "-" +
                String(horas[hora]) +
                "-" +
                String(altitudes[altitude]);
              console.log(input);

              //listaSlots.push(input);
            }
          }
        }
      }
    }
    return listaSlots;
  }

  toStr() {
    let strIdentificador = `O identificador é ${this.identificador}`;
    let strAeroportoOrigem = `O aeroporto de Origem é ${this.aeroportoOrigem}`;
    let strAeroportoDestino = `O aeroporto de Destino é ${this.aeroportoDestino}`;
    let strTamanhoAerovia = `O tamanho da Aerovia é de ${this.tamanhoAerovia}`;
    return `O nome do Aerovias é ${this.aeroportoDestina}`;
  }
}

let poaSp = new Aerovias("POA-GRU", "POA", "GRU", 1000);
//console.log(poaSp.gerarTodosSlots());
console.log(Date.now());
