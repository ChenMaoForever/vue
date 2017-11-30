<template >
  <div class="div1">
      <div-left :items="items" @newNodeEvent="parentLisen" ref="left">
        <h1 slot="head">哈哈哈哈</h1>
        <h3>嘻嘻嘻</h3>
      </div-left>
      <div-right></div-right>
      <button @click="parentCall">父组件往子组件传递</button>
  </div>
</template>
<script type="text/ecmascript-6">
  import divLeft from './div_left.vue'
  import divRight from './div_right.vue'
    export default{
      data(){
        return{
          items:[
            {name:"美味食品1"},
            {name:"美味食品2"},
            {name:"美味食品3"},
            {name:"美味食品4"}
          ]
        }
      },
      beforeCreate(){
        console.group('beforeCreate 创建前状态===============》');
        console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
        console.log("%c%s", "color:red","data   : " + this.$data); //undefined
        console.log("%c%s", "color:red","message: " + this.items);
      },
      created(){
        console.group('created 创建完毕状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el); //undefined
        console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red","message: " + this.items); //已被初始化
      },
      beforeMount: function () {
        console.group('beforeMount 挂载前状态===============》');
        console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
        console.log(this.$el,this.$route.params.Favlist);
        console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red","message: " + this.items); //已被初始化
      },
      mounted(){
        console.group('mounted 挂载结束状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red","message: " + this.items); //已被初始化
        this.$nextTick(()=>{
          console.log(this.refs)
        })
      },
      beforeUpdate(){
        console.group('beforeUpdate 更新前状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data);
        console.log("%c%s", "color:red","message: " + this.items);
      },
      updated(){
        console.group('updated 更新完成状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data);
        console.log("%c%s", "color:red","message: " + this.items);
      },
      beforeDestroy(){
        console.group('beforeDestroy 销毁前状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data);
        console.log("%c%s", "color:red","message: " + this.items);
      },
      destroyed(){
        console.group('destroyed 销毁完成状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red","data   : " + this.$data);
        console.log("%c%s", "color:red","message: " + this.items)
      },
      components:{
          "div-left":divLeft,
          "div-right":divRight
      },
      methods:{
        parentLisen (evtValue) {
          //evtValue 是子组件传过来的值
          console.log(evtValue)
        },
        parentCall(){
          this.$refs.left.transfromInfo("我是父元素传过来的");
        }
      }
    }
</script>
<style>

</style>
