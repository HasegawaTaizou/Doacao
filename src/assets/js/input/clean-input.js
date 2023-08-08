"use strict";

export default function cleanInput(input) {
  return input.replace(/[^0-9]/g, "");
}
