<template>
  <div class="hello">
  <p class="sz">{{msg}}</p>
  <button @click="btnHandle">弹出框</button>
  <router-view></router-view>
    
   
  
  </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to zaoyang'
    }
  },
  methods:{
    btnHandle(){
      Toast({
        message:'提示',
        position:'bottom',
        duration:5000
      })
    }
  }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
