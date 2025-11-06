// bottone load images

const load1 = function () {
  fetch("https://api.pexels.com/v1/search?query=hamsters", {
    headers: {
      Authorization: "bFl6u7cTboSO8aBHeNLtik915w8e5DHlorffRYL5qJgklo3c1u0UwNCN",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella chiamata");
      }
    })
    .then((img) => {
      console.log(img);
      const imgContainer = document.getElementById("img-container");
      img.photos.forEach((photo) => {
        imgContainer.innerHTML += `<div class="col-3 col-md-4 mb-4 d-flex">
                <div class="card mb-4 shadow-sm h-100 d-flex flex-column">
                   <a href="singleimage.html?id=${photo.id}">
                    <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" alt="${photo.photographer}" />
                    </a>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-muted"> <a href="singleimage.html?id=${photo.id}" class="text-decoration-none text-reset">${photo.photographer}</a></h5>
                        <p class="card-text flex-grow-1">${photo.alt}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button id="hide-btn" type="button" class="btn btn-sm btn-outline-secondary">Hide</button>
                            </div>
                             <small class="text-muted">${photo.id}</small>
                        </div>
                    </div>
                </div>
            </div>
            `;
      });
    })

    .catch((error) => {
      console.error("Si è verificato un errore:", error);
    });
};

// bottone load secondary images

const load2 = function () {
  fetch("https://api.pexels.com/v1/search?query=tigers", {
    headers: {
      Authorization: "bFl6u7cTboSO8aBHeNLtik915w8e5DHlorffRYL5qJgklo3c1u0UwNCN",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella chiamata");
      }
    })
    .then((img) => {
      console.log(img);
      const imgContainer2 = document.getElementById("img-container");
      img.photos.forEach((photo) => {
        imgContainer2.innerHTML += `<div class="col-3 col-md-4 mb-4 d-flex">
                <div class="card mb-4 shadow-sm h-100 d-flex flex-column">
                   <a href="singleimage.html?id=${photo.id}">
                    <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" alt="${photo.photographer}" />
                    </a>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-muted"> <a href="singleimage.html?id=${photo.id}" class="text-decoration-none text-reset">${photo.photographer}</a></h5>
                        <p class="card-text flex-grow-1">${photo.alt}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button id="hide-btn" type="button" class="btn btn-sm btn-outline-secondary">Hide</button>
                            </div>
                             <small class="text-muted">${photo.id}</small>
                        </div>
                    </div>
                </div>
            </div>
            `;
      });
    })
    .catch((error) => {
      console.error("Si è verificato un errore:", error);
    });
};
