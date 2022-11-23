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
          <img
            class="no-responsive img-slide"
            :src="img.path"
            :alt="img.name"
          />
          <img
            class="img-slide responsive"
            :src="img.pathResponsive"
            :alt="img.name"
          />
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
import imgTacos from "../assets/menu-slider/768/Menu_Itacalli_768_Tacos.jpg";
import imgTacosResponsive from "../assets/menu-slider/576/Menu_Itacalli_576_Tacos.jpg";

import imgBarbacoa from "../assets/menu-slider/768/Menu_Itacalli_768_Barbacoa.jpg";
import imgBarbacoaResponsive from "../assets/menu-slider/576/Menu_Itacalli_576_Barbacoa.jpg";

import imgBowls from "../assets/menu-slider/768/Menu_Itacalli_768_Bowls.jpg";
import imgBowlsResponsive from "../assets/menu-slider/576/Menu_Itacalli_576_Bowls.jpg";

import imgBurritos from "../assets/menu-slider/768/Menu_Itacalli_768_Burritos.jpg";
import imgBurritosRes from "../assets/menu-slider/576/Menu_Itacalli_576_Burritos.jpg";

import imgDesserts from "../assets/menu-slider/768/Menu_Itacalli_768_Desserts.jpg";
import imgDessertsRes from "../assets/menu-slider/576/Menu_Itacalli_576_Desserts.jpg";

import imgTamales from "../assets/menu-slider/768/Menu_Itacalli_768_Tamales.jpg";
import imgTamalesRes from "../assets/menu-slider/576/Menu_Itacalli_576_Tamales.jpg";
export default {
  name: "PhilosophyView",
  data: () => {
    return {
      imgCarrusel: [
        { name: "Tacos", path: imgTacos, pathResponsive: imgTacosResponsive },
        {
          name: "Barbacoa",
          path: imgBarbacoa,
          pathResponsive: imgBarbacoaResponsive,
        },
        { name: "Bowls", path: imgBowls, pathResponsive: imgBowlsResponsive },
        { name: "Burritos", path: imgBurritos, pathResponsive: imgBurritosRes },
        { name: "Desserts", path: imgDesserts, pathResponsive: imgDessertsRes },
        { name: "Tamales", path: imgTamales, pathResponsive: imgTamalesRes },
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
      .responsive {
        display: none;
        @media screen and (max-width: 768px) {
          display: block;
        }
      }
      .no-responsive {
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }
}
</style>
