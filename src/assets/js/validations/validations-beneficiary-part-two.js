import { required, minLength } from "@vuelidate/validators";

export default function validationsBeneficiaryPartOne() {
  return {
    inputCep: { required, minLength: minLength(9) },
  };
}
