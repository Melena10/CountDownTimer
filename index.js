"use strict";

const title = document.querySelector("#title-date");
const date = document.querySelector("#date");

const buttonStart = document.querySelector("#btn");
const buttonReset = document.querySelector("#btn-reset");

const numbers = document.querySelector(".numbers");
const timeLabels = document.querySelector(".time-labels");
const h1 = document.querySelector("h1");

const input = document.querySelector(".input");
const output = document.querySelector(".output");

buttonStart.addEventListener("click", countDown);

function countDown() {
  let newData = date.value;
  if (newData !== "") {
    let newTitle = h1.textContent = title.value;

    console.log(newData);
    console.log(newTitle);

    input.classList.add("hide");
    output.classList.remove("hide");

    buttonStart.add("hide");
    buttonReset.remove("hide");

  } else {
    alert("Пожалуйста, введите дату");
  }
}
