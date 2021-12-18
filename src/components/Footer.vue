<script>
export default{
    
    methods:{
        // TODO: add transition to this
        // linkOnclick:function (key) {
        //     this.$emit('navigate', key)            
        // }
    },
    
}

</script>

<template>
    <nav class="footer">    
            
        <router-link active-class="active" v-for="item in this.$router.options.routes" :key="item.path" :to="item.path">{{item.name}}</router-link>
        <!-- TODO: will be changed rooter when i want actual reactive stuff -->
        <!-- <a @click="linkOnclick(item.key)"  v-for="item in routes" :key="item.key" :href="item.ref" v-bind:class="{active : active==item.key}">
            {{ item.title }}
        </a> -->
    </nav>
</template>
<style>
.footer{
  display: flex;
  flex-direction: row;
  background-color: #333;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
}
.active{
    background-color: aqua;
}
/* Style the links inside the navigation bar */
.footer a {
    flex: 1;
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  font-size: 17px;
  justify-content: center;
}

/* Change the color of links on hover */
.footer a:hover {
    
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.footer a.active {
  background-color: #04AA6D;
  color: white;
}   
</style>
