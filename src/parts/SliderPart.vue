<template>
  <div class="slider-part">
    <title-sub-title Title="Valuable Testimonial" SubTitle="See People Say About Me"/>
    <slider class="slider" :ApiAddress="ApiAddress"/>
  </div>
</template>

<script>
import Slider from './components/SliderPart/Slider';

export default {
  props: ["ApiAddress"],
  components: {
    Slider
  }
}
</script>

<style scoped>
.slider{
  margin-top: 63px;
}
</style>