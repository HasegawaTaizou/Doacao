import axios from "axios";

export default function fillAllBeneficiaries() {
  axios
    .get(`http://127.0.0.1:8080/v6/green-world/get_all_beneficiados`)
    .then((response) => {
      console.log(response.data.data[1]);
      this.beneficiaries = response.data.data[1];
    })
    .catch((error) => {
      console.error(error);
    });
}
