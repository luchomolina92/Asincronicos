import addStorage from "./components/addStorage.js";
import MovieList from "./components/MovieList.js";

((d) => {
  d.addEventListener('DOMContentLoaded', e => {
    MovieList();
    d.addEventListener('click', e => (e.target.dataset.id) && addStorage({[e.target.dataset.id] : e.target.textContent}))
  });
})(document);