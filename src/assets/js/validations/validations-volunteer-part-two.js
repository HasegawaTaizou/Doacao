import { required, minLength } from "@vuelidate/validators";

export default function validationsVolunteerPartOne() {
  return {
    inputCep: { required, minLength: minLength(9) },
  };
}
