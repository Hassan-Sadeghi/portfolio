<template>
    <div class="title-subtitle">
        <h1 class="title" v-html="Title"></h1>
        <div class="sub-title" v-html="SubTitle"></div>
    </div>
</template>

<script>
export default {
    props:["Title", "SubTitle"]
}
</script>

<style>
.title{
  text-align: center;
  color: #000;
  line-height: 1;
}
.sub-title{
  color: #777;
  font-size: 11pt;
  text-align: center;
  line-height: 1;
}
</style>