export default function filteredBeneficiariesApproved() {
  return this.beneficiaries.filter((beneficiary) => {
    if (beneficiary.id_status_cadastro == 2) {
      return true;
    }
    return false;
  });
}
