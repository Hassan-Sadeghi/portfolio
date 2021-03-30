<template>
    <div class="card">
        <img :src="CorrectedImageAddress"/>
        <div class="texts-wrapper">
            <slot name="Title"/>
            <slot name="Description"/>
        </div>
        <button class="button">Learn More</button>
    </div>
</template>

<script>
export default {
    props: ["ImageAddress"],
    data: function() {
        return {
            CorrectedImageAddress: this.ImageAddress
        };
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    width: 308px;
    height: 487px;
    box-shadow: 0 0px 17px 0 rgba(0,0,0,0.2);
    padding: 77px 77px 71px 77px;
    justify-content: space-between;
    align-items: center;
}
.card > img {
    width: 64px;
}
.texts-wrapper > :first-child {
    font-weight: bold;
    font-size: 14pt;
    cursor: default;
    text-align: center;
}
.texts-wrapper > :last-child {
    font-size: 11pt;
    cursor: default;
    margin-top: 22px;
    line-height: 1.2;
    text-align: center;
}
.button{
    background-color: var(--app-def-color);
    color: #fff;
    border-style: none;
    padding: 13px 29px;
    outline-style: none;
    cursor: pointer;
}
</style>