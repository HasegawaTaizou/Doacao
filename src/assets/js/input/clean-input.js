"use strict";

//Removes anything that is not a number from the string
export default function cleanInput(input) {
  return input.replace(/[^0-9]/g, "");
}
