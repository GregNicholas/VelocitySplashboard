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

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => {
    if (!res.ok) {
      // notify content not available in crypto
      throw Error("Something went wrong");
    }
    console.log(res.status);
    return res.json();
  })
  .then((data) => {
    document.getElementById(
      "crypto-top"
    ).innerHTML = `<img id="crypto-image" src="${data.image.small} alt="crypto logo" /> <span id="crypto-name">${data.name}</span>`;

    document.getElementById("crypto").innerHTML += `
    <p>💰: ${data.market_data.current_price.usd}</p>
    <p>👆: ${data.market_data.high_24h.usd}</p>
    <p>👇: ${data.market_data.low_24h.usd}</p>
    `;
  })
  .catch((err) => console.error(err));

const getCurrentTime = () => {
  const time = new Date();
  document.getElementById("time").textContent = time.toLocaleTimeString(
    "en-us",
    {
      timeStyle: "medium"
    }
  );
};

setInterval(getCurrentTime, 1000);