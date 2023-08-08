import postDataPartThree from "./post-data-part-three.js";
import fieldsVolunteerPartThree from '../validations/fields/fields-volunteer-part-three.js'

export default async function submitFormVolunteerPartThree() {
  this.formData.motivo = this.inputReason;
  this.formData.experiencia = this.selectHaveExperience;
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
    for (const field of fieldsVolunteerPartThree) {
      if (this.v$[field.key].$error) {
        this.$nextTick(() => {
          this.$refs[field.ref].focus();
        });
        break;
      }
    }
  }
}
