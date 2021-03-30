<template>
  <div class="app-wrapper">
    <header-part></header-part>
    <benefits-part class="benefits-part"></benefits-part>
    <portfolio-part class="portfolio-part"></portfolio-part>
    <slider-part class="slider-part" ApiAddress="https://randomuser.me/api/"></slider-part>
    <hire-part class="hire-part"></hire-part>
    <footer-part class="footer-part"></footer-part>
  </div>
</template>

<script>

import TitleSetterMixin from "./mixins/title_setter";
import AppMethods from './mixins/AppMixins'

import HeaderPart from "./parts/HeaderPart.vue";
import BenefitsPart from "./parts/BenefitsPart.vue";
import PortfolioPart from './parts/PortfolioPart.vue';
import SliderPart from './parts/SliderPart.vue';
import HirePart from './parts/HirePart.vue';
import FooterPart from './parts/FooterPart.vue';

import TitleSubTitle from './global_components/TitleSubTitle.vue'

import Vue from 'vue';
Vue.component("title-sub-title", TitleSubTitle);

export default {
  mixins: [TitleSetterMixin, AppMethods],
  components: {
    HeaderPart,
    BenefitsPart,
    PortfolioPart,
    SliderPart,
    HirePart,
    FooterPart
  }
}
</script>

<style scoped>
  .app-wrapper {
    position: relative;
    margin: 0;
    width: 100%;
    direction: ltr;
  }
  .benefits-part {
    padding-top: 89px;
  }
  .portfolio-part{
    margin-top: 110px;
    width: 79.5%;
    margin-left: auto;
    margin-right: auto;
  }
  .slider-part {
    padding-top: 109px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
  .hire-part{
    margin-top: 217px;
    width: 597px;
    margin-left: auto;
    margin-right: auto;
  }
  .footer-part{
    margin-top: 103px;
    height: 167px;
  }
</style>

<style>
  :root {
    --app-def-color: #754ef9;
    --app-def-color-darker: #5728f8;
  }
  body{
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  /* به خاطر باگ ویو (موقع اسکوپد دادن) اینجا آوردمش*/
  .app-wrapper * {
    box-sizing: border-box;
  }
</style>