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
    hospitalId: 1,
    hospitalName: "Sofia Coghi Landi",
    hospitalPhoto:
      "https://firebasestorage.googleapis.com/v0/b/greenworld-f2763.appspot.com/o/images%2Favatar-man.png?alt=media&token=9d5745ab-3340-4e60-8a05-a55919c7dfa3",
    token: "",

    //USER DATA
    userId: 0,
  },
  mutations: {
    updateFormData(state, payload) {
      state.formData = { ...state.formData, ...payload };
    },
    setShowNotification(state, value) {
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
  },
});
