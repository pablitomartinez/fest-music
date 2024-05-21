//escucha hasta que este listo el html
document.addEventListener("DOMContentLoaded", function () {
  crearGaleria();
  navegacionFija();
  resaltarEnlace();
  scrollNav();
});

function navegacionFija() {
  const header = document.querySelector(".header");
  const festivalFixed = document.querySelector(".sobre-festival");

  window.addEventListener("scroll", function () {
    if (festivalFixed.getBoundingClientRect().bottom < 1) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
}

function resaltarEnlace() {
  document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navegacion-principal a");
    // GUARDAMOS SECCION ACTUAL
    let actual = "";
    sections.forEach((section) => {
      // DETECTAR SECCION MAXIMA
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      // console.log(sectionHeight);
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        // console.log(section.id);
        actual = section.id;
      }
    });
    // dectectar seccion con mayor tamaño y le agregamos la class 'active'
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + actual) {
        link.classList.add("active");
      }
    });
  });
}

function crearGaleria() {
  const numImagen = 16;
  const galeria = document.querySelector(".galeria-imagenes");
  // crear etiquetas img
  for (let i = 1; i <= numImagen; i++) {
    // generar imagen
    const imagen = document.createElement("IMG");
    imagen.src = `../src/img/gallery/full/${i}.jpg`;
    imagen.alt = `imagen ${i}`;

    //Even handler, empiezan con ON
    imagen.onclick = function () {
      mostrarImagen(i);
    };
    galeria.appendChild(imagen);
  }
}

function mostrarImagen(i) {
  const imagen = document.createElement("IMG");
  imagen.src = `../src/img/gallery/full/${i}.jpg`;
  imagen.alt = `imagen ${i}`;

  // GENERAR MODAL
  const modal = document.createElement("DIV");
  modal.classList.add("modal"); // modal con class modal
  modal.onclick = cerrarModal; // CERRAR MODAL

  //boton cerrar modal
  const cerrarModalBtn = document.createElement("BUTTON");
  cerrarModalBtn.textContent = "X";
  cerrarModalBtn.classList.add("btn-cerrar");
  cerrarModalBtn.onclick = cerrarModal;

  modal.appendChild(imagen); //AGREGAR IMAGEN A MODAL
  modal.appendChild(cerrarModalBtn); //AGREGAR BOTON CERRAR
  // AGREGAR AL HTML
  const body = document.querySelector("body");
  body.classList.add("overflow-hidden");
  body.appendChild(modal);
}

function cerrarModal() {
  // selecciono el modal
  const modal = document.querySelector(".modal");
  modal.classList.add("fade-out"); // se agrega animacion de cierre
  setTimeout(() => {
    // elimino el overflow-hidden
    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
    // existe modal??? entonces eliminalo
    modal?.remove();
  }, 500);
}

function scrollNav() {
  const navLinks = document.querySelectorAll(".navegacion-principal a");

  navLinks.forEach((link) => {
    link.addEventListener('click', e =>{
      e.preventDefault();
      const sectionScroll = e.target.getAttribute('href');
      const section = document.querySelector(sectionScroll);

      section.scrollIntoView({behavior: 's'})
    })
  });
}
