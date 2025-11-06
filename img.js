const url = location.search;
const allP = new URLSearchParams(url);
const id = allP.get("id");
const containerimg = document.getElementById("div-img");
console.log("ID:", id);

fetch("https://api.pexels.com/v1/photos/" + id, {
  headers: {
    Authorization: "bFl6u7cTboSO8aBHeNLtik915w8e5DHlorffRYL5qJgklo3c1u0UwNCN",
  },
})
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error");
    }
  })
  .then(function (photo) {
    console.log(photo);
    containerimg.innerHTML = `
        <div class="card my-5 mx-auto" style="max-width: 700px;">
          <img src="${photo.src.large}" class="card-img-top" alt="${photo.photographer}">
          <div class="card-body text-center">
            <h3 class="card-title">${photo.photographer}</h3>
            <a href="${photo.photographer_url}" target="_blank" class="btn btn-primary my-3">
              Visita la pagina dell'artista
            </a><br>
            <button class="btn btn-secondary"><a href="index.html" class="text-decoration-none text-reset">Home</a></button>
          </div>
        </div>
      `;
  })
  .catch(function (error) {
    console.log("Errore:", error);
  });
