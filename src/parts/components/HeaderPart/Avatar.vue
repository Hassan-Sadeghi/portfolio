<template>
    <div class="avatar-wrapper">
        <div>
            <div :style="{backgroundImage: `url(${AvatarImage})`}">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        AvatarImage: {
            type: String,
            default: require("@/assets/img/def_avatar.jpg")
        }
    }
}
</script>

<style scoped>
.avatar-wrapper{
    position: absolute;/* شاید پدرش پازیشن نده ولی ما لازم داریم */
    border: solid 18px var(--app-def-color);
    border-radius: 50%;
    background-color: #fff;
}
.avatar-wrapper > div, .avatar-wrapper > div > div {
    border-radius: 50%;
    position: absolute;
    width: 100%;
    height: 100%;
}
.avatar-wrapper > div{
    border: solid 74px #fff;
}
.avatar-wrapper > div > div {
    border: solid 26px var(--app-def-color);
    background-size: 100% 100%;
}
</style>