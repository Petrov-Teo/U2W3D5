const URLPost = "https://strive.school/studentlogin";
const apiKay =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZjMDVhNjdjMjM5YzAwMTUyZjRiOWIiLCJpYXQiOjE3MTgzNTUzNjYsImV4cCI6MTcxOTU2NDk2Nn0.SNr5-HHqDmixkK6fUBAm5OCVFrek45OIG5kNTm06HDg";

const aricoleForm = document.forms.aricoleForm.addEventListener("submit", function (e) {
  e.preventDefault;
});

const newArticole = {
  name: aricoleForm.nomeArticolo.value,
  description: aricoleForm.descrizione.value,
  brand: aricoleForm.brand.value,
  imgUrl: aricoleForm.imgUrl.value,
  price: aricoleForm.price.value,
};
const articoles = [];
articoles.push(newArticole);

console.log(newArticole);
