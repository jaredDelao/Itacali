<template>
  <div class="header">
    <img class="background" src="../assets/Header.jpg" alt="Itacalli fondo" />
    <img class="logo" src="../assets/logo.svg" alt="Itacalli" />
    <h4>MEXICAN FOOD IN YOUR HOME</h4>
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
  height: 95vh;
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
  h4 {
    position: absolute;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 5em;
    font-weight: 500;
    left: 50%;
    top: 83%;
    font-family: "Balboa", Arial;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 992px) {
      font-size: 4em;
      line-height: 60px;
    }
    @media screen and (max-width: 575px) {
      font-size: 3em;
      line-height: 60px;
    }
  }
}
</style>
