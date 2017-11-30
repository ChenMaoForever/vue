<template>
  <div>
    <div>{{count}}</div>
    <h4 style="color:red">{{ mssg}}</h4>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapActions } from 'vuex'
  export default{
    data(){
      return{

      }
    },
    created(){
      //事件中站转监听事件
//      this.$root.eventHub.$on('YOUR_EVENT_NAME', (yourData)=>{
//        this.mssg=yourData
//      } )
    },
    computed:{
        mssg(){
          return this.$store.state.countNum;
        },
        count(){
            return this.$store.state.user_name
        }
    },
    props:{

    },
    methods: mapActions([
        'increment',
        'decrement'
      ])

  }
</script>
