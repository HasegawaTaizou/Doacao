import axios from "axios";

export default function sendEmail(formData) {
  const emailData = {
    title: "Cadastro Realizado com sucesso!",
    email: formData.email,
    body: "Aguarde para sua requisição ser analisada pelo administrador",
  };

  axios
    .post("http://127.0.0.1:8080/v2/emailsend", emailData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
