const URLPost = "https://striveschool-api.herokuapp.com/api/product";
const apiKay =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZjMDVhNjdjMjM5YzAwMTUyZjRiOWIiLCJpYXQiOjE3MTgzNTUzNjYsImV4cCI6MTcxOTU2NDk2Nn0.SNr5-HHqDmixkK6fUBAm5OCVFrek45OIG5kNTm06HDg";
function ConfermaOperazione() {
  const richiesta = window.confirm("Reimpostare il modulo o continuare?");
  return richiesta;
}

document.forms["aricoleForm"].addEventListener("submit", function (e) {
  e.preventDefault();
  const nomeArticolo = document.getElementById("nomeArticolo");
  const description = document.getElementById("descrizione");
  const brand = document.getElementById("brand");
  const imgUrl = document.getElementById("imgUrl");
  const price = document.getElementById("price");

  const newArticole = {
    name: nomeArticolo.value,
    description: description.value,
    brand: brand.value,
    imageUrl: imgUrl.value,
    price: price.value,
  };
  fetch(URLPost, {
    method: "POST",
    body: JSON.stringify(newArticole),
    headers: {
      Authorization: "Bearer " + apiKay,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        window.alert("Contenuto ricevuto");
      }
      if (response.status >= 100 && response.status < 200) {
        console.log("Informazioni per il client");
      }
      if (response.status >= 300 && response.status < 399) {
        console.log("Redirezione");
      }
      if (response.status >= 400 && response.status < 499) {
        console.log("Richiesta errata");
      }
      if (response.status >= 500 && response.status < 599) {
        console.log("Errore sul server");
      }
    })
    .catch((error) => console.log("Si è verificato un errore!"));
});
