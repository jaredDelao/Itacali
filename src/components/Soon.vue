<template>
  <div class="header-wrapper">
    <div class="header">
      <img
        class="background no-responsive"
        src="../assets/soon/1200.png"
        alt="Itacalli fondo"
      />
      <img
        class="background responsive"
        src="../assets/soon/768.png"
        alt="Itacalli fondo"
      />
      <img
        class="background responsive-sm"
        src="../assets/soon/500.png"
        alt="Itacalli fondo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "component-soon",
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #e44d55;
}
.header {
  position: relative;
  max-width: 1200px;
  width: 100%;
  height: auto;
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
    object-fit: contain;
  }
}
</style>
