const URLPost = "https://striveschool-api.herokuapp.com/api/product/";
const apiKay =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZjMDVhNjdjMjM5YzAwMTUyZjRiOWIiLCJpYXQiOjE3MTgzNTUzNjYsImV4cCI6MTcxOTU2NDk2Nn0.SNr5-HHqDmixkK6fUBAm5OCVFrek45OIG5kNTm06HDg";

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
  });
});
