<template>
  <div class="header">
    <img
      class="background no-responsive"
      src="../assets/header/portada_1200.jpg"
      alt="Itacalli fondo"
    />
    <img
      class="background responsive"
      src="../assets/header/portada_768.jpg"
      alt="Itacalli fondo"
    />
    <img
      class="background responsive-sm"
      src="../assets/header/portada_responsive.jpg"
      alt="Itacalli fondo"
    />
    <!-- <img class="logo" src="../assets/logo.svg" alt="Itacalli" /> -->
  </div>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .no-responsive {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .responsive {
    display: none;
    @media (min-width: 577px) and (max-width: 768px) {
      display: block;
    }
  }
  .responsive-sm {
    display: none;
    @media screen and (max-width: 576px) {
      display: block;
    }
  }
  .background {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .logo {
    position: absolute;
    width: 400px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 900px) {
      width: 300px;
    }
    @media screen and (max-width: 576px) {
      width: 250px;
    }
  }
}
</style>
