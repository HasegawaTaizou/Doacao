<template>
  <section id="volunteer-container">
    <div class="volunteer-content">
      <img
        class="volunteer__image"
        :src="volunteer.foto"
        alt="Volunteer image"
      />

      <div class="volunteer__tag-name-data">
        <span class="volunteer__tag">Voluntário</span>
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
          <span class="information__value">{{ volunteer.cep }}</span>
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
        <span class="volunteer__experience"> {{ volunteer.experiencia }} </span>
      </div>
    </div>
    <div class="content-buttons">
      <button class="update-data__button" @click="acceptVolunteer">
        Aceitar
      </button>
      <button class="delete__button" @click="deleteVolunteer">Excluir</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "DataVolunteerRequest",
  data() {
    return {
      volunteer: [],
    };
  },
  mounted() {
    this.fillVolunteer();
  },
  watch: {
    "$store.state.selectedVolunteerCpf": {
      immediate: true,
      handler(newVolunteerCpf) {
        console.log("Novo CPF voluntario:", newVolunteerCpf);
        if (newVolunteerCpf) {
          this.fillVolunteer(newVolunteerCpf);
        }
      },
    },
  },
  methods: {
    fillVolunteer(cpf) {
      const volunteerCpf = {
        cpf: cpf,
      };
      console.log(volunteerCpf);

      axios
        .post(
          "http://127.0.0.1:8080/v5/green-world/get_voluntario_pelo_cpf",
          volunteerCpf
        )
        .then((response) => {
          this.volunteer = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          // Tratar erros na requisição
          console.error(error);
        });
    },
    deleteVolunteer() {
      const volunteerCpf = {
        cpf: this.$store.state.selectedVolunteerCpf,
      };

      axios
        .delete(
          "http://127.0.0.1:8080/v3/green-world/delete_voluntario_pelo_cpf",
          {
            data: volunteerCpf,
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
    acceptVolunteer() {
      const volunteerCpf = {
        cpf: this.$store.state.selectedVolunteerCpf,
      };

      axios
        .put(
          "http://127.0.0.1:8080/v4/green-world/altera_status_do_voluntario",
          volunteerCpf
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          // Tratar erros na requisição
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/volunteer/updateVolunteerStyle.css");
</style>