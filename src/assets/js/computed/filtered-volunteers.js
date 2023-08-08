export default function filteredVolunteers() {
  return this.volunteers.filter((volunteer) => {
    if (volunteer.id_status_cadastro == 1) {
      return true;
    }
    return false;
  });
}
