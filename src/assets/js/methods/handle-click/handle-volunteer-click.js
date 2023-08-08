export default function handleVolunteerClick(item) {
  this.$store.commit("updateVolunteerCpf", item.cpf);
  console.log(item.cpf);
}
