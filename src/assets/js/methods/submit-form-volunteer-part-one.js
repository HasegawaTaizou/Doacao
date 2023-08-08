import cleanInput from "../input/clean-input.js";
import fieldsVolunteerPartOne from '../validations/fields/fields-volunteer-part-one.js'

export default async function submitFormVolunteerPartOne() {
  this.formData.foto = this.downloadURL;
  this.formData.nome_completo = this.inputFullName;
  this.formData.data_nascimento = this.inputDateBirth;
  this.formData.rg = this.inputRg;
  this.formData.cpf = this.inputCpf;
  this.formData.limitacao_fisica = this.selectPhysicalLimitation;
  this.formData.telefone = this.inputPhone;
  this.formData.email = this.inputEmail;

  this.formData.cpf = cleanInput(this.formData.cpf)

  // this.notificationStatus = true
  // console.log('notification: ', this.notificationStatus);

  console.log(this.formData);

  this.v$.$touch();

  // this.updateNotificationStatus(true);

  const isFormCorrect = await this.v$.$validate();

  if (isFormCorrect) {
    this.$store.commit("updateFormData", this.formData);
    this.$router.push("/volunteer-registration-part-two");
  } else {
    for (const field of fieldsVolunteerPartOne) {
      if (this.v$[field.key].$error) {
        this.$nextTick(() => {
          this.$refs[field.ref].focus();
        });
        break;
      }
    }
  }
}