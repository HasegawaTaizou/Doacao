export default function cleanBirthDate(birthDate) {
  const parts = birthDate.split("/");
  const day = parts[0].padStart(2, "0");
  const month = parts[1].padStart(2, "0");
  const year = parts[2].padStart(4, "0");
  const formatedBirthDate = `${year}-${month}-${day}`;
  return formatedBirthDate;
}
