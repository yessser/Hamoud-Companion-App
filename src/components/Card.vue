<template>
<div class="card">
  <img :src="this.item.image" alt="Avatar" style="width:25%">
  <div class="container">
    <b>{{this.item.label}}</b>
    <div @click="emit('addBottleFilter',this.item.key);" class="Buttonfilter"> Add to filter</div>
    <div @click="emit('addBottleMegaOrder',this.item.key);" class="ButtonMegaOrder"> Add to MEGA Order</div>

  </div>
</div> 
</template>
<script>
export default {
    name:"Card",
    props:{
      item:Object
    }
}
</script>
<style>
.card{
    box-shadow: 3px 3px 5px 6px #ccc;
    background-color: white;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 45%;
    -ms-flex: 0 1 45%;
    flex: 0 1 45%;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    margin-right: 10px;
    margin-bottom: 10px;
}
.Buttonfilter{
  border-radius: 15px 15px 5px 5px;
  padding: 5px 32px;
  color: #26221f  ;
  background-color: #FBDA00;
  margin-bottom: 1%;
}
.ButtonMegaOrder{
  padding:  5px 12px;
  border-radius: 5px 5px 15px 15px ;
  color: #FBDA00;
  background-color: black;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {

  padding: 5px 8px;
}
</style>