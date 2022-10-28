//obtener el json de la api
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(json => obtenerHabilidades(json))
    .catch(err => console.log(err));

const obtenerHabilidades = pokemon => {
    //dar formato a las habilidades
    let respuesta = `<h2>Habilidades:</h2> 
        <img src="${pokemon.sprites.front_default}" alt="Ditto">`;
    
    for (const habilidad of pokemon.abilities) {
        respuesta += "<p>" + habilidad["ability"]["name"] + "</p>";
    }
    document.getElementById("ditto").innerHTML += respuesta;
}