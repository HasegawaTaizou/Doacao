import cleanInput from "../input/clean-input.js";

export default function dataPartThree(formData) {
  return {
    inputDonationLocal: formData.donationLocal,
    inputOtherDonationLocal: formData.otherDonationLocal,
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
      state: formData.state,
      city: formData.city,

      // Donation Local Data
      donationLocal: formData.donationLocal,
      otherDonationLocal: formData.otherDonationLocal,
    },
  };
}
