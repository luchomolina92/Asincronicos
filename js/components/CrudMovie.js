import ascof from "../helpers/ascof.js";

const d = document;

export default function CrudMovie() {
  d.addEventListener("submit", (e) => {
    if (e.target.matches(".formulario")) {
      e.preventDefault();
      const formData = new FormData(d.querySelector(".formulario"));

      const options = {
        body: {},
        headers: { "content-type": "application/json" },
      };

      formData.forEach((v,k) => options.body[k] = v)

      delete options.body.id;

      ascof
        .post("http://127.0.0.1:3031/api/movies/create", options)
        .then((res) => {
          if (res.error) throw res;
          e.target.reset();
        })
        .catch((err) => console.error(err));
    }
  });
}
