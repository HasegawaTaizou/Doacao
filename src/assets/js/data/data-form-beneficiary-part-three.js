import cleanInput from "../input/clean-input.js";
import cleanBirthDate from "../input/clean-birth-date.js";

export default function dataPartThree(formData) {
  return {
    inputAmountResidents: formData.quantidade_moradores,
    inputFamilyIncome: formData.renda,
    // selectTypeResidence: formData.typeResidence,
    inputSquareMetersResidence: formData.metros_quadrados,
    textareaComments: formData.observacao,
    formData: {
      nome_completo: formData.nome_completo,
      foto: formData.foto,
      data_nascimento: cleanBirthDate(formData.data_nascimento),
      rg: cleanInput(formData.rg),
      cpf: cleanInput(formData.cpf),
      telefone: cleanInput(formData.telefone),
      email: formData.email,
      cep: cleanInput(formData.cep),
      observacao: formData.observacao,
      renda: formData.renda,
      quantidade_moradores: formData.quantidade_moradores,
      metros_quadrados: formData.metros_quadrados,
      id_tipo_moradia: 1,
    },
  };
}
