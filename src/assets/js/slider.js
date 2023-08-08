"use strict";

let slideIndexImages1 = 0;
let slideIndexImages2 = 0;

export default function showSlidesImages() {
  let i;
  let slides1 = document.getElementsByClassName("who-we-are__image");
  let slides2 = document.getElementsByClassName("our-cause__image");

  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }

  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }

  slideIndexImages1++;
  slideIndexImages2++;

  if (slideIndexImages1 > slides1.length) {
    slideIndexImages1 = 1;
  }

  if (slideIndexImages2 > slides2.length) {
    slideIndexImages2 = 1;
  }

  slides1[slideIndexImages1 - 1].style.display = "block";
  slides2[slideIndexImages2 - 1].style.display = "block";

  setTimeout(showSlidesImages, 2000);
}
