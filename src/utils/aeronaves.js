import { servicoPiloto, servicoAeronaves, servicoAerovias } from "../main.js";

/*
Aeronaves particulares de pequeno porte só podem voar entre 25.000 pés e 27.000 pés. 
Aeronaves comerciais de passageiro só podem voar acima de 28.000 pés. 
Aeronaves de carga só podem voar entre a meia noite e as 6:00 da manhã.

Para que um plano de voo possa ser aprovado as seguintes condições tem de ser satisfeitas:

Check list
(X)• A habilitação do piloto tem de estar ativa;
(X)• A aeronave tem de ter autonomia para voar o trecho (a autonomia tem de ser 10% maior
que o tamanho da aerovia);
(X)• A altitude escolhida tem de ser compatível com o tipo de aeronave;
(X)• Não pode haver restrições de horário para o tipo de aeronave;

( )• Os slots de horário necessários têm de estar livres.





*/

export function filtroRestricaoHorario(PlanoDeVoo) {
    //Aeronaves de carga só podem voar entre a meia noite e as 6:00 da manhã.
    let prefixoAeronave = PlanoDeVoo.prefixoAeronave;
    let aeronave = servicoAeronaves.recuperarAeronave(prefixoAeronave);
    let tipoAeronave = aeronave.tipo;

    let planoDeVooHorario = PlanoDeVoo.horario;
    let hora = Number(planoDeVooHorario.split(":")[0]);

    if (tipoAeronave === "Carga" && hora > 0 && hora < 6) {
        return true;
    }
    return false;
}

export function filtroAltitude(PlanoDeVoo) {
    /*
  Aeronaves particulares de pequeno porte só podem voar entre 25.000 pés e 27.000 pés. 
  Aeronaves comerciais de passageiro só podem voar acima de 28.000 pés. 
  */

    let prefixoAeronave = PlanoDeVoo.prefixoAeronave;
    let aeronave = servicoAeronaves.recuperarAeronave(prefixoAeronave);
    let tipoAeronave = aeronave.tipo;

    let planoDeVooAltitude = PlanoDeVoo.altitude;

    if (
        tipoAeronave == "Particular" &&
        planoDeVooAltitude > 24999 &&
        planoDeVooAltitude < 27000
    )
        return true;

    if (tipoAeronave == "Passageiros" && planoDeVooAltitude > 28000)
        return true;

    return false;
}

export function filtroAutonomiaAeronave(PlanoDeVoo) {
    // A autonomia da aeronave deve ser no minimo 10%
    //  superior ao tamanho da aerovia utilizada.

    let prefixoAeronave = PlanoDeVoo.prefixoAeronave;
    let idAerovia = PlanoDeVoo.idAerovia;

    let aeronave = servicoAeronaves.recuperarAeronave(prefixoAeronave);
    let aerovia = servicoAerovias.recuperarAerovia(idAerovia);

    let automiaSeguranca = aerovia.tamanhoAerovia * 1.1;
    let aeronaveAutonomia = aeronave.autonomia;

    if (automiaSeguranca < aeronaveAutonomia) {
        return true;
    }
    return false;
}

export function filtroHabilitacao(PlanoDeVoo) {
    let piloto = servicoPiloto.recuperarPiloto(PlanoDeVoo.matriculaPiloto);
    if (piloto.habilitacaoAtiva) {
        return true;
    }
    return false;
}

export function filtroAeronavePlanoDevoo(Aeronave, PlanoDeVoo) {
    if (
        Aeronave.tipo === "Particular" &&
        PlanoDeVoo.altitude < 27000 &&
        PlanoDeVoo.altitude > 25000
    ) {
        console.log("Dentro de tipo Particular");
        return true;
    } else if (Aeronave.tipo === "Passageiro" && PlanoDeVoo.altitude > 28000) {
        console.log("Dentro de tipo passageiro");
        return true;
    } else if (Aeronave.tipo === "Carga" && PlanoDeVoo.altitude > 28000) {
        console.log("Dentro de tipo carga");
        return true;
    }
    console.log("rodou o false");
    return false;
}
