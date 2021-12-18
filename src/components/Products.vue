<template>
<div class="flex-container">
  <div @click="filterClick" class="filter"> ICO</div>
  <Card v-for="item in data" :key="item.key" :item="item" @addBottleFilter="addBottleFilter" @addBottleMegaOrder="addBottleMegaOrder" ></Card>
  <FilterModal v-if="showModal" @close="showModal = false"></FilterModal>
</div>
</template>

<script>
import Card from "./Card.vue";
import FilterModal from "./filterModal.vue";
  export default {
    name:"Products",
    components: {Card,FilterModal},
    data(){
      return{
        showModal: false,        
        data:[
        {key:1,image:"https://www.hamoud-boualem.com/media/k2/items/cache/077ab55046ce80eaf9a3ddea999597ca_XL.png",label:"bla bla bla"},
        {key:2,image:"https://www.hamoud-boualem.com/media/k2/items/cache/077ab55046ce80eaf9a3ddea999597ca_XL.png",label:"bla bla "},
        {key:3,image:"https://www.hamoud-boualem.com/media/k2/items/cache/077ab55046ce80eaf9a3ddea999597ca_XL.png",label:"bla bla "},
        {key:4,image:"https://www.hamoud-boualem.com/media/k2/items/cache/077ab55046ce80eaf9a3ddea999597ca_XL.png",label:"bla bla "},
        {key:5,image:"https://www.hamoud-boualem.com/media/k2/items/cache/077ab55046ce80eaf9a3ddea999597ca_XL.png",label:"bla bla "},
        {key:6,image:"https://www.hamoud-boualem.com/media/k2/items/cache/077ab55046ce80eaf9a3ddea999597ca_XL.png",label:"bla bla "},
        {key:7,image:"https://www.hamoud-boualem.com/media/k2/items/cache/077ab55046ce80eaf9a3ddea999597ca_XL.png",label:"bla bla "},
        {key:8,image:"https://www.hamoud-boualem.com/media/k2/items/cache/077ab55046ce80eaf9a3ddea999597ca_XL.png",label:"bla bla "},
        {key:9,image:"https://www.hamoud-boualem.com/media/k2/items/cache/077ab55046ce80eaf9a3ddea999597ca_XL.png",label:"bla bla "},
        {key:10,image:"https://www.hamoud-boualem.com/media/k2/items/cache/077ab55046ce80eaf9a3ddea999597ca_XL.png",label:"bla bla "},
        ]
      }
    },
    methods:{
        filterClick: function () {
          this.showModal=!this.showModal
        },
        addBottleFilter: function(){
          // apply filter with a mongo query
          console.log("addbottleFilter")
        },
        addBottleMegaOrder: function () {
          console.log("addBottleMegaOrder");
        }
    }
  }
</script>
<style>
.filter{
  background-color: yellow;
  padding: 7vw;
  position:fixed;
  bottom: 12%;
  right:5%;
  border-radius: 50%;
}
.flex-container {
    background-color: #f0f0f0;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: space-between;
    -ms-flex-line-pack: justify;
    align-content: space-between;
    -webkit-align-items: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    margin-bottom:10vh;
    }
</style>