export default function filteredBeneficiaries() {
  return this.beneficiaries.filter((beneficiary) => {
    if (beneficiary.id_status_cadastro == 1) {
      return true;
    }
    return false;
  });
}
