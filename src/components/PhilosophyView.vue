<template>
  <div class="philosophy">
    <div class="container">
      <div class="text">
        <h2>Filosofía</h2>
        <h4>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A totam
          maxime nostrum voluptatum sit aliquid ut laboriosam commodi voluptate
          corporis dolorem ex temporibus eligendi, obcaecati fugit laborum
          similique. Mollitia, dolorem?
        </h4>
      </div>
      <img src="../assets/philosophy.png" alt="philosophy" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PhilosophyView",
};
</script>
<style lang="scss" scoped>
.philosophy {
  position: relative;
  width: 95%;
  height: 100%;
  margin: auto;
  padding: 10% 0;

  .container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    place-items: center;
    gap: 20px;

    @media screen and (max-width: 992px) {
      grid-template-columns: 1fr;
      grid-template-rows: 200px 1fr;
      gap: 50px;
    }

    .text {
      max-width: 450px;
      h2 {
        font-family: "Balboa", Arial;
        text-transform: uppercase;
        margin-bottom: 50px;
        font-size: 4em;
        color: #19aaa4;
        @media screen and (max-width: 992px) {
          margin-bottom: auto;
        }
      }
      h4 {
        font-size: 1.2em;
        text-align: justify;
        @media screen and (max-width: 992px) {
          font-size: 1em;
        }
      }
    }

    img {
      width: 100%;
      max-width: 500px;
    }
  }
}
</style>
