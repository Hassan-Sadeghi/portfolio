<template>
    <div class="social-wrapper">
        <div class="rotated">
            FOLLOW ME ON: 
            <div class="line"></div>
        </div>
        <div class="logo-par">
            <a class="s-item" v-for="social_info in AllSocials" :key="social_info.UniqueName" 
                              :style="social_info.Logo?{backgroundImage:`url(${social_info.Logo})`}:{}"
                              :class="{'has-logo': !!social_info.Logo}"
                              :href="social_info.Link">
                {{social_info.Text||""}}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        AllSocials:{
            type: Array,
            validator: val => {
                return !val.some(v=>{
                    v = Object.keys(v);
                    return  (!v.includes("Text") && !v.includes("Logo")) || !v.includes("Link") || !v.includes("UniqueName");
                });
            }
        }
    }
}
</script>

<style scoped>
    .social-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        line-height: 0;
    }
    .social-wrapper > .rotated {
        transform: rotate(90deg);
        top: 265px;
        position: relative;
        color: var(--app-def-color);
        font-weight: bold;
        white-space: nowrap;
        transform-origin: center;
        font-size: 20px;
    }
    .line{
        position: absolute;
        /* top: 50%;
        transform: translateY(-50%); */
        height: 1px;
        display: inline-block;
        width: 58px;
        border-bottom: solid 1px var(--app-def-color);
        margin-left: 6px;
    }
    .logo-par{
        display: flex;
        flex-direction: column;
        height: 175px;
        position: absolute;
        bottom: 256px;
        width: 31px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        font-size: 20pt;
        font-weight: bold;
        justify-content: space-around;
    }
    .logo-par > .s-item{
        width: 31px;
        height: 31px;
        display: inline-block;
        color: var(--app-def-color);
        text-align: center;
        line-height: 1;
        text-decoration: none;
    }
    .has-logo{
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>