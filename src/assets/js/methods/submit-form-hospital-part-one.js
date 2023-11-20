import fieldsHospitalPartOne from '../validations/fields/fields-hospital-part-one.js'

export default async function submitFormHospitalPartOne() {
  this.formData.photo = this.downloadURL;
  this.formData.name = this.inputName;
  this.formData.cnpj = this.inputCNPJ;
  this.formData.email = this.inputEmail;
  this.formData.phone = this.inputPhone;
  this.formData.password = this.inputPassword;
  this.formData.url = this.inputURL;
 
  this.v$.$touch();

  const isFormCorrect = await this.v$.$validate();

  if (isFormCorrect) {
    this.$store.commit("updateFormData", this.formData);
    this.$router.push("/hospital-registration-part-two");
  } else {
    for (const field of fieldsHospitalPartOne) {
      if (this.v$[field.key].$error) {
        this.$nextTick(() => {
          this.$refs[field.ref].focus();
        });
        break;
      }
    }
  }
}