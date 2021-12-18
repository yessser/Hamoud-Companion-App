<template>

  <div id="app">
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>

import Footer  from "./components/Footer.vue";


export default {
  name: 'App',
  components: {
    Footer
    // HelloWorld
  },
  data(){
        return{
          // routes:$Router.options.routes
            // routes:[{key:1,title:"maps",ref:"#"},{key:2,title:"smthn",ref:"#"},{key:3,title:"smthn2",ref:"#"}],
            // active:2
        }
    },
  methods:{

  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
}
body {
    padding: 0;
    margin: 0;
}

</style>

