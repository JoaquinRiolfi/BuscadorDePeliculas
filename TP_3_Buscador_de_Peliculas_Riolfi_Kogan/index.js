let Buscar = event =>{
event.preventDefault();
console.log("Hago consulta - axios");
(async () => {
    console.log("Hago async consulta - axios")
    let titulo = document.getElementById("nombre").value
    let tipo = document.getElementById("Tipo").value
    let Año = document.getElementById("año").value
    console.log(tipo)
    await axios({
        method: 'get',
        url: 'https://www.omdbapi.com/?apikey=2f0f3be' + "&s=" + titulo + "&type=" + tipo + "&y=" + Año,
    })

    .then(res => {
        console.log("res", res.data.Search)
        res.data.Search.forEach(actual=>{
        pelicula=document.createElement("li") 
        pelicula.innerHTML=`Nombre:${actual.Title} - Año:${actual.Year} - Tipo:${actual.Type}` 
        valores.appendChild(pelicula)
        })
    })
    .catch(err => console.error("error", err)) 
    console.log("Fin async consulta - axios")
})();
console.log("Fin consulta - axios")

}





