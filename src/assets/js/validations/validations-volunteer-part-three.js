import { required } from "@vuelidate/validators";

export default function validationsVolunteerPartThree() {
  return {
    selectHaveExperience: { required },
    inputReason: { required },
  };
}
