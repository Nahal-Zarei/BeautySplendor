let news = null;
const container = document.querySelector(".container")
const searchInput = document.querySelector("input");

fetchNews();
async function fetchNews() {
  const res = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-12-23&sortBy=publishedAt&apiKey=e3fe62d87d124fe18dc8b31637ef7cd5");
  const data = await res.json();
  console.log(data);
  news = data.articles;
  console.log(news.slice(0,30))
  renderNews(news);
}

function renderNews(data) {
    const cards = document.createElement("div");
    cards.classList.add("cards");
    console.log(cards)
    data.slice(0,30).forEach((item) => {
        const makingCard = `
        <div class="news-card">
            <div class="card" style="width: 65rem;">
                <img class="card-img-top" src="${item.urlToImage}" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <P>${item.content}</P>
                    <p class="card-text">Author : ${item.author}</p>
                    <p>${item.publishedAt}</p>
                </div>
            </div>
        </div>`;
        cards.innerHTML += makingCard;
    });
    container.appendChild(cards);
  }
  
  // Live search 
function liveSearch(data, value) {
    const cards = document.querySelector(".cards");
    if (value) {
      cards && cards.remove();
      const filterNews = data.filter(
        ({ title, content }) =>
        title.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        content.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
      renderNews(filterNews);
    } else {
      cards && cards.remove();
      renderNews(episodes);
    }
  }

searchInput.addEventListener("input", (e) => {
    liveSearch(news, e.target.value)
}) 