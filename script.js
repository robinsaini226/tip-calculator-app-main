"use strict";

const bill = document.querySelector(".input-bill");
const people = document.querySelector(".input-people");
const btn = document.querySelectorAll(".btn-bg");
const custom = document.querySelector(".custom");
const reset = document.querySelector(".reset");
const tipAmount = document.querySelector(".tip-amount");
const total = document.querySelector(".total");
const warning = document.createElement("div");

warning.classList.add("warning");
warning.innerHTML = `<p>⚠ This cannot be zero </p>`;
document.querySelector(".people").prepend(warning);

warning.classList.add("hidden");

const resetF = function () {
  bill.value = 0;
  people.value = 0;
  total.textContent = "0";
  tipAmount.textContent = "0";
  custom.value = 0;
  warning.classList.add("hidden");

};

resetF();

let tipNumber = 0;

//tip calculation
const cal = function () {
  if (bill.value == 0 || people.value == 0 || tipNumber == 0) return;
  const calTip = (bill.value * tipNumber) / 100;
  const totalPerPerson = (Number(bill.value) + calTip) / people.value;
  tipAmount.textContent = `$${calTip.toFixed(2)}`;
  total.textContent = totalPerPerson.toFixed(2);
};
//button event
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {

    tipNumber = parseFloat(btn[i].textContent);
    cal();
  });
}
//number of people input event
people.addEventListener("input", function () {
  if (people.value == 0) {
    console.log("im in");
    warning.classList.remove("hidden");
    console.log(warning);
  } else {
    warning.classList.add("hidden");
    cal();
  }
});
//custom value tip event
custom.addEventListener("input", function (e) {
  tipNumber = Number(custom.value);
  cal();
});

//bill input event
bill.addEventListener('input',function(){
  cal();
})
//reset button event
reset.addEventListener("click", resetF);
