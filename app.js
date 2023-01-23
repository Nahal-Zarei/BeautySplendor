// Fixed Header 
// window.onscroll = function() {fixHeaderfunction()};

// let header = document.getElementById("header");
// let stickyHeader = header.offsetTop;

// function fixHeaderfunction() {
//   if (window.pageYOffset > stickyHeader) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

// Reading progress bar
function updateProgressBar (){
  const {scrollTop, scrollHeight} = document.documentElement;
  const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + "%";
  document.querySelector("#progress-bar").style.setProperty("--progress", scrollPercent);
}

document.addEventListener("scroll", updateProgressBar);

// Burger menu
// document.querySelector(".ham").addEventListener("click", function(){
//   document.querySelector(".q").classList.toggle("a");
//   document.querySelector(".w").classList.toggle("b");
//   document.querySelector(".e").classList.toggle("c");
// });

// function burgerclick(){
//   document.querySelector(".header-list").classList.toggle("show");
// }


// NewsLetter Elements
const newsLetterButton = document.querySelector(".subscribe-button")
const newsLetterInput = document.querySelector(".newsletter-signin input")
const newsletterDiv = document.querySelector(".newsletter-signin div")
// link the button to input 
newsLetterButton.addEventListener("click", () => {
  if (newsLetterInput.value){
      popUp.classList.add("open-popup");
    }else{
      blankInputPopup.classList.add("open-popup");
  }
})
// Making popups
const popUp = document.createElement("div");
popUp.classList.add("popup");
popUp.innerHTML = `
  <img src="https://img.icons8.com/glyph-neue/128/927fbf/ok--v1.png"/>
  <h2>Thank You!</h2>
  <p>Your email has been successfully submited. Thanks!</p>`;
newsletterDiv.appendChild(popUp);
// Making popup button
const subscribeButton = document.createElement("button")
subscribeButton.innerText = "OK";
subscribeButton.classList.add("subscribe");
popUp.appendChild(subscribeButton);

subscribeButton.addEventListener("click", () => {
  popUp.classList.remove("open-popup")
})

// Making blank input popup
const blankInputPopup =  document.createElement("div");
blankInputPopup.classList.add("popup");
blankInputPopup.innerHTML = `
  <img src="https://img.icons8.com/glyph-neue/64/927fbf/xbox-x.png"/> 
  <h2>Oh No!</h2>
  <p>Your email can't be bkank, Please fill it up. Thanks!</p>`;
newsletterDiv.appendChild(blankInputPopup);
// Making blank input popup button
const subscribeButton2 = document.createElement("button")
subscribeButton2.innerText = "OK";
subscribeButton2.classList.add("subscribe");
blankInputPopup.appendChild(subscribeButton2);

subscribeButton.addEventListener("click", () => {
  popUp.classList.remove("open-popup")
})
subscribeButton2.addEventListener("click", () => {
  blankInputPopup.classList.remove("open-popup")
})

// New arrival items
let products = null;
const arrivalContainer = document.querySelector(".newArrival-container");
const apiKey = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "157a6943f7msh9bfa7cf178f7e6bp1208b8jsn775019900125",
    "X-RapidAPI-Host": "sephora.p.rapidapi.com",
  },
};

// Fetch products
fetchProducts();
async function fetchProducts() {
  const res = await fetch("https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=60&currentPage=1", apiKey);
  const data = await res.json();
  // console.log(data);
  products = data.products;
  // console.log(products);
  renderProducts(products);
}

// Render products
function renderProducts(data) {
  const cards = document.createElement("div");
  cards.classList.add("cards");
  data.slice(0,4).forEach((item) => {
    const makingCard = `
    <div class="arrival-card">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${item.image135}" alt="${item.displayName}">
        <div class="card-body">
          <h5 class="card-title">${item.displayName.length > 30 ? item.displayName.substring(0, 20) : item.displayName}</h5>
          <p class="card-text">Rate : ${item.rating}</p>
        </div>
      </div>
    </div>`;
    cards.innerHTML += makingCard;
  });
  arrivalContainer.appendChild(cards);
}
