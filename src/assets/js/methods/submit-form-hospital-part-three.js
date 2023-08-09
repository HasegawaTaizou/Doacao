import postDataPartThree from "./post-data-part-three.js";
import fieldsHospitalPartThree from '../validations/fields/fields-hospital-part-three.js'

export default async function submitFormHospitalPartThree() {
  // this.formData.experiencia = this.selectHaveExperience;
  this.$store.commit("updateFormData", this.formData);
  console.log("form 3: ", this.formData);

  this.v$.$touch();

  const isFormCorrect = await this.v$.$validate();

  if (isFormCorrect) {
    //To show notification
    this.$store.state.showNotification = true

    this.$store.commit("updateFormData", this.formData);
    postDataPartThree(this.formData);
  } else {
    for (const field of fieldsHospitalPartThree) {
      if (this.v$[field.key].$error) {
        this.$nextTick(() => {
          this.$refs[field.ref].focus();
        });
        break;
      }
    }
  }
}
