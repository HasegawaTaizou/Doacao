import axios from "axios";
import sendEmail from './send-email.js'

export default function postData(formData) {
  // Enviar dados para o servidor
  axios
    .post("http://127.0.0.1:8080/v4/green-world/inserir_beneficiado", formData)
    .then((response) => {
      // Manipular a resposta do servidor
      console.log(response.data);

      // sendEmail(formData)
    })
    .catch((error) => {
      // Tratar erros na requisição
      console.error(error);
    });
}
