<template>
    <div class="main-menu">
        <router-link class="itm" :class="{selected: MItem.Text==SelectedText}" v-for="MItem in MenuItems" 
         :key="MItem.Text" :to="MItem.To" @click.native="DoAfterClick(MItem)">{{MItem.Text}}</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {
            SelectedText: this.MenuItems.filter(mItm => mItm.IsSelected)[0].Text
        };
    },
    props: {
        MenuItems: {
            type: Array,
            validator: val => {
                return !val.some(v=>{
                    v = Object.keys(v);
                    return !v.includes("Text") || !v.includes("To")
                });
            }
        }
    },
    methods: {
        DoAfterClick(MItem){
            this.SelectedText=MItem.Text;
        }
    }
}
</script>

<style scoped>
.main-menu{
    display: flex;
    flex-direction: row;
    float: right;
}
.main-menu>.itm{
    display: inline-block;
    padding: 20px 35px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
    color: #000;
}
.itm.selected{
    border-radius: 50px;
    background-color: var(--app-def-color);
    color: #fff;
    cursor: default;
}
</style>