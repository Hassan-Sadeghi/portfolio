<template>
  <div class="footer-part">
    <div>Portfolio</div>
    <div>
      <div @click="DoOnClick('AboutMe')">About Me</div>
      <div @click="DoOnClick('Portfolio')">Portfolio</div>
      <div @click="DoOnClick('DownloadCV')">Download CV</div>
    </div>
    <div>
      <a href="javascript:;">&nbsp;f</a>
      <a class="twitter" href="javascript:;" :style="{'background-image': `url(${require('@/assets/img/twitter-w.png')})`}">-</a>
      <a href="javascript:;">in</a>
    </div>
  </div>
</template>

<script>
import VueRouter from 'vue-router';

import { HeaderRouters as HeaderMenuRoutes } from '../routes';

export default {
  methods: {
    DoOnClick(to){
      this.$router.push(to); 
    }
  },
  router: new VueRouter({
    routes: HeaderMenuRoutes
  })
}
</script>

<style scoped>
.footer-part{
  width: 100%;
  background-color: #754ef9;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
}
.footer-part>div{
  position: relative;
}
.footer-part>div:first-child{
  width: 273px;
  text-align: right;
  font-size: 25pt;
  font-weight: bold;
  cursor: default;
}
.footer-part>div:last-child{
  width: 273px;
}
.footer-part>div:last-child>a{
  text-decoration: none;
  color: white;
  font-size: 16pt;
  font-weight: bold;
  display: inline-block;
  width: 50px;
  height: 25px;
  text-align: left;
}
.footer-part>div:nth-child(2){
  width: calc(100% - 273px - 273px);
  display: flex;
  justify-content: center;
  font-size: 10pt;
}
.footer-part>div:nth-child(2)>div{
  cursor: pointer;
  text-decoration: none;
  padding: 0 25px;
  color: #ffffff;
}
.twitter{
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: left+2px center;
  color: transparent !important;
}
</style>