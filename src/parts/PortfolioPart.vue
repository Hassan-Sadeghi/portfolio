<template>
  <div class="portfolio-part">
    <title-sub-title class="title-subtitle" Title="My Portfolio" SubTitle="Web & App"/>
    <Gallery :Description="Description" :Images="Images"/>
  </div>
</template>

<script>
import Gallery from './components/PortfolioPart/PortfolioGallery.vue';

const Images = new Array(7).fill("").map((m, ix)=>{
  return {
    UniqueName: "po" + (ix+1),
    LinkAddress: "javascript:void(" + (ix+1) + ");",
    ImageAddress: require(`@/assets/img/portfolio/gallery/po${(ix+1)}.jpg`)
  };
});

export default {
  data: ()=>{
    return {
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Nulla aliquet porttitor lacus luctus accumsan tortor.",
      Images: Images
    };
  },
  components: {
    Gallery
  }
}
</script>

<style scoped>
.title-subtitle {
  margin-top: 13px;
  margin-bottom: 66px;
}
</style>