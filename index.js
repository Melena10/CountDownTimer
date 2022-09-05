"use strict";

const buttonStart = document.querySelector("#btn");
const buttonReset = document.querySelector("#btn-reset");
const complete = document.querySelector(".complete");
const titleDate = document.querySelector("#title-date");
const date = document.querySelector("#date");
const input = document.querySelector(".input");
const output = document.querySelector(".output");
const numbers = document.querySelector(".numbers");
const h1 = document.querySelector("h1");

let deadline = "";
let interval;

function countDown() {
  deadline = date.value;

  if (deadline === "") {
    alert("Пожалуйста введите дату");
    return;
  } else if (isNaN(Date.parse(deadline))) {
    alert("Пожалуйста введите корректную дату");
    return;
  }

  h1.textContent = titleDate.value;
  localStorage.setItem("titleTimer", titleDate.value);
  localStorage.setItem("dateTimer", date.value);

  showNextView();
}

function showNextView() {
  buttonStart.classList.add("hide");
  buttonReset.classList.remove("hide");
  input.classList.add("hide");
  output.classList.remove("hide");

  dateCalculation();
  interval = setInterval(dateCalculation, 1000);
}

function dateCalculation() {
  const now = new Date().getTime();
  const diff = new Date(deadline).getTime() - now;

  if (diff < 0) {
    output.classList.add("hide");
    complete.classList.remove("hide");

    clearInterval(interval);
    complete.textContent = `${deadline.textContent} завершился ${deadline}`;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  numbers.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}

function resetCountdown() {
  buttonStart.classList.remove("hide");
  buttonReset.classList.add("hide");
  input.classList.remove("hide");
  output.classList.add("hide");
  complete.classList.add("hide");

  h1.textContent = "Создать новый таймер обратного отсчета";
  titleDate.value = "";
  date.value = "";

  clearInterval(interval);
  localStorage.removeItem("titleTimer");
  localStorage.removeItem("dateTimer");
}

function restoreCountdown() {
  const titleTimer = localStorage.getItem("titleTimer");
  const dateTimer = localStorage.getItem("dateTimer");

  if (!(titleTimer && dateTimer)) {
    return;
  }
  h1.textContent = titleTimer;
  deadline = dateTimer;

  showNextView();
}

buttonStart.addEventListener("click", countDown);
buttonReset.addEventListener("click", resetCountdown);

restoreCountdown();



