export default function dataFormPartTwo(formData) {
  return {
    inputCep: formData.cep,
    inputNumber: formData.number,
    formData: {
      cep: formData.cep,
      road: formData.road,
      neighborhood: formData.neighborhood,
      complement: formData.complement,
      number: formData.number,
      uf: formData.uf,
      city: formData.city,
    },
  };
}
