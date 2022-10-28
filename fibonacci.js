//números definidos
const numerosGuardados = {
    0:0,
    1:1
};

//algorimo de fibonacci
const fibonacci = num =>{
    const resultado = numerosGuardados[num];
    if(!isNaN(resultado)){
        return resultado;
    }
    const pasoFibonacci = fibonacci(num - 2) + fibonacci(num - 1)
    numerosGuardados[num] = pasoFibonacci;
    return pasoFibonacci;
};

//formato de fibonacci
const resultado = num => {
    //num--;
    let respuesta = "";
    for(let i=0; i<num;i++){
        respuesta += fibonacci(i) + ",";
    }
    return respuesta + fibonacci(num) ;

}

//utilizar fibonaci con html
const fiboWeb = () => {
    let fibo = parseInt(document.getElementById("fibo").value);
    document.getElementById("fiboRespuesta").innerHTML = resultado(fibo);
    
}

//console.log( resultado(5) );
