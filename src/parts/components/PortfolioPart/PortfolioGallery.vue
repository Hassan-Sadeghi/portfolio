<template>
    <div class="gallery" ref="gallery">
        <img v-for="(image, ix) in Images" :class="{'last-in-line': ((ix<3 && (ix+1)%3==0) || ix==3 || ix==6)}" :data-pic="image.UniqueName" :style="{order: ix+1}" :key="image.UniqueName"/>
        <div class="desc">
            <b>Portfolio</b>
            <div>{{Description}}</div>
            <div class="desc-bg"></div>
            <span>Full View</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        Images: {
            type: Array,
            validator: val => {
                return !val.some(v=>{
                    v = Object.keys(v);
                    return !v.includes("LinkAddress") || !v.includes("ImageAddress") || !v.includes("UniqueName")
                });
            }
        },
        Description: String
    },
    mounted: function(){
        var imagesOfGallery = Array.from(this.$refs.gallery.children).reduce((Accu, img)=>{
            Accu[img.dataset.pic] = img;
            return Accu;
        }, {});
        
        this.Images.forEach(img_inf => {
            imagesOfGallery[img_inf.UniqueName].src = img_inf.ImageAddress;
        });
    }
}
</script>

<style scoped>
.gallery{
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    position: relative;
}
[data-pic]{
    width: calc(100% / 3 - 19px);
    height: 370px;
    display: inline-block;
}
[data-pic]:not(.last-in-line){
    margin-left: 19px;
}
.gallery>:nth-child(n+4){
    margin-top: 19px;
}
.desc{
    order: 4;
    background-color: var(--app-def-color);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc((100% / 3) * 2 - 19px);
    margin-right: 19px;
    position: relative;
    overflow: hidden;
}
.desc-bg{
    background-image: url('../../../assets/img/portfolio/gallery/portfolio-bg.png');
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
}
.desc b {
    font-size: 24pt;
}
.desc div {
    width: 469px;
    margin-top: 22px;
}
.desc span {
    display: inline-block;
    color: #fff;
    font-size: 8pt;
    position: absolute;
    right: 54px;
    bottom: 15px;
    cursor: pointer;
}
.desc span::after {
    content: "";
    display: inline-block;
    position: absolute;
    left: calc(100% + 6px);
    bottom: 0;
    width: 27px;
    height: 27px;
    background-size: 100% 100%;
    background-image: url('../../../assets/img/portfolio/gallery/full-screen.png');
    cursor: pointer;
}
/* .last-in-line{} */
</style>