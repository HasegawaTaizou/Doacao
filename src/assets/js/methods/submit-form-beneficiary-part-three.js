import postDataBeneficiaryPartThree from "./post-data-beneficiary-part-three.js";
import fieldsBeneficiaryPartThree from "../validations/fields/fields-beneficiary-part-three.js";

export default async function submitFormBeneficiaryPartThree() {
  this.formData.quantidade_moradores = this.inputAmountResidents;
  this.formData.renda = this.inputFamilyIncome;
  // this.formData.typeResidence = this.selectTypeResidence;
  this.formData.metros_quadrados = this.inputSquareMetersResidence;
  this.formData.observacao = this.textareaComments;

  this.$store.commit("updateFormData", this.formData);

  this.v$.$touch();

  const isFormCorrect = await this.v$.$validate();

  console.log("form 3: ", this.formData);

  if (isFormCorrect) {
    //To show notification
    console.log('correto: ', this.$store.state.showNotification);
    this.$store.state.showNotification = true;
    console.log('correto: ', this.$store.state.showNotification);

    this.$store.commit("updateFormData", this.formData);
    postDataBeneficiaryPartThree(this.formData);
  } else {
    for (const field of fieldsBeneficiaryPartThree) {
      if (this.v$[field.key].$error) {
        this.$nextTick(() => {
          this.$refs[field.ref].focus();
        });
        break;
      }
    }
  }
}
