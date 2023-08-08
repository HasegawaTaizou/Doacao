import cleanInput from "../input/clean-input.js";
import fieldsBeneficiaryPartOne from '../validations/fields/fields-beneficiary-part-one.js'

export default async function submitFormBeneficiaryPartOne() {
  this.formData.foto = this.downloadURL;
  this.formData.nome_completo = this.inputFullName;
  this.formData.data_nascimento = this.inputDateBirth;
  this.formData.rg = this.inputRg;
  this.formData.cpf = this.inputCpf;
  this.formData.telefone = this.inputPhone;
  this.formData.email = this.inputEmail;

  this.formData.cpf = cleanInput(this.formData.cpf)

  console.log(this.formData);

  this.v$.$touch();

  const isFormCorrect = await this.v$.$validate();

  if (isFormCorrect) {
    this.$store.commit("updateFormData", this.formData);
    this.$router.push("/beneficiary-registration-part-two");
  } else {
    for (const field of fieldsBeneficiaryPartOne) {
      if (this.v$[field.key].$error) {
        this.$nextTick(() => {
          this.$refs[field.ref].focus();
        });
        break;
      }
    }
  }
}