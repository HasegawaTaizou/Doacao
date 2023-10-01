import { required, minLength } from "@vuelidate/validators";

export default function validationsHospitalPartFour() {
  return {
    inputPassword: { required, minLength: minLength(8) },
    inputPasswordConfirmation: { required, minLength: minLength(8) },
  };
}
