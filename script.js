"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 10000;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  const newButton = document.createElement("button");
  newButton.innerHTML = "Next Page";
  newButton.style.backgroundColor = "purple";
  newButton.style.display = "block";
  newButton.style.margin = "0 auto";
  newButton.style.marginBottom = "5rem";
  newButton.addEventListener("click", function() {
    window.location.href = "new_page.html";
  });
  document.body.appendChild(newButton);
}
function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Aya please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",

    
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `cat-${image}.jpeg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}