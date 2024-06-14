const URLPost = "https://strive.school/studentlogin";
const apiKay =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZjMDVhNjdjMjM5YzAwMTUyZjRiOWIiLCJpYXQiOjE3MTgzNTUzNjYsImV4cCI6MTcxOTU2NDk2Nn0.SNr5-HHqDmixkK6fUBAm5OCVFrek45OIG5kNTm06HDg";

const articoles = [];

document.forms["aricoleForm"].addEventListener("submit", function (e) {
  e.preventDefault();
  const nomeArticolo = document.getElementById("nomeArticolo");
  const description = document.getElementById("description");
  const brand = document.getElementById("brand");
  const imgUrl = document.getElementById("imgUrl");
  const price = document.getElementById("price");

  const newArticole = {
    name: nomeArticolo.value,
    imgUrl: imgUrl.value,
    price: price.value,
  };
  articoles.push(newArticole);
  console.log(articoles);
});
