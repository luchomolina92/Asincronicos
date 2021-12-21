((d) => {
  d.addEventListener("DOMContentLoaded", (e) => {
    const $movies = d.querySelector(".movies"),
      $template = d.getElementById("template-movie").content,
      $fragment = d.createDocumentFragment();
    let $movieContent = [];

    for (const key in localStorage)
      if (Number(key)) $movieContent.push(localStorage[key]);

    if ($movieContent.length > 0) {
      $movieContent.forEach((movie) => {
        $template.querySelector("li").textContent = movie;

        // Clonar el template, el true sirve para copiar toda la estructura
        const $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
      });
      $movies.appendChild($fragment);
    }
    else $movies.innerHTML = "Ninguna película como favorita"
  });
})(document);
