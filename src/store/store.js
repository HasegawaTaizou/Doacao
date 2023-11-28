import Vuex from "vuex";

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
      isPasswordSame: true,
      url: "",

      // ADDRESS DATA
      cep: "",
      road: "",
      neighborhood: "",
      uf: "",
      city: "",
      complement: "",
      number: "",

      // DONATION LOCAL DATA
      donationLocal: "",
      otherDonationLocal: "",
    },

    //NOTIFICATION STATUS
    showNotification: false,

    //POPUP STATUS
    showPopUp: false,

    //HOSPITAL LOGIN
    hospitalId: "",
    hospitalName: "",
    hospitalPhoto: "",
    token: "",

    //USER DATA
    userId: 0,

    //Log Out
    showLogOut: false,

    //Email PopUp
    showEmail: false,

    //Password Reset PopUp
    showPasswordReset: true,
  },
  mutations: {
    updateFormData(state, payload) {
      state.formData = { ...state.formData, ...payload };
    },
    SET_SHOW_NOTIFICATION(state, value) {
      state.showNotification = value;
    },
    setShowPopUp(state, value) {
      state.showPopUp = value;
    },
    SET_IS_PASSWORD_SAME(state, value) {
      state.formData.isPasswordSame = value;
    },
    SET_HOSPITAL_ID(state, value) {
      state.hospitalId = value;
    },
    SET_HOSPITAL_NAME(state, value) {
      state.hospitalName = value;
    },
    SET_HOSPITAL_PHOTO(state, value) {
      state.hospitalPhoto = value;
    },
    SET_USER_ID(state, value) {
      state.userId = value;
    },
    SET_SHOW_LOGOUT(state, value) {
      state.showLogOut = value;
    },
    SET_SHOW_EMAIL(state, value) {
      state.showEmail = value;
    },
    SET_SHOW_PASSWORD_RESET(state, value) {
      state.showPasswordReset = value;
    },
  },
});
