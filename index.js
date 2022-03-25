import "./styles.css";

fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("bg-author").textContent = `By: ${data.user.name}`;
    document.body.style.backgroundImage = `url(${data.urls.small})`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1544084944-15269ec7b5a0?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDgwOTk4Nzg&ixlib=rb-1.2.1&q=85)`;
  });

fetch(
  "https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=14&interval=daily"
)
  .then((res) => res.json())
  .then((data) => console.log(data));
