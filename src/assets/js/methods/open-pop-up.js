"use strict";

export default function openPopUp(componentName) {
  this.selectedComponent = componentName;

  this.$store.state.showPopUp = true;
  this.$store.commit("setShowPopUp", true);
}
