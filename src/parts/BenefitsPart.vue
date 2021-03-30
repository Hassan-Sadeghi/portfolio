<template>
  <div class="benefits-part">
    <card :ImageAddress="require('@/assets/img/benefits/on-time.png')">
      <div slot="Title">On Time</div>
      <div slot="Description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </card>
    <card :ImageAddress="require('@/assets/img/benefits/clean-work.png')">
      <div slot="Title">Clean Work</div>
      <div slot="Description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </card>
    <card :ImageAddress="require('@/assets/img/benefits/client-setisfaction.png')">
      <div slot="Title">Client Setisfaction</div>
      <div slot="Description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </card>
  </div>
</template>

<script>
import Card from './components/BenefitsPart/Card'

export default {
  components: {
    Card
  }
}
</script>

<style scoped>
.benefits-part{
  height: 667px;
  display: flex;
  justify-content: center;
}
.benefits-part > :not(:last-child){
  margin-right: 14px;
}
</style>