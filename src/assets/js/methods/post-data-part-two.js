import axios from "axios";

export default function postData(formData) {
  // Enviar dados para o servidor
  axios
    .post("http://127.0.0.1:8080/v1/green-world/cheek_endereco_no_banco", formData)
    .then((response) => {
      // Manipular a resposta do servidor
      console.log(response.data);
    })
    .catch((error) => {
      // Tratar erros na requisição
      console.error(error);
    });
}
