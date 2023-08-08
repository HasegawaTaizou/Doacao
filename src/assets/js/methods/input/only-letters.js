export default function onlyLetters(input) {
  input = input.replace(/[^a-zA-Z\s]/g, "");
  return input;
}

