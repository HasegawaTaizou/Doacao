export default function dataPartFour(formData) {
  
  return {
    isSelectedImage: formData.isSelectedImage,
    downloadURL: formData.photo,
    inputPassword: formData.password,
    //Show Password
    isShowPassword: false,
    isShowPasswordConfirmation: false,
    
    formData: {
      // Hospital General Data
      photo: formData.photo,
      name: formData.name,
      cnpj: formData.cnpj,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      url: formData.url,

      // Address Data
      cep: formData.cep,
      road: formData.road,
      neighborhood: formData.neighborhood,
      complement: formData.complement,
      number: formData.number,
      uf: formData.uf,
      city: formData.city,

      // Donation Local Data
      donationLocal: formData.donationLocal,
      otherDonationLocal: formData.otherDonationLocal,
    },
  };
}
