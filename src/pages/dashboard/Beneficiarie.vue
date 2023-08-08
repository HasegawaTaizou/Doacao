<template>
  <section id="volunteer-container">
    <div class="volunteer-content">
      <img
        class="volunteer__image"
        v-if="volunteer.foto"
        :src="volunteer.foto"
        alt="Volunteer image"
      />
      <img
        class="volunteer__image"
        v-else
        src="../../assets/img/user-default-image.svg"
        alt="Volunteer image"
      />
      <div class="volunteer__tag-name-data">
        <span class="volunteer__tag">Beneficiado</span>
        <h1 class="volunteer__name">{{ volunteer.nome_completo }}</h1>
        <ul class="volunteer__personal-data">
          <li class="personal-data">
            <span class="uppercase personal-data__type">cpf:</span>
            <span class="personal-data__value">{{ volunteer.cpf }}</span>
          </li>
          <li class="personal-data">
            <span class="uppercase personal-data__type">rg:</span>
            <span class="personal-data__value">{{ volunteer.rg }}</span>
          </li>
          <li class="personal-data">
            <span class="personal-data__type">Data de nascimento:</span>
            <span class="personal-data__value">{{
              volunteer.data_nascimento
            }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="volunteer-information">
      <div class="volunteer-content__address">
        <h3 class="address__title">Endereço</h3>
        <div class="volunteer__address">
          <span class="information">CEP:</span>
          <span class="information__value">{{ volunteer.endereco?.cep }}</span>
        </div>
        <div class="volunteer__address">
          <span class="information">Logradouro:</span>
          <span class="information__value">{{
            volunteer.endereco?.logradouro
          }}</span>
        </div>
        <div class="volunteer__address">
          <span class="information">Bairro:</span>
          <span class="information__value">{{
            volunteer.endereco?.bairro
          }}</span>
        </div>
        <div class="volunteer__address">
          <span class="information">Cidade:</span>
          <span class="information__value">{{
            volunteer.endereco?.cidade
          }}</span>
        </div>
        <div class="volunteer__address">
          <span class="information">Estado:</span>
          <span class="information__value">{{
            volunteer.endereco?.estado
          }}</span>
        </div>
      </div>
      <div class="volunteer-content__contact">
        <h3 class="contact__title">Contato:</h3>
        <div class="volunteer__contact">
          <span class="contact">Telefone:</span>
          <span class="contact__value">{{ volunteer.telefone }}</span>
        </div>
        <div class="volunteer__contact">
          <span class="contact">E-mail:</span>
          <span class="contact__value">{{ volunteer.email }}</span>
        </div>
      </div>
      <div class="volunteer-content__reason">
        <h3 class="information__title">Motivo:</h3>
        <p class="volunteer-reason__text">
          {{ volunteer.motivo }}
        </p>
      </div>
      <div class="volunteer-content__experience">
        <h3 class="information__title">Experiência:</h3>
        <span class="volunteer__experience"> {{ volunteer.experiencia }}</span>
      </div>

      <div class="volunteer-content__helps">
        <h3 class="information__title">Ajudas das quais participou:</h3>
        <ul class="help-list">
          <li class="help">
            <router-link to="">
              <span class="help__name">Ajuda 03</span>
            </router-link>
          </li>
          <li class="help">
            <router-link to="">
              <span class="help__name">Ajuda 03</span>
            </router-link>
          </li>
          <li class="help">
            <router-link to="">
              <span class="help__name">Ajuda 03</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="content-buttons">
      <router-link
        class="update-data__link"
        to="/dashboard/all-volunteers/volunteer/update-volunteer"
      >
        <button class="update-data__button" @click="updateVolunteerData">
          Atualizar dados
        </button>
      </router-link>
      <button
        class="delete__button"
        @click="this.$store.commit('setShowPopUp', true)"
      >
        Excluir
      </button>
    </div>
  </section>
  <PopUp
    :message="'Os dados do beneficiado serão excluídos'"
    :acceptFunction="deleteVolunteer"
  />
</template>

<script>
import axios from "axios";

import PopUp from "../../assets/components/PopUp.vue";

export default {
  name: "Beneficiarie",
  mounted() {
    this.fillVolunteer();
  },
  components: { PopUp },
  watch: {
    "$store.state.selectedBeneficiaryId": {
      immediate: true,
      handler(newVolunteerCpf) {
        console.log("Novo CPF voluntario:", newVolunteerCpf);
        if (newVolunteerCpf) {
          this.fillVolunteer(newVolunteerCpf);
        }
      },
    },
  },
  data() {
    return {
      volunteer: {},
    };
  },
  methods: {
    fillVolunteer(id) {
      const beneficiaryId = {
        id: id,
      };

      console.log(beneficiaryId);

      axios
        .post(
          "http://localhost:8080/v6/green-world/beneficiado_por_id",
          beneficiaryId
        )
        .then((response) => {
          this.volunteer = response.data.data;
        })
        .catch((error) => {
          // Tratar erros na requisição
          console.error(error);
        });
    },
    deleteVolunteer() {
      const beneficiaryId = {
        id: id,
      };

      axios
        .delete(
          "http://127.0.0.1:8080/v3/green-world/delete_voluntario_pelo_cpf",
          {
            data: beneficiaryId,
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          // Tratar erros na requisição
          console.error(error);
        });
    },
    updateVolunteerData() {},
  },
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/volunteer/volunteerStyle.css");
</style>