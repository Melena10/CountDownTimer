"use strict";

const titleDate = document.querySelector("#title-date");
const date = document.querySelector("#date");

const buttonStart = document.querySelector("#btn");
const buttonReset = document.querySelector("#btn-reset");

const numbers = document.querySelector(".numbers");
const complete = document.querySelector(".complete");
const timeLabels = document.querySelector(".time-labels");
const h1 = document.querySelector("h1");

const input = document.querySelector(".input");
const output = document.querySelector(".output");

const daysBlock = document.querySelector(".timer_days");
const hoursBlock = document.querySelector(".timer_hours");
const minutesBlock = document.querySelector(".timer_mins");
const secondsBlock = document.querySelector(".timer_secs");

let timerId = null;
let deadline;
let newTitle;

function countDown() {
  deadline = new Date(date.value);
  const now = new Date();

  let diff = deadline.getTime() - now.getTime();

let days = Math.floor(diff/(1000*60*60*24));
let hours = Math.floor((diff/(1000*60*60))%24);
let minutes = Math.floor((diff/(1000*60))%60);
let seconds = Math.floor((diff/1000)%60);

daysBlock.innerText = days;
hoursBlock.innerText = hours < 10 ? '0'+ hours: hours;
minutesBlock.innerText = minutes < 10 ? '0'+ minutes: minutes;
secondsBlock.innerText = seconds < 10 ? '0'+ seconds: seconds;


  if (deadline !== "") {
  
      if (diff <= 0) {

      complete.classList.remove('hide');
      complete.textContent = `${titleDate.value} завершился ${deadline}`
      clearInterval(timerId);
            return;
  }
  
  timeLabels.textContent = `${'Days'} : ${ ' Hours ' } : ${'Mins'} : ${'Secs'}`;
  numbers.textContent = `${days}:${hours}:${minutes}:${seconds}`

  newTitle = h1.textContent = titleDate.value;

    input.classList.add("hide");
    output.classList.remove("hide");

    buttonStart.classList.add("hide");
    buttonReset.classList.remove("hide");

  } else {
    alert("Пожалуйста, введите дату");
  }
}


buttonStart.addEventListener("click", function() {
  countDown();

timerId = setInterval(countDown, 1000);
});