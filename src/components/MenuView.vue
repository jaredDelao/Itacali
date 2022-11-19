<template>
  <div class="menu">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :pagination="{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet custom-bullet-menu',
        bulletActiveClass:
          'swiper-pagination-bullet-active custom-bullet-menu-active',
      }"
    >
      <swiper-slide v-for="img in imgCarrusel" :key="img.name">
        <div class="content-slide">
          <div class="title">
            <h4>OUR MENU</h4>
            <div class="line"></div>
          </div>
          <img class="img-slide" :src="img.path" :alt="img.name" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Pagination, A11y } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// images
import imgTacos from "../assets/menu-slider/Menu_Tacos.jpg";
import imgBarbacoa from "../assets/menu-slider/Menu_Barbacoa.jpg";
import imgBowls from "../assets/menu-slider/Menu_Bowls.jpg";
import imgBurritos from "../assets/menu-slider/Menu_Burritos.jpg";
import imgDesserts from "../assets/menu-slider/Menu_Desserts.jpg";
import imgTamales from "../assets/menu-slider/Menu_Tamales.jpg";
export default {
  name: "PhilosophyView",
  data: () => {
    return {
      imgCarrusel: [
        { name: "Tacos", path: imgTacos },
        { name: "Barbacoa", path: imgBarbacoa },
        { name: "Bowls", path: imgBowls },
        { name: "Burritos", path: imgBurritos },
        { name: "Desserts", path: imgDesserts },
        { name: "Tamales", path: imgTamales },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, A11y],
    };
  },
};
</script>
<style lang="scss" scoped>
.menu {
  height: 100%;
  .swiper {
    width: 100%;
    height: 100vh;
    .content-slide {
      width: 100%;
      height: 100%;
      position: relative;
      .title {
        text-align: center;
        position: absolute;
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 5em;
        font-weight: 500;
        left: 50%;
        top: 7%;
        font-family: "Balboa", Arial;
        transform: translate(-50%, -50%);
        z-index: 2;
        @media screen and (max-width: 992px) {
          font-size: 4em;
        }
        .line {
          width: 50%;
          height: 2px;
          background: #fff;
          margin: auto;
        }
      }
      .img-slide {
        width: 100%;
        height: 100%;
        object-fit: contain;
        background-color: #f24a51;
      }
    }
  }
}
</style>
