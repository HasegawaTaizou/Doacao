import postDataPartFour from "./post-data-part-four.js";
import fieldsHospitalPartFour from "../validations/fields/fields-hospital-part-four.js";
import isPasswordSame from "./input/is-password-same.js";

export default async function submitFormHospitalPartFour() {
  this.formData.password = this.inputPassword
  this.formData.photo = this.downloadURL

  this.$store.commit("updateFormData", this.formData);
  console.log("form 4: ", this.formData);

  this.v$.$touch();

  const isFormCorrect = await this.v$.$validate();

  const isPasswordTheSame = isPasswordSame(
    this.inputPassword,
    this.inputPasswordConfirmation
  );

  if (!isPasswordTheSame) {
    this.$store.commit("SET_IS_PASSWORD_SAME", false);
  }

  if (isFormCorrect && isPasswordTheSame) {
    //To show notification
    this.$store.state.showNotification = true;

    this.$store.commit("updateFormData", this.formData);

    postDataPartFour(this.formData);
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
