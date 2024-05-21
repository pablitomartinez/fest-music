//series me permite ejecutar multiples tareas
import { src, dest, watch, series} from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);

export function js(done) {
  src("src/js/app.js").pipe(dest("dist/js"));

  done();
}

export function css(done) {
  src("src/scss/app.scss", { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("dist/css", { sourcemaps: true }));

  done();
}

// Nueva tarea para copiar index.html
export function html(done) {
  src("index.html").pipe(dest("dist"));
  done();
}

export function dev() {
  watch("src/scss/**/*.scss", css);
  watch("src/js/**/*.js", js);
  watch("index.html", html);
}


// ? SOLICION CHATGPT----------------------------

// Definimos la tarea `build` para producción, incluyendo la tarea `html`
export const build = series(js, css, html);

// La tarea `default` ejecuta `build`
export default build;


// ? SOLICION CHATGPT----------------------------


// error del deply 



// // Definimos la tarea `build` para producción
// export const build = series(js, css);

// // La tarea `default` ejecuta `build`
// export default build;







//series toma las diferentes tareas de este archivo
//en este archivo tenemos js css y dev
// export default series(js, css, dev);

// en el script dejo vacio...css. es decir
// 'dev': 'gulp dev'   (que es lo que ejecuta la funcion dev)
//lo dejamos asi ------> 'dev': 'gulp'

// ? PARALLELEL
//tambien tenemos parallel que hace lo mismo
// solo que inicia todas las tareas al mismo tiempo
// export default parallel(js, css, dev);
//sirve en algunos casas
//cuando quieras iniciar todas las tareas al mismo tiempo