<template>
    <div class="slider-wrapper">
        <div class="body" v-if="!Error">
            <div class="img-par">
                <img v-if="!!SlidesCount" :src="AllSlides[CurrentSlide].ImageAddress" />
            </div>
            <div class="name">{{AllSlides[CurrentSlide].Name}}</div>
            <div class="comment" v-html="AllSlides[CurrentSlide].Comment"></div>
        </div>
        <div class="err" v-if="Error" v-html="Error"></div>
        <div class="dots">
            <div v-for="i in SlidesCount" class="dot" :key="i" @click="ShowSlide(i)" :class="{'selected': CurrentSlide==i}"></div>
        </div>
    </div>    
</template>

<script>
//می شد از وی-ریسورسر یا آکسیوت یا .. استفاده کرد که من خواستم کتابخونه ای اضافه نکنم
async function GetCommentsFromApiServer(ApiAddress, This, CallbackM){
    return await fetch(
        ApiAddress, 
        {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        }
    )
    .then(resp => resp.json())
    .then(CallbackM)
    .catch(err => {
        This.Error = err;
    });
}
export default {
    data(){
        return {
            SlidesCount: 0,
            Error: "",
            AllSlides: {0:{}},
            CurrentSlide: 0
        };
    },
    props: ["ApiAddress"],
    created(){
        this.SlidesCount = Math.ceil((Math.random() * 2) + 3);
        this.ShowSlide(1);
    },
    methods: {
        ShowSlide(UniqueId){
            if(this.AllSlides[UniqueId]) {
                this.CurrentSlide = UniqueId;
            } else {
                GetCommentsFromApiServer(this.ApiAddress, this, ReceivedDt => {
                    //من فرض کردم ای پی آی یه یوزر میده و خودم رندوم چند تا گرفتم. اگر چند تا می داد که خیلی هم بهتر بود
                    const nInf = (ReceivedDt = ReceivedDt.results[0]).name;
                    if(ReceivedDt.gender!="male") return this.ShowSlide(UniqueId);
                    this.AllSlides[UniqueId] = {
                        Name: nInf.title + " " + nInf.first + " " + nInf.last,
                        ImageAddress: ReceivedDt.picture.large,
                        Comment: String.fromCharCode(Math.ceil(Math.random()*25+65))+(new Array(15).fill("")).map(()=>{
                            const len = Math.ceil(Math.random()*10+3);
                            var ret = [], i=0;
                            for(; i<len; i++)
                                ret.push(String.fromCharCode(Math.ceil(97+(Math.random()*25))));
                            return ret.join("") + (Math.random()*15<=1?"<br/>":"");
                        }).join(" ")+"."
                    };
                    this.ShowSlide(UniqueId);
                });
            }
        }
    }
}
</script>

<style scoped>
.slider-wrapper{
    height: 386px;
    box-shadow: 0 0px 17px 0 rgba(0,0,0,0.2);
    width: calc(100% - (24px * 2));
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: flex;
}
.slider-wrapper:before, .slider-wrapper:after{
    content: "";
    display: inline-block;
    width: 24px;
    height: 340px;
    background-color: var(--app-def-color);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);/* توی این پروژه چون تستیه واسه وب کیت و ... رو نزدم */
}
.slider-wrapper:before{
    right: 100%;
}
.slider-wrapper:after{
    left: 100%;
}
.dots{
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: calc(100% + 63px);
    left: 0;
    right: 0;
}
.dots>.dot{
    display: inline-block;
    border-radius: 50%;
    cursor: pointer;
}
.dots>.dot.selected{
    background-color: var(--app-def-color); /* اینو با سَس میشد حرفه ای زد ولی فعلاً ساده می زنم */
    border: solid 1px var(--app-def-color-darker);
    height: 16px;
    width: 16px;
}
.dots>.dot:not(.selected){
    background-color: #eae5fe;
    border: solid 1px #e6e0fe;
    height: 13px;
    width: 13px;
}
.dots>.dot:not(:last-child){
    margin-right: 10px;
}
.err {
    color: tomato;
    font-size: 16pt;
    line-height: 2;
    padding: 25px;
}
.body{
    width: 75%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
}
.img-par{
    border-radius: 50%;
    border: solid 12px var(--app-def-color);
    opacity: 0.65;
    position: relative;
}
.img-par>img{
    border-radius: 50%;
    border: solid 12px var(--app-def-color-darker);
    display: block;
}
.name{
    font-weight: bold;
    font-size: 17pt;
}
.comment{
    color: #777;
    font-size: 13pt;
    line-height: 1.5;
}
</style>