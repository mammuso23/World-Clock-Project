setInterval(updateLondonTime, 1000);
function updateLondonTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM D YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}

function updateHawaiiTime() {
  let hawaiiElement = document.querySelector("#hawaii");
  let hawaiiDateElement = hawaiiElement.querySelector(".date");
  let hawaiiTimeElement = hawaiiElement.querySelector(".time");
  let hawaiiTime = moment().tz("Pacific/Honolulu");

  hawaiiDateElement.innerHTML = hawaiiTime.format("MMMM D YYYY");
  hawaiiTimeElement.innerHTML = hawaiiTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}

setInterval(updateHawaiiTime, 1000);

setInterval(updateTokyoTime, 1000);
function updateTokyoTime() {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM D YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss[<small>]A[</small>]");
}

setInterval(updateSydneyTime, 1000);
function updateSydneyTime() {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM D YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}
