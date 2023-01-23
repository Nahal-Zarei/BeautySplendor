// let products = null;
// const cardContainer = document.querySelector(".cardContainer");
// const apiKey = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "157a6943f7msh9bfa7cf178f7e6bp1208b8jsn775019900125",
//     "X-RapidAPI-Host": "sephora.p.rapidapi.com",
//   },
// };

// // Fetch products
// fetchProducts();
// async function fetchProducts() {
//   const res = await fetch("https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=60&currentPage=1", apiKey);
//   const data = await res.json();
//   console.log(data);
//   products = data.products;
//   console.log(products);
//   renderProducts(products);
// }

// // Render products
// function renderProducts(data) {
//   const cards = document.createElement("div");
//   cards.classList.add("cards");
//   data.forEach((item) => {
//     const makingCard = `
//     <div class="arrival-card">
//       <div class="card" style="width: 18rem;">
//         <img class="card-img-top" src="${item.image135}" alt="${item.displayName}">
//         <div class="card-body">
//           <h5 class="card-title">${item.displayName.length > 30 ? item.displayName.substring(0, 25) : item.displayName}</h5>
//           <p class="card-text">Rate : ${item.rating}</p>
//         </div>
//       </div>
//     </div>`;
//     cards.innerHTML += makingCard;
//   });
//   cardContainer.appendChild(cards);
// }

