import axios from "axios";
import { BASE_URL } from "../config.js";
import router from "../../../router/index.js";

export default function postData(formData) {
  const insertHospitalData = {
    hospital: {
      name: formData.name,
      cnpj: formData.cnpj,
      email: formData.email,
      phone: formData.phone,
      website: formData.url,
      donationSite: formData.donationLocal,
      otherDonationSite: formData.otherDonationLocal,
      photo: formData.photo,
      password: formData.password,
    },
    address: {
      cep: formData.cep,
      uf: formData.uf,
      city: formData.city,
      neighborhood: formData.neighborhood,
      street: formData.road,
      number: formData.number,
      complement: formData.complement,
    },
  };

  console.log(router);
  console.log(insertHospitalData);
  axios
    .post(`${BASE_URL}/hospital-registration`, insertHospitalData)
    .then((response) => {
      router.push('/login');
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
