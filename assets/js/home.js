const URLPost = "https://strive.school/studentlogin";
const apiKay =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZjMDVhNjdjMjM5YzAwMTUyZjRiOWIiLCJpYXQiOjE3MTgzNTUzNjYsImV4cCI6MTcxOTU2NDk2Nn0.SNr5-HHqDmixkK6fUBAm5OCVFrek45OIG5kNTm06HDg";

const newArticole = {
  name: nomeArticolo.valuee,
  imgUrl: imgUrl.value,
  price: price.value,
};
const articoles = [];
articoles.push(newArticole);
console.log(articoles);
console.log(newArticole.name.vaue);

document.forms["aricoleForm"].addEventListener("submit", function (e) {
  const nomeArticolo = document.getElementById("nomeArticolo");
  const description = document.getElementById("description");
  const brand = document.getElementById("brand");
  const imgUrl = document.getElementById("imgUrl");
  const price = document.getElementById("price");

  e.preventDefault();
});
