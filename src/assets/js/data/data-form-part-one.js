export default function dataPartOne(formData) {
  return {
    isSelectedImage: formData.isSelectedImage,
    downloadURL: formData.foto,
    inputFullName: formData.nome_completo,
    inputDateBirth: formData.data_nascimento,
    inputRg: formData.rg,
    inputCpf: formData.cpf,
    selectPhysicalLimitation: formData.limitacao_fisica,
    inputPhone: formData.telefone,
    inputEmail: formData.email,
    formData: {
      foto: formData.foto,
      nome_completo: formData.nome_completo,
      data_nascimento: formData.data_nascimento,
      rg: formData.rg,
      cpf: formData.cpf,
      telefone: formData.telefone,
      email: formData.email,
      limitacao_fisica: formData.limitacao_fisica,
    },
    notificationStatus: false
  };
}
