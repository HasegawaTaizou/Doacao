import { required, email, minLength } from "@vuelidate/validators";

export default function validationsHospitalPartOne() {
  return {
    inputName: { required },
    inputCNPJ: { required, minLength: minLength(15) },
    inputEmail: { required },
    inputPhone: { required, minLength: minLength(15) },
    inputURL: { required, minLength: minLength(15) },
  };
}
