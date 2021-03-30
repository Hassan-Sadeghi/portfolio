<template>
  <div class="hire-part">
    <title-sub-title class="t-subt" Title="Want To Hire Me?" SubTitle="If You Like My Work"/>
    <div class="inp-wrapper">
      <input type="text" placeholder="enter your email"/>
      <button>Hire Me</button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.t-subt{
  margin-bottom: 87px;
}
.inp-wrapper{
  border: solid 1px var(--app-def-color);
  height: 57px;
  position: relative;
}
.inp-wrapper>*{
  border-style: none;
  outline-style: none;
  height: 100%;
  position: absolute;
  top: 0;
}
.inp-wrapper>input{
  left: 22px;
  width: calc(67% - 22px - 10px);
  color: #444;
}
button{
  background-color: var(--app-def-color);
  color: white;
  width: calc(100% - 67%);
  cursor: pointer;
  right: 0;
}

</style>