/*
Aeronaves particulares de pequeno porte só podem voar entre 25.000 pés e 27.000 pés. 
Aeronaves comerciais de passageiro só podem voar acima de 28.000 pés. 
Aeronaves de carga só podem voar entre a meia noite e as 6:00 da manhã.
*/

function filtroAeronavePlanoDevoo(Aeronave,PlanoDeVoo) {
  if (
    Aeronave.tipo === "Particular" &&
    Aeronave.altitude < 27000 &&
    Aeronave.altitude > 25000
  ) {
    return true;
  } else if (Aeronave.tipo === "Passageiro" && Aeronave.altitude > 28000) {
    return true;
  }
  } else if (Aeronave.tipo === "Carga" && Aeronave.altitude > 28000) {
    return true;
  }
}
