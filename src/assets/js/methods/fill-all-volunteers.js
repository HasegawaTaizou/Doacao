import axios from "axios";

export default function fillAllVolunteers() {
  axios
    .get(`http://127.0.0.1:8080/v6/green-world/todos_voluntarios`)
    .then((response) => {
      console.log(response.data.status);
      this.volunteers = response.data.status;
    })
    .catch((error) => {
      console.error(error);
    });
}
