export default function filteredVolunteersApproved() {
  return this.volunteers.filter((volunteer) => {
    if (volunteer.id_status_cadastro == 2) {
      return true;
    }
    return false;
  });
}
