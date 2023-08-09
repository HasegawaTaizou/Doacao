import axios from "axios";

export default function fillAdrress() {
    
  //Remove the "-" from CEP input
  this.formData.cep = this.formData.cep.replace("-", "");

  axios
    .get(`https://viacep.com.br/ws/${this.formData.cep}/json/`)
    .then((response) => {
      this.formData.road = response.data.logradouro;
      this.formData.neighborhood = response.data.bairro;
      this.formData.complement = response.data.complemento;
      this.formData.state = response.data.uf;
      this.formData.city = response.data.localidade;
    })
    .catch((error) => {
      console.error(error);
    });
}
