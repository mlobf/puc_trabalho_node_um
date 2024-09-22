//Aprovar plano de voo
import { ServicoPiloto } from "./services/servicesPiloto.js";
//Regras de negocio.
//
//
//
// Aeronaves comerciais de passageiro só podem voar acima de 28.000 pés.
// Aeronaves particulares de pequeno porte só podem voar entre 25.000 pés e 27.000 pés.
// Aeronaves de carga só podem voar entre a meia noite e as 6:00 da manhã.

// A aeronave tem que ter autonomia 10% superior a exigida no percurso.
//
export function testeApprovePlanoDeVoo(planodeDeVoo) {
    // A licença do Piloto tem que estar Ativa
    let pilotoLicenca = planodeVoo.matriculaPiloto;
    console.log(pilotoLicenca);

    console.log(planodeDeVoo.toString());
    console.log(planodeDeVoo[0]);
    return true;
}
//
//
//
//Listar Aerovias
//Listar Altitudes Livres
//Listar Plano de Voo
