import postDataPartFour from "./post-data-part-four.js";
import fieldsHospitalPartFour from '../validations/fields/fields-hospital-part-four.js'

export default async function submitFormHospitalPartFour() {
  this.formData.donationLocal = this.inputDonationLocal;
  this.formData.otherDonationLocal = this.inputOtherDonationLocal;

  this.$store.commit("updateFormData", this.formData);
  console.log("form 4: ", this.formData);

  this.v$.$touch();

  const isFormCorrect = await this.v$.$validate();

  if (isFormCorrect) {
    //To show notification
    this.$store.state.showNotification = true

    this.$store.commit("updateFormData", this.formData);
    
    //postDataPartThree(this.formData);
  } else {
    for (const field of fieldsHospitalPartFour) {
      if (this.v$[field.key].$error) {
        this.$nextTick(() => {
          this.$refs[field.ref].focus();
        });
        break;
      }
    }
  }
}
