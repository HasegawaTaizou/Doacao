import { required } from "@vuelidate/validators";

export default function validationsBeneficiaryPartThree() {
  return {
    inputAmountResidents: { required },
    inputFamilyIncome: { required },
    // selectTypeResidence: { required },
    inputSquareMetersResidence: { required },
  };
}
