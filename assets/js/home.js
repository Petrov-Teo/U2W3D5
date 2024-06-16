const URLGet = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZjMDVhNjdjMjM5YzAwMTUyZjRiOWIiLCJpYXQiOjE3MTgzNTUzNjYsImV4cCI6MTcxOTU2NDk2Nn0.SNr5-HHqDmixkK6fUBAm5OCVFrek45OIG5kNTm06HDg";

const cl = function (cl) {
  console.log("IL CONTENUTO E:", cl);
};

const h1 = document.getElementsByTagName("h1")[0];

fetch(URLGet, {
  headers: {
    Authorization: "Bearer " + apiKey,
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore nella risposta del server");
    }
  })
  .then((articols) => {
    console.log("dati ricevuti:", articols);
    const containerProducts = document.getElementById("containerProducts");
    containerProducts.className = "d-flex";
    articols.forEach((product) => {
      // CARD DEI PRODOTTI
      const productCard = document.createElement("div");
      productCard.className = ("card", "w-25", "col");

      productCard.addEventListener("click", (event) => {
        cl(event.target);
      });

      // ARTICOLE IMG
      const articoleImg = document.createElement("img");
      articoleImg.src = product.imageUrl;
      articoleImg.className = "card-img-top w-75";

      // CARD BODY
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      // BRAND
      const brand = document.createElement("h5");
      brand.innerText = `Brand: ${product.brand}`;

      // DATE OF CREATION
      const dateOfCreation = document.createElement("p");
      dateOfCreation.innerText = `Created at: ${new Date(product.createdAt).toLocaleString()}`;

      // DESCRIZIONE DEL PRODOTTO
      const descriptionProduct = document.createElement("p");
      descriptionProduct.innerText = product.description;

      // NOME DEL PRODOTTO
      const productName = document.createElement("h5");
      productName.innerText = product.name;

      // PREZZO
      const price = document.createElement("p");
      price.innerText = `Price: €${product.price}`;

      // ID_PRODUCT
      const idProduct = document.createElement("p");
      idProduct.innerText = `ID: ${product._id}`;

      // DATE OF UPDATE
      const upDitesProduct = document.createElement("p");
      upDitesProduct.innerText = `Updated at: ${new Date(product.updatedAt).toLocaleString()}`;

      // USER ID
      const userId = product.userId;
      h1.innerText = `Welcome User ${userId}`;

      cardBody.appendChild(idProduct);
      cardBody.appendChild(brand);
      cardBody.appendChild(productName);
      cardBody.appendChild(descriptionProduct);
      cardBody.appendChild(price);
      cardBody.appendChild(dateOfCreation);
      cardBody.appendChild(upDitesProduct);

      productCard.appendChild(articoleImg);
      productCard.appendChild(cardBody);

      containerProducts.appendChild(productCard);
    });
  })
  .catch((error) => {
    console.log("Si è verificato un errore!", error);
  });
