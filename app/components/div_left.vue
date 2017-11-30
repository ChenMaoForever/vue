<template>
    <div>
      <ul class="main">
          <li @click="changeTab(index,$event)" v-for="(item,index) in items"><a>{{item.name}}</a></li>
      </ul>
      <button @click="handClick">子组件向父组件传递</button>
      <div>{{itemText}}<span>hello</span></div>
      <slot name="head"></slot>
    </div>
</template>
<script type="text/ecmascript-6">
  import $ from 'jquery'
  import {mapActions,mapGetters} from 'vuex'
  export default{
      data(){
        return {
            itemText:""
        }
      },
    props:{
      items:{
        type:Array
      }
    },
    computed:{

    },
    methods:{
        changeTab(index,event){
          console.log(index,event)
          this.itemText=event.target.innerText;
          console.log($(".main").children());
          //事件中转站型
          //this.$root.eventHub.$emit('YOUR_EVENT_NAME', this.itemText);
          this.$store.state.user_name = this.itemText;
          console.log( this.$store.state.user_name )
        },
      handClick(){
        console.log($)
        this.$emit("newNodeEvent","我是子元素传过来的")
      },
      transfromInfo(msg){
        console.log(msg);
      }
    }
  }
</script>
<style>
  .main{
    flex-direction: column;
    display: flex;
    width: 100px;
    font-size: 18px;
    text-align: center;
    color:#000;
    float: left;
  }
  .main li {
    flex: 1;
    list-style: none;
    height: 50px;
    line-height: 50px;
    background: #eee;
    border-bottom: 1px solid #fff;
  }
</style>
