let btn = document.getElementById("check-btn");
let about_block = document.querySelector(".about-block");
let name_txt = document.getElementById("name");
let week_txt = document.getElementById("week");
let life_per_txt = document.getElementById("life_per");
let day_txt = document.getElementById("day");
let season_txt = document.getElementById("season");
let sleep_txt = document.getElementById("sleep");
let thought_txt = document.getElementById("thought");

// input blocks
let name_inp = document.getElementById("name-inp");
let date_inp = document.getElementById("date-inp");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (name_inp.value == "") {
    name_inp.placeholder = "Please enter your name!";
    name_inp.style.borderBottom = "2px solid red";
  } else if (date_inp.value == "") {
    date_inp.style.borderBottom = "2px solid red";
  } else {

    // for date value
    const selectDate = new Date(date_inp.value);
    let year = selectDate.getFullYear();
    let month = selectDate.getMonth() + 1;
    let day = selectDate.getDate();

    // Get current date
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    // Calculate age, days, weeks
    let age = currentYear - year;
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
      age--;
    }
    let daysLived =
      age * 365.25 + (currentMonth - month) * 30.75 + (currentDay - day);
    let weeksLived = Math.floor(daysLived / 7);

    // week candles

    const weekCandles_block = document.getElementById("week-candles-block");

    const totalWeeks = 100 * 52;

    weekCandles_block.innerHTML = "";

    for (let i = 0; i < totalWeeks; i++) {
      let div = document.createElement("div");
      div.classList.add("week_candles");

      if (i < weeksLived) {
        div.classList.add("past");
      } else {
        div.classList.add("future");
      }

      weekCandles_block.appendChild(div);
    }

    // Display text
    name_txt.innerText = name_inp.value;
    week_txt.innerText = weeksLived.toLocaleString();
    life_per_txt.textContent = (age / 100) * 100 + "%";
    day_txt.textContent = daysLived.toLocaleString();
    season_txt.textContent = (age * 2).toLocaleString();
    sleep_txt.textContent = Math.round((daysLived * 7)).toLocaleString();
    thought_txt.textContent = (60000 * daysLived).toLocaleString();

    name_inp.value = "";
    date_inp.value = "";

    about_block.classList.add("active");
  }
});

