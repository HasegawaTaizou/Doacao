export default function handleBeneficiaryClick(item) {
  this.$store.commit("updateBeneficiaryId", item.id);
  console.log(item.id);
}
