let pagina = 1;
const btnAtras = document.getElementById('btnAtras');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if(pagina < 1000){
        pagina += 1;
        cargarPeliculas();
    
    }

});

btnAtras.addEventListener('click', () => {
    if(pagina > 1){
        pagina -= 1;
        cargarPeliculas();
    }
});

const cargarPeliculas = async() => {
    try {
const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6660bdbbcebf0d48ff508a0d30686eec&language=es-MX&page=${pagina}`);

//si mi respuesta es correcta
if (respuesta.status ===  200){
 const datos = await respuesta.json();


 let peliculas = '';
    datos.results.forEach(pelicula =>{
    peliculas  +=`
    <div class="pelicula">
        <img class="pelicula">
            <img class="poster" src ="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
    <h3 class="titulo">${pelicula.title}</h3>
    </div>
    `;
    });
  document.getElementById('contenedor').innerHTML = peliculas;

}else  if (respuesta.status == 401){
    console.log('la llave esta mal puesta');
}else if (respuesta.status === 404){
    console.log('no se encontro la pelicula');
}else{
    console.log('hay un error');
}
    } catch(error){
        console.log(error);
    }

}

cargarPeliculas();