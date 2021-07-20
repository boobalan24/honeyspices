"use strict";
const msgBox = document.querySelector(".msg-box");
const msgLabel = document.querySelector(".label-char");

msgBox.addEventListener("keyup", function () {
  let char = 280;
  let currentChar = msgBox.value.length;
  let currentTotal = char - currentChar;
  msgLabel.innerText = `(${currentTotal} Characters Left)`;
});
