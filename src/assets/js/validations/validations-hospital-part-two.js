import { required, minLength } from "@vuelidate/validators";

export default function validationsHospitalPartTwo() {
  return {
    inputCep: { required, minLength: minLength(9) },
    inputNumber: { required },
  };
}
