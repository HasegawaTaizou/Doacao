import cleanInput from "../input/clean-input.js";
import cleanBirthDate from "../input/clean-birth-date.js";

export default function dataPartThree(formData) {
  return {
    selectHaveExperience: formData.experiencia,
    inputReason: formData.motivo,
    formData: {
      nome_completo: formData.nome_completo,
      foto: formData.foto,
      data_nascimento: cleanBirthDate(formData.data_nascimento),
      limitacao_fisica: formData.limitacao_fisica,
      rg: cleanInput(formData.rg),
      cpf: cleanInput(formData.cpf),
      telefone: cleanInput(formData.telefone),
      email: formData.email,
      cep: cleanInput(formData.cep),
      motivo: "",
      experiencia: "",
    },
  };
}
