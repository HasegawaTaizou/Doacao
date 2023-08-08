import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    selectedVolunteerCpf: ""
  },
  mutations: {
    updateVolunteerCpf(state, cpf) {
      state.selectedVolunteerCpf = cpf;
    },
  },
});
