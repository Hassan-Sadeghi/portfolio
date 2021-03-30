<template>
  <div class="header-part">
    <div class="rv-par" v-if="0">
      <router-view></router-view>
    </div>
    <div class="left-panel">
      <span class="top-text">Portfolio</span>
      <Avatar class="header-avatar"></Avatar>
      <span class="bottom-text">BE CREATIVE</span>
    </div>
    <div class="right-panel-wrapper">
      <div class="right-panel">
        <div>
          <main-menu class="header-menu" :MenuItems="MenuItems"/>
        </div>
        <div></div>
        <div>
          <div class="intro">
            <a href="javascript:;">MY INTRO</a>
          </div>
        </div>
        <div>
          <Social :AllSocials="[
            {UniqueName: 'f', Text: 'f', Link: 'javascript:;'},
            {UniqueName: 't', Logo: require('@/assets/img/twitter.png'), Link: 'javascript:void();'},//فولدر ایمیج هم بهتر بود  پوشه بندی بشه که فعلاً انجامش ندادم
            {UniqueName: 'i', Text: 'in', Link: '#'}
          ]"></Social>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from './components/HeaderPart/Avatar'
import Social from './components/HeaderPart/Social'
import MainMenu from './components/HeaderPart/MainMenu'

import Vue from 'vue';
import VueRouter from 'vue-router';

import { HeaderRouters as HeaderMenuRoutes } from '../routes';

Vue.use(VueRouter);

export default {
  data: ()=>{
    return {
      MenuItems: [
        { 
          Text: "ABOUT ME",
          To: "AboutMe"
        },
        { 
          Text: "PORTFOLIO", 
          To: "Portfolio"
        },
        { 
          Text: "DOWNLOAD CV", 
          To: "DownloadCV",
          IsSelected: true 
        }
      ]
    };
  },
  components: {
    Avatar, Social, MainMenu
  },
  router: new VueRouter({
    routes: HeaderMenuRoutes
  })
}
</script>

<style scoped>
.header-part {
  height: 872px;
  background-color: #fff;
}
.header-part>.left-panel{
  width: 34%;
  height: 100%;
  position: relative;
  display: inline-block;
  background-color: var(--app-def-color);
  z-index: 1;
}
.header-avatar{
  position: absolute;
  /* height: 61.9%; */
  height: 558px;
  width: 558px;
  left: 78px;
  top: 50%;
  transform: translateY(-50%);
}
.header-part > div > span {
  color: #fff;
  display: inline-block;
  position: absolute;
  left: 148px;
}
.header-part > div > .top-text {
  top: 40px;
  font-size: 25pt;
  font-weight: bold;
  cursor: default;
}
.header-part > div > .bottom-text {
  bottom: 57px;
  font-size: 15pt;
  cursor: default;
}
</style>

<style scoped>
.header-part>.right-panel-wrapper{
  width: calc(100% - 34%);
  display: inline-block;
  height: 100%;
  position: relative;
  background-color: var(--app-def-color);
}
.right-panel{
  width: 100%;
  height: calc(100% - 15px);
  position: absolute;
  background-color: #fff;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.right-panel>:last-child{
  width: 140px;
  height: 100%;
}
.right-panel>:nth-child(-n+3){
  width: calc(100% - 140px);
  height: calc(100% / 3);
  position: relative;
}
.right-panel>:nth-child(2){
  background-image: url('../assets/img/my_work.png');
  background-position: right+70px center;
  background-repeat: no-repeat;
}
.intro{
  width: 84px;
  height: 84px;
  border-radius: 50%;
  box-shadow: 0 0px 17px 0 rgba(0,0,0,0.2);
  position: absolute;
  top: 4px;
  left: 481px;
  background-image: url('../assets/img/intro-arrow.png');
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.intro > a{
  font-size: 20px;
  text-decoration: none;
  color: #000;
  white-space: nowrap;
  position: absolute;
  left: calc(100% + 27px);
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
}
.header-menu{
  height: 48px;
  line-height: 0.5;
  margin-top: 30px;
}
</style>