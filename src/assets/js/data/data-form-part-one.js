export default function dataPartOne(formData) {
  return {
    isSelectedImage: formData.isSelectedImage,
    downloadURL: formData.photo,
    inputName: formData.name,
    inputCNPJ: formData.cnpj,
    inputEmail: formData.email,
    inputPhone: formData.phone,
    inputPassword: formData.password,
    inputURL: formData.url,
    formData: {
      photo: formData.photo,
      name: formData.name,
      cnpj: formData.cnpj,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      url: formData.url,
    },
    notificationStatus: false,
  };
}
