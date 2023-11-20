import cleanInput from "../input/clean-input.js";
import fieldsHospitalPartTwo from '../validations/fields/fields-hospital-part-two.js'

export default async function submitFormHospitalPartTwo() {
  this.formData.cep = this.inputCep;
  this.formData.cep = cleanInput(this.formData.cep);
  this.formData.number = this.inputNumber.toString();

  this.v$.$touch();

  const isFormCorrect = await this.v$.$validate();

  if (isFormCorrect) {
    this.$store.commit("updateFormData", this.formData);
    this.$router.push("/hospital-registration-part-three");
  } else {
    for (const field of fieldsHospitalPartTwo) {
      if (this.v$[field.key].$error) {
        this.$nextTick(() => {
          this.$refs[field.ref].focus();
        });
        break;
      }
    }
  }
}
