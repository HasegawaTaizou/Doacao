<template>
  <section id="redefine-password-dashboard">
    <div class="redefine-password__header">
      <h1 class="redefine-password__title">REDEFINIR SENHA</h1>
      <div class="profile-container">
        <img
          src="../../assets/img/hospital-profile-image.png"
          alt="Profile Image"
          class="profile__image"
        />
        <span class="profile__name">Hospital Notredame Intermédica</span>
      </div>
    </div>
    <div class="redefine-password__content">
      <div class="redefine-password-introduction">
        <img
          src="../../assets/img/redefine-password-image.png"
          alt="Redefine Password Image"
          class="redefine-password__image"
        />
        <h2 class="redefine-password__title">Redefinir a senha</h2>
        <div class="redefine-password__text-container">
          <p class="redefine-password__text">
            Basta digitá-la duas vezes e tentar não esquecê-la.
          </p>
          <p class="redefine-password__text">
            Para uma senha segura, deve conter pelo menos:
          </p>
        </div>
        <div class="redefine-password-recommendations-container">
          <div class="recomendation-container">
            <span class="recomendation__title">8+</span>
            <span class="recomendation__description">Caracteres</span>
          </div>
          <div class="recomendation-container">
            <span class="recomendation__title">AA</span>
            <span class="recomendation__description">Maiúsculas</span>
          </div>
          <div class="recomendation-container">
            <span class="recomendation__title">aa</span>
            <span class="recomendation__description">Minusculas</span>
          </div>
          <div class="recomendation-container">
            <span class="recomendation__title">123</span>
            <span class="recomendation__description">Números</span>
          </div>
          <div class="recomendation-container">
            <span class="recomendation__title">@#$</span>
            <span class="recomendation__description">Símbolos</span>
          </div>
        </div>
      </div>
      <div class="redefine-password-action">
        <div class="redefine-password__inputs">
          <div class="input__new-password">
            <label for="" class="new-password__label">Nova senha:</label>
            <input type="text" class="new-password__input" />
          </div>
          <div class="input__new-password-confirmation">
            <label for="" class="new-password-confirmation__label"
              >Confirmar nova senha:</label
            >
            <input type="text" class="new-password-confirmation__input" />
          </div>
        </div>
        <div class="redefine-password__buttons">
          <router-link :to="'/dashboard/settings/'">
            <button class="button__cancel">Cancelar</button>
          </router-link>
          <button class="button__redefine-password">Redefinir senha</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RedefinePassword",
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/redefinePassword/redefinePasswordStyle.css");
</style>
