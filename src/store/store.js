import Vuex from "vuex";

// para acessar uma propriedade em outra tela é o comando abaixo
// console.log(this.$store.state.formData.cep);

export default new Vuex.Store({
  state: {
    formData: {
      // GENERIC DATA
      isSelectedImage: false,
      foto: "",
      nome_completo: "",
      data_nascimento: "11/11/1111",
      rg: "",
      cpf: "",
      telefone: "",
      email: "",
      cep: "",
      logradouro: "",
      bairro: "",
      estado: "",
      cidade: "",

      //VOLUNTEER DATA
      limitacao_fisica: "",
      motivo: "",
      experiencia: "",

      // BENEFICIARY DATA
      quantidade_moradores: "",
      renda: "",
      // typeResidence: "",
      metros_quadrados: "",
      observacao: "",
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
