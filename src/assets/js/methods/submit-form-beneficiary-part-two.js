import cleanInput from "../input/clean-input.js";
import postDataPartTwo from "./post-data-part-two.js";
import fieldsBeneficiaryPartTwo from "../validations/fields/fields-beneficiary-part-two.js";

export default async function submitFormBeneficiaryPartTwo() {
  this.formData.cep = this.inputCep;
  this.formData.cep = cleanInput(this.formData.cep);

  this.v$.$touch();

  const isFormCorrect = await this.v$.$validate();

  if (isFormCorrect) {
    console.log("formData 2: ", this.formData);
    this.$store.commit("updateFormData", this.formData);
    this.$router.push("/beneficiary-registration-part-three");
    postDataPartTwo(this.formData);
  } else {
    for (const field of fieldsBeneficiaryPartTwo) {
      if (this.v$[field.key].$error) {
        this.$nextTick(() => {
          this.$refs[field.ref].focus();
        });
        break;
      }
    }
  }
}
