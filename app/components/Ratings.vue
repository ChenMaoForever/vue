<template>
  <div class="div2">
    <div>{{getCount}}</div>
    <button @click="incrementCounter">增加</button>
    <button @click="decrementCounter">减少</button>
  </div>
</template>
<style>
  .div2 {
    color: black;
  }
</style>
<script type="text/ecmascript-6">
  import { mapGetters,mapActions,mapMutations} from 'vuex'
  export default {
    name: 'app',
    data () {
      return {

      }
    },
    computed:{
      ...mapGetters([
        'getCount'
      ])
    },
    methods:{
      incrementCounter(){
        this.$store.dispatch('incrementCounter');
        //用this.$http.post()做post请求
        this.$http.post('http://127.0.0.1:8081/login',{'a':2},{
          headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(m=>console.log(m.data));
      },
      decrementCounter(){
        this.$store.dispatch('Counter');
      }
//      ...mapActions([
//        'incrementCounter',
//        'decrementCounter' // 映射 this.asyncAdd() 为 this.$store.dispatch('asyncAdd')
//      ])
    }
  }

</script>
