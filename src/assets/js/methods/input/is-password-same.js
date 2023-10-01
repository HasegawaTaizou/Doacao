"use strict";

export default function isPasswordSame(password, passwordConfirmation) {
  if (password == passwordConfirmation) {
    return true;
  } else {
    return false;
  }
}
