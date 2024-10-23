function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM D YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
  //Hawaii
  let hawaiiElement = document.querySelector("#hawaii");
  if (hawaiiElement) {
    let hawaiiDateElement = hawaiiElement.querySelector(".date");
    let hawaiiTimeElement = hawaiiElement.querySelector(".time");
    let hawaiiTime = moment().tz("Pacific/Honolulu");

    hawaiiDateElement.innerHTML = hawaiiTime.format("MMMM D YYYY");
    hawaiiTimeElement.innerHTML = hawaiiTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM D YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM D YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  if (cityTimeZone) {
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");

    citiesElement.innerHTML = `<div class="city"><div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>`;
  }
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
