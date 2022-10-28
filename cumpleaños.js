"use strict";
//coomparación de fecha de cumpleaños
const cumpleaños = (diaCumpleaños, mesCumpleaños, mensajes) => {
    const hoy = new Date;
    const diaDeHoy = hoy.getUTCDate();
    const mesDeHoy = hoy.getMonth() + 1;
    return ((diaCumpleaños == diaDeHoy) && (mesCumpleaños == mesDeHoy)) ? mensajes[0] : mensajes[1];
};
//uso de cumpleaños con html
const calcularCumpleaños = () => {
    const diaSelec = document.getElementById("date").value;
    const diaArreglo = diaSelec.split("-");
    const dia = parseInt(diaArreglo[2]);
    const mes = parseInt(diaArreglo[1]);
    const respuesta = cumpleaños(dia, mes, ["happy birth day", "Sorry but not is u Birth Day :C"]);
    const parrafoRespuesta = document.getElementById("felicitaciones");
    if (parrafoRespuesta)
        parrafoRespuesta.innerHTML = respuesta;
};
