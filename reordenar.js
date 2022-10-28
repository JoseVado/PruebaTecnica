//algoritmo de ordenamiento
const acomodar = arreglo => {
    for (let i = 0; i < arreglo.length; i++){
        let indice = menor(arreglo.slice(i));
        arreglo = swap(arreglo,i,indice+i);
    }
    return arreglo;
};

//se obtiene el index del número más chiquito
const menor = arreglo =>{
    let menor = Number.MAX_VALUE;
    let index = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (isNaN(arreglo[i])) {
            throw "Ingresa todos los números";
        }
        if(arreglo[i] < menor){
            menor = arreglo[i];
            index = i;
        }
    }
    return index;
};

//cambiamos dos valores
const swap = (arreglo, x, y)=>{
    const tmp = arreglo[x];
    arreglo[x] = arreglo[y];
    arreglo[y] = tmp;
    return arreglo;
}


//console.log(acomodar([1, 4, 5, 12, 7, 23, 12, 12]));

//agregamos campos mientras seleccionan un número
function agregarCampos (){
    const tamaño = parseInt(document.getElementById("tamañoArreglo").value);
    let campos = "<form id='temp'>";
    for (let i = 0; i < tamaño; i++){
        campos += '<input type="number" name="index" style="width: 50px ;">';
    }

    campos += '<br><button onclick="ordenar()">Ordenar</button></form>';

    document.getElementById("camposArrelgo").innerHTML = campos;
}

//al pulsar un boton se realiza el ordenamiento
function ordenar() {
    const datosArreglo = document.getElementById("temp");
    const arreglo = [];
    for (let i = 0; i < datosArreglo.length - 1;i++) {
        arreglo.push(parseInt(datosArreglo[i].value));
    }

    try {
        document.getElementById("camposArrelgo").innerHTML = acomodar(arreglo);
    } catch (error) {
        alert(error);
    }
}