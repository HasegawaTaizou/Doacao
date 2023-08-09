import Vuex from "vuex";

// para acessar uma propriedade em outra tela é o comando abaixo
// console.log(this.$store.state.formData.cep);

export default new Vuex.Store({
  state: {
    formData: {
      // HOSPITAL DATA
      isSelectedImage: false,
      photo: "",
      name: "",
      cnpj: "",
      email: "",
      phone: "",
      password: "",
      url: "",

      // ADDRESS DATA
      cep: "",
      road: "",
      neighborhood: "",
      state: "",
      city: "",
    },

    //SEED DATA
    id_semente: "",

    //VOLUNTEER CPF
    selectedVolunteerCpf: "",

    //BENEFICIARY ID
    selectedBeneficiaryId: "",

    //NOTIFICATION STATUS
    showNotification: false,
    
    //POPUP STATUS
    showPopUp: false,

  },
  mutations: {
    updateFormData(state, payload) {
      state.formData = { ...state.formData, ...payload };
    },
    updateSeed(state, payload) {
      state.id_semente = payload;
    },
    updateVolunteerCpf(state, cpf) {
      state.selectedVolunteerCpf = cpf;
    },
    updateBeneficiaryId(state, id) {
      state.selectedBeneficiaryId = id;
    },
    setShowNotification(state, value) {
      state.showNotification = value;
    },
    setShowPopUp(state, value) {
      state.showPopUp = value;
    },
  },
});
