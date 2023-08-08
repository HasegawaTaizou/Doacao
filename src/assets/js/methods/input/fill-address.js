import axios from "axios";

export default function fillAdrress() {
    
  //Remove the "-" from CEP input
  this.formData.cep = this.formData.cep.replace("-", "");

  axios
    .get(`https://viacep.com.br/ws/${this.formData.cep}/json/`)
    .then((response) => {
      this.formData.logradouro = response.data.logradouro;
      this.formData.bairro = response.data.bairro;
      this.formData.complemento = response.data.complemento;
      this.formData.estado = response.data.uf;
      this.formData.cidade = response.data.localidade;
    })
    .catch((error) => {
      console.error(error);
    });
}
