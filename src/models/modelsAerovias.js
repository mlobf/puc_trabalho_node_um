export class Aerovias {
  /*
    Classe Aerovias

    Esta classe representa uma aerovia e controla a ocupação por slots de tempo, altitudes e datas.

    Atributos:
      - #identificador: Identifica a aerovia (string).
      - #aeroportoOrigem: O aeroporto de origem da aerovia.
      - #aeroportoDestino: O aeroporto de destino da aerovia.
      - #tamanhoAerovia: O tamanho da aerovia em quilômetros.

    Observação:
    - Por simplicidade, assume-se que as aerovias possuem sentido único.
    - A ocupação de uma aerovia é feita por slots de hora cheia e por faixas de altitude.
  */

  // Definindo atributos privados com #
  #identificador;
  #aeroportoOrigem;
  #aeroportoDestino;
  #tamanhoAerovia;

  constructor(
    identificador,
    aeroportoOrigem,
    aeroportoDestino,
    tamanhoAerovia
  ) {
    this.#identificador = identificador;
    this.#aeroportoOrigem = aeroportoOrigem;
    this.#aeroportoDestino = aeroportoDestino;
    this.#tamanhoAerovia = tamanhoAerovia;
  }

  // Getters e Setters para acessar os atributos privados

  get identificador() {
    return this.#identificador;
  }

  set identificador(valor) {
    this.#identificador = valor;
  }

  get aeroportoOrigem() {
    return this.#aeroportoOrigem;
  }

  set aeroportoOrigem(valor) {
    this.#aeroportoOrigem = valor;
  }

  get aeroportoDestino() {
    return this.#aeroportoDestino;
  }

  set aeroportoDestino(valor) {
    this.#aeroportoDestino = valor;
  }

  get tamanhoAerovia() {
    return this.#tamanhoAerovia;
  }

  set tamanhoAerovia(valor) {
    this.#tamanhoAerovia = valor;
  }

  // Métodos para gerar ranges de anos, dias, meses, horas e altitudes
  /*

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
  // Método para gerar todos os slots de tempo e altitude
  
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
  */

  // Método para retornar uma string com os detalhes da aerovia

  toString() {
    let strIdentificador = `O identificador é ${this.#identificador}`;
    let strAeroportoOrigem = `O aeroporto de Origem é ${this.#aeroportoOrigem}`;
    let strAeroportoDestino = `O aeroporto de Destino é ${this.#aeroportoDestino}`;
    let strTamanhoAerovia = `O tamanho da Aerovia é de ${this.#tamanhoAerovia} km`;

    return `AEROVIA \n ${strIdentificador},\n ${strAeroportoOrigem},\n ${strAeroportoDestino},\n ${strTamanhoAerovia}\n`;
  }
}

//let poaSp = new Aerovias("POA-GRU", "POA", "GRU", 1000);
