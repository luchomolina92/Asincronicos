import ascof from "../helpers/ascof.js";

const d = document;

export default function MovieList() {
  const $movies = d.querySelector(".movies"),
    $template = d.getElementById("template-movie").content,
    $fragment = d.createDocumentFragment();

  let $movieContent = [];

  ascof
    .get("http://127.0.0.1:3031/api/movies")
    .then((res) => {
      if(res.error) throw res;
      $movieContent = res.data

      $movieContent.forEach((movie) => {
        $template.querySelector("li").setAttribute("data-id", movie.id);
        $template.querySelector("li").textContent = movie.title;
  
        // Clonar el template, el true sirve para copiar toda la estructura
        const $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
      });
  
      $movies.appendChild($fragment);
    })
    .catch((err) => $movies.innerHTML = `<h3>Error: ${err.status || "Desconocido"}</h3> <p>${err.statusText || "Desconocido"}</p>`);
}
