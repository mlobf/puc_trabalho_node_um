class Aerovias {
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

  toStr() {
    let strIdentificador = `O identificador é ${this.identificador}`;
    let strAeroportoOrigem = `O aeroporto de Origem é ${this.aeroportoOrigem}`;
    let strAeroportoDestino = `O aeroporto de Destino é ${this.aeroportoDestino}`;
    let strTamanhoAerovia = `O tamanho da Aerovia é de ${this.tamanhoAerovia}`;
    return `O nome do Aerovias é ${this.aeroportoDestina}`;
  }
}

let poaSp = new Aerovias("POA-GRU", "POA", "GRU", 1000);
console.log(poaSp.toStr());

export { Aerovias };
