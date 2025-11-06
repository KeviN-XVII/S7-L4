const url = location.search;
const allP = new URLSearchParams(url);
const id = allP.get("id");
console.log("ID:", id);

const tiger = "https://api.pexels.com/v1/search?query=tigers";

const imgDetails = function () {
  fetch(tiger + "/" + id, {
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
      console.log("HA FUNZIONATO", img);
    })
    .catch((error) => {
      console.error("Si è verificato un errore:", error);
    });
};
