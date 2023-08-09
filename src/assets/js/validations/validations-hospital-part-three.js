import { required, minLength } from "@vuelidate/validators";

export default function validationsHospitalPartThree() {
  return {
    inputDonationLocal: { required, minLength: minLength(15) },
  };
}
