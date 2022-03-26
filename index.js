fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=space"
)
  .then((res) => res.json())
  .then((data) => {
    document.getElementById(
      "bg-author"
    ).textContent = `background: ${data.user.name}`;
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1544084944-15269ec7b5a0?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDgwOTk4Nzg&ixlib=rb-1.2.1&q=85)`;
  });

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("crypto fetch error");
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
    <p>⏫: ${data.market_data.high_24h.usd}</p>
    <p>⏬: ${data.market_data.low_24h.usd}</p>
    `;
  })
  .catch((err) => {
    document.getElementById("crypto-top").innerHTML = `
    Crypto data not available`;
    console.error(err);
  });

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

navigator.geolocation.getCurrentPosition((position) => {
  const p = position;
  console.log(p);
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${p.coords.latitude}&lon=${p.coords.longitude}&units=imperial`
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Weather data not available");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data.weather[0].icon);
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById("weather").innerHTML = `
       <div id="weather-top">
       <img src=${iconUrl} alt="weather"></img>
       <p id="weather-temp">${Math.round(data.main.temp)}&deg;F</p>
       </div>
       <p id="weather-city">${data.name}</p>
       
      `;
    })
    .catch((err) => {
      document.getElementById("weather").innerHTML = `
        Weather Data Not Available
      `;
      console.log(err);
    });
});
