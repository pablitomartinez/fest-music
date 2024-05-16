//escucha hasta que este listo el html
document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
} )

function crearGaleria(){
    const numImagen = 16;
    const galeria = document.querySelector('.galeria-imagenes')
    // crear etiquetas img 
    for (let i = 1; i <= numImagen; i++) {
      const imagen = document.createElement("IMG");
      imagen.src = `src/img/gallery/full/${i}.jpg`;
      imagen.alt = `imagen ${i}`;

      galeria.appendChild(imagen);

      console.log(imagen.alt);
    }
}